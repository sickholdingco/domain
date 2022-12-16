import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const FINE_TUNED_MODEL = "ada:ft-personal-2022-12-16-01-00-04";

const generateName = async (description: string, tags: { id: string; tag: string }[]) => {
  const prompt = formatPrompt(description, tags);

  const completion = await openai
    .createCompletion({
      model: FINE_TUNED_MODEL,
      prompt,
      temperature: 0.5,
    })
    .catch(() => {
      throw new Error("Error finding completion");
    });

  if (completion.data.choices && completion.data.choices[0] && completion.data.choices[0].text) {
    const separators = /[ ,\n]/g;
    const names = completion.data.choices[0].text.split(separators).filter((item) => item);
    return names;
  }

  return [];
};

const formatPrompt = (description: string, tags: { id: string; tag: string }[]) => {
  return `${description}\nTags:${tags.map((tag) => tag.tag).join(", ")}\n\n###\n\n`;
};

const OpenAIService = { generateName };
export default OpenAIService;
