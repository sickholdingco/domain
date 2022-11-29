interface Props {
  kind: "web" | "ens";
  active: boolean;
}
const Pill = ({ kind = "web", active = false }: Props) => {
  const color = kind === "web" ? "#FF803F" : "#22BDFF";

  return (
    <div
      className={`rounded-2xl border border-[${color}] border-solid ${
        active && `bg-[${color}]`
      } w-fit max-w-[100px] py-[6px] px-4`}>
      web
    </div>
  );
};

export default Pill;
