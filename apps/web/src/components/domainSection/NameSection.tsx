import EnsIcon from "./EnsIcon";
import WebIcon from "./WebIcon";

interface Props {
  domain: "web" | "ens";
}
const NameSection = ({ domain }: Props) => {
  const color = domain === "web" ? "#FF803F" : "#22BDFF";

  return (
    <li
      className="[&:not(:last-child)]:border-b"
      style={{
        borderColor: color,
      }}>
      <div className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-left text-white rounded-lg ">
        <span>pooper scooper</span>
        {domain === "web" ? <WebIcon /> : <EnsIcon />}
      </div>
    </li>
  );
};

export default NameSection;
