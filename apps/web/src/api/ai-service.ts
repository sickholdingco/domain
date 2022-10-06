// logic for routes

// so all the openai shit goes in here and all the logic

import { Configuration, OpenAIApi } from "openai";

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY, // need to add openai api key
// });
// const openai = new OpenAIApi(configuration);

// // need to export this and use in pages/api/generate :)
// const generateName = async (description: string) => {
//   const completion = await openai.createCompletion({
//     model: "text-davinci-002",
//     prompt: generatePrompt(description),
//     temperature: 0.6,
//   });

//   return completion;
// };

// const generatePrompt = (description: string) => {
//   return `Suggest three names for an animal that is a superhero.

//   Animal: Cat
//   Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
//   Animal: Dog
//   Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
//   Animal: ${description}
//   Names:`;
// };
