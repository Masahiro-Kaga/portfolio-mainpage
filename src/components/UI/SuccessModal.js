import { Fragment } from "react";
import ReactDOM from "react-dom";

const portalElement = document.getElementById("overlays");

const BackDrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-20 bg-slate-700/50"
      onClick={props.onClose}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-[20vh] w-4/5 md:w-1/2 left-1/2 -translate-x-1/2 z-30 px-4 md:h-auto rounded-lg shadow dark:bg-gray-700 animate-fadeAnim">
      <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
        <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
          Message sent successfully!
        </h3>
      </div>
      <div className="p-6 space-y-6">
        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
          Thank you for your comment. If you have asked me replying in
          your comment, I will answer you in a day.
        </p>
      </div>
      <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
        <button
          onClick={props.onClose}
          data-modal-toggle="defaultModal"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-5 text-center dark:bg-blue-600"
        >
          Back to page
        </button>
      </div>
    </div>
  );
};

const SuccessModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose}></BackDrop>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose}></ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default SuccessModal;
