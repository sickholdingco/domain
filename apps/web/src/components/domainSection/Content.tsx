import { useRef, useState } from "react";
import NameSection from "./NameSection";
import Pill from "./Pill";

interface Props {
  isOpen: boolean;
}

const Content = ({ isOpen }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<"web" | "ens">("web");

  return (
    <div
      className="overflow-hidden 
        transition-all duration-100 ease-in-out"
      ref={ref}
      style={{
        height: isOpen ? ref.current?.scrollHeight : 0,
      }}>
      <div className="w-full h-2" />
      <div className="flex gap-2">
        <Pill active={active === "web"} kind="web" onClick={() => setActive("web")} />
        <Pill active={active === "ens"} kind="ens" onClick={() => setActive("ens")} />
      </div>
      <ul className="mt-5 flex flex-col gap-3 list-none">
        <NameSection domain={active} />
        <NameSection domain={active} />
      </ul>
    </div>
  );
};

export default Content;
