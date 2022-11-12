import * as React from "react";
import { useState } from "react";
import TopicPill from "../../components/topicPill";

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
    <div className="p-16">
      <h1>spend time on your product, not your name</h1>
      <form className="flex flex-col">
        <input
          className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="text"
          placeholder="Enter a company description"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <TopicPill topic="test" />
        <button className="w-36 bg-slate-500 rounded-2xl" type="submit" onClick={onSubmit}>
          find your brand
        </button>
      </form>
      <div>{result}</div>
    </div>
  );
};

export default Home;
