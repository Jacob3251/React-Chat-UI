const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  const modalClasses = `fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#000000] bg-opacity-70 transition-opacity ${
    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
  }`;
  return (
    <div className={modalClasses}>
      <div className="bg-hov rounded-lg p-4  transform transition-transform scale-0 md:scale-100 ">
        {children}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
