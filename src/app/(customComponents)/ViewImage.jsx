import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

const ViewImage = ({ url, w, h }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div
          className={`w-[${w}px] h-[${h}px] shadow-lg rounded-lg relative overflow-hidden mx-auto`}
        >
          <img
            src={url}
            alt="image"
            fill
            className="object-cover w-full h-full"
          />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="!min-w-[80vw] rounded-xl w-auto h-[50vh] md:!h-[90vh] overflow-hidden relative">
            <img
              src={url}
              alt="image"
              fill
              className="object-contain w-full h-full"
            />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ViewImage;
