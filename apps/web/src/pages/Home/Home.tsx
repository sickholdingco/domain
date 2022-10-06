import * as React from "react";
import { useState } from "react";
export const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [result, setResult] = useState();

  const onSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

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
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Enter a company description"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <input type="submit" value="Generate names" />
      </form>
    </div>
  );
};
