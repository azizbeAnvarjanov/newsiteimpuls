"use client";

import { useState } from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import toast from "react-hot-toast";

function BannerUpload({ bannerUrl, form, setForm }) {
  const [bannerProgress, setBannerProgress] = useState(0);
  const [bannerLoading, setBannerLoading] = useState(false);
  const [openBannerModal, setOpenBannerModal] = useState(false);

  const handleBannerUpload = async (file) => {
    if (!file) {
      toast.error("Iltimos, fayl tanlang!");
      return;
    }

    setBannerLoading(true);
    setBannerProgress(0);

    try {
      const storage = getStorage();
      const bannerRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(bannerRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setBannerProgress(progress);
        },
        (error) => {
          console.error("Xatolik:", error);
          toast.error("Banner yuklashda xatolik yuz berdi!");
          setBannerLoading(false);
        },
        async () => {
          const downloadURL = await getDownloadURL(bannerRef);
          setBannerUrl(downloadURL);
          toast.success("Banner muvaffaqiyatli yuklandi!");
          setOpenBannerModal(false);
          setBannerLoading(false);
        }
      );
    } catch (error) {
      console.error("Xatolik:", error);
      toast.error("Xatolik yuz berdi!");
      setBannerLoading(false);
    }
  };

  return (
    <div>
      <Dialog open={openBannerModal} onOpenChange={setOpenBannerModal}>
        <DialogTrigger>
          <button type="button">Banner yuklash</button>
        </DialogTrigger>
        <DialogContent>
          {bannerLoading ? (
            <div>
              <p>Yuklanmoqda... {bannerProgress}%</p>
              <progress value={bannerProgress} max="100" />
            </div>
          ) : (
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleBannerUpload(e.target.files[0])}
              />
              <p>Faqatgina rasm fayllarini yuklang!</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
      {bannerUrl && (
        <div>
          <p>Yuklangan banner URL:</p>
          <a href={bannerUrl} target="_blank" rel="noopener noreferrer">
            {bannerUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default BannerUpload;
