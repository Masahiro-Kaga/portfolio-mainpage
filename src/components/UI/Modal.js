// Modal.js
import React, { useState } from "react";

const Modal = ({ isOpen, closeModal, imgSrc, altText }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={closeModal}
      ></div>
      <div className="relative bg-white p-4 rounded shadow-lg max-h-[calc(100vh-40px)] overflow-y-auto lg:w-[1024px]">
        
        <img
          src={imgSrc}
          alt={altText}
          onClick={toggleZoom}
          style={{
            transform: isZoomed ? "scale(1.5)" : "scale(1)",
            transition: "transform 0.3s",
            transformOrigin: "top left",
          }}
                />
        <button
          className="fixed top-4 right-4 bg-white w-10 h-10 rounded-full p-2 hover:bg-gray-200 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 flex items-center justify-center"
          onClick={closeModal}
          aria-label="Close"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
};

export default Modal;
