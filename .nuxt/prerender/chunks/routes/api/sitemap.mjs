import { defineEventHandler } from 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/h3/dist/index.mjs';

const defineSitemapEventHandler = defineEventHandler;

const sitemap = defineSitemapEventHandler(async (e) => {
  try {
    const response = await fetch(
      "https://vasalasmester.hu/api/public/json-posts"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const posts = await response.json();
    return posts.map((post) => {
      return {
        loc: `/posts/${post.slug}`,
        lastmod: post.modifiedAt ? new Date(post.modifiedAt) : /* @__PURE__ */ new Date()
      };
    });
  } catch (error) {
    console.error("Error fetching posts for sitemap:", error);
    return [];
  }
});

export { sitemap as default };
//# sourceMappingURL=sitemap.mjs.map
