/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { NextApiRequest, NextApiResponse } from "next";
import whois from "whois";

const getWhois = (domain: string) => {
  return new Promise((resolve, reject) => {
    whois.lookup(`${domain}`, function (err, data) {
      if (err) {
        return reject(err);
      }

      const firstLine = data.split("\n")[0];

      if (firstLine.includes("No match for domain")) {
        return resolve({ available: true });
      } else {
        return resolve({ available: false });
      }
    });
  });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { domain } = req.query;

  try {
    const result = await getWhois(domain);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err });
  }
}
