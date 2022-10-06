// route itself needs to go in here and logic goes in src/api

import { NextApiRequest, NextApiResponse } from "next";

const generateDomain = (req: NextApiRequest, res: NextApiResponse) => {
  // in here I think we call the logic service and just return that response
  res.status(200).json({ text: "Hello" });
};

export default generateDomain;
