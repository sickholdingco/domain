import * as React from "react";
import { useState, useEffect } from "react";
import Accordion from "../../components/domainSection/Accordion";
import TagSection from "../../components/TagSection";
import { ENSInstance, provider } from "../../config/ens";
import { useGetServiceData } from "../../api/useGetServiceData";

const Home = () => {
  const [description, setDescription] = useState("");
  const [isMisinputError, setIsMisinputError] = useState(false);
  const [tags, setTags] = useState<Array<{ id: string; tag: string }>>([]);

  const { data, isLoading, isError, isFetching, refetch } = useGetServiceData(description, tags);

  useEffect(() => {
    const setConfig = async () => {
      await ENSInstance.setProvider(provider);
    };
    setConfig();
  }, []);

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (description.length === 0 || tags.length < 2) {
      setIsMisinputError(true);
    } else {
      setIsMisinputError(false);
      refetch();
    }
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="company-description"
            rows={5}
          />
        </div>
        <TagSection tags={tags} setTags={setTags} />
        <button
          className="w-full bg-product-purple rounded-lg py-5 text-[16px] font-medium leading-none"
          type="button"
          onClick={onSubmit}>
          {isLoading || isFetching ? <span>loading...</span> : <span>generate names</span>}
        </button>
      </form>
      <div>
        {(isError || (data && data.status === "FAILURE")) && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mt-4"
            role="alert">
            <strong className="font-bold">an unexpected error occured!</strong>
            <span className="block sm:inline"> please try again later.</span>
          </div>
        )}
        {isMisinputError && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mt-4"
            role="alert">
            <span>please add a description and at least 2 tags!</span>
          </div>
        )}
        {data && data.status === "SUCCESS" && (
          <h1 className="pt-4 pb-[5px] text-left text-[24px] font-semibold px-[5px]">
            your next company name
          </h1>
        )}
        {data &&
          data.status === "SUCCESS" &&
          data.data.map((val) => {
            return (
              <Accordion companyName={val.companyName} ensNames={val.ensNames} available={val.available} />
            );
          })}
      </div>
    </div>
  );
};

export default Home;
