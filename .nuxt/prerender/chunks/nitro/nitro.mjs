import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { getRequestHeader, splitCookiesString, setResponseStatus, setResponseHeader, send, getRequestHeaders, defineEventHandler, handleCacheHeaders, createEvent, fetchWithEvent, isEvent, eventHandler, getResponseStatus, setResponseHeaders, setHeaders, sendRedirect, proxyRequest, getRequestHost, getRequestProtocol, appendResponseHeader, removeResponseHeader, createError, getResponseHeader, setHeader, getHeader, getQuery as getQuery$1, lazyEventHandler, useBase, createApp, createRouter as createRouter$1, toNodeListener } from 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/h3/dist/index.mjs';
import { withQuery, joinURL, parseURL, withoutBase, getQuery, joinRelativeURL, hasProtocol, withHttps, withoutProtocol, withTrailingSlash, withLeadingSlash, withoutTrailingSlash, withBase, decodePath, parsePath, parseQuery, stringifyQuery, encodePath, stringifyParsedURL } from 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/ufo/dist/index.mjs';
import destr from 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/destr/dist/index.mjs';
import { createHooks } from 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/hookable/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/ofetch/dist/node.mjs';
import { createCall, createFetch } from 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/unenv/runtime/fetch/index.mjs';
import { klona } from 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/klona/dist/index.mjs';
import defu, { defuFn, defu as defu$1, createDefu } from 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/scule/dist/index.mjs';
import { createStorage, defineDriver, prefixStorage } from 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/unstorage/drivers/fs.mjs';
import fsDriver from 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/unstorage/drivers/fs-lite.mjs';
import lruCache from 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/unstorage/drivers/lru-cache.mjs';
import { toRouteMatcher, createRouter } from 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/radix3/dist/index.mjs';
import { getContext } from 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/unctx/dist/index.mjs';
import { toValue } from 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/vue/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve as resolve$1, isAbsolute } from 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/pathe/dist/index.mjs';
import { createConsola } from 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/unenv/runtime/npm/consola.mjs';
import { ipxFSStorage, ipxHttpStorage, createIPX, createIPXH3Handler } from 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/ipx/dist/index.mjs';
import { hash } from 'file:///Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/ohash/dist/index.mjs';

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error, isDev) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.unhandled ? "internal server error" : error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: "",
    // TODO: check and validate error.data for serialisation into query
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, (error.message || error.toString() || "internal server error") + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (!res) {
    const { template } = await import('../_/error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "801422ac-d62b-4b2b-9338-81aeb4cd5b33",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/sitemap.xsl": {
        "headers": {
          "Content-Type": "application/xslt+xml"
        }
      },
      "/sitemap.xml": {
        "redirect": {
          "to": "/sitemap_index.xml",
          "statusCode": 307
        }
      },
      "/sitemap_index.xml": {
        "headers": {
          "Content-Type": "text/xml; charset=UTF-8",
          "Cache-Control": "public, max-age=600, must-revalidate",
          "X-Sitemap-Prerendered": "2024-12-09T13:15:18.946Z"
        }
      },
      "/__sitemap__/pages.xml": {
        "headers": {
          "Content-Type": "text/xml; charset=UTF-8",
          "Cache-Control": "public, max-age=600, must-revalidate",
          "X-Sitemap-Prerendered": "2024-12-09T13:15:18.946Z"
        }
      },
      "/pages-sitemap.xml": {
        "redirect": {
          "to": "/__sitemap__/pages.xml",
          "statusCode": 307
        }
      },
      "/__sitemap__/posts.xml": {
        "headers": {
          "Content-Type": "text/xml; charset=UTF-8",
          "Cache-Control": "public, max-age=600, must-revalidate",
          "X-Sitemap-Prerendered": "2024-12-09T13:15:18.946Z"
        }
      },
      "/posts-sitemap.xml": {
        "redirect": {
          "to": "/__sitemap__/posts.xml",
          "statusCode": 307
        }
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "apiBaseUrl": "https://vasalasmester.hu/api/public"
  },
  "sitemap": {
    "isI18nMapped": false,
    "sitemapName": "sitemap.xml",
    "isMultiSitemap": true,
    "excludeAppSources": [],
    "cacheMaxAgeSeconds": 600,
    "autoLastmod": false,
    "defaultSitemapsChunkSize": 1000,
    "minify": false,
    "sortEntries": true,
    "debug": false,
    "discoverImages": true,
    "discoverVideos": true,
    "sitemapsPathPrefix": "/__sitemap__/",
    "isNuxtContentDocumentDriven": false,
    "xsl": "/__sitemap__/style.xsl",
    "xslTips": true,
    "xslColumns": [
      {
        "label": "URL",
        "width": "50%"
      },
      {
        "label": "Images",
        "width": "25%",
        "select": "count(image:image)"
      },
      {
        "label": "Last Updated",
        "width": "25%",
        "select": "concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"
      }
    ],
    "credits": true,
    "version": "6.1.5",
    "sitemaps": {
      "index": {
        "sitemapName": "index",
        "_route": "sitemap_index.xml",
        "sitemaps": [],
        "include": [],
        "exclude": []
      },
      "pages": {
        "include": [],
        "exclude": [
          "/_nuxt/**",
          "/_**"
        ],
        "includeAppSources": true,
        "defaults": {
          "priority": 0.7,
          "changefreq": "monthly"
        },
        "sitemapName": "pages",
        "_route": "/__sitemap__/pages.xml",
        "_hasSourceChunk": false
      },
      "posts": {
        "include": [],
        "exclude": [
          "/_nuxt/**",
          "/_**"
        ],
        "defaults": {
          "priority": 0.9,
          "changefreq": "daily"
        },
        "sitemapName": "posts",
        "_route": "/__sitemap__/posts.xml",
        "_hasSourceChunk": 1
      }
    }
  },
  "nuxt-site-config": {
    "stack": [
      {
        "_context": "system",
        "_priority": -15,
        "name": "VasalasmesterSPA",
        "env": "production"
      },
      {
        "_context": "package.json",
        "_priority": -10,
        "name": "nuxt-app"
      },
      {
        "_priority": -3,
        "_context": "nuxt-site-config:config",
        "url": "https://www.vasalasmester.hu",
        "trailingSlash": true
      }
    ],
    "version": "2.2.21",
    "debug": false
  },
  "ipx": {
    "baseURL": "/_ipx",
    "alias": {},
    "fs": {
      "dir": [
        "/Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/public"
      ]
    },
    "http": {
      "domains": []
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
const _sharedAppConfig = _deepFreeze(klona(appConfig));
function useAppConfig(event) {
  if (!event) {
    return _sharedAppConfig;
  }
  if (event.context.nitro.appConfig) {
    return event.context.nitro.appConfig;
  }
  const appConfig$1 = klona(appConfig);
  event.context.nitro.appConfig = appConfig$1;
  return appConfig$1;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

function defineNitroPlugin(def) {
  return def;
}

const serverAssets = [{"baseName":"server","dir":"/Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

// @ts-check


/**
 * @param {string} item
 */
const normalizeFsKey = item => item.replaceAll(':', '_');

/**
 * @param {{ base: string }} opts
 */
const _47Applications_47XAMPP_47xamppfiles_47htdocs_47VasalasmesterSPA_47node_modules_47nuxt_47dist_47core_47runtime_47nitro_47cache_45driver_46js = defineDriver((opts) => {
  const fs = fsDriver({ base: opts.base });
  const lru = lruCache({ max: 1000 });

  return {
    ...fs, // fall back to file system - only the bottom three methods are used in renderer
    async setItem (key, value, opts) {
      await Promise.all([
        fs.setItem?.(normalizeFsKey(key), value, opts),
        lru.setItem?.(key, value, opts),
      ]);
    },
    async hasItem (key, opts) {
      return await lru.hasItem(key, opts) || await fs.hasItem(normalizeFsKey(key), opts)
    },
    async getItem (key, opts) {
      return await lru.getItem(key, opts) || await fs.getItem(normalizeFsKey(key), opts)
    },
  }
});

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('internal:nuxt:prerender', _47Applications_47XAMPP_47xamppfiles_47htdocs_47VasalasmesterSPA_47node_modules_47nuxt_47dist_47core_47runtime_47nitro_47cache_45driver_46js({"driver":"/Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js","base":"/Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/.nuxt/cache/nitro/prerender"}));
storage.mount('data', fsDriver({"driver":"fsLite","base":"/Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/.data/kv"}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Applications/XAMPP/xamppfiles/htdocs/VasalasmesterSPA/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[nitro] [cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

getContext("nitro-app", {
  asyncContext: false,
  AsyncLocalStorage: void 0
});

function baseURL() {
  return useRuntimeConfig().app.baseURL;
}
function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

const defineSitemapEventHandler = defineEventHandler;

function normalizeSiteConfig(config) {
  if (typeof config.indexable !== "undefined")
    config.indexable = String(config.indexable) !== "false";
  if (typeof config.trailingSlash !== "undefined" && !config.trailingSlash)
    config.trailingSlash = String(config.trailingSlash) !== "false";
  if (config.url && !hasProtocol(config.url, { acceptRelative: true, strict: false }))
    config.url = withHttps(config.url);
  const keys = Object.keys(config).sort((a, b) => a.localeCompare(b));
  const newConfig = {};
  for (const k of keys)
    newConfig[k] = config[k];
  return newConfig;
}
function createSiteConfigStack(options) {
  const debug = options?.debug || false;
  const stack = [];
  function push(input) {
    if (!input || typeof input !== "object" || Object.keys(input).length === 0)
      return;
    if (!input._context && debug) {
      let lastFunctionName = new Error("tmp").stack?.split("\n")[2].split(" ")[5];
      if (lastFunctionName?.includes("/"))
        lastFunctionName = "anonymous";
      input._context = lastFunctionName;
    }
    const entry = {};
    for (const k in input) {
      const val = input[k];
      if (typeof val !== "undefined" && val !== "")
        entry[k] = val;
    }
    if (Object.keys(entry).filter((k) => !k.startsWith("_")).length > 0)
      stack.push(entry);
  }
  function get(options2) {
    const siteConfig = {};
    if (options2?.debug)
      siteConfig._context = {};
    for (const o in stack.sort((a, b) => (a._priority || 0) - (b._priority || 0))) {
      for (const k in stack[o]) {
        const key = k;
        const val = options2?.resolveRefs ? toValue(stack[o][k]) : stack[o][k];
        if (!k.startsWith("_") && typeof val !== "undefined") {
          siteConfig[k] = val;
          if (options2?.debug)
            siteConfig._context[key] = stack[o]._context?.[key] || stack[o]._context || "anonymous";
        }
      }
    }
    return options2?.skipNormalize ? siteConfig : normalizeSiteConfig(siteConfig);
  }
  return {
    stack,
    push,
    get
  };
}

function envSiteConfig(env) {
  return Object.fromEntries(Object.entries(env).filter(([k]) => k.startsWith("NUXT_SITE_") || k.startsWith("NUXT_PUBLIC_SITE_")).map(([k, v]) => [
    k.replace(/^NUXT_(PUBLIC_)?SITE_/, "").split("_").map((s, i) => i === 0 ? s.toLowerCase() : s[0].toUpperCase() + s.slice(1).toLowerCase()).join(""),
    v
  ]));
}

function useNitroOrigin(e) {
  const cert = process.env.NITRO_SSL_CERT;
  const key = process.env.NITRO_SSL_KEY;
  let host = process.env.NITRO_HOST || process.env.HOST || false;
  let port = false;
  let protocol = cert && key || !false ? "https" : "http";
  if (process.env.__NUXT_DEV__) {
    const origin = JSON.parse(process.env.__NUXT_DEV__).proxy.url;
    host = withoutProtocol(origin);
    protocol = origin.includes("https") ? "https" : "http";
  } else if (process.env.NUXT_VITE_NODE_OPTIONS) {
    const origin = JSON.parse(process.env.NUXT_VITE_NODE_OPTIONS).baseURL.replace("/__nuxt_vite_node__", "");
    host = withoutProtocol(origin);
    protocol = origin.includes("https") ? "https" : "http";
  } else {
    host = getRequestHost(e, { xForwardedHost: true }) || host;
    protocol = getRequestProtocol(e, { xForwardedProto: true }) || protocol;
  }
  if (typeof host === "string" && host.includes(":")) {
    port = host.split(":").pop();
    host = host.split(":")[0];
  }
  port = port ? `:${port}` : "";
  return withTrailingSlash(`${protocol}://${host}${port}`);
}

function useSiteConfig(e, _options) {
  e.context.siteConfig = e.context.siteConfig || createSiteConfigStack();
  const options = defu$1(_options, useRuntimeConfig(e)["nuxt-site-config"], { debug: false });
  return e.context.siteConfig.get(options);
}

function resolveSitePath(pathOrUrl, options) {
  let path = pathOrUrl;
  if (hasProtocol(pathOrUrl, { strict: false, acceptRelative: true })) {
    const parsed = parseURL(pathOrUrl);
    path = parsed.pathname;
  }
  const base = withLeadingSlash(options.base || "/");
  if (base !== "/" && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  let origin = withoutTrailingSlash(options.absolute ? options.siteUrl : "");
  if (base !== "/" && origin.endsWith(base)) {
    origin = origin.slice(0, origin.indexOf(base));
  }
  const baseWithOrigin = options.withBase ? withBase(base, origin || "/") : origin;
  const resolvedUrl = withBase(path, baseWithOrigin);
  return path === "/" && !options.withBase ? withTrailingSlash(resolvedUrl) : fixSlashes(options.trailingSlash, resolvedUrl);
}
function isPathFile(path) {
  const lastSegment = path.split("/").pop();
  return !!(lastSegment || path).match(/\.[0-9a-z]+$/i)?.[0];
}
function fixSlashes(trailingSlash, pathOrUrl) {
  const $url = parseURL(pathOrUrl);
  if (isPathFile($url.pathname))
    return pathOrUrl;
  const fixedPath = trailingSlash ? withTrailingSlash($url.pathname) : withoutTrailingSlash($url.pathname);
  return `${$url.protocol ? `${$url.protocol}//` : ""}${$url.host || ""}${fixedPath}${$url.search || ""}${$url.hash || ""}`;
}

function createSitePathResolver(e, options = {}) {
  const siteConfig = useSiteConfig(e);
  const nitroOrigin = useNitroOrigin(e);
  const nuxtBase = useRuntimeConfig(e).app.baseURL || "/";
  return (path) => {
    return resolveSitePath(path, {
      ...options,
      siteUrl: options.canonical !== false || true ? siteConfig.url : nitroOrigin,
      trailingSlash: siteConfig.trailingSlash,
      base: nuxtBase
    });
  };
}

const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
const unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
const reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
const escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
const objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  const counts = /* @__PURE__ */ new Map();
  let logNum = 0;
  function log(message) {
    if (logNum < 100) {
      console.warn(message);
      logNum += 1;
    }
  }
  function walk(thing) {
    if (typeof thing === "function") {
      log(`Cannot stringify a function ${thing.name}`);
      return;
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      const type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          const proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            if (typeof thing.toJSON !== "function") {
              log(`Cannot stringify arbitrary non-POJOs ${thing.constructor.name}`);
            }
          } else if (Object.getOwnPropertySymbols(thing).length > 0) {
            log(`Cannot stringify POJOs with symbolic keys ${Object.getOwnPropertySymbols(thing).map((symbol) => symbol.toString())}`);
          } else {
            Object.keys(thing).forEach((key) => walk(thing[key]));
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], getName(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    const type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify(thing.valueOf())})`;
      case "RegExp":
        return thing.toString();
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = thing.map((v, i) => i in thing ? stringify(v) : "");
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify).join(",")}])`;
      default:
        if (thing.toJSON) {
          let json = thing.toJSON();
          if (getType(json) === "String") {
            try {
              json = JSON.parse(json);
            } catch (e) {
            }
          }
          return stringify(json);
        }
        if (Object.getPrototypeOf(thing) === null) {
          if (Object.keys(thing).length === 0) {
            return "Object.create(null)";
          }
          return `Object.create(null,{${Object.keys(thing).map((key) => `${safeKey(key)}:{writable:true,enumerable:true,value:${stringify(thing[key])}}`).join(",")}})`;
        }
        return `{${Object.keys(thing).map((key) => `${safeKey(key)}:${stringify(thing[key])}`).join(",")}}`;
    }
  }
  const str = stringify(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (isPrimitive(thing)) {
        values.push(stringifyPrimitive(thing));
        return;
      }
      const type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify(v)}`);
          });
          break;
        case "Set":
          values.push("new Set");
          statements.push(`${name}.${Array.from(thing).map((v) => `add(${stringify(v)})`).join(".")}`);
          break;
        case "Map":
          values.push("new Map");
          statements.push(`${name}.${Array.from(thing).map(([k, v]) => `set(${stringify(k)}, ${stringify(v)})`).join(".")}`);
          break;
        default:
          values.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach((key) => {
            statements.push(`${name}${safeProp(key)}=${stringify(thing[key])}`);
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(";")}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function getName(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string") {
    return stringifyString(thing);
  }
  if (thing === void 0) {
    return "void 0";
  }
  if (thing === 0 && 1 / thing < 0) {
    return "-0";
  }
  const str = String(thing);
  if (typeof thing === "number") {
    return str.replace(/^(-)?0\./, "$1.");
  }
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? `.${key}` : `[${escapeUnsafeChars(JSON.stringify(key))}]`;
}
function stringifyString(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}

const PRERENDER_NO_SSR_ROUTES = /* @__PURE__ */ new Set(["/index.html", "/200.html", "/404.html"]);
const _Ot8HphMr41 = defineNitroPlugin(async (nitroApp) => {
  nitroApp.hooks.hook("render:html", async (ctx, { event }) => {
    const routeOptions = getRouteRules(event);
    const isIsland = process.env.NUXT_COMPONENT_ISLANDS && event.path.startsWith("/__nuxt_island");
    const url = event.path;
    const noSSR = event.context.nuxt?.noSSR || routeOptions.ssr === false && !isIsland || (PRERENDER_NO_SSR_ROUTES.has(url) );
    if (noSSR) {
      const siteConfig = Object.fromEntries(
        Object.entries(useSiteConfig(event)).map(([k, v]) => [k, toValue(v)])
      );
      ctx.body.push(`<script>window.__NUXT_SITE_CONFIG__=${devalue(siteConfig)}<\/script>`);
    }
  });
});

const plugins = [
  _Ot8HphMr41
];

const assets = {
  "/200.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"a4b8-jA1DXoix7n9Q8jtLc8a0nCxhStk\"",
    "mtime": "2024-12-09T13:15:27.171Z",
    "size": 42168,
    "path": "../../.output/public/200.html"
  },
  "/404.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"a4b8-6WLCgCWqw4z2jW5rKNQEx2LU2I8\"",
    "mtime": "2024-12-09T13:15:27.171Z",
    "size": 42168,
    "path": "../../.output/public/404.html"
  },
  "/_payload.json": {
    "type": "application/json",
    "etag": "\"2af7c-cKZhViRoTp6f7DsLFcil5CqVaLY\"",
    "mtime": "2024-12-09T13:15:28.600Z",
    "size": 175996,
    "path": "../../.output/public/_payload.json"
  },
  "/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"11854-JWizgAORFv67z+h/U7qIVTdFAYE\"",
    "mtime": "2024-12-09T13:15:27.560Z",
    "size": 71764,
    "path": "../../.output/public/index.html"
  },
  "/__sitemap__/style.xsl": {
    "type": "application/xml",
    "etag": "\"174e-04KStjaK+j7dbchiMHqnnHF1ICc\"",
    "mtime": "2024-12-09T13:15:26.904Z",
    "size": 5966,
    "path": "../../.output/public/__sitemap__/style.xsl"
  },
  "/adatvedelmi-tajekoztato/_payload.json": {
    "type": "application/json",
    "etag": "\"45-sazGoGYWECoT3Ui2BPVJLEZ5pDI\"",
    "mtime": "2024-12-09T13:15:28.712Z",
    "size": 69,
    "path": "../../.output/public/adatvedelmi-tajekoztato/_payload.json"
  },
  "/adatvedelmi-tajekoztato/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"11adf-z63kkUCfuaOXoi9bhi6LfsQJv8I\"",
    "mtime": "2024-12-09T13:15:27.929Z",
    "size": 72415,
    "path": "../../.output/public/adatvedelmi-tajekoztato/index.html"
  },
  "/ajanlatkeres/_payload.json": {
    "type": "application/json",
    "etag": "\"45-hxZdHQ/8CS/EWZbuoHX2dXO9LoI\"",
    "mtime": "2024-12-09T13:15:28.712Z",
    "size": 69,
    "path": "../../.output/public/ajanlatkeres/_payload.json"
  },
  "/ajanlatkeres/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"d0e2-7lYzBX18jCIrn9YfrowAZ67i8Ko\"",
    "mtime": "2024-12-09T13:15:27.928Z",
    "size": 53474,
    "path": "../../.output/public/ajanlatkeres/index.html"
  },
  "/arlista/_payload.json": {
    "type": "application/json",
    "etag": "\"45-sazGoGYWECoT3Ui2BPVJLEZ5pDI\"",
    "mtime": "2024-12-09T13:15:28.712Z",
    "size": 69,
    "path": "../../.output/public/arlista/_payload.json"
  },
  "/arlista/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"da85-K8dCXsxdEwS2mhPmB1pLP0f4kHs\"",
    "mtime": "2024-12-09T13:15:27.929Z",
    "size": 55941,
    "path": "../../.output/public/arlista/index.html"
  },
  "/egyeni-igenyek/_payload.json": {
    "type": "application/json",
    "etag": "\"45-sazGoGYWECoT3Ui2BPVJLEZ5pDI\"",
    "mtime": "2024-12-09T13:15:28.729Z",
    "size": 69,
    "path": "../../.output/public/egyeni-igenyek/_payload.json"
  },
  "/egyeni-igenyek/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"f092-3oyhSLIWbafZMONRjQBKryOFhn0\"",
    "mtime": "2024-12-09T13:15:27.929Z",
    "size": 61586,
    "path": "../../.output/public/egyeni-igenyek/index.html"
  },
  "/galeria/_payload.json": {
    "type": "application/json",
    "etag": "\"45-sazGoGYWECoT3Ui2BPVJLEZ5pDI\"",
    "mtime": "2024-12-09T13:15:28.712Z",
    "size": 69,
    "path": "../../.output/public/galeria/_payload.json"
  },
  "/galeria/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"c700-wZSPYzFDQwxm+DY7ODDuKbeHDg0\"",
    "mtime": "2024-12-09T13:15:27.929Z",
    "size": 50944,
    "path": "../../.output/public/galeria/index.html"
  },
  "/javitas/_payload.json": {
    "type": "application/json",
    "etag": "\"45-sazGoGYWECoT3Ui2BPVJLEZ5pDI\"",
    "mtime": "2024-12-09T13:15:28.650Z",
    "size": 69,
    "path": "../../.output/public/javitas/_payload.json"
  },
  "/javitas/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"ef0d-6iTpYbZNvTaF1kwyD88B8SJ/KAc\"",
    "mtime": "2024-12-09T13:15:27.928Z",
    "size": 61197,
    "path": "../../.output/public/javitas/index.html"
  },
  "/kolcsonzes/_payload.json": {
    "type": "application/json",
    "etag": "\"45-sazGoGYWECoT3Ui2BPVJLEZ5pDI\"",
    "mtime": "2024-12-09T13:15:28.656Z",
    "size": 69,
    "path": "../../.output/public/kolcsonzes/_payload.json"
  },
  "/kolcsonzes/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"f030-akcm9sOCWgCBHBAXkrpcs8o3/Z8\"",
    "mtime": "2024-12-09T13:15:27.928Z",
    "size": 61488,
    "path": "../../.output/public/kolcsonzes/index.html"
  },
  "/mosas/_payload.json": {
    "type": "application/json",
    "etag": "\"45-hxZdHQ/8CS/EWZbuoHX2dXO9LoI\"",
    "mtime": "2024-12-09T13:15:28.600Z",
    "size": 69,
    "path": "../../.output/public/mosas/_payload.json"
  },
  "/mosas/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"eec4-1phrrh0gZwoSgal5xkG+Bb6f03A\"",
    "mtime": "2024-12-09T13:15:27.928Z",
    "size": 61124,
    "path": "../../.output/public/mosas/index.html"
  },
  "/kapcsolat/_payload.json": {
    "type": "application/json",
    "etag": "\"45-sazGoGYWECoT3Ui2BPVJLEZ5pDI\"",
    "mtime": "2024-12-09T13:15:28.729Z",
    "size": 69,
    "path": "../../.output/public/kapcsolat/_payload.json"
  },
  "/kapcsolat/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"c68e-Z7J2C7DbUJq3J9qYWPFp5RPNXjs\"",
    "mtime": "2024-12-09T13:15:27.934Z",
    "size": 50830,
    "path": "../../.output/public/kapcsolat/index.html"
  },
  "/meretre-szabas-igazitas/_payload.json": {
    "type": "application/json",
    "etag": "\"45-sazGoGYWECoT3Ui2BPVJLEZ5pDI\"",
    "mtime": "2024-12-09T13:15:28.712Z",
    "size": 69,
    "path": "../../.output/public/meretre-szabas-igazitas/_payload.json"
  },
  "/meretre-szabas-igazitas/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"f006-/G9Gf70mfohPUeA9/8zORlIk8Wc\"",
    "mtime": "2024-12-09T13:15:27.929Z",
    "size": 61446,
    "path": "../../.output/public/meretre-szabas-igazitas/index.html"
  },
  "/nagy-mennyiseg/_payload.json": {
    "type": "application/json",
    "etag": "\"45-sazGoGYWECoT3Ui2BPVJLEZ5pDI\"",
    "mtime": "2024-12-09T13:15:28.656Z",
    "size": 69,
    "path": "../../.output/public/nagy-mennyiseg/_payload.json"
  },
  "/nagy-mennyiseg/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"f0f2-fR87O+zPFCei5ANs0zf3ig9dnOg\"",
    "mtime": "2024-12-09T13:15:27.928Z",
    "size": 61682,
    "path": "../../.output/public/nagy-mennyiseg/index.html"
  },
  "/pages-sitemap.xml/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"6c-Q57uxsRrYGBuW9WGtHcHnbuqrVk\"",
    "mtime": "2024-12-09T13:15:28.708Z",
    "size": 108,
    "path": "../../.output/public/pages-sitemap.xml/index.html"
  },
  "/posts/_payload.json": {
    "type": "application/json",
    "etag": "\"2af7c-7E0ATmpWnjitvLzz6ZU64AuNgCw\"",
    "mtime": "2024-12-09T13:15:29.093Z",
    "size": 175996,
    "path": "../../.output/public/posts/_payload.json"
  },
  "/posts/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"12bc1-RbYcnjq1FEHME4aeJ+roaeTzIMw\"",
    "mtime": "2024-12-09T13:15:28.980Z",
    "size": 76737,
    "path": "../../.output/public/posts/index.html"
  },
  "/posts-sitemap.xml/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"6c-5tjxiCV62ANzx2JVoE5ZE/i5C8w\"",
    "mtime": "2024-12-09T13:15:28.656Z",
    "size": 108,
    "path": "../../.output/public/posts-sitemap.xml/index.html"
  },
  "/sitemap.xml/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"68-l9jsPo6sU6PxyzeP+P1pUxbRoP0\"",
    "mtime": "2024-12-09T13:15:28.708Z",
    "size": 104,
    "path": "../../.output/public/sitemap.xml/index.html"
  },
  "/rolunk/_payload.json": {
    "type": "application/json",
    "etag": "\"45-hxZdHQ/8CS/EWZbuoHX2dXO9LoI\"",
    "mtime": "2024-12-09T13:15:28.650Z",
    "size": 69,
    "path": "../../.output/public/rolunk/_payload.json"
  },
  "/rolunk/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"d3ab-yHM18ITczP6L0+IEJhRZtOvJJyI\"",
    "mtime": "2024-12-09T13:15:27.928Z",
    "size": 54187,
    "path": "../../.output/public/rolunk/index.html"
  },
  "/szolgaltatasok/_payload.json": {
    "type": "application/json",
    "etag": "\"45-hxZdHQ/8CS/EWZbuoHX2dXO9LoI\"",
    "mtime": "2024-12-09T13:15:28.708Z",
    "size": 69,
    "path": "../../.output/public/szolgaltatasok/_payload.json"
  },
  "/szolgaltatasok/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"dd89-Rb5wDKTTH86HL/kDk7HYuGYpqvA\"",
    "mtime": "2024-12-09T13:15:27.929Z",
    "size": 56713,
    "path": "../../.output/public/szolgaltatasok/index.html"
  },
  "/tisztitas/_payload.json": {
    "type": "application/json",
    "etag": "\"45-hxZdHQ/8CS/EWZbuoHX2dXO9LoI\"",
    "mtime": "2024-12-09T13:15:28.650Z",
    "size": 69,
    "path": "../../.output/public/tisztitas/_payload.json"
  },
  "/tisztitas/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"ef12-Uz+5WfxXM/Up9jEEBczVDGpHdng\"",
    "mtime": "2024-12-09T13:15:27.928Z",
    "size": 61202,
    "path": "../../.output/public/tisztitas/index.html"
  },
  "/varras/_payload.json": {
    "type": "application/json",
    "etag": "\"45-sazGoGYWECoT3Ui2BPVJLEZ5pDI\"",
    "mtime": "2024-12-09T13:15:28.650Z",
    "size": 69,
    "path": "../../.output/public/varras/_payload.json"
  },
  "/varras/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"efed-YMeyriXSZ8RklXN0uSrvs0T3sEw\"",
    "mtime": "2024-12-09T13:15:27.928Z",
    "size": 61421,
    "path": "../../.output/public/varras/index.html"
  },
  "/vasalas/_payload.json": {
    "type": "application/json",
    "etag": "\"45-hxZdHQ/8CS/EWZbuoHX2dXO9LoI\"",
    "mtime": "2024-12-09T13:15:28.709Z",
    "size": 69,
    "path": "../../.output/public/vasalas/_payload.json"
  },
  "/vasalas/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"eeaa-LPcgNfEFm2FWpLtcld6iLXkdO48\"",
    "mtime": "2024-12-09T13:15:27.929Z",
    "size": 61098,
    "path": "../../.output/public/vasalas/index.html"
  },
  "/posts/ing-mosas-vasalas-es-oltony-tisztitas-haztol-hazig-a-13-keruletben/_payload.json": {
    "type": "application/json",
    "etag": "\"137c-xwo5/S86FJSgi/qp4xHD5M3bCYE\"",
    "mtime": "2024-12-09T13:15:31.596Z",
    "size": 4988,
    "path": "../../.output/public/posts/ing-mosas-vasalas-es-oltony-tisztitas-haztol-hazig-a-13-keruletben/_payload.json"
  },
  "/posts/ing-mosas-vasalas-es-oltony-tisztitas-haztol-hazig-a-13-keruletben/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"f397-qWnawwpLVEGtW3b+KQ2xFbimkUU\"",
    "mtime": "2024-12-09T13:15:31.565Z",
    "size": 62359,
    "path": "../../.output/public/posts/ing-mosas-vasalas-es-oltony-tisztitas-haztol-hazig-a-13-keruletben/index.html"
  },
  "/posts/ing-oltony-mosas-tisztitas-es-vasalas-haztol-hazig-a-2-keruletben/_payload.json": {
    "type": "application/json",
    "etag": "\"1320-rFDJQYDEYpRycO994Fus41hlYJU\"",
    "mtime": "2024-12-09T13:15:31.366Z",
    "size": 4896,
    "path": "../../.output/public/posts/ing-oltony-mosas-tisztitas-es-vasalas-haztol-hazig-a-2-keruletben/_payload.json"
  },
  "/posts/ing-oltony-mosas-tisztitas-es-vasalas-haztol-hazig-a-2-keruletben/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"f342-Q+yL3O4CkSW9csLO0FgyDCs4RqM\"",
    "mtime": "2024-12-09T13:15:31.360Z",
    "size": 62274,
    "path": "../../.output/public/posts/ing-oltony-mosas-tisztitas-es-vasalas-haztol-hazig-a-2-keruletben/index.html"
  },
  "/posts/ingek-mosasa-es-vasalasa-a-4-keruletben-bizza-a-vasalas-mesterere/_payload.json": {
    "type": "application/json",
    "etag": "\"2240-TuMvVplCoIfQaw4I/Ku1TWJfOhc\"",
    "mtime": "2024-12-09T13:15:28.729Z",
    "size": 8768,
    "path": "../../.output/public/posts/ingek-mosasa-es-vasalasa-a-4-keruletben-bizza-a-vasalas-mesterere/_payload.json"
  },
  "/posts/ingek-mosasa-es-vasalasa-a-4-keruletben-bizza-a-vasalas-mesterere/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"100e4-3Ot5GpO+XWrDTtQuvEB8Fq3ZtZs\"",
    "mtime": "2024-12-09T13:15:27.974Z",
    "size": 65764,
    "path": "../../.output/public/posts/ingek-mosasa-es-vasalasa-a-4-keruletben-bizza-a-vasalas-mesterere/index.html"
  },
  "/posts/ingek-mosasa-es-vasalasa-a-2-keruletben-professzionalis-szolgaltatasok-a-vasalas-mesternel/_payload.json": {
    "type": "application/json",
    "etag": "\"2e08-oefn0CqjmugmU2WC9forcH5JRHI\"",
    "mtime": "2024-12-09T13:15:31.222Z",
    "size": 11784,
    "path": "../../.output/public/posts/ingek-mosasa-es-vasalasa-a-2-keruletben-professzionalis-szolgaltatasok-a-vasalas-mesternel/_payload.json"
  },
  "/posts/ingek-mosasa-es-vasalasa-a-2-keruletben-professzionalis-szolgaltatasok-a-vasalas-mesternel/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"10d44-bUxWwleveENN8jGNazhyoBAA46k\"",
    "mtime": "2024-12-09T13:15:31.185Z",
    "size": 68932,
    "path": "../../.output/public/posts/ingek-mosasa-es-vasalasa-a-2-keruletben-professzionalis-szolgaltatasok-a-vasalas-mesternel/index.html"
  },
  "/posts/ingek-mosasa-es-vasalasa-a-5-keruletben-bizza-a-vasalas-mesterere/_payload.json": {
    "type": "application/json",
    "etag": "\"24db-yp7SylfkwwOddlSl1Vj+ElagJuM\"",
    "mtime": "2024-12-09T13:15:28.746Z",
    "size": 9435,
    "path": "../../.output/public/posts/ingek-mosasa-es-vasalasa-a-5-keruletben-bizza-a-vasalas-mesterere/_payload.json"
  },
  "/posts/ingek-mosasa-es-vasalasa-a-5-keruletben-bizza-a-vasalas-mesterere/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"102d9-DBPfG7aCY0yM6jrnlTkwi0gzZk4\"",
    "mtime": "2024-12-09T13:15:28.708Z",
    "size": 66265,
    "path": "../../.output/public/posts/ingek-mosasa-es-vasalasa-a-5-keruletben-bizza-a-vasalas-mesterere/index.html"
  },
  "/posts/ingek-mosasa-es-vasalasa-a-6-keruletben-bizza-a-vasalas-mesterere/_payload.json": {
    "type": "application/json",
    "etag": "\"24b0-4/kBK/SY9G2DxR4n2ejPGbGebbo\"",
    "mtime": "2024-12-09T13:15:28.746Z",
    "size": 9392,
    "path": "../../.output/public/posts/ingek-mosasa-es-vasalasa-a-6-keruletben-bizza-a-vasalas-mesterere/_payload.json"
  },
  "/posts/ingek-mosasa-es-vasalasa-a-6-keruletben-bizza-a-vasalas-mesterere/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"102c1-HmaxvpRmYtk3mr3nxs+CS7uVKhA\"",
    "mtime": "2024-12-09T13:15:28.708Z",
    "size": 66241,
    "path": "../../.output/public/posts/ingek-mosasa-es-vasalasa-a-6-keruletben-bizza-a-vasalas-mesterere/index.html"
  },
  "/posts/ingek-mosasa-es-vasalasa-budapesten/_payload.json": {
    "type": "application/json",
    "etag": "\"612-hEjWGX4dI3enjFLkKrRIeMw3jEw\"",
    "mtime": "2024-12-09T13:15:31.359Z",
    "size": 1554,
    "path": "../../.output/public/posts/ingek-mosasa-es-vasalasa-budapesten/_payload.json"
  },
  "/posts/ingek-mosasa-es-vasalasa-budapesten/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"e5de-WgCAlJa4mYt/rbUs6sgtIVvEebQ\"",
    "mtime": "2024-12-09T13:15:31.354Z",
    "size": 58846,
    "path": "../../.output/public/posts/ingek-mosasa-es-vasalasa-budapesten/index.html"
  },
  "/posts/ingek-mosasa-es-vasalasa-a-3-keruletben-bizza-a-vasalas-mesterere/_payload.json": {
    "type": "application/json",
    "etag": "\"2c02-SlYDcvKuwhlE3VYLUXmINc8VZm4\"",
    "mtime": "2024-12-09T13:15:31.339Z",
    "size": 11266,
    "path": "../../.output/public/posts/ingek-mosasa-es-vasalasa-a-3-keruletben-bizza-a-vasalas-mesterere/_payload.json"
  },
  "/posts/ingek-mosasa-es-vasalasa-a-3-keruletben-bizza-a-vasalas-mesterere/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"10a7a-8/bV7sXem77XaBBdEUC9Bs8exkI\"",
    "mtime": "2024-12-09T13:15:31.336Z",
    "size": 68218,
    "path": "../../.output/public/posts/ingek-mosasa-es-vasalasa-a-3-keruletben-bizza-a-vasalas-mesterere/index.html"
  },
  "/posts/ingek-mosasa-es-vasalasa-budapesten-bizza-a-vasalas-mesterere/_payload.json": {
    "type": "application/json",
    "etag": "\"1bc3-WWh2u/U9OkaIG1z7YWchR1crFlQ\"",
    "mtime": "2024-12-09T13:15:29.548Z",
    "size": 7107,
    "path": "../../.output/public/posts/ingek-mosasa-es-vasalasa-budapesten-bizza-a-vasalas-mesterere/_payload.json"
  },
  "/posts/ingek-mosasa-es-vasalasa-budapesten-bizza-a-vasalas-mesterere/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"fb0a-c4CekZV7Ks47PsnI1lNlWy8Sz7U\"",
    "mtime": "2024-12-09T13:15:29.544Z",
    "size": 64266,
    "path": "../../.output/public/posts/ingek-mosasa-es-vasalasa-budapesten-bizza-a-vasalas-mesterere/index.html"
  },
  "/posts/ingek-professzionalis-mosasa-es-vasalasa-budapesten-miert-bizza-a-vasalas-mesterre/_payload.json": {
    "type": "application/json",
    "etag": "\"35c4-qFGPTAoqZ+DH5ce4YDXhkCTVbwM\"",
    "mtime": "2024-12-09T13:15:29.847Z",
    "size": 13764,
    "path": "../../.output/public/posts/ingek-professzionalis-mosasa-es-vasalasa-budapesten-miert-bizza-a-vasalas-mesterre/_payload.json"
  },
  "/posts/ingek-professzionalis-mosasa-es-vasalasa-budapesten-miert-bizza-a-vasalas-mesterre/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"1148d-BEkjNk8f5OsJFYSurQI4ooClGug\"",
    "mtime": "2024-12-09T13:15:29.843Z",
    "size": 70797,
    "path": "../../.output/public/posts/ingek-professzionalis-mosasa-es-vasalasa-budapesten-miert-bizza-a-vasalas-mesterre/index.html"
  },
  "/posts/mosas-es-vasalas-haztol-hazig-budapest-1-keruleteben-oltony-es-ing-tisztitas/_payload.json": {
    "type": "application/json",
    "etag": "\"146f-b6ICOhEBvJlHISj7sr0PFLE0S54\"",
    "mtime": "2024-12-09T13:15:31.450Z",
    "size": 5231,
    "path": "../../.output/public/posts/mosas-es-vasalas-haztol-hazig-budapest-1-keruleteben-oltony-es-ing-tisztitas/_payload.json"
  },
  "/posts/mosas-es-vasalas-haztol-hazig-budapest-1-keruleteben-oltony-es-ing-tisztitas/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"f4d7-6IZ21/pfwMyIiYLHhLXrjkv1fJo\"",
    "mtime": "2024-12-09T13:15:31.447Z",
    "size": 62679,
    "path": "../../.output/public/posts/mosas-es-vasalas-haztol-hazig-budapest-1-keruleteben-oltony-es-ing-tisztitas/index.html"
  },
  "/posts/mosas-es-vasalas-haztol-hazig-budapesten-kenyelmes-es-megbizhato-ruhatisztito-szolgaltatas/_payload.json": {
    "type": "application/json",
    "etag": "\"13ff-lJcEMBD0hfItNaDPYEzJXlhVK8A\"",
    "mtime": "2024-12-09T13:15:31.604Z",
    "size": 5119,
    "path": "../../.output/public/posts/mosas-es-vasalas-haztol-hazig-budapesten-kenyelmes-es-megbizhato-ruhatisztito-szolgaltatas/_payload.json"
  },
  "/posts/mosas-es-vasalas-haztol-hazig-budapesten-kenyelmes-es-megbizhato-ruhatisztito-szolgaltatas/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"f4e7-YfzYRujrUxN0vrj3jgVCzrJtF0s\"",
    "mtime": "2024-12-09T13:15:31.588Z",
    "size": 62695,
    "path": "../../.output/public/posts/mosas-es-vasalas-haztol-hazig-budapesten-kenyelmes-es-megbizhato-ruhatisztito-szolgaltatas/index.html"
  },
  "/posts/mosas-es-vasalas-haztol-hazig-ing-es-zako-tisztitas-kenyelmesen/_payload.json": {
    "type": "application/json",
    "etag": "\"15c8-YwwIanDBUvQnsOcIF3TEsWcaGBs\"",
    "mtime": "2024-12-09T13:15:31.604Z",
    "size": 5576,
    "path": "../../.output/public/posts/mosas-es-vasalas-haztol-hazig-ing-es-zako-tisztitas-kenyelmesen/_payload.json"
  },
  "/posts/mosas-es-vasalas-haztol-hazig-ing-es-zako-tisztitas-kenyelmesen/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"f5e8-Fej4ZZ/Ejwy/RE08XjK3VkheZJQ\"",
    "mtime": "2024-12-09T13:15:31.588Z",
    "size": 62952,
    "path": "../../.output/public/posts/mosas-es-vasalas-haztol-hazig-ing-es-zako-tisztitas-kenyelmesen/index.html"
  },
  "/posts/ruhak-tisztitasa-budapesten-tiszta-es-rendezett-megjelenes-a-szakerto-kezeiben/_payload.json": {
    "type": "application/json",
    "etag": "\"28ce-27FonBzJPR6CZ/TgGRQJV8s02EE\"",
    "mtime": "2024-12-09T13:15:31.603Z",
    "size": 10446,
    "path": "../../.output/public/posts/ruhak-tisztitasa-budapesten-tiszta-es-rendezett-megjelenes-a-szakerto-kezeiben/_payload.json"
  },
  "/posts/ruhak-tisztitasa-budapesten-tiszta-es-rendezett-megjelenes-a-szakerto-kezeiben/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"106c0-stQ41ET4Qyu3P3H4HOrFCDJuuP4\"",
    "mtime": "2024-12-09T13:15:31.584Z",
    "size": 67264,
    "path": "../../.output/public/posts/ruhak-tisztitasa-budapesten-tiszta-es-rendezett-megjelenes-a-szakerto-kezeiben/index.html"
  },
  "/posts/oltony-es-zako-tisztitas-budapesten-a-profizmus-es-minoseg-jegyeben/_payload.json": {
    "type": "application/json",
    "etag": "\"295a-7pxbe3wNePoarOihfi6tK4iJVw8\"",
    "mtime": "2024-12-09T13:15:31.604Z",
    "size": 10586,
    "path": "../../.output/public/posts/oltony-es-zako-tisztitas-budapesten-a-profizmus-es-minoseg-jegyeben/_payload.json"
  },
  "/posts/oltony-es-zako-tisztitas-budapesten-a-profizmus-es-minoseg-jegyeben/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"107b2-S7Zbn6mVhMkXm6uYqurdnBw9qxk\"",
    "mtime": "2024-12-09T13:15:31.592Z",
    "size": 67506,
    "path": "../../.output/public/posts/oltony-es-zako-tisztitas-budapesten-a-profizmus-es-minoseg-jegyeben/index.html"
  },
  "/posts/mosoda-budapesten-professzionalis-szolgaltatasok-a-tisztasag-jegyeben-a-vasalasmester-hu-tol/_payload.json": {
    "type": "application/json",
    "etag": "\"2440-EnKkbOz8kR31AhoITqUiaed79zk\"",
    "mtime": "2024-12-09T13:15:31.251Z",
    "size": 9280,
    "path": "../../.output/public/posts/mosoda-budapesten-professzionalis-szolgaltatasok-a-tisztasag-jegyeben-a-vasalasmester-hu-tol/_payload.json"
  },
  "/posts/mosoda-budapesten-professzionalis-szolgaltatasok-a-tisztasag-jegyeben-a-vasalasmester-hu-tol/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"10310-ZKGWe1nBFtEPeEjkd5/TtPUuhIs\"",
    "mtime": "2024-12-09T13:15:31.246Z",
    "size": 66320,
    "path": "../../.output/public/posts/mosoda-budapesten-professzionalis-szolgaltatasok-a-tisztasag-jegyeben-a-vasalasmester-hu-tol/index.html"
  },
  "/posts/professzionalis-ingmosas-es-vasalas-budapesten-a-vasalas-mester-minden-ingrol-gondoskodik/_payload.json": {
    "type": "application/json",
    "etag": "\"2b44-/gYT19j9AE63XVIXvVXZZseIkwA\"",
    "mtime": "2024-12-09T13:15:30.143Z",
    "size": 11076,
    "path": "../../.output/public/posts/professzionalis-ingmosas-es-vasalas-budapesten-a-vasalas-mester-minden-ingrol-gondoskodik/_payload.json"
  },
  "/posts/professzionalis-ingmosas-es-vasalas-budapesten-a-vasalas-mester-minden-ingrol-gondoskodik/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"10abd-SiupDnuqrNcOxbwZunYXOomjJMQ\"",
    "mtime": "2024-12-09T13:15:30.140Z",
    "size": 68285,
    "path": "../../.output/public/posts/professzionalis-ingmosas-es-vasalas-budapesten-a-vasalas-mester-minden-ingrol-gondoskodik/index.html"
  },
  "/posts/ruhatisztitas-budapesten-a-minosegi-szolgaltatas-fontossaga-a-tokeletes-megjelenesert/_payload.json": {
    "type": "application/json",
    "etag": "\"2cd3-PbtojHDPpKBq8aT8FCTZ/T3mHK0\"",
    "mtime": "2024-12-09T13:15:31.594Z",
    "size": 11475,
    "path": "../../.output/public/posts/ruhatisztitas-budapesten-a-minosegi-szolgaltatas-fontossaga-a-tokeletes-megjelenesert/_payload.json"
  },
  "/posts/ruhatisztitas-budapesten-a-minosegi-szolgaltatas-fontossaga-a-tokeletes-megjelenesert/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"10bc3-O1wJ+gPyHpY1hvnQyl5fLqKJDQA\"",
    "mtime": "2024-12-09T13:15:31.565Z",
    "size": 68547,
    "path": "../../.output/public/posts/ruhatisztitas-budapesten-a-minosegi-szolgaltatas-fontossaga-a-tokeletes-megjelenesert/index.html"
  },
  "/posts/ruhatisztitas-budapesten-professzionalis-gondoskodas-a-vasalasmester-hu-tol/_payload.json": {
    "type": "application/json",
    "etag": "\"23b7-pZOOqCYJZ+/2qHd7YLns17VXBIY\"",
    "mtime": "2024-12-09T13:15:31.454Z",
    "size": 9143,
    "path": "../../.output/public/posts/ruhatisztitas-budapesten-professzionalis-gondoskodas-a-vasalasmester-hu-tol/_payload.json"
  },
  "/posts/ruhatisztitas-budapesten-professzionalis-gondoskodas-a-vasalasmester-hu-tol/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"1020d-l46fE6qzuCq8pnuUQKbU5/aGUM8\"",
    "mtime": "2024-12-09T13:15:31.449Z",
    "size": 66061,
    "path": "../../.output/public/posts/ruhatisztitas-budapesten-professzionalis-gondoskodas-a-vasalasmester-hu-tol/index.html"
  },
  "/posts/ruhatisztitas-budapesten-haztol-hazig-mosas-es-vasalas-kenyelmesen-profi-kezekben/_payload.json": {
    "type": "application/json",
    "etag": "\"1548-kRPm5Bq0nUiCVlQU/PLV0oNpYco\"",
    "mtime": "2024-12-09T13:15:31.591Z",
    "size": 5448,
    "path": "../../.output/public/posts/ruhatisztitas-budapesten-haztol-hazig-mosas-es-vasalas-kenyelmesen-profi-kezekben/_payload.json"
  },
  "/posts/ruhatisztitas-budapesten-haztol-hazig-mosas-es-vasalas-kenyelmesen-profi-kezekben/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"f5c3-y6GkqRjfQoyXO0/u3LrVLrVzSnM\"",
    "mtime": "2024-12-09T13:15:31.563Z",
    "size": 62915,
    "path": "../../.output/public/posts/ruhatisztitas-budapesten-haztol-hazig-mosas-es-vasalas-kenyelmesen-profi-kezekben/index.html"
  },
  "/_ipx/_/img/contact.webp": {
    "type": "image/webp",
    "etag": "\"57f06-kBwH14OyHNiR2Ez2rNYGP8GhTfs\"",
    "mtime": "2024-12-09T13:15:29.909Z",
    "size": 360198,
    "path": "../../.output/public/_ipx/_/img/contact.webp"
  },
  "/_ipx/_/img/subpage.webp": {
    "type": "image/webp",
    "etag": "\"6ca02-jCg0T6hvVH9tpZQbEM6sCIZKf9c\"",
    "mtime": "2024-12-09T13:15:29.864Z",
    "size": 444930,
    "path": "../../.output/public/_ipx/_/img/subpage.webp"
  },
  "/posts/ruhatisztitas-budapesten-tisztasag-es-frissesseg/_payload.json": {
    "type": "application/json",
    "etag": "\"24ab-WUbkQ9qtEBOZjUiaoCyJ34qBW0o\"",
    "mtime": "2024-12-09T13:15:31.651Z",
    "size": 9387,
    "path": "../../.output/public/posts/ruhatisztitas-budapesten-tisztasag-es-frissesseg/_payload.json"
  },
  "/posts/ruhatisztitas-budapesten-tisztasag-es-frissesseg/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"1021c-xMWf9JLWSGXgMTyAx7sa24EhYuY\"",
    "mtime": "2024-12-09T13:15:31.647Z",
    "size": 66076,
    "path": "../../.output/public/posts/ruhatisztitas-budapesten-tisztasag-es-frissesseg/index.html"
  },
  "/_ipx/_/img/footer/contact.webp": {
    "type": "image/webp",
    "etag": "\"8794-xmQ99fZ2MHML/idtVagxvOZnJmI\"",
    "mtime": "2024-12-09T13:15:27.973Z",
    "size": 34708,
    "path": "../../.output/public/_ipx/_/img/footer/contact.webp"
  },
  "/_ipx/_/img/footer/facebook.svg": {
    "type": "image/svg+xml",
    "etag": "\"31a-u4eK4v1DuWoO5P/SgKGUxM+OXTY\"",
    "mtime": "2024-12-09T13:15:28.461Z",
    "size": 794,
    "path": "../../.output/public/_ipx/_/img/footer/facebook.svg"
  },
  "/_ipx/_/img/footer/instagram.svg": {
    "type": "image/svg+xml",
    "etag": "\"72d-kJGLi1L61e5RC7Eop/P5UEIQgiQ\"",
    "mtime": "2024-12-09T13:15:28.366Z",
    "size": 1837,
    "path": "../../.output/public/_ipx/_/img/footer/instagram.svg"
  },
  "/_ipx/_/img/footer/mail.svg": {
    "type": "image/svg+xml",
    "etag": "\"2f2-Kv22crsj/zxXlGAV6cyeR9kdWw4\"",
    "mtime": "2024-12-09T13:15:28.461Z",
    "size": 754,
    "path": "../../.output/public/_ipx/_/img/footer/mail.svg"
  },
  "/_ipx/_/img/footer/map.svg": {
    "type": "image/svg+xml",
    "etag": "\"32a-QTbn0MKypDfnNL+yly+A849B7ZQ\"",
    "mtime": "2024-12-09T13:15:28.461Z",
    "size": 810,
    "path": "../../.output/public/_ipx/_/img/footer/map.svg"
  },
  "/_ipx/_/img/footer/phone.svg": {
    "type": "image/svg+xml",
    "etag": "\"88f-GDrfhrYobTQ9QvvM2G2OT1doBws\"",
    "mtime": "2024-12-09T13:15:28.461Z",
    "size": 2191,
    "path": "../../.output/public/_ipx/_/img/footer/phone.svg"
  },
  "/_ipx/_/img/prices/action.svg": {
    "type": "image/svg+xml",
    "etag": "\"bd6-CP7fPrwyWN8t6mHcyJEY4agTftM\"",
    "mtime": "2024-12-09T13:15:28.577Z",
    "size": 3030,
    "path": "../../.output/public/_ipx/_/img/prices/action.svg"
  },
  "/_ipx/_/img/prices/prices.svg": {
    "type": "image/svg+xml",
    "etag": "\"2851-8M4Rm+iiLBgrM7LVCkjX4WOuIVA\"",
    "mtime": "2024-12-09T13:15:28.600Z",
    "size": 10321,
    "path": "../../.output/public/_ipx/_/img/prices/prices.svg"
  },
  "/_ipx/_/img/prices/prices2.svg": {
    "type": "image/svg+xml",
    "etag": "\"256f-VpmJvofMwMmzx/1x4iZEhZ/hE3o\"",
    "mtime": "2024-12-09T13:15:28.600Z",
    "size": 9583,
    "path": "../../.output/public/_ipx/_/img/prices/prices2.svg"
  },
  "/_ipx/_/img/prices/prices3.svg": {
    "type": "image/svg+xml",
    "etag": "\"3cdb-zmgYnfZhzOB0mfVwT4SG1dYcpm4\"",
    "mtime": "2024-12-09T13:15:28.600Z",
    "size": 15579,
    "path": "../../.output/public/_ipx/_/img/prices/prices3.svg"
  },
  "/_ipx/_/img/prices/prices4.svg": {
    "type": "image/svg+xml",
    "etag": "\"226c-COzP6BqLvC5D21gsiWr18n+GKUk\"",
    "mtime": "2024-12-09T13:15:28.600Z",
    "size": 8812,
    "path": "../../.output/public/_ipx/_/img/prices/prices4.svg"
  },
  "/_ipx/_/img/prices/prices5.svg": {
    "type": "image/svg+xml",
    "etag": "\"4fd-QZcvI6uPBbNY4lT45Rb08Bi+sxo\"",
    "mtime": "2024-12-09T13:15:28.600Z",
    "size": 1277,
    "path": "../../.output/public/_ipx/_/img/prices/prices5.svg"
  },
  "/_ipx/_/img/prices/prices6.svg": {
    "type": "image/svg+xml",
    "etag": "\"199b-DgmdXVAUism/fa9hYQDEWe3fPNU\"",
    "mtime": "2024-12-09T13:15:28.656Z",
    "size": 6555,
    "path": "../../.output/public/_ipx/_/img/prices/prices6.svg"
  },
  "/_ipx/_/img/slider/slider-elem.svg": {
    "type": "image/svg+xml",
    "etag": "\"bc4-sKVoN+mzM51iDEXwShuzchg8+UU\"",
    "mtime": "2024-12-09T13:15:27.974Z",
    "size": 3012,
    "path": "../../.output/public/_ipx/_/img/slider/slider-elem.svg"
  },
  "/_ipx/_/img/slider/slider-elem2.svg": {
    "type": "image/svg+xml",
    "etag": "\"427a-nJOwct+FrN8ztQcNIE/U3r4VXtA\"",
    "mtime": "2024-12-09T13:15:28.491Z",
    "size": 17018,
    "path": "../../.output/public/_ipx/_/img/slider/slider-elem2.svg"
  },
  "/_ipx/_/img/slider/slider.webp": {
    "type": "image/webp",
    "etag": "\"a20a-wihyip3CAIOFir8lyvmPc9tcUNQ\"",
    "mtime": "2024-12-09T13:15:28.599Z",
    "size": 41482,
    "path": "../../.output/public/_ipx/_/img/slider/slider.webp"
  },
  "/_ipx/_/img/header/logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"1e63-wiumMY3OxieHJqpjPuoS+OjYghw\"",
    "mtime": "2024-12-09T13:15:27.974Z",
    "size": 7779,
    "path": "../../.output/public/_ipx/_/img/header/logo.svg"
  },
  "/_ipx/_/img/page-information/page-information.webp": {
    "type": "image/webp",
    "etag": "\"13a1a-Y9LZz4Li+W1iPBmwVQ3p6+sfm4Q\"",
    "mtime": "2024-12-09T13:15:28.738Z",
    "size": 80410,
    "path": "../../.output/public/_ipx/_/img/page-information/page-information.webp"
  },
  "/_ipx/_/img/page-information/page-information2.webp": {
    "type": "image/webp",
    "etag": "\"bb0e-i69gjUnvKAaMcqqaK0DwvsL0olk\"",
    "mtime": "2024-12-09T13:15:28.971Z",
    "size": 47886,
    "path": "../../.output/public/_ipx/_/img/page-information/page-information2.webp"
  },
  "/_ipx/_/img/services/map.svg": {
    "type": "image/svg+xml",
    "etag": "\"668-ZU1c2poXN71h5TdkDOsTbks3Jpw\"",
    "mtime": "2024-12-09T13:15:27.970Z",
    "size": 1640,
    "path": "../../.output/public/_ipx/_/img/services/map.svg"
  },
  "/_ipx/_/img/services/phone.svg": {
    "type": "image/svg+xml",
    "etag": "\"51e-eEY0a1ZgdVYGfX0QAoK5HEFUJbA\"",
    "mtime": "2024-12-09T13:15:28.461Z",
    "size": 1310,
    "path": "../../.output/public/_ipx/_/img/services/phone.svg"
  },
  "/_ipx/_/img/services/services.webp": {
    "type": "image/webp",
    "etag": "\"15e6e-qW/XSj10VsI6OVG2QP5J7tAjG98\"",
    "mtime": "2024-12-09T13:15:28.600Z",
    "size": 89710,
    "path": "../../.output/public/_ipx/_/img/services/services.webp"
  },
  "/_ipx/_/img/services/services2.webp": {
    "type": "image/webp",
    "etag": "\"3acd0-cdzRZmQPf2I4VswjaJYrHX5ekrw\"",
    "mtime": "2024-12-09T13:15:28.600Z",
    "size": 240848,
    "path": "../../.output/public/_ipx/_/img/services/services2.webp"
  },
  "/_ipx/_/img/services/services3.webp": {
    "type": "image/webp",
    "etag": "\"a6f0-wrZFn9/+nfLlQphtliR3x+YtR6Y\"",
    "mtime": "2024-12-09T13:15:28.600Z",
    "size": 42736,
    "path": "../../.output/public/_ipx/_/img/services/services3.webp"
  },
  "/_ipx/_/img/services/services4.webp": {
    "type": "image/webp",
    "etag": "\"14210-iySuyK2RvbP3NB9ujXxuumT94Gs\"",
    "mtime": "2024-12-09T13:15:28.600Z",
    "size": 82448,
    "path": "../../.output/public/_ipx/_/img/services/services4.webp"
  },
  "/_ipx/_/img/services/services5.webp": {
    "type": "image/webp",
    "etag": "\"17622-CJFCbv6YJvv/UuT91+/mh27pXg0\"",
    "mtime": "2024-12-09T13:15:28.600Z",
    "size": 95778,
    "path": "../../.output/public/_ipx/_/img/services/services5.webp"
  },
  "/_ipx/_/img/services/services6.webp": {
    "type": "image/webp",
    "etag": "\"18554-c8GplmAAKACXijEPXoIxFMHcjBU\"",
    "mtime": "2024-12-09T13:15:28.610Z",
    "size": 99668,
    "path": "../../.output/public/_ipx/_/img/services/services6.webp"
  },
  "/_ipx/_/img/services/services7.webp": {
    "type": "image/webp",
    "etag": "\"e998-9ZB0XI2K/eU3HT77nlzY/DNccps\"",
    "mtime": "2024-12-09T13:15:28.600Z",
    "size": 59800,
    "path": "../../.output/public/_ipx/_/img/services/services7.webp"
  },
  "/_ipx/_/img/services/services8.webp": {
    "type": "image/webp",
    "etag": "\"17b88-l56xRrkxnjT+jTPI8RGcG8rMjYM\"",
    "mtime": "2024-12-09T13:15:28.749Z",
    "size": 97160,
    "path": "../../.output/public/_ipx/_/img/services/services8.webp"
  },
  "/_ipx/_/img/services/services9.webp": {
    "type": "image/webp",
    "etag": "\"cac0-OJNrATXKd3K+5D9nZ6iwxveJ9dI\"",
    "mtime": "2024-12-09T13:15:28.729Z",
    "size": 51904,
    "path": "../../.output/public/_ipx/_/img/services/services9.webp"
  },
  "/_ipx/_/img/services/time.svg": {
    "type": "image/svg+xml",
    "etag": "\"474-MNmi1NiqXaa9HPFWtzArIN5SURw\"",
    "mtime": "2024-12-09T13:15:28.461Z",
    "size": 1140,
    "path": "../../.output/public/_ipx/_/img/services/time.svg"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve$1(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1},"/_nuxt/":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _jFBKug = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _iUk6av = defineEventHandler(async (e) => {
  if (e.context.siteConfig)
    return;
  const runtimeConfig = useRuntimeConfig(e);
  const config = runtimeConfig["nuxt-site-config"];
  const nitroApp = useNitroApp();
  const siteConfig = createSiteConfigStack({
    debug: config.debug
  });
  const appConfig = useAppConfig(e);
  const nitroOrigin = useNitroOrigin(e);
  e.context.siteConfigNitroOrigin = nitroOrigin;
  siteConfig.push({
    _context: "runtimeEnv",
    _priority: 0,
    ...runtimeConfig.site || {},
    ...runtimeConfig.public.site || {},
    // @ts-expect-error untyped
    ...envSiteConfig(globalThis._importMeta_.env)
    // just in-case, shouldn't be needed
  });
  const buildStack = config.stack || [];
  buildStack.forEach((c) => siteConfig.push(c));
  if (appConfig.site) {
    siteConfig.push({
      _priority: -2,
      _context: "app:config",
      ...appConfig.site
    });
  }
  if (e.context._nitro.routeRules.site) {
    siteConfig.push({
      _context: "route-rules",
      ...e.context._nitro.routeRules.site
    });
  }
  const ctx = { siteConfig, event: e };
  await nitroApp.hooks.callHook("site-config:init", ctx);
  e.context.siteConfig = ctx.siteConfig;
});

const logger = createConsola({
  defaults: {
    tag: "@nuxt/sitemap"
  }
});
const merger = createDefu((obj, key, value) => {
  if (Array.isArray(obj[key]) && Array.isArray(value))
    obj[key] = Array.from(/* @__PURE__ */ new Set([...obj[key], ...value]));
  return obj[key];
});
function mergeOnKey(arr, key) {
  const res = {};
  arr.forEach((item) => {
    const k = item[key];
    res[k] = merger(item, res[k] || {});
  });
  return Object.values(res);
}
function splitForLocales(path, locales) {
  const prefix = withLeadingSlash(path).split("/")[1];
  if (locales.includes(prefix))
    return [prefix, path.replace(`/${prefix}`, "")];
  return [null, path];
}
const StringifiedRegExpPattern = /\/(.*?)\/([gimsuy]*)$/;
function normalizeRuntimeFilters(input) {
  return (input || []).map((rule) => {
    if (rule instanceof RegExp || typeof rule === "string")
      return rule;
    const match = rule.regex.match(StringifiedRegExpPattern);
    if (match)
      return new RegExp(match[1], match[2]);
    return false;
  }).filter(Boolean);
}
function createPathFilter(options = {}) {
  const urlFilter = createFilter(options);
  return (loc) => {
    let path = loc;
    try {
      path = parseURL(loc).pathname;
    } catch {
      return false;
    }
    return urlFilter(path);
  };
}
function createFilter(options = {}) {
  const include = options.include || [];
  const exclude = options.exclude || [];
  if (include.length === 0 && exclude.length === 0)
    return () => true;
  return function(path) {
    for (const v of [{ rules: exclude, result: false }, { rules: include, result: true }]) {
      const regexRules = v.rules.filter((r) => r instanceof RegExp);
      if (regexRules.some((r) => r.test(path)))
        return v.result;
      const stringRules = v.rules.filter((r) => typeof r === "string");
      if (stringRules.length > 0) {
        const routes = {};
        for (const r of stringRules) {
          if (r === path)
            return v.result;
          routes[r] = true;
        }
        const routeRulesMatcher = toRouteMatcher(createRouter({ routes, strictTrailingSlash: false }));
        if (routeRulesMatcher.matchAll(path).length > 0)
          return Boolean(v.result);
      }
    }
    return include.length === 0;
  };
}

function useSimpleSitemapRuntimeConfig(e) {
  const clone = JSON.parse(JSON.stringify(useRuntimeConfig(e).sitemap));
  for (const k in clone.sitemaps) {
    const sitemap = clone.sitemaps[k];
    sitemap.include = normalizeRuntimeFilters(sitemap.include);
    sitemap.exclude = normalizeRuntimeFilters(sitemap.exclude);
    clone.sitemaps[k] = sitemap;
  }
  return Object.freeze(clone);
}

const _i2Q7VM = defineEventHandler(async (e) => {
  const fixPath = createSitePathResolver(e, { absolute: false, withBase: true });
  const { sitemapName: fallbackSitemapName, cacheMaxAgeSeconds, version, xslColumns, xslTips } = useSimpleSitemapRuntimeConfig();
  setHeader(e, "Content-Type", "application/xslt+xml");
  if (cacheMaxAgeSeconds)
    setHeader(e, "Cache-Control", `public, max-age=${cacheMaxAgeSeconds}, must-revalidate`);
  else
    setHeader(e, "Cache-Control", `no-cache, no-store`);
  const { name: siteName, url: siteUrl } = useSiteConfig(e);
  const referrer = getHeader(e, "Referer") || "/";
  const referrerPath = parseURL(referrer).pathname;
  const isNotIndexButHasIndex = referrerPath !== "/sitemap.xml" && referrerPath !== "/sitemap_index.xml" && referrerPath.endsWith(".xml");
  const sitemapName = parseURL(referrer).pathname.split("/").pop()?.split("-sitemap")[0] || fallbackSitemapName;
  const title = `${siteName}${sitemapName !== "sitemap.xml" ? ` - ${sitemapName === "sitemap_index.xml" ? "index" : sitemapName}` : ""}`.replace(/&/g, "&amp;");
  const canonicalQuery = getQuery(referrer).canonical;
  const isShowingCanonical = typeof canonicalQuery !== "undefined" && canonicalQuery !== "false";
  const conditionalTips = [
    'You are looking at a <a href="https://developer.mozilla.org/en-US/docs/Web/XSLT/Transforming_XML_with_XSLT/An_Overview" style="color: #398465" target="_blank">XML stylesheet</a>. Read the <a href="https://nuxtseo.com/sitemap/guides/customising-ui" style="color: #398465" target="_blank">docs</a> to learn how to customize it. View the page source to see the raw XML.',
    `URLs missing? Check Nuxt Devtools Sitemap tab (or the <a href="${withQuery("/__sitemap__/debug.json", { sitemap: sitemapName })}" style="color: #398465" target="_blank">debug endpoint</a>).`
  ];
  if (!isShowingCanonical) {
    const canonicalPreviewUrl = withQuery(referrer, { canonical: "" });
    conditionalTips.push(`Your canonical site URL is <strong>${siteUrl}</strong>.`);
    conditionalTips.push(`You can preview your canonical sitemap by visiting <a href="${canonicalPreviewUrl}" style="color: #398465; white-space: nowrap;">${fixPath(canonicalPreviewUrl)}?canonical</a>`);
  } else {
    conditionalTips.push(`You are viewing the canonical sitemap. You can switch to using the request origin: <a href="${fixPath(referrer)}" style="color: #398465; white-space: nowrap ">${fixPath(referrer)}</a>`);
  }
  let columns = [...xslColumns];
  if (!columns.length) {
    columns = [
      { label: "URL", width: "50%" },
      { label: "Images", width: "25%", select: "count(image:image)" },
      { label: "Last Updated", width: "25%", select: "concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))" }
    ];
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xhtml="http://www.w3.org/1999/xhtml"
                xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <style type="text/css">
          body {
            font-family: Inter, Helvetica, Arial, sans-serif;
            font-size: 14px;
            color: #333;
          }

          table {
            border: none;
            border-collapse: collapse;
          }

          .bg-yellow-200 {
            background-color: #fef9c3;
          }

          .p-5 {
            padding: 1.25rem;
          }

          .rounded {
            border-radius: 4px;
            }

          .shadow {
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          }

          #sitemap tr:nth-child(odd) td {
            background-color: #f8f8f8 !important;
          }

          #sitemap tbody tr:hover td {
            background-color: #fff;
          }

          #sitemap tbody tr:hover td, #sitemap tbody tr:hover td a {
            color: #000;
          }

          .expl a {
            color: #398465
            font-weight: 600;
          }

          .expl a:visited {
            color: #398465
          }

          a {
            color: #000;
            text-decoration: none;
          }

          a:visited {
            color: #777;
          }

          a:hover {
            text-decoration: underline;
          }

          td {
            font-size: 12px;
          }

          .text-2xl {
            font-size: 2rem;
            font-weight: 600;
            line-height: 1.25;
          }

          th {
            text-align: left;
            padding-right: 30px;
            font-size: 12px;
          }

          thead th {
            border-bottom: 1px solid #000;
          }
          .fixed { position: fixed; }
          .right-2 { right: 2rem; }
          .top-2 { top: 2rem; }
          .w-30 { width: 30rem; }
          p { margin: 0; }
          li { padding-bottom: 0.5rem; line-height: 1.5; }
          h1 { margin: 0; }
          .mb-5 { margin-bottom: 1.25rem; }
          .mb-3 { margin-bottom: 0.75rem; }
        </style>
      </head>
      <body>
        <div style="grid-template-columns: 1fr 1fr; display: grid; margin: 3rem;">
            <div>
             <div id="content">
          <h1 class="text-2xl mb-3">XML Sitemap</h1>
          <h2>${title}</h2>
          ${isNotIndexButHasIndex ? `<p style="font-size: 12px; margin-bottom: 1rem;"><a href="${fixPath("/sitemap_index.xml")}">${fixPath("/sitemap_index.xml")}</a></p>` : ""}
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &gt; 0">
            <p class="expl" style="margin-bottom: 1rem;">
              This XML Sitemap Index file contains
              <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/> sitemaps.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  <th width="75%">Sitemap</th>
                  <th width="25%">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                  <xsl:variable name="sitemapURL">
                    <xsl:value-of select="sitemap:loc"/>
                  </xsl:variable>
                  <tr>
                    <td>
                      <a href="{$sitemapURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <xsl:value-of
                        select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &lt; 1">
            <p class="expl" style="margin-bottom: 1rem;">
              This XML Sitemap contains
              <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  ${columns.map((c) => `<th width="${c.width}">${c.label}</th>`).join("\n")}
                </tr>
              </thead>
              <tbody>
                <xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/>
                <xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <xsl:variable name="itemURL">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$itemURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    ${columns.filter((c) => c.label !== "URL").map((c) => `<td>
<xsl:value-of select="${c.select}"/>
</td>`).join("\n")}
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
        </div>
        </div>
                    ${""}
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
`;
});

function withoutQuery(path) {
  return path.split("?")[0];
}
function createNitroRouteRuleMatcher() {
  const { nitro, app } = useRuntimeConfig();
  const _routeRulesMatcher = toRouteMatcher(
    createRouter({
      routes: Object.fromEntries(
        Object.entries(nitro?.routeRules || {}).map(([path, rules]) => [path === "/" ? path : withoutTrailingSlash(path), rules])
      )
    })
  );
  return (pathOrUrl) => {
    const path = pathOrUrl[0] === "/" ? pathOrUrl : parseURL(pathOrUrl, app.baseURL).pathname;
    const pathWithoutQuery = withoutQuery(path);
    return defu$1({}, ..._routeRulesMatcher.matchAll(
      // radix3 does not support trailing slashes
      withoutBase(pathWithoutQuery === "/" ? pathWithoutQuery : withoutTrailingSlash(pathWithoutQuery), app.baseURL)
    ).reverse());
  };
}

function resolve(s, resolvers) {
  if (typeof s === "undefined" || !resolvers)
    return s;
  s = typeof s === "string" ? s : s.toString();
  if (hasProtocol(s, { acceptRelative: true, strict: false }))
    return resolvers.fixSlashes(s);
  return resolvers.canonicalUrlResolver(s);
}
function removeTrailingSlash(s) {
  return s.replace(/\/(\?|#|$)/, "$1");
}
function preNormalizeEntry(_e, resolvers) {
  const e = typeof _e === "string" ? { loc: _e } : { ..._e };
  if (e.url && !e.loc) {
    e.loc = e.url;
    delete e.url;
  }
  if (typeof e.loc !== "string") {
    e.loc = "";
  }
  e.loc = removeTrailingSlash(e.loc);
  e._abs = hasProtocol(e.loc, { acceptRelative: false, strict: false });
  try {
    e._path = e._abs ? parseURL(e.loc) : parsePath(e.loc);
  } catch (e2) {
    e2._path = null;
  }
  if (e._path) {
    const query = parseQuery(e._path.search);
    const qs = stringifyQuery(query);
    e._relativeLoc = `${encodePath(e._path?.pathname)}${qs.length ? `?${qs}` : ""}`;
    if (e._path.host) {
      e.loc = stringifyParsedURL(e._path);
    } else {
      e.loc = e._relativeLoc;
    }
  } else {
    e.loc = encodeURI(e.loc);
  }
  if (e.loc === "")
    e.loc = `/`;
  e.loc = resolve(e.loc, resolvers);
  e._key = `${e._sitemap || ""}${withoutTrailingSlash(e.loc)}`;
  return e;
}
function normaliseEntry(_e, defaults, resolvers) {
  const e = defu$1(_e, defaults);
  if (e.lastmod) {
    const date = normaliseDate(e.lastmod);
    if (date)
      e.lastmod = date;
    else
      delete e.lastmod;
  }
  if (!e.lastmod)
    delete e.lastmod;
  e.loc = resolve(e.loc, resolvers);
  if (e.alternatives) {
    e.alternatives = mergeOnKey(e.alternatives.map((e2) => {
      const a = { ...e2 };
      if (typeof a.href === "string")
        a.href = resolve(a.href, resolvers);
      else if (typeof a.href === "object" && a.href)
        a.href = resolve(a.href.href, resolvers);
      return a;
    }), "hreflang");
  }
  if (e.images) {
    e.images = mergeOnKey(e.images.map((i) => {
      i = { ...i };
      i.loc = resolve(i.loc, resolvers);
      return i;
    }), "loc");
  }
  if (e.videos) {
    e.videos = e.videos.map((v) => {
      v = { ...v };
      if (v.content_loc)
        v.content_loc = resolve(v.content_loc, resolvers);
      return v;
    });
  }
  return e;
}
const IS_VALID_W3C_DATE = [
  /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,
  /^\d{4}-[01]\d-[0-3]\d$/,
  /^\d{4}-[01]\d$/,
  /^\d{4}$/
];
function isValidW3CDate(d) {
  return IS_VALID_W3C_DATE.some((r) => r.test(d));
}
function normaliseDate(d) {
  if (typeof d === "string") {
    if (d.includes("T")) {
      const t = d.split("T")[1];
      if (!t.includes("+") && !t.includes("-") && !t.includes("Z")) {
        d += "Z";
      }
    }
    if (!isValidW3CDate(d))
      return false;
    d = new Date(d);
    d.setMilliseconds(0);
    if (Number.isNaN(d.getTime()))
      return false;
  }
  const z = (n) => `0${n}`.slice(-2);
  const date = `${d.getUTCFullYear()}-${z(d.getUTCMonth() + 1)}-${z(d.getUTCDate())}`;
  if (d.getUTCHours() > 0 || d.getUTCMinutes() > 0 || d.getUTCSeconds() > 0) {
    return `${date}T${z(d.getUTCHours())}:${z(d.getUTCMinutes())}:${z(d.getUTCSeconds())}Z`;
  }
  return date;
}

async function fetchDataSource(input, event) {
  const context = typeof input.context === "string" ? { name: input.context } : input.context || { name: "fetch" };
  context.tips = context.tips || [];
  const url = typeof input.fetch === "string" ? input.fetch : input.fetch[0];
  const options = typeof input.fetch === "string" ? {} : input.fetch[1];
  const start = Date.now();
  const timeout = options.timeout || 5e3;
  const timeoutController = new AbortController();
  const abortRequestTimeout = setTimeout(() => timeoutController.abort(), timeout);
  let isHtmlResponse = false;
  try {
    const fetchContainer = url.startsWith("/") && event ? event : globalThis;
    const urls = await fetchContainer.$fetch(url, {
      ...options,
      responseType: "json",
      signal: timeoutController.signal,
      headers: defu$1(options?.headers, {
        Accept: "application/json"
      }, event ? { Host: getRequestHost(event, { xForwardedHost: true }) } : {}),
      // @ts-expect-error untyped
      onResponse({ response }) {
        if (typeof response._data === "string" && response._data.startsWith("<!DOCTYPE html>"))
          isHtmlResponse = true;
      }
    });
    const timeTakenMs = Date.now() - start;
    if (isHtmlResponse) {
      context.tips.push("This is usually because the URL isn't correct or is throwing an error. Please check the URL");
      return {
        ...input,
        context,
        urls: [],
        timeTakenMs,
        error: "Received HTML response instead of JSON"
      };
    }
    return {
      ...input,
      context,
      timeTakenMs,
      urls
    };
  } catch (_err) {
    const error = _err;
    if (error.message.includes("This operation was aborted"))
      context.tips.push("The request has taken too long. Make sure app sources respond within 5 seconds or adjust the timeout fetch option.");
    else
      context.tips.push(`Response returned a status of ${error.response?.status || "unknown"}.`);
    console.error("[@nuxtjs/sitemap] Failed to fetch source.", { url, error });
    return {
      ...input,
      context,
      urls: [],
      error: error.message
    };
  } finally {
    if (abortRequestTimeout) {
      clearTimeout(abortRequestTimeout);
    }
  }
}
function globalSitemapSources() {
  return import('../virtual/global-sources.mjs').then((m) => m.sources);
}
function childSitemapSources(definition) {
  return definition?._hasSourceChunk ? import('../virtual/child-sources.mjs').then((m) => m.sources[definition.sitemapName] || []) : Promise.resolve([]);
}
async function resolveSitemapSources(sources, event) {
  return (await Promise.all(
    sources.map((source) => {
      if (typeof source === "object" && "urls" in source) {
        return {
          timeTakenMs: 0,
          ...source,
          urls: source.urls
        };
      }
      if (source.fetch)
        return fetchDataSource(source, event);
      return {
        ...source,
        error: "Invalid source"
      };
    })
  )).flat();
}

function sortSitemapUrls(urls) {
  return urls.sort(
    (a, b) => {
      const aLoc = typeof a === "string" ? a : a.loc;
      const bLoc = typeof b === "string" ? b : b.loc;
      return aLoc.localeCompare(bLoc, void 0, { numeric: true });
    }
  ).sort((a, b) => {
    const aLoc = (typeof a === "string" ? a : a.loc) || "";
    const bLoc = (typeof b === "string" ? b : b.loc) || "";
    const aSegments = aLoc.split("/").length;
    const bSegments = bLoc.split("/").length;
    if (aSegments > bSegments)
      return 1;
    if (aSegments < bSegments)
      return -1;
    return 0;
  });
}

function resolveKey(k) {
  switch (k) {
    case "images":
      return "image";
    case "videos":
      return "video";
    // news & others?
    case "news":
      return "news";
    default:
      return k;
  }
}
function handleObject(key, obj) {
  return [
    `        <${key}:${key}>`,
    ...Object.entries(obj).map(([sk, sv]) => {
      if (key === "video" && Array.isArray(sv)) {
        return sv.map((v) => {
          if (typeof v === "string") {
            return [
              `            `,
              `<${key}:${sk}>`,
              escapeValueForXml(v),
              `</${key}:${sk}>`
            ].join("");
          }
          const attributes = Object.entries(v).filter(([ssk]) => ssk !== sk).map(([ssk, ssv]) => `${ssk}="${escapeValueForXml(ssv)}"`).join(" ");
          return [
            `            <${key}:${sk} ${attributes}>`,
            // value is the same sk
            v[sk],
            `</${key}:${sk}>`
          ].join("");
        }).join("\n");
      }
      if (typeof sv === "object") {
        if (key === "video") {
          const attributes = Object.entries(sv).filter(([ssk]) => ssk !== sk).map(([ssk, ssv]) => `${ssk}="${escapeValueForXml(ssv)}"`).join(" ");
          return [
            `            <${key}:${sk} ${attributes}>`,
            // value is the same sk
            sv[sk],
            `</${key}:${sk}>`
          ].join("");
        }
        return [
          `            <${key}:${sk}>`,
          ...Object.entries(sv).map(([ssk, ssv]) => `                <${key}:${ssk}>${escapeValueForXml(ssv)}</${key}:${ssk}>`),
          `            </${key}:${sk}>`
        ].join("\n");
      }
      return `            <${key}:${sk}>${escapeValueForXml(sv)}</${key}:${sk}>`;
    }),
    `        </${key}:${key}>`
  ].join("\n");
}
function handleArray(key, arr) {
  if (arr.length === 0)
    return false;
  key = resolveKey(key);
  if (key === "alternatives") {
    return arr.map((obj) => [
      `        <xhtml:link rel="alternate" ${Object.entries(obj).map(([sk, sv]) => `${sk}="${escapeValueForXml(sv)}"`).join(" ")} />`
    ].join("\n")).join("\n");
  }
  return arr.map((obj) => handleObject(key, obj)).join("\n");
}
function handleEntry(k, e) {
  return Array.isArray(e[k]) ? handleArray(k, e[k]) : typeof e[k] === "object" ? handleObject(k, e[k]) : `        <${k}>${escapeValueForXml(e[k])}</${k}>`;
}
function wrapSitemapXml(input, resolvers, options) {
  const xsl = options.xsl ? resolvers.relativeBaseUrlResolver(options.xsl) : false;
  const credits = options.credits;
  input.unshift(`<?xml version="1.0" encoding="UTF-8"?>${xsl ? `<?xml-stylesheet type="text/xsl" href="${xsl}"?>` : ""}`);
  if (credits)
    input.push(`<!-- XML Sitemap generated by @nuxtjs/sitemap v${options.version} at ${(/* @__PURE__ */ new Date()).toISOString()} -->`);
  if (options.minify)
    return input.join("").replace(/(?<!<[^>]*)\s(?![^<]*>)/g, "");
  return input.join("\n");
}
function escapeValueForXml(value) {
  if (value === true || value === false)
    return value ? "yes" : "no";
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

function resolveSitemapEntries(sitemap, sources, runtimeConfig, resolvers) {
  const {
    autoI18n,
    isI18nMapped
  } = runtimeConfig;
  const filterPath = createPathFilter({
    include: sitemap.include,
    exclude: sitemap.exclude
  });
  const _urls = sources.flatMap((e) => e.urls).map((_e) => {
    const e = preNormalizeEntry(_e, resolvers);
    if (!e.loc || !filterPath(e.loc))
      return false;
    return e;
  }).filter(Boolean);
  let validI18nUrlsForTransform = [];
  const withoutPrefixPaths = {};
  if (autoI18n && autoI18n.strategy !== "no_prefix") {
    const localeCodes = autoI18n.locales.map((l) => l.code);
    validI18nUrlsForTransform = _urls.map((_e, i) => {
      if (_e._abs)
        return false;
      const split = splitForLocales(_e._relativeLoc, localeCodes);
      let localeCode = split[0];
      const pathWithoutPrefix = split[1];
      if (!localeCode)
        localeCode = autoI18n.defaultLocale;
      const e = _e;
      e._pathWithoutPrefix = pathWithoutPrefix;
      const locale = autoI18n.locales.find((l) => l.code === localeCode);
      if (!locale)
        return false;
      e._locale = locale;
      e._index = i;
      e._key = `${e._sitemap || ""}${e._path?.pathname || "/"}${e._path.search}`;
      withoutPrefixPaths[pathWithoutPrefix] = withoutPrefixPaths[pathWithoutPrefix] || [];
      if (!withoutPrefixPaths[pathWithoutPrefix].some((e2) => e2._locale.code === locale.code))
        withoutPrefixPaths[pathWithoutPrefix].push(e);
      return e;
    }).filter(Boolean);
    for (const e of validI18nUrlsForTransform) {
      if (!e._i18nTransform && !e.alternatives?.length) {
        const alternatives = withoutPrefixPaths[e._pathWithoutPrefix].map((u) => {
          const entries = [];
          if (u._locale.code === autoI18n.defaultLocale) {
            entries.push({
              href: u.loc,
              hreflang: "x-default"
            });
          }
          entries.push({
            href: u.loc,
            hreflang: u._locale._hreflang || autoI18n.defaultLocale
          });
          return entries;
        }).flat().filter(Boolean);
        if (alternatives.length)
          e.alternatives = alternatives;
      } else if (e._i18nTransform) {
        delete e._i18nTransform;
        if (autoI18n.strategy === "no_prefix") ;
        if (autoI18n.differentDomains) {
          e.alternatives = [
            {
              // apply default locale domain
              ...autoI18n.locales.find((l) => [l.code, l.language].includes(autoI18n.defaultLocale)),
              code: "x-default"
            },
            ...autoI18n.locales.filter((l) => !!l.domain)
          ].map((locale) => {
            return {
              hreflang: locale._hreflang,
              href: joinURL(withHttps(locale.domain), e._pathWithoutPrefix)
            };
          });
        } else {
          for (const l of autoI18n.locales) {
            let loc = joinURL(`/${l.code}`, e._pathWithoutPrefix);
            if (autoI18n.differentDomains || ["prefix_and_default", "prefix_except_default"].includes(autoI18n.strategy) && l.code === autoI18n.defaultLocale)
              loc = e._pathWithoutPrefix;
            const _sitemap = isI18nMapped ? l._sitemap : void 0;
            const newEntry = preNormalizeEntry({
              _sitemap,
              ...e,
              _index: void 0,
              _key: `${_sitemap || ""}${loc || "/"}${e._path.search}`,
              _locale: l,
              loc,
              alternatives: [{ code: "x-default", _hreflang: "x-default" }, ...autoI18n.locales].map((locale) => {
                const code = locale.code === "x-default" ? autoI18n.defaultLocale : locale.code;
                const isDefault = locale.code === "x-default" || locale.code === autoI18n.defaultLocale;
                let href = "";
                if (autoI18n.strategy === "prefix") {
                  href = joinURL("/", code, e._pathWithoutPrefix);
                } else if (["prefix_and_default", "prefix_except_default"].includes(autoI18n.strategy)) {
                  if (isDefault) {
                    href = e._pathWithoutPrefix;
                  } else {
                    href = joinURL("/", code, e._pathWithoutPrefix);
                  }
                }
                if (!filterPath(href))
                  return false;
                return {
                  hreflang: locale._hreflang,
                  href
                };
              }).filter(Boolean)
            }, resolvers);
            if (e._locale.code === newEntry._locale.code) {
              _urls[e._index] = newEntry;
              e._index = void 0;
            } else {
              _urls.push(newEntry);
            }
          }
        }
      }
      if (isI18nMapped) {
        e._sitemap = e._sitemap || e._locale._sitemap;
        e._key = `${e._sitemap || ""}${e.loc || "/"}${e._path.search}`;
      }
      if (e._index)
        _urls[e._index] = e;
    }
  }
  return _urls;
}
async function buildSitemapUrls(sitemap, resolvers, runtimeConfig) {
  const {
    sitemaps,
    // enhancing
    autoI18n,
    isI18nMapped,
    isMultiSitemap,
    // sorting
    sortEntries,
    // chunking
    defaultSitemapsChunkSize
  } = runtimeConfig;
  const isChunking = typeof sitemaps.chunks !== "undefined" && !Number.isNaN(Number(sitemap.sitemapName));
  function maybeSort(urls) {
    return sortEntries ? sortSitemapUrls(urls) : urls;
  }
  function maybeSlice(urls) {
    if (isChunking && defaultSitemapsChunkSize) {
      const chunk = Number(sitemap.sitemapName);
      return urls.slice(chunk * defaultSitemapsChunkSize, (chunk + 1) * defaultSitemapsChunkSize);
    }
    return urls;
  }
  if (autoI18n?.differentDomains) {
    const domain = autoI18n.locales.find((e) => [e.language, e.code].includes(sitemap.sitemapName))?.domain;
    if (domain) {
      const _tester = resolvers.canonicalUrlResolver;
      resolvers.canonicalUrlResolver = (path) => resolveSitePath(path, {
        absolute: true,
        withBase: false,
        siteUrl: withHttps(domain),
        trailingSlash: _tester("/test/").endsWith("/"),
        base: "/"
      });
    }
  }
  const sources = sitemap.includeAppSources ? await globalSitemapSources() : [];
  sources.push(...await childSitemapSources(sitemap));
  const resolvedSources = await resolveSitemapSources(sources, resolvers.event);
  const enhancedUrls = resolveSitemapEntries(sitemap, resolvedSources, { autoI18n, isI18nMapped }, resolvers);
  const filteredUrls = enhancedUrls.filter((e) => {
    if (isMultiSitemap && e._sitemap && sitemap.sitemapName)
      return e._sitemap === sitemap.sitemapName;
    return true;
  });
  const sortedUrls = maybeSort(filteredUrls);
  return maybeSlice(sortedUrls);
}
function urlsToXml(urls, resolvers, { version, xsl, credits, minify }) {
  const urlset = urls.map((e) => {
    const keys = Object.keys(e).filter((k) => !k.startsWith("_"));
    return [
      "    <url>",
      keys.map((k) => handleEntry(k, e)).filter(Boolean).join("\n"),
      "    </url>"
    ].join("\n");
  });
  return wrapSitemapXml([
    '<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urlset.join("\n"),
    "</urlset>"
  ], resolvers, { version, xsl, credits, minify });
}

function useNitroUrlResolvers(e) {
  const canonicalQuery = getQuery$1(e).canonical;
  const isShowingCanonical = typeof canonicalQuery !== "undefined" && canonicalQuery !== "false";
  const siteConfig = useSiteConfig(e);
  return {
    event: e,
    fixSlashes: (path) => fixSlashes(siteConfig.trailingSlash, path),
    // we need these as they depend on the nitro event
    canonicalUrlResolver: createSitePathResolver(e, {
      canonical: isShowingCanonical || !false,
      absolute: true,
      withBase: true
    }),
    relativeBaseUrlResolver: createSitePathResolver(e, { absolute: false, withBase: true })
  };
}
async function createSitemap(event, definition, runtimeConfig) {
  const { sitemapName } = definition;
  const nitro = useNitroApp();
  {
    const config = useSiteConfig(event);
    if (!config.url && !nitro._sitemapWarned) {
      nitro._sitemapWarned = true;
      logger.error("Sitemap Site URL missing!");
      logger.info("To fix this please add `{ site: { url: 'site.com' } }` to your Nuxt config or a `NUXT_PUBLIC_SITE_URL=site.com` to your .env. Learn more at https://nuxtseo.com/site-config/getting-started/how-it-works");
      throw new createError({
        statusMessage: "You must provide a site URL to prerender a sitemap.",
        statusCode: 500
      });
    }
  }
  const resolvers = useNitroUrlResolvers(event);
  let sitemapUrls = await buildSitemapUrls(definition, resolvers, runtimeConfig);
  const routeRuleMatcher = createNitroRouteRuleMatcher();
  const { autoI18n } = runtimeConfig;
  sitemapUrls = sitemapUrls.map((u) => {
    const path = u._path?.pathname || u.loc;
    let routeRules = routeRuleMatcher(path);
    if (autoI18n?.locales && autoI18n?.strategy !== "no_prefix") {
      const match = splitForLocales(path, autoI18n.locales.map((l) => l.code));
      const pathWithoutPrefix = match[1];
      if (pathWithoutPrefix && pathWithoutPrefix !== path)
        routeRules = defu$1(routeRules, routeRuleMatcher(pathWithoutPrefix));
    }
    if (routeRules.sitemap === false)
      return false;
    if (typeof routeRules.index !== "undefined" && !routeRules.index || typeof routeRules.robots !== "undefined" && !routeRules.robots) {
      return false;
    }
    const hasRobotsDisabled = Object.entries(routeRules.headers || {}).some(([name, value]) => name.toLowerCase() === "x-robots-tag" && value.toLowerCase().includes("noindex"));
    if (routeRules.redirect || hasRobotsDisabled)
      return false;
    return routeRules.sitemap ? defu$1(u, routeRules.sitemap) : u;
  }).filter(Boolean);
  const resolvedCtx = {
    urls: sitemapUrls,
    sitemapName
  };
  await nitro.hooks.callHook("sitemap:resolved", resolvedCtx);
  const maybeSort = (urls2) => runtimeConfig.sortEntries ? sortSitemapUrls(urls2) : urls2;
  const normalizedPreDedupe = resolvedCtx.urls.map((e) => normaliseEntry(e, definition.defaults, resolvers));
  const urls = maybeSort(mergeOnKey(normalizedPreDedupe, "_key").map((e) => normaliseEntry(e, definition.defaults, resolvers)));
  const sitemap = urlsToXml(urls, resolvers, runtimeConfig);
  const ctx = { sitemap, sitemapName };
  await nitro.hooks.callHook("sitemap:output", ctx);
  setHeader(event, "Content-Type", "text/xml; charset=UTF-8");
  if (runtimeConfig.cacheMaxAgeSeconds)
    setHeader(event, "Cache-Control", `public, max-age=${runtimeConfig.cacheMaxAgeSeconds}, must-revalidate`);
  else
    setHeader(event, "Cache-Control", `no-cache, no-store`);
  event.context._isSitemap = true;
  return ctx.sitemap;
}

const _RUpy8x = defineEventHandler(async (e) => {
  const runtimeConfig = useSimpleSitemapRuntimeConfig();
  const { sitemaps } = runtimeConfig;
  if ("index" in sitemaps) {
    return sendRedirect(e, withBase("/sitemap_index.xml", useRuntimeConfig().app.baseURL), 301);
  }
  return createSitemap(e, Object.values(sitemaps)[0], runtimeConfig);
});

const _NqM7Rf = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx || {};
  const fsDir = opts?.fs?.dir ? (Array.isArray(opts.fs.dir) ? opts.fs.dir : [opts.fs.dir]).map((dir) => isAbsolute(dir) ? dir : fileURLToPath(new URL(dir, globalThis._importMeta_.url))) : void 0;
  const fsStorage = opts.fs?.dir ? ipxFSStorage({ ...opts.fs, dir: fsDir }) : void 0;
  const httpStorage = opts.http?.domains ? ipxHttpStorage({ ...opts.http }) : void 0;
  if (!fsStorage && !httpStorage) {
    throw new Error("IPX storage is not configured!");
  }
  const ipxOptions = {
    ...opts,
    storage: fsStorage || httpStorage,
    httpStorage
  };
  const ipx = createIPX(ipxOptions);
  const ipxHandler = createIPXH3Handler(ipx);
  return useBase(opts.baseURL, ipxHandler);
});

const _lazy_KWgRiU = () => import('../routes/api/sitemap.mjs');
const _lazy_aiiGn6 = () => import('../routes/sitemap_index.xml.mjs');
const _lazy_jaPxDI = () => import('../routes/__sitemap__/_sitemap_.xml.mjs');
const _lazy_nSRK74 = () => import('../_/renderer.mjs');

const handlers = [
  { route: '', handler: _jFBKug, lazy: false, middleware: true, method: undefined },
  { route: '/api/sitemap', handler: _lazy_KWgRiU, lazy: true, middleware: false, method: undefined },
  { route: '', handler: _iUk6av, lazy: false, middleware: true, method: undefined },
  { route: '/sitemap_index.xml', handler: _lazy_aiiGn6, lazy: true, middleware: false, method: undefined },
  { route: '/__sitemap__/**:sitemap', handler: _lazy_jaPxDI, lazy: true, middleware: false, method: undefined },
  { route: '/__sitemap__/style.xsl', handler: _i2Q7VM, lazy: false, middleware: false, method: undefined },
  { route: '/sitemap.xml', handler: _RUpy8x, lazy: false, middleware: false, method: undefined },
  { route: '/_ipx/**', handler: _NqM7Rf, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_nSRK74, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

const nitroApp = useNitroApp();
const localFetch = nitroApp.localFetch;
const closePrerenderer = () => nitroApp.hooks.callHook("close");
trapUnhandledNodeErrors();

export { resolveSitemapEntries as a, useNitroUrlResolvers as b, useNitroApp as c, defineSitemapEventHandler as d, escapeValueForXml as e, createSitemap as f, globalSitemapSources as g, defineRenderHandler as h, buildAssetsURL as i, useStorage as j, getRouteRules as k, useRuntimeConfig as l, baseURL as m, normaliseDate as n, localFetch as o, publicAssetsURL as p, closePrerenderer as q, resolveSitemapSources as r, sortSitemapUrls as s, useSimpleSitemapRuntimeConfig as u, wrapSitemapXml as w };
//# sourceMappingURL=nitro.mjs.map
