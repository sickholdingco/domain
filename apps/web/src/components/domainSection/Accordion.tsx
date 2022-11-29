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
    <li className="mb-2 border-solid border border-product-purple rounded-lg w-full px-4 py-3">
      <button
        className="flex items-center justify-between w-full text-sm font-medium text-left text-white"
        onClick={toggle}>
        <span>pooper scooper</span>
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
        className="overflow-hidden 
        transition-all duration-100 ease-in-out"
        ref={ref}
        style={{
          height: isOpen ? ref.current?.scrollHeight : 0,
        }}>
        <div className="w-full h-2" />
        <div className="flex gap-2">
          <Pill active kind="web" />
          <Pill active kind="ens" />
        </div>
        <ul className="mt-5 flex flex-col gap-3 list-none">
          <NameSection />
          <NameSection />
          <NameSection />
        </ul>
      </div>
    </li>
  );
};
