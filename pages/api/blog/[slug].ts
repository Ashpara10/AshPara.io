import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const slugParam = req.query.slug.toString();

  if (req.method === "GET") {
    const views = await prisma.metrics.findUnique({
      where: {
        slug: slugParam,
      },
    });
    res.status(200).json({ total: views });
  }
  if (req.method === "POST") {
    const views = await prisma.metrics.upsert({
      where: {
        slug: slugParam,
      },
      create: {
        slug: slugParam,
      },
      update: {
        views: {
          increment: 1,
        },
      },
    });
    return res.status(200).json({ totalviews: views });
  }
};

export default handler;
