import * as React from "react";
import { useState, useEffect } from "react";
import Accordion from "../../components/domainSection/Accordion";
import TagSection from "../../components/TagSection";
import { ENS } from "@ensdomains/ensjs";
import { ethers } from "ethers";
import { useGetOpenAiData } from "../../api/useGetOpenAiData";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");

  const { data, isLoading, isFetching, refetch } = useGetOpenAiData(searchInput);

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    refetch();
  };

  const provider = new ethers.providers.JsonRpcProvider(
    "https://mainnet.infura.io/v3/806cc478903344c1bbea62753fb1e642"
  );
  const ENSInstance = new ENS();

  useEffect(() => {
    const setEnsProvider = async () => {
      await ENSInstance.setProvider(provider);
    };
    setEnsProvider();
  }, []);

  // useEffect(() => {
  //   searchForEnsNames(data);
  // }, [data]);

  // const searchForEnsNames = async (openAiOutput: string[]) => {
  //   let formattedDomains: string[];
  //   formattedDomains = [];
  //   openAiOutput.forEach((domain) => {
  //     formattedDomains.push(domain.split(" ").join("").concat(".eth") as string);
  //   });
  //   try {
  //     console.log(formattedDomains);
  //     const batched = await ENSInstance.batch(
  //       ENSInstance.getAvailable.batch(formattedDomains[0]!),
  //       ENSInstance.getAvailable.batch(formattedDomains[1]!),
  //       ENSInstance.getAvailable.batch(formattedDomains[2]!)
  //     );
  //     console.log(batched);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
          {isLoading || isFetching ? <span>loading...</span> : <span>generate names</span>}
        </button>
      </form>
      {data &&
        data.map((name: string) => {
          return <div> {name} </div>;
        })}
      <div>
        <h1 className="py-[22px] text-left text-[24px] font-semibold px-[5px]">your next company name</h1>
        <div>
          <Accordion />
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default Home;
