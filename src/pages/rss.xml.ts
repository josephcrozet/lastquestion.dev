import type { APIContext } from "astro";

import { getCollection } from "astro:content";

import rss from "@astrojs/rss";

export async function GET(context: APIContext) {
  const posts = (await getCollection("posts"))
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: "Last Question",
    description:
      "Personal blog about AI systems, tooling, and the space between vibe coding and AI engineering.",
    site: context.site ?? new URL("https://lastquestion.dev"),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      categories: post.data.tags,
      pubDate: post.data.pubDate,
      link: `/posts/${post.id}`,
    })),
  });
}
