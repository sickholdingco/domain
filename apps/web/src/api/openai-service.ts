import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateName = async (description: string) => {
  const completion = await openai
    .createCompletion({
      model: "text-davinci-002",
      prompt: generatePrompt(description),
      temperature: 0.6,
    })
    .catch(() => {
      throw new Error("Error finding completion");
    });

  if (completion.data.choices && completion.data.choices[0]) {
    return completion.data.choices[0].text;
  }

  return "nothing";
};

const generatePrompt = (description: string) => {
  return `Suggest three names for an animal that is a superhero.

  Animal: Cat
  Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
  Animal: Dog
  Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
  Animal: ${description}
  Names:`;
};

const OpenAIService = { generateName };
export default OpenAIService;
