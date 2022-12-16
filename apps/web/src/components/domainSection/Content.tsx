import { useRef, useState } from "react";
import NameSection from "./NameSection";
import Pill from "./Pill";

interface Props {
  isOpen: boolean;
  ensNames: string[];
  available: boolean[];
}

const Content = ({ isOpen, ensNames, available }: Props) => {
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
        <NameSection domain={active} ensName={ensNames[0]!} available={available[0]!} />
        <NameSection domain={active} ensName={ensNames[1]!} available={available[1]!} />
        <NameSection domain={active} ensName={ensNames[2]!} available={available[2]!} />
      </ul>
    </div>
  );
};

export default Content;
