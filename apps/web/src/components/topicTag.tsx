import { XMarkIcon } from "@heroicons/react/24/solid";
interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}
const TopicTag = ({ children, onClick }: Props) => {
  return (
    <div className="py-[6px] pr-[10px] pl-3 rounded-2xl bg-product-purple w-fit text-[10px] flex items-center gap-[6px] text-white">
      <div>{children}</div>
      <button type="button" onClick={onClick}>
        <XMarkIcon className="h-[10px] w-[10px]" />
      </button>
    </div>
  );
};

export default TopicTag;
