import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import { useState } from "react";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  // updating state directly
  // const handleClick = (nextIndex) => {
  //   if (expandedIndex === nextIndex) {
  //     setExpandedIndex(-1);
  //   } else {
  //     setExpandedIndex(nextIndex);
  //   }
  // };

  // functional updating technique
  // should be used when new value depends upon the old value
  const handleClick = (nextIndex) => {
    // the first argument passed into the function is guaranteed to be the most up-to-date version of the piece of state
    // function should return the new value of peace of state without calling setter function (setExpandedIndex)
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    // || (or) gives back the first value that is true
    // && (and) gives back the first false value or the last true value
    // React doesn't print boolean, null, undefined
    // <div>onClick={() => setExpandedIndex(index)}</div>  // one row function

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {
            <span className="text-xl">
              {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
            </span>
          }
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
