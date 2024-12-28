"use client";
import { useState } from "react";
import { db, storage } from "../firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
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


const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !form.title_uz ||
    !form.title_ru ||
    !form.title_en ||
    !form.description_uz ||
    !form.description_ru ||
    !form.description_en ||
    !form.date ||
    !form.bannerImage
  ) {
    alert("Hamma maydonlar to'ldirilishi shart!");
    return;
  }

  try {
    // Firebase Storage o'rnatish
    const storage = getStorage();

    // Banner rasmni yuklash
    const bannerRef = ref(storage, `images/${form.bannerImage.name}`);
    await uploadBytes(bannerRef, form.bannerImage);
    const bannerUrl = await getDownloadURL(bannerRef);
    alert("Banner rasmi muvaffaqiyatli yuklandi!");

    // Qo'shimcha rasmlarni yuklash
    const additionalUrls = [];
    for (let file of form.additionalImages) {
      const imageRef = ref(storage, `images/${file.name}`);
      await uploadBytes(imageRef, file);
      const imageUrl = await getDownloadURL(imageRef);
      additionalUrls.push(imageUrl);
    }
    if (form.additionalImages.length > 0) {
      alert("Qo'shimcha rasmlar muvaffaqiyatli yuklandi!");
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

    alert("Yangilik muvaffaqiyatli qo'shildi!");
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
  } catch (error) {
    console.error("Xatolik yuz berdi:", error);
    alert("Xatolik yuz berdi!");
  }
};


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Yangilik nomi (uz):</label>
        <input
          type="text"
          name="title_uz"
          value={form.title_uz}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Yangilik nomi (ru):</label>
        <input
          type="text"
          name="title_ru"
          value={form.title_ru}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Yangilik nomi (en):</label>
        <input
          type="text"
          name="title_en"
          value={form.title_en}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Batafsil malumot (uz):</label>
        <textarea
          name="description_uz"
          value={form.description_uz}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Batafsil malumot (ru):</label>
        <textarea
          name="description_ru"
          value={form.description_ru}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Batafsil malumot (en):</label>
        <textarea
          name="description_en"
          value={form.description_en}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Sana:</label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>Banner rasmi:</label>
        <input
          type="file"
          name="bannerImage"
          onChange={handleFileChange}
          required
        />
      </div>
      <div>
        <label>Qoshimcha rasmlar:</label>
        <input
          type="file"
          name="additionalImages"
          multiple
          onChange={handleFileChange}
        />
      </div>
      <button type="submit">Yangilik qoshish</button>
    </form>
  );
}

export default AddNews;
