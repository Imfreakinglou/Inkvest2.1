import React, { useState } from 'react';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedFile) return;

    setIsLoading(true);
    try {
      // File upload logic will be implemented here
      console.log('File selected:', selectedFile.name);
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Upload Comic</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer block"
          >
            <div className="space-y-2">
              <div className="text-gray-600">
                {selectedFile ? (
                  <p>Selected: {selectedFile.name}</p>
                ) : (
                  <>
                    <p>Drag and drop your comic image here</p>
                    <p>or click to select a file</p>
                  </>
                )}
              </div>
            </div>
          </label>
        </div>
        <button
          type="submit"
          disabled={!selectedFile || isLoading}
          className={`w-full py-2 px-4 rounded-md text-white font-medium
            ${!selectedFile || isLoading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-primary-600 hover:bg-primary-700'
            }`}
        >
          {isLoading ? 'Uploading...' : 'Upload Comic'}
        </button>
      </form>
    </div>
  );
}

export default FileUpload;