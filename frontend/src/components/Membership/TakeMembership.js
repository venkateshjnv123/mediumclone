import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MembershipModal = ({isOpen, onClose}) => {
  const [isModalOpen, setModalOpen] = useState(true);
  const navigate = useNavigate();

  const handleTakeMembership = () => {
    // Logic to handle the "Take Membership" button click
    // You can implement the necessary functionality here.
    // For example, redirecting to the membership page or displaying a membership form.
    navigate('/membership');
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
        <div 
         className={`${
          isOpen ? "fixed flex justify-center bottom-0 left-0 right-0 bg-slate-200 items-end pb-8" : "hidden"
        } bg-black`}
       >
          <div className="bg-slate-200 p-4 rounded-t-lg w-64">
            <p className="text-lg font-bold mb-4">You don't have membership.</p>
            <button
              onClick={handleTakeMembership}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg w-full"
            >
              Take Membership
            </button>
            <button
              onClick={handleCloseModal}
              className="mt-4 px-4 py-2 rounded-full bg-gray-400 text-white w-full"
            >
              Close
            </button>
          </div>
        </div>
      
    </>
  );
};

export default MembershipModal;
