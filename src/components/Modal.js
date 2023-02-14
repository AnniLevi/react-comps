import ReactDOM from "react-dom";

function Modal() {

  // Portal tells React to render HTML at some other location inside the DOM
  // second argument is a reference to DOM element that is placed inside of index.html
  // first argument is JSX which will be turned into HTML and placed into that element
  return ReactDOM.createPortal(
    <div>
      <div className="absolute inset-0 bg-gray-300 opacity-80"></div>
      <div className="absolute inset-40 p-10 bg-white">I'm a modal</div>
    </div>,

    document.querySelector(".modal-container")
  );
}

export default Modal;
