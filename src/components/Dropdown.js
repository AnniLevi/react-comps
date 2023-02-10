import { GoTriangleDown, GoTriangleLeft } from "react-icons/go";
import { useState } from "react";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    // setIsOpen(!isOpen); // set state directly
    setIsOpen((currentIsOpen) => !currentIsOpen); // set state functionally
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  // value?.label - "?" checks if value is null or undefined and if yes, the entire expression will be undefined

  return (
    <div className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        {isOpen ? <GoTriangleDown /> : <GoTriangleLeft />}
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full ">{renderedOptions}</Panel>
      )}
    </div>
  );
}

export default Dropdown;
