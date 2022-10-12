import { NextApiRequest, NextApiResponse } from "next";
import OpenApiService from "../../api/openai-service";

const generate = async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await OpenApiService.generateName(req.body.companyDescription);
  res.status(200).json({ result });
};

export default generate;
