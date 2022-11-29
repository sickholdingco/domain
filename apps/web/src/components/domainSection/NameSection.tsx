const NameSection = () => {
  return (
    <div className="px-4 pt-5 pb-3">
      <div className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-left text-white rounded-lg relative">
        <span>Section 1</span>
        <svg
          className="w-5 h-5 transition-all duration-100 ease-linear"
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
        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-product-purple" />
      </div>
    </div>
  );
};

export default NameSection;
