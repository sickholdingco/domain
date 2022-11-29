import { useState } from "react";
import NameSection from "./NameSection";
import Pill from "./Pill";

const Content = () => {
  const [active, setActive] = useState<"web" | "ens">("web");

  return (
    <>
      <div className="w-full h-2" />
      <div className="flex gap-2">
        <Pill active={active === "web"} kind="web" onClick={() => setActive("web")} />
        <Pill active={active === "ens"} kind="ens" onClick={() => setActive("ens")} />
      </div>
      <ul className="mt-5 flex flex-col gap-3 list-none">
        <NameSection domain={active} />
        <NameSection domain={active} />
      </ul>
    </>
  );
};

export default Content;
