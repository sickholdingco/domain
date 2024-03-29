interface Props {
  kind: "web" | "ens";
  active: boolean;
  onClick: () => void;
}
const Pill = ({ kind = "web", active = false, onClick }: Props) => {
  const color = kind === "web" ? "#FF803F" : "#22BDFF";

  return (
    <button
      onClick={onClick}
      className="rounded-2xl w-fit max-w-[100px] py-[6px] px-4"
      style={{ backgroundColor: active ? color : "transparent", border: `1px solid ${color}` }}>
      {kind}
    </button>
  );
};

export default Pill;
