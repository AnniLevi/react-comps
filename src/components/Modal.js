import ReactDOM from "react-dom";
import { useEffect } from "react";

function Modal({ onClose, children, actionBar }) {
  useEffect(() => {
    // disable scrolling when Modal is open
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  // Portal tells React to render HTML at some other location inside the DOM
  // second argument is a reference to DOM element that is placed inside of index.html
  // first argument is JSX which will be turned into HTML and placed into that element

  // moving Modal to another div in the index.html is necessary because is guarantees that
  // Modal component never has a positioned parent, i.e. Modal wil always be positioned relative to the overall HTML document
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,

    document.querySelector(".modal-container")
  );
}

export default Modal;
