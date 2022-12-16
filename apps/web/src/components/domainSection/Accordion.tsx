import { useState } from "react";
import { DataType } from "../../config/types";
import Content from "./Content";

const Accordion = ({ companyName, ensNames, available }: DataType) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  return (
    <div>
      <div className="mb-2 border-solid border border-product-purple rounded-lg w-full px-4 py-3">
        <button
          className="flex items-center justify-between w-full text-sm font-medium text-left text-white"
          onClick={toggle}>
          <span>{companyName}</span>
          <svg
            className="w-5 h-5 transition-all duration-100 ease-linear"
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M4.293 7.293a1 1 0 011.414 0L10 11.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <Content isOpen={isOpen} ensNames={ensNames} available={available} />
      </div>
    </div>
  );
};

export default Accordion;
