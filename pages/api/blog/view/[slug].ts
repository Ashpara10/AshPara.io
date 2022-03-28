import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../Components/lib/prisma";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const slugparam = req.query.slug.toString();

  if (req.method === "GET") {
    const view = await prisma.metrics.findUnique({
      where: {
        slug: slugparam,
      },
    });

    res.status(200).json({ total: view });
  }

  if (req.method === "POST") {
    const view = await prisma.metrics.upsert({
      where: {
        slug: slugparam,
      },

      create: {
        slug: slugparam,
      },
      update: {
        views: {
          increment: 1,
        },
      },
    });
    res.status(200).json({ total: view });
  }
};

export default handler;
