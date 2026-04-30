"use client";
import React, { useState } from "react";

const FileUploadForm = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a file first");

    const formData = new FormData();
    formData.append("result-pdf", file);

    setStatus("Uploading...");

    try {
      const response = await fetch("http://localhost:5000/api/upload-result", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("✅ Upload successful!");
      } else {
        setStatus("❌ Upload failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ Server error.");
    }
  };

  return (
    <div className="w-full flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md sm:max-w-lg md:max-w-xl 
                   p-6 sm:p-8 md:p-10 
                   rounded-xl bg-white/10 backdrop-blur-md
                   flex flex-col items-center gap-6"
      >
        {/* Title */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-wide text-center">
            Upload Result PDF
          </h2>
          <p className="text-xs sm:text-sm text-white/60 mt-1 text-center">
            Upload your semester result file
          </p>
        </div>

        {/* Upload Box */}
        <label className="cursor-pointer w-full">
          <div
            className="border-2 border-dashed border-white/20 
                       rounded-xl 
                       p-6 sm:p-8 md:p-10 
                       flex flex-col items-center justify-center 
                       hover:border-green-500 transition duration-300
                       min-h-45" // 🔥 prevents layout shift
          >
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 text-white/60 mb-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16V4m0 0l-4 4m4-4l4 4M4 20h16"
              />
            </svg>

            {/* Fixed height container to avoid UI jump */}
            <div className="h-12.5 flex flex-col items-center justify-center text-center">
              {file ? (
                <>
                  <p className="text-sm text-green-400 font-medium truncate max-w-50">
                    {file.name}
                  </p>
                  <p className="text-xs text-white/40 mt-1">
                    {(file.size / 1024).toFixed(2)} KB
                  </p>
                </>
              ) : (
                <>
                  <p className="text-sm text-white/60">
                    Click to upload or drag & drop
                  </p>
                  <p className="text-xs text-white/40 mt-1">PDF only</p>
                </>
              )}
            </div>

            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        </label>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-2.5 sm:py-3 rounded-xl bg-green-500
                     hover:scale-[1.02] active:scale-95 
                     transition duration-200 font-medium shadow-lg"
        >
          Upload PDF
        </button>

        {/* Status */}
        {status && (
          <p className="text-xs sm:text-sm text-center text-white/60">
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default FileUploadForm;
