import { d as defineSitemapEventHandler } from '../../nitro/nitro.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/h3/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/ufo/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/destr/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/hookable/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/ofetch/dist/node.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/klona/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/defu/dist/defu.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/scule/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/unstorage/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/radix3/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/unctx/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/vue/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/pathe/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/unenv/runtime/npm/consola.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/ipx/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/ohash/dist/index.mjs';

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
      const lastModified = post.modifiedAt ? new Date(post.modifiedAt).toISOString() : new Date(post.created_at).toISOString();
      const imageLoc = post.image ? `https://vasalasmester.hu/storage/${post.image}` : void 0;
      return {
        loc: `/posts/${post.slug}`,
        lastmod: lastModified,
        images: imageLoc ? [
          {
            loc: imageLoc,
            caption: `K\xE9p a poszthoz: ${post.slug}`
          }
        ] : []
      };
    });
  } catch (error) {
    console.error("Error fetching posts for sitemap:", error);
    return [];
  }
});

export { sitemap as default };
//# sourceMappingURL=sitemap.mjs.map
