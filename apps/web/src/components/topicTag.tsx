import { XMarkIcon } from "@heroicons/react/24/solid";
interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}
const TopicTag = ({ children, onClick }: Props) => {
  return (
    <div className="py-[10px] pl-[20px] pr-[16px] rounded-3xl bg-product-purple w-fit text-[16px] flex items-center gap-[10px] font-normal ">
      <div>{children}</div>
      <button type="button" onClick={onClick}>
        <XMarkIcon className="h-[15px] w-[15px]" />
      </button>
    </div>
  );
};

export default TopicTag;
