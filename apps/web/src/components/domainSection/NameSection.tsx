import Image from "next/image";
import webImage from "./web.png";
import ensImage from "./ens.png";
interface Props {
  domain: "web" | "ens";
  ensName: string;
  available: boolean;
  domainName: string;
  domainAvailable: boolean;
}
const NameSection = ({ domain, ensName, available, domainAvailable, domainName }: Props) => {
  const displayText = available ? ensName : ensName + " ❌";
  const domainDisplayText = domainAvailable ? domainName : domainName + " ❌";
  const color = domain === "web" ? "#FF803F" : "#22BDFF";
  const imagePath = domain === "web" ? webImage : ensImage;
  const ensLink = `https://app.ens.domains/name/${ensName}/register`;
  const domainLink = `https://www.namecheap.com/domains/registration/results/?domain=${domainName}`;
  return (
    <li
      className="[&:not(:last-child)]:border-b"
      style={{
        borderColor: color,
      }}>
      <div className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-left text-white rounded-lg ">
        {domain === "ens" && (
          <span>
            <a href={ensLink} target="_blank" rel="noopener noreferrer">
              {displayText}
            </a>
          </span>
        )}
        {domain === "web" && (
          <span>
            <a href={domainLink} target="_blank" rel="noopener noreferrer">
              {domainDisplayText}
            </a>
          </span>
        )}
        <Image src={imagePath} alt="domain" />
      </div>
    </li>
  );
};

export default NameSection;
