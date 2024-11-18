import { c as useRoute, u as useHead, d as useRuntimeConfig, b as _sfc_main$5, a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, withAsyncContext, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/vue/index.mjs';
import { ssrInterpolate, ssrRenderComponent } from 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/vue/server-renderer/index.mjs';
import { u as useAsyncData } from './asyncData-bDMPQB53.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/h3/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/devalue/index.js';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/ufo/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/destr/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/hookable/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/klona/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/scule/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/defu/dist/defu.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/ohash/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/unstorage/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/pathe/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/unenv/runtime/npm/consola.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/ipx/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/unhead/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/unctx/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const route = useRoute();
    const { data: post, error } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "post",
      () => $fetch(`${config.public.apiBaseUrl}/json-posts/${route.params.slug}`)
    )), __temp = await __temp, __restore(), __temp);
    if (post == null ? void 0 : post.value) {
      useHead({
        title: `${post.value.title} - Vasal\xE1s Mester`,
        meta: [{ name: "description", content: post.value.meta_description || "" }]
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtImg = _sfc_main$5;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[-->`);
      if (unref(error)) {
        _push(`<div>Hiba t\xF6rt\xE9nt: ${ssrInterpolate(unref(error).message)}</div>`);
      } else if (!unref(post)) {
        _push(`<div>Bet\xF6lt\xE9s...</div>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          class: "slug-blog__img",
          src: `${unref(config).public.apiBaseUrl}/storage/${unref(post).image}`,
          alt: unref(post).title
        }, null, _parent));
        _push(`<div class="blog-slug-content supage-content supage-content--services pr bg-color-w"><h2 class="slug-blog__h2">${ssrInterpolate(unref(post).title)}</h2><div>${(_a = unref(post).body) != null ? _a : ""}</div><div class="blog-slug-content__psychologicalBox text-center"><p class="blog-slug-content__psychologicalBox__p"><i class="blog-slug-content__psychologicalBox__i f-500">M\xE1r csak egy l\xE9p\xE9s v\xE1laszt el a t\xF6k\xE9letes tisztas\xE1gt\xF3l \xE9s frissess\xE9gt\u0151l! <br> Nyomd meg az al\xE1bbi gombot az igenhez!</i></p></div><div class="blog-slug-content__linkBox text-center">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/ajanlatkeres",
          class: "blog-slug-content__linkBox__link text-color-w f-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` IGEN, k\xE9rem a tisztas\xE1got! `);
            } else {
              return [
                createTextVNode(" IGEN, k\xE9rem a tisztas\xE1got! ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      }
      _push(`<div class="subapage-services-content pr"><h3 class="services-content__h3 text-center text-transform-uppercase f-700"> SZOLG\xC1LTAT\xC1SAINK </h3><div class="services-content__linkItextBox services-content__linkItextBox--zIndex pr grid-3"><div class="services-content__linkItextBox__content pr">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/vasalas",
        class: "services-content__linkItextBox__content__tBox__link text-transform-uppercase text-color-w f-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/img/services/services.webp",
              alt: "Vasal\xE1s Mester",
              class: "services-content__linkItextBox__content__img"
            }, null, _parent2, _scopeId));
            _push2(`<div class="services-content__linkItextBox__content__tBox text-center pa"${_scopeId}> VASAL\xC1S </div>`);
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/img/services/services.webp",
                alt: "Vasal\xE1s Mester",
                class: "services-content__linkItextBox__content__img"
              }),
              createVNode("div", { class: "services-content__linkItextBox__content__tBox text-center pa" }, " VASAL\xC1S ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="services-content__linkItextBox__content pr">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/mosas",
        class: "services-content__linkItextBox__content__tBox__link text-transform-uppercase text-color-w f-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/img/services/services2.webp",
              alt: "Vasal\xE1s Mester",
              class: "services-content__linkItextBox__content__img"
            }, null, _parent2, _scopeId));
            _push2(`<div class="services-content__linkItextBox__content__tBox text-center pa"${_scopeId}> MOS\xC1S </div>`);
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/img/services/services2.webp",
                alt: "Vasal\xE1s Mester",
                class: "services-content__linkItextBox__content__img"
              }),
              createVNode("div", { class: "services-content__linkItextBox__content__tBox text-center pa" }, " MOS\xC1S ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="services-content__linkItextBox__content pr">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tisztitas",
        class: "services-content__linkItextBox__content__tBox__link text-transform-uppercase text-color-w f-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/img/services/services3.webp",
              alt: "Vasal\xE1s Mester",
              class: "services-content__linkItextBox__content__img"
            }, null, _parent2, _scopeId));
            _push2(`<div class="services-content__linkItextBox__content__tBox text-center pa"${_scopeId}> TISZT\xCDT\xC1S </div>`);
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/img/services/services3.webp",
                alt: "Vasal\xE1s Mester",
                class: "services-content__linkItextBox__content__img"
              }),
              createVNode("div", { class: "services-content__linkItextBox__content__tBox text-center pa" }, " TISZT\xCDT\xC1S ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="services-content__linkItextBox__content pr">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/varras",
        class: "services-content__linkItextBox__content__tBox__link text-transform-uppercase text-color-w f-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/img/services/services4.webp",
              alt: "Vasal\xE1s Mester",
              class: "services-content__linkItextBox__content__img"
            }, null, _parent2, _scopeId));
            _push2(`<div class="services-content__linkItextBox__content__tBox text-center pa"${_scopeId}> VARR\xC1S </div>`);
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/img/services/services4.webp",
                alt: "Vasal\xE1s Mester",
                class: "services-content__linkItextBox__content__img"
              }),
              createVNode("div", { class: "services-content__linkItextBox__content__tBox text-center pa" }, " VARR\xC1S ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="services-content__linkItextBox__content pr">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/javitas",
        class: "services-content__linkItextBox__content__tBox__link text-transform-uppercase text-color-w f-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/img/services/services5.webp",
              alt: "Vasal\xE1s Mester",
              class: "services-content__linkItextBox__content__img"
            }, null, _parent2, _scopeId));
            _push2(`<div class="services-content__linkItextBox__content__tBox text-center pa"${_scopeId}> JAV\xCDT\xC1S </div>`);
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/img/services/services5.webp",
                alt: "Vasal\xE1s Mester",
                class: "services-content__linkItextBox__content__img"
              }),
              createVNode("div", { class: "services-content__linkItextBox__content__tBox text-center pa" }, " JAV\xCDT\xC1S ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="services-content__linkItextBox__content pr">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/nagy-mennyiseg",
        class: "services-content__linkItextBox__content__tBox__link text-transform-uppercase text-color-w f-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/img/services/services6.webp",
              alt: "Vasal\xE1s Mester",
              class: "services-content__linkItextBox__content__img"
            }, null, _parent2, _scopeId));
            _push2(`<div class="services-content__linkItextBox__content__tBox text-center pa"${_scopeId}> NAGY MENNYIS\xC9G </div>`);
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/img/services/services6.webp",
                alt: "Vasal\xE1s Mester",
                class: "services-content__linkItextBox__content__img"
              }),
              createVNode("div", { class: "services-content__linkItextBox__content__tBox text-center pa" }, " NAGY MENNYIS\xC9G ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="services-content__linkItextBox__content pr">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/meretre-szabas-igazitas",
        class: "services-content__linkItextBox__content__tBox__link text-transform-uppercase text-color-w f-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/img/services/services7.webp",
              alt: "Vasal\xE1s Mester",
              class: "services-content__linkItextBox__content__img"
            }, null, _parent2, _scopeId));
            _push2(`<div class="services-content__linkItextBox__content__tBox text-center pa"${_scopeId}> M\xC9RETRE SZAB\xC1S IGAZ\xCDT\xC1S </div>`);
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/img/services/services7.webp",
                alt: "Vasal\xE1s Mester",
                class: "services-content__linkItextBox__content__img"
              }),
              createVNode("div", { class: "services-content__linkItextBox__content__tBox text-center pa" }, " M\xC9RETRE SZAB\xC1S IGAZ\xCDT\xC1S ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="services-content__linkItextBox__content pr">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/kolcsonzes",
        class: "services-content__linkItextBox__content__tBox__link text-transform-uppercase text-color-w f-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/img/services/services8.webp",
              alt: "Vasal\xE1s Mester",
              class: "services-content__linkItextBox__content__img"
            }, null, _parent2, _scopeId));
            _push2(`<div class="services-content__linkItextBox__content__tBox text-center pa"${_scopeId}> K\xD6LCS\xD6NZ\xC9S </div>`);
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/img/services/services8.webp",
                alt: "Vasal\xE1s Mester",
                class: "services-content__linkItextBox__content__img"
              }),
              createVNode("div", { class: "services-content__linkItextBox__content__tBox text-center pa" }, " K\xD6LCS\xD6NZ\xC9S ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="services-content__linkItextBox__content pr">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/egyeni-igenyek",
        class: "services-content__linkItextBox__content__tBox__link text-transform-uppercase text-color-w f-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/img/services/services9.webp",
              alt: "Vasal\xE1s Mester",
              class: "services-content__linkItextBox__content__img"
            }, null, _parent2, _scopeId));
            _push2(`<div class="services-content__linkItextBox__content__tBox text-center pa"${_scopeId}> EGY\xC9NI IG\xC9NYEK MEGVAL\xD3S\xCDT\xC1SA </div>`);
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/img/services/services9.webp",
                alt: "Vasal\xE1s Mester",
                class: "services-content__linkItextBox__content__img"
              }),
              createVNode("div", { class: "services-content__linkItextBox__content__tBox text-center pa" }, " EGY\xC9NI IG\xC9NYEK MEGVAL\xD3S\xCDT\xC1SA ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/posts/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-BozIf19g.mjs.map
