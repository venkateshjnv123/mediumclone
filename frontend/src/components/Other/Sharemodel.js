import React, { useState } from "react";
import clipboard from "clipboard";
import { toast } from "react-toastify";

const ShareModal = ({ isOpen1, onClose1 }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const currentLink = window.location.href;

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("not");
    onClose1();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentLink);
    toast.success("copied to clipboard");
    onClose1();
  };

  return (
    <>
      <div
        className={`${
          isOpen1 ? "fixed inset-0 flex items-center justify-center" : "hidden"
        } bg-black bg-opacity-50`}
      >
        <div className="bg-white p-[20px] rounded-lg w-92">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold mb-4 w-fit">Share</h2>
            <span onClick={handleCloseModal}>
              <img
                alt="X"
                width="20"
                src="https://d29fhpw069ctt2.cloudfront.net/icon/image/39219/preview.png"
              />
            </span>
          </div>
          <div className="flex items-center mb-4">
            <p className="flex-1 break-all">{currentLink}</p>
            <button
              onClick={handleCopyLink}
              className="ml-2 px-4 py-2 rounded-[25px] bg-[#f2f2f2]"
            >
              Copy
            </button>
          </div>
          <div className="flex">
            {/* Replace the following buttons with your social media icons or icons of choice */}
            <button className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-[25px] mr-2">
              Facebook
            </button>
            <button className="flex-1 bg-red-500 text-white px-4 py-2 rounded-[25px] mr-2">
              Instagram
            </button>
            <button className="flex-1 bg-blue-400 text-white px-4 py-2 rounded-[25px]">
              Twitter
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareModal;
