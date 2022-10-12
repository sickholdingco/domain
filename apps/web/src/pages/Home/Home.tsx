import * as React from "react";
import { useState } from "react";

export const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [result, setResult] = useState();

  const onSubmit = async () => {
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
    <div>
      <h1>spend time on your product, not your name</h1>
      <input
        type="text"
        placeholder="Enter a company description"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <input type="submit" value="find your brand" onClick={onSubmit} />
      <div>{result}</div>
    </div>
  );
};
