import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../utils/client";
import { allRecipesQuery } from "../../../utils/queries";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const query = allRecipesQuery();
    const data = await client.fetch(query);
    res.status(200).json(data);
  } else if (req.method === "POST") {
    const document = req.body;
    const data = await client.create(document);
    res.status(200).json("Video created")
  }
}
