import { createPortal } from "react-dom";
const ModalTitle = ({ children, onClose, isControlled }) => {
  return (
    <div className="flex">
      <h1 className="text-lg tracking-wide text-center font-semibold my-2 flex-1 items-center ">
        {children}
      </h1>
      {isControlled ? (
        <button
          className="cursor-pointer  rounded-full bg-red-500 text-white size-8 my-2 mr-1 "
          onClick={onClose}
        >
          X
        </button>
      ) : null}
    </div>
  );
};

const ModalBody = ({
  children,
  onClose = () => {},
  title = "Test",
  isControlled = true,
}) => {
  return (
    <div className="border-2 border-black bg-white rounded-md md:mx-0 mx-2 p-2 md:max-w-[500px] min-w-[90%] md:min-w-[500px] ">
      <div className="w-full">
        <ModalTitle onClose={onClose} isControlled={isControlled}>
          {title}
        </ModalTitle>
      </div>
      <div className="overflow-auto max-h-[500px] p-2">{children}</div>
    </div>
  );
};

const Modal = ({ children }) => {
  return createPortal(
    <div className="absolute inset-0 w-full h-full bg-gray-300 opacity-95  z-50">
      <div className="flex items-center justify-center w-full md:h-[80%] h-[100%]">
        {children}
      </div>
    </div>,
    document.body
  );
};

Modal.ModalTitle = ModalTitle;
Modal.ModalBody = ModalBody;
export default Modal;
