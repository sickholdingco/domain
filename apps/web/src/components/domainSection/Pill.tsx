interface Props {
  kind: "web" | "ens";
  active: boolean;
}
const Pill = ({ kind = "web", active = false }: Props) => {
  const color = kind === "web" ? "#FF803F" : "#22BDFF";

  return (
    <div
      className="rounded-2xl w-fit max-w-[100px] py-[6px] px-4"
      style={{ backgroundColor: active ? color : "transparent", border: `1px solid ${color}` }}>
      {kind}
    </div>
  );
};

export default Pill;
