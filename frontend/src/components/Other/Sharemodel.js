import React, { useState } from 'react';
import clipboard from 'clipboard';
import { toast } from 'react-toastify';

const ShareModal = ({ isOpen1, onClose1 }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const currentLink = window.location.href;

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("not")
    onClose1();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentLink);
   toast.success("copied to clipboard");
   onClose1();

  };

  return (
    <>
        <div   className={`${
        isOpen1 ? "fixed inset-0 flex items-center justify-center" : "hidden"
      } bg-black bg-opacity-50`}>
          <div className="bg-white p-4 rounded-lg w-80">
            <h2 className="text-2xl font-bold mb-4">Share</h2>
            <div className="flex items-center mb-4">
              <p className="flex-1 break-all">{currentLink}</p>
              <button
                onClick={handleCopyLink}
                className="ml-2 px-2 py-1 rounded-full bg-blue-500 text-white"
              >
                Copy
              </button>
            </div>
            <div className="flex">
              {/* Replace the following buttons with your social media icons or icons of choice */}
              <button className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg mr-2">
                Facebook
              </button>
              <button className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg mr-2">
                Instagram
              </button>
              <button className="flex-1 bg-blue-400 text-white px-4 py-2 rounded-lg">
                Twitter
              </button>
            </div>
            <button
              onClick={handleCloseModal}
              className="mt-4 px-4 py-2 rounded-full bg-gray-400 text-white"
            >
              Close
            </button>
          </div>
        </div>
    
    </>
  );
};

export default ShareModal;
