import { NextApiRequest, NextApiResponse } from "next";
import OpenAIService from "../../api/openai-service";

const generate = async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await OpenAIService.generateName(req.body.description, req.body.tags);
  res.status(200).json({ result });
};

export default generate;
