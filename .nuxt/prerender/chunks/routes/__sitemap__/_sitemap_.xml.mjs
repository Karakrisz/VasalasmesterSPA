import { defineEventHandler, getRouterParam, createError } from 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/h3/dist/index.mjs';
import { withoutLeadingSlash, withoutTrailingSlash } from 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/ufo/dist/index.mjs';
import { u as useSimpleSitemapRuntimeConfig, f as createSitemap } from '../../nitro/nitro.mjs';
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

const _sitemap__xml = defineEventHandler(async (e) => {
  const runtimeConfig = useSimpleSitemapRuntimeConfig(e);
  const { sitemaps } = runtimeConfig;
  const sitemapName = withoutLeadingSlash(withoutTrailingSlash((getRouterParam(e, "sitemap") || e.path)?.replace(".xml", "").replace(runtimeConfig.sitemapsPathPrefix, "")));
  const isChunking = typeof sitemaps.chunks !== "undefined" && !Number.isNaN(Number(sitemapName));
  if (!sitemapName || !(sitemapName in sitemaps) && !isChunking) {
    return createError({
      statusCode: 404,
      message: `Sitemap "${sitemapName}" not found.`
    });
  }
  return createSitemap(e, isChunking ? {
    ...sitemaps.chunks,
    sitemapName
  } : sitemaps[sitemapName], runtimeConfig);
});

export { _sitemap__xml as default };
//# sourceMappingURL=_sitemap_.xml.mjs.map
