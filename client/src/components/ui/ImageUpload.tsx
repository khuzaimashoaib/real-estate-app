"use client";

import { api } from "@/src/utils/api";
import { useState } from "react";

interface ImageUploadProps {
  onFilesChange: (files: File[]) => void;
}

export default function ImageUpload({ onFilesChange }: ImageUploadProps) {
  const [previews, setPreviews] = useState<string[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    setSelectedFiles(files);
    onFilesChange(files);
    const localPreviews = files.map((file) => URL.createObjectURL(file));
   
    setPreviews(localPreviews);
  };


  // const uploadImages = async (): Promise<string[]> => {
  //   if (files.length === 0) return [];

  //   const formData = new FormData();
  //   files.forEach((file) => formData.append("images", file));

  //   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/upload`, {
  //     method: "POST",
  //     credentials: "include",
  //     body: formData,
  //   });

  //   const data = await res.json();
  //   if (data.success) {
  //     setImageUrls(data.urls);
  //     onUploadComplete(data.urls);
  //     return data.urls;
  //   }
  //   return [];
  // };

  const removeImage = (index: number) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    const updatedPreviews = previews.filter((_, i) => i !== index);
    setSelectedFiles(updatedFiles);
    setPreviews(updatedPreviews);
    onFilesChange(updatedFiles);
  };

  return (
    <div>
      <label className="text-sm font-medium mb-2 block text-(--text-dark)">
        Property Images (Max 5)
      </label>
      {/* Upload Input */}
      <input
        type="file"
        accept="image/*"
        multiple
        className="w-full text-sm rounded-lg py-2.5 px-3.5 border-[1.5px] border-(--border)"
        onChange={handleImageChange}
      />
      {previews.length > 0 && (
        <div className="flex gap-2 mt-3 flex-wrap">
          {previews.map((preview, index) => (
            <div key={index} className="relative">
              <img
                src={preview}
                alt={`Preview ${index + 1}`}
                className="w-20 h-20 object-cover rounded-lg"
                style={{ border: "1px solid var(--border)" }}
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-white text-xs flex items-center justify-center"
                style={{ background: "#DC2626" }}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
