import TagsIcon from "./TagsIcon";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TagInput = ({ onChange, value, ...props }: Props) => {
  return (
    <div className="flex items-center justify-start border border-solid border-product-purple bg-[#2d2d2d] rounded-lg pl-3">
      <span>
        <TagsIcon />
      </span>
      <input
        className="form-control
          block
          w-full
          px-[10px]
          py-1.5
          text-[10px]
          bg-[#2d2d2d]
          font-normal
          transition
          ease-in-out
          m-0
          rounded-lg
          bg-clip-padding
          focus:outline-none
          "
        placeholder="tags"
        value={value}
        onChange={onChange}
        id="tags"
        type="text"
        {...props}
      />
    </div>
  );
};

export default TagInput;
