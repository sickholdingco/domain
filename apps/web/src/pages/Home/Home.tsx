import * as React from "react";
import { useState } from "react";
import TagSection from "../../components/TagSection";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [result, setResult] = useState();

  const onSubmit = async (e: React.SyntheticEvent) => {
    console.log("submit");
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
    <div className="p-16">
      <h1 className="font-extrabold mb-6">focus on the product, not the name</h1>
      <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col gap-[5px]">
          <label htmlFor="company-description" className="text-xs font-semibold pl-3">
            What is your product about?
          </label>
          <textarea
            className="form-control
          block
          w-full
          px-3
          py-1.5
          text-[10px]
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
            rows={15}
          />
        </div>
        <TagSection />
        <button className="w-full bg-product-purple rounded-lg" type="button" onClick={onSubmit}>
          generate names
        </button>
      </form>
      <div>{result}</div>
    </div>
  );
};

export default Home;
