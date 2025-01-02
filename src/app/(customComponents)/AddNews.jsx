"use client";
import { useState } from "react";
import { db, storage } from "../firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import toast from "react-hot-toast";
import StarterKit from "@tiptap/starter-kit";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Editor from "../../components/Editor";
import RichTextEditor from "../../components/Editor";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CircleCheck, GalleryVertical, Image, Images } from "lucide-react";

function AddNews() {
  const [form, setForm] = useState({
    title_uz: "",
    title_ru: "",
    title_en: "",
    description_uz: "",
    description_ru: "",
    description_en: "",
    date: "",
    bannerImage: null,
    additionalImages: [],
  });

  const [newsContentLoader, setNewsContentLoader] = useState(false);
  const [bannerImageLoader, setBannerImageLoader] = useState(false);
  const [aditionalImagesLoader, setAditionalImagesLoader] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "bannerImage") {
      setForm({ ...form, bannerImage: files[0] });
    } else {
      setForm({ ...form, additionalImages: Array.from(files) });
    }
  };

  const handleEditorChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  // Clear form function
  const handleClear = () => {
    setForm({
      title_uz: "",
      title_ru: "",
      title_en: "",
      description_uz: "",
      description_ru: "",
      description_en: "",
      date: "",
      bannerImage: null,
      additionalImages: [],
    });

    // Clear file inputs
    document.querySelector('input[name="bannerImage"]').value = null;
    document.querySelector('input[name="additionalImages"]').value = null;

    // Clear the editor content
    // Assuming `RichTextEditor` accepts a `clear` method to reset its content
    // You'll need to pass a `ref` to your editor component to achieve this
    // if your `RichTextEditor` allows resetting, you'd call a method like:
    // editorRef.current.clear(); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Tiptap editor bo'shligini tekshirish uchun aniqroq shartlar
    if (
      !form.title_uz ||
      !form.title_ru ||
      !form.title_en ||
      !form.description_uz ||
      form.description_uz === "<p></p>" ||
      !form.description_ru ||
      form.description_ru === "<p></p>" ||
      !form.description_en ||
      form.description_en === "<p></p>" ||
      !form.date ||
      !form.bannerImage
    ) {
      toast.error("Hamma maydonlar to'ldirilishi shart!");
      return;
    }
    setBannerImageLoader(true);
    setNewsContentLoader(true);
    setAditionalImagesLoader(true);
    setLoading(true);

    try {
      const storage = getStorage();

      // Banner rasmni yuklash
      const bannerRef = ref(storage, `images/${form.bannerImage.name}`);
      await uploadBytes(bannerRef, form.bannerImage);
      const bannerUrl = await getDownloadURL(bannerRef);
      toast.success("Banner rasmi muvaffaqiyatli yuklandi!");
      setBannerImageLoader(false);

      // Qo'shimcha rasmlarni yuklash
      const additionalUrls = [];
      for (let file of form.additionalImages) {
        const imageRef = ref(storage, `images/${file.name}`);
        await uploadBytes(imageRef, file);
        const imageUrl = await getDownloadURL(imageRef);
        additionalUrls.push(imageUrl);
      }
      if (form.additionalImages.length > 0) {
        toast.success("Qo'shimcha rasmlar muvaffaqiyatli yuklandi!");
        setAditionalImagesLoader(false);
      }

      // Firestore'ga yozish
      const newsRef = collection(db, "news");
      await addDoc(newsRef, {
        title_uz: form.title_uz,
        title_ru: form.title_ru,
        title_en: form.title_en,
        description_uz: form.description_uz,
        description_ru: form.description_ru,
        description_en: form.description_en,
        date: form.date,
        bannerImage: bannerUrl,
        additionalImages: additionalUrls,
      });

      toast.success("Yangilik muvaffaqiyatli qo'shildi!");
      setNewsContentLoader(false);
      setForm({
        title_uz: "",
        title_ru: "",
        title_en: "",
        description_uz: "",
        description_ru: "",
        description_en: "",
        date: "",
        bannerImage: null,
        additionalImages: [],
      });
      // Reset file input fields
      document.querySelector('input[name="bannerImage"]').value = null;
      document.querySelector('input[name="additionalImages"]').value = null;
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      toast.error("Xatolik yuz berdi!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-[90%] mx-auto">
      <Dialog open={loading}>
        <DialogContent>
          <DialogHeader></DialogHeader>
          <div className="border rounded-md shadow-sm h-12 flex items-center justify-between px-3">
            <h1>
              <Image />
            </h1>
            <div>
              {bannerImageLoader ? (
                <div className="customLoader"></div>
              ) : (
                <CircleCheck />
              )}
            </div>
          </div>
          <div className="border rounded-md shadow-sm h-12 flex items-center justify-between px-3">
            <h1>
              <Images />
            </h1>
            <div>
              {aditionalImagesLoader ? (
                <div className="customLoader"></div>
              ) : (
                <CircleCheck />
              )}
            </div>
          </div>
          <div className="border rounded-md shadow-sm h-12 flex items-center justify-between px-3">
            <h1>
              <GalleryVertical />
            </h1>
            <div>
              {newsContentLoader ? (
                <div className="customLoader"></div>
              ) : (
                <CircleCheck />
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <div className="flex items-center justify-between gap-4">
        <div className="w-full">
          <Label>Yangilik nomi (uz):</Label>
          <Input
            type="text"
            name="title_uz"
            value={form.title_uz}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="w-full">
          <Label>Yangilik nomi (ru):</Label>
          <Input
            type="text"
            name="title_ru"
            value={form.title_ru}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="w-full">
          <Label>Yangilik nomi (en):</Label>
          <Input
            type="text"
            name="title_en"
            value={form.title_en}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="flex items-start justify-between gap-4">
        <div className="w-full">
          <Label>Batafsil malumot (uz):</Label>
          <RichTextEditor
            content={form.description_uz}
            onChange={(value) => handleEditorChange("description_uz", value)}
          />
        </div>
        <div className="w-full">
          <Label>Batafsil malumot (ru):</Label>
          <RichTextEditor
            content={form.description_ru}
            onChange={(value) => handleEditorChange("description_ru", value)}
          />
        </div>
        <div className="w-full">
          <Label>Batafsil malumot (en):</Label>
          <RichTextEditor
            content={form.description_en}
            onChange={(value) => handleEditorChange("description_en", value)}
          />
        </div>
      </div>

      <div className="flex items-center justify-start gap-4 py-5">
        <div>
          <Label>Sana:</Label>
          <Input
            type="date"
            name="date"
            value={form.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label>Banner rasmi:</Label>
          <Input
            type="file"
            name="bannerImage"
            onChange={handleFileChange}
            required
          />
        </div>
        <div>
          <Label>Qoshimcha rasmlar:</Label>
          <Input
            type="file"
            name="additionalImages"
            multiple
            onChange={handleFileChange}
          />
        </div>
      </div>


      <Button type="submit">Yangilik qoshish</Button>

      {/* Clear Form Button */}
      <Button className="ml-5" variant="destructive" type="button" onClick={handleClear}>Tozalash</Button>
    </form>
  );
}

export default AddNews;
