import type { NextApiRequest, NextApiResponse } from 'next';

import { categoryPostsQuery } from './../../../utils/queries';
import { client } from '../../../utils/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { category } = req.query;

    if(!category){
        res.status(500).json("Missing request category");
        return
    }

    const videosQuery = categoryPostsQuery(category);

    const videos = await client.fetch(videosQuery);

    res.status(200).json(videos);
  }
}