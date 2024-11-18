import { u as useHead, b as _sfc_main$5, a as __nuxt_component_0 } from './server.mjs';
import { withCtx, createVNode, useSSRContext } from 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/vue/server-renderer/index.mjs';
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

const _sfc_main = {
  __name: "szolgaltatasok",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Szolg\xE1ltat\xE1sok"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$5;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(_attrs)}><div class="subpage-imgBox">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/subpage.webp",
        alt: "Vasal\xE1s Mester",
        class: "slug-blog__img",
        loading: "lazy"
      }, null, _parent));
      _push(`</div><div class="supage-content supage-content--format supage-content--services bg-color-w pr"><h3 class="services-content__h3 services-content__h3--margin-format services-content__h3--subpage-format text-center text-transform-uppercase f-700"> SZOLG\xC1LTAT\xC1SAINK </h3><div class="services-content__linkItextBox services-content__linkItextBox--p-0 grid-3"><div class="services-content__linkItextBox__content pr">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "vasalas",
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
        to: "mosas",
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
        to: "tisztitas",
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
        to: "varras",
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
        to: "javitas",
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
        to: "nagy-mennyiseg",
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
        to: "meretre-szabas-igazitas",
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
        to: "kolcsonzes",
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
        to: "egyeni-igenyek",
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
      _push(`</div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/szolgaltatasok.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=szolgaltatasok-Cy7zRuH-.mjs.map
