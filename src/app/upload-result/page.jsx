import FileUploadForm from "@/components/FileUploadForm/FileUploadForm";
import React from "react";

export const metadata = {
  title: "Upload"
};

const UploadResult = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <FileUploadForm />
    </div>
  );
};

export default UploadResult;
