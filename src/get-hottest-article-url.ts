import { generateObject } from "ai";
import z from "zod";

import { openRouter } from "~/lib/open-router";

export const getHottestArticleUrl = async () => {
  const { object } = await generateObject({
    model: openRouter("google/gemini-2.5-flash"),
    prompt:
      "Find the hottest news article on the news.google.com homepage and send its url.",
    schema: z.object({
      title: z.string(),
      url: z.string(),
    }),
  });

  return object.url;
};
