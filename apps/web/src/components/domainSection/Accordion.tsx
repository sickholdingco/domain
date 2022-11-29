import { useRef, useState } from "react";
import NameSection from "./NameSection";
import Pill from "./Pill";

const Accordion = () => {
  return (
    <ul className="list-none">
      <AccordionItem />
    </ul>
  );
};

export default Accordion;

const AccordionItem = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <li className="mb-2">
      <button
        className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-left text-white rounded-lg border-solid border border-product-purple"
        onClick={toggle}>
        <span>Section 1</span>
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
      <div
        className="mt-2 overflow-hidden 
        transition-all duration-100 ease-in-out"
        ref={ref}
        style={{
          height: isOpen ? ref.current?.scrollHeight : 0,
        }}>
        <Pill />
        <NameSection />
        <NameSection />
        <NameSection />
      </div>
    </li>
  );
};
