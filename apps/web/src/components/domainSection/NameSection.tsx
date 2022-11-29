import Image from "next/image";
import webImage from "./web.png";
import ensImage from "./ens.png";
interface Props {
  domain: "web" | "ens";
}
const NameSection = ({ domain }: Props) => {
  const color = domain === "web" ? "#FF803F" : "#22BDFF";
  const imagePath = domain === "web" ? webImage : ensImage;

  return (
    <li
      className="[&:not(:last-child)]:border-b"
      style={{
        borderColor: color,
      }}>
      <div className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-left text-white rounded-lg ">
        <span>pooper scooper</span>
        <Image src={imagePath} alt="domain" />
      </div>
    </li>
  );
};

export default NameSection;
