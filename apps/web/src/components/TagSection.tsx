import { useState } from "react";
import TagInput from "./TagInput";
import TopicTag from "./topicTag";

const TagSection = () => {
  const [tags, setTags] = useState<Array<{ id: string; tag: string }>>([]);
  const [tag, setTag] = useState("");

  const handleEnter = (key: React.KeyboardEvent) => {
    if (tag === "") return;

    if (key.code === "Enter") {
      setTags((prev) => [...prev, { tag: tag, id: Math.random().toString(36).slice(2, 11) }]);
      setTag("");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="tags" className="text-xs font-semibold pl-3 leading-none sr-only">
        key words
      </label>
      {tags.length > 0 && (
        <div className="flex flex-wrap justify-center items-center gap-[10px]">
          {tags.map((tag) => (
            <TopicTag
              key={tag.id}
              onClick={() => {
                setTags((prev) => prev.filter((t) => t !== tag));
              }}>
              {tag.tag}
            </TopicTag>
          ))}
        </div>
      )}
      <TagInput value={tag} onChange={(e) => setTag(e.target.value)} onKeyDown={handleEnter} />
    </div>
  );
};

export default TagSection;
