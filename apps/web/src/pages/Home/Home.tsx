import * as React from "react";
import { useState } from "react";
import Accordion from "../../components/domainSection/Accordion";
import TagSection from "../../components/TagSection";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [result, setResult] = useState();

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ companyDescription: searchInput }),
    });

    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div className="max-w-[600px] min-w-[300px] pt-8 px-4 sm:px-0">
      <h1 className="font-extrabold py-[22px] text-center text-[36px] leading-[1.25] sm:leading-normal hidden sm:block ">
        focus on the product, not the name
      </h1>
      <h1 className="font-extrabold text-center text-[36px] leading-[1.25] sm:leading-normal hidden smMax:block ">
        focus on the product,
      </h1>
      <h1 className="font-extrabold pb-[22px] text-center text-[36px] leading-[1.25] sm:leading-normal hidden smMax:block ">
        not the name
      </h1>
      <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col gap-[5px]">
          <label htmlFor="company-description" className="text-[24px] font-semibold px-[5px]">
            describe your product
          </label>
          <textarea
            className="form-control
          block
          w-full
          px-4
          py-2
          text-[16px]
          font-normal
          bg-[#2d2d2d]
          border border-solid border-product-purple
          rounded-lg
          transition
          ease-in-out
          m-0
          focus:outline-none
          "
            placeholder="it will revolutionize the shipping industry by offering low cost data for your exports"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            id="company-description"
            rows={5}
          />
        </div>
        <TagSection />
        <button
          className="w-full bg-product-purple rounded-lg py-5 text-[16px] font-medium leading-none"
          type="button"
          onClick={onSubmit}>
          generate names
        </button>
      </form>
      <div>{result}</div>
      <div>
        <h1 className="py-[22px] text-left text-[24px] font-semibold px-[5px]">your next company name</h1>
        <div>
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default Home;
