interface Props {
  topic: string;
}
const XButton = () => {
  return (
    <button
      type="button"
      className="text-xs rounded-full border border-black bg-slate-500 w-5 h-5 flex justify-center items-center">
      X
    </button>
  );
};
const TopicPill = ({ topic }: Props) => {
  return (
    <div className="relative w-fit">
      <div className="rounded-full border border-black bg-slate-500 w-fit py-2 px-4">{topic}</div>
      <div
        className="absolute
        top-0
        right-0
        mt-1
        mr-1
        ">
        <XButton />
      </div>
    </div>
  );
};

export default TopicPill;
