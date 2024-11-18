import { b as _sfc_main$5, a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, withAsyncContext, withCtx, createTextVNode, createVNode, unref, toDisplayString, useSSRContext } from 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file:///Applications/XAMPP/xamppfiles/htdocs/vasalasApp/node_modules/vue/server-renderer/index.mjs';
import { f as fetchPosts, t as truncateContent } from './utils-CRtLxz24.mjs';
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
import './asyncData-bDMPQB53.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const itemsPost = ([__temp, __restore] = withAsyncContext(() => fetchPosts()), __temp = await __temp, __restore(), __temp);
    const latestPosts = ((_a = itemsPost.value) == null ? void 0 : _a.slice(-3)) || [];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$5;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><section><div class="slider-content pr">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/slider/slider.webp",
        alt: "Vasal\xE1s Mester",
        class: "slider-content__img",
        height: "100%"
      }, null, _parent));
      _push(`<div class="slider-content__tBox pa">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/slider/slider-elem.svg",
        alt: "Vasal\xE1s Mester",
        class: "slider-content__tBox__topImg pa",
        height: "100%"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/slider/slider-elem2.svg",
        alt: "Vasal\xE1s Mester",
        class: "slider-content__tBox__nextTopImg pa",
        height: "100%"
      }, null, _parent));
      _push(`<h1 class="slider-content__tBox__h1 text-transform-uppercase text-color-w f-800"> TISZTA ILLATOS EGYENES </h1><h5 class="slider-content__tBox__h5 text-color-w f-500"> Mi \xEDgy szeretj\xFCk. </h5><p class="slider-content__tBox__p text-color-w f-500"> C\xE9g\xFCnk komplex szolg\xE1ltat\xE1st ny\xFAjt mag\xE1nszem\xE9lyeknek \xE9s c\xE9geknek\xA0egyar\xE1nt m\xE1r\xA035 \xE9ve! Ak\xE1r egy ruhadarabot is elv\xE1llalunk, vagy ak\xE1r t\xF6bb ezret is egyszerre - ig\xE9nyt\u0151l f\xFCgg\u0151en. </p><div class="slider-content__tBox__lBox">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ajanlatkeres",
        class: "page-link text-color f-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Leadom a rendel\xE9sem `);
          } else {
            return [
              createTextVNode(" Leadom a rendel\xE9sem ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section><section><div class="services-content pr"><div class="services-content__iTextBox grid-3"><div class="services-content__iTextBox-content d-flex bg-color-w"><div class="services-content__iTextBox-content__iBox">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/services/phone.svg",
        alt: "Vasal\xE1s Mester",
        class: "services-content__iTextBox-content__iBox__img",
        height: "100%"
      }, null, _parent));
      _push(`</div><div class="services-content__iTextBox-content__tBox"><h2 class="services-content__iTextBox-content__tBox__h2 f-600 text-color"> K\xE9rd\xE9se van? H\xEDvjon bizalommal </h2><p class="services-content__iTextBox-content__tBox__p"><a class="services-content__iTextBox-content__tBox__link f-300 text-color" href="tel:+36307777009">06 30 7777 009</a></p></div></div><div class="services-content__iTextBox-content d-flex bg-color-w"><div class="services-content__iTextBox-content__iBox">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/services/time.svg",
        alt: "Vasal\xE1s Mester",
        class: "services-content__iTextBox-content__iBox__img",
        height: "100%"
      }, null, _parent));
      _push(`</div><div class="services-content__iTextBox-content__tBox"><h2 class="services-content__iTextBox-content__tBox__h2 f-600 text-color"> Nyitva vagyunk </h2><p class="services-content__iTextBox-content__tBox__p f-300 text-color"> H-P 08:00 - 17:00 </p></div></div><div class="services-content__iTextBox-content d-flex bg-color-w"><div class="services-content__iTextBox-content__iBox">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/services/map.svg",
        alt: "Vasal\xE1s Mester",
        class: "services-content__iTextBox-content__iBox__img",
        height: "100%"
      }, null, _parent));
      _push(`</div><div class="services-content__iTextBox-content__tBox"><h2 class="services-content__iTextBox-content__tBox__h2 f-600 text-color"> J\xF6jj\xF6n el szem\xE9lyesen </h2><p class="services-content__iTextBox-content__tBox__p"><a class="services-content__iTextBox-content__tBox__link f-300 text-color" target="_blank" href="https://www.google.com/maps/place/Budapest,+J%C3%B3zsef+Attila+u.+36,+1042/@47.5615728,19.0831989,17z/data=!3m1!4b1!4m6!3m5!1s0x4741da31219d1d95:0x9681f22116d16e6d!8m2!3d47.5615692!4d19.0857738!16s%2Fg%2F11fwhllv70?authuser=0&amp;entry=ttu">1042 Budapest, J\xF3zsef Attila utca 36.</a></p></div></div></div><h3 class="services-content__h3 text-center text-transform-uppercase f-700"> SZOLG\xC1LTAT\xC1SAINK </h3><div class="services-content__linkItextBox grid-3"><div class="services-content__linkItextBox__content pr">`);
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
      _push(`</div></div></div></section><section><div class="page-information-content pr">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/page-information/page-information.webp",
        alt: "Vasal\xE1s Mester",
        class: "page-information-content__img"
      }, null, _parent));
      _push(`<div class="page-information-content__iTextBox bg-color-w pa"><h4 class="page-information-content__iTextBox__h4 text-transform-uppercase f-700"> R\xD3LUNK </h4><p class="page-information-content__iTextBox__p f-500"> A vasal\xE1s.net 100%-ig magyar tulajdonban \xE1ll\xF3 v\xE1llalkoz\xE1s, amely 2011-ben jelent meg a ruhatiszt\xEDt\xF3 piacon. F\u0151 profilj\xE1ba tartozik az otthonokban felgy\xFClemlett szennyes ruh\xE1zat mos\xE1sa, vasal\xE1sa; a k\xFCl\xF6nleges kezel\xE9st ig\xE9nyl\u0151 kab\xE1tok, \xF6lt\xF6ny\xF6k, \xE9s koszt\xFCm\xF6k tiszt\xEDt\xE1sa; valamint a ruh\xE1k, huzatok, textilanyagok varr\xE1sa \xE9s jav\xEDt\xE1sa. </p><p class="page-information-content__iTextBox__p f-500"> Ha m\xE1r \xD6n is unja a vasal\xE1st, mos\xE1st \xE9s a h\xE1zimunk\xE1t; ha nincs ideje \xE9s m\xE1r j\xF3 ideje tornyosul a szennyes; ha egy megb\xEDzhat\xF3 ruhatiszt\xEDt\xF3t, ruhaklinik\xE1t keres, akkor n\xE9zze meg a vasal\xE1s.net aj\xE1nlat\xE1t! </p><div class="page-information-content__iTextBox__link-box">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ajanlatkeres",
        class: "page-link page-link--format text-color f-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Leadom a rendel\xE9sem `);
          } else {
            return [
              createTextVNode(" Leadom a rendel\xE9sem ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section><section><div class="prices-content"><h3 class="prices-content__h3 prices-content__h3--mt0 text-center text-transform-uppercase f-700"> \xC1RAINK </h3><div class="prices-content__iTextBox grid-6"><div class="prices-content__iTextBox__div bg-color-w pr">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/prices/action.svg",
        alt: "Vasal\xE1s Mester",
        class: "prices-content__iTextBox__div__actionImg pa"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/prices/prices.svg",
        alt: "Vasal\xE1s Mester",
        class: "prices-content__iTextBox__div__img"
      }, null, _parent));
      _push(`<h6 class="prices-content__iTextBox__div__h6 text-transform-uppercase f-700"> VEGYES RUHA VASAL\xC1S </h6><div class="prices-content__iTextBox__div__prices-box prices-content__iTextBox__div__prices-box--actionBG pa"><h3 class="prices-content__iTextBox__div__prices-box__h3 text-center text-color-w"> 1990 Ft/kg </h3></div></div><div class="prices-content__iTextBox__div bg-color-w pr">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/prices/prices2.svg",
        alt: "Vasal\xE1s Mester",
        class: "prices-content__iTextBox__div__img"
      }, null, _parent));
      _push(`<h6 class="prices-content__iTextBox__div__h6 text-transform-uppercase f-700"> ING-BL\xDAZ VASAL\xC1S </h6><div class="prices-content__iTextBox__div__prices-box pa"><h3 class="prices-content__iTextBox__div__prices-box__h3 text-center text-color-w"> 990 Ft/db </h3></div></div><div class="prices-content__iTextBox__div bg-color-w pr">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/prices/prices3.svg",
        alt: "Vasal\xE1s Mester",
        class: "prices-content__iTextBox__div__img"
      }, null, _parent));
      _push(`<h6 class="prices-content__iTextBox__div__h6 text-transform-uppercase f-700"> MOS\xC1S-VASAL\xC1S </h6><div class="prices-content__iTextBox__div__prices-box pa"><h3 class="prices-content__iTextBox__div__prices-box__h3 text-center text-color-w"> 2450 Ft/kg </h3></div></div><div class="prices-content__iTextBox__div bg-color-w pr">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/prices/action.svg",
        alt: "Vasal\xE1s Mester",
        class: "prices-content__iTextBox__div__actionImg pa"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/prices/prices4.svg",
        alt: "Vasal\xE1s Mester",
        class: "prices-content__iTextBox__div__img"
      }, null, _parent));
      _push(`<h6 class="prices-content__iTextBox__div__h6 text-transform-uppercase f-700"> MOS\xC1S </h6><div class="prices-content__iTextBox__div__prices-box prices-content__iTextBox__div__prices-box--actionBG pa"><h3 class="prices-content__iTextBox__div__prices-box__h3 text-center text-color-w"> 1490 Ft/kg </h3></div></div><div class="prices-content__iTextBox__div bg-color-w pr">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/prices/prices5.svg",
        alt: "Vasal\xE1s Mester",
        class: "prices-content__iTextBox__div__img"
      }, null, _parent));
      _push(`<h6 class="prices-content__iTextBox__div__h6 text-transform-uppercase f-700"> CIPZ\xC1RCSERE </h6><div class="prices-content__iTextBox__div__prices-box pa"><h3 class="prices-content__iTextBox__div__prices-box__h3 text-center text-color-w"> 2000 Ft-t\xF3l </h3></div></div><div class="prices-content__iTextBox__div bg-color-w pr">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/prices/prices6.svg",
        alt: "Vasal\xE1s Mester",
        class: "prices-content__iTextBox__div__img"
      }, null, _parent));
      _push(`<h6 class="prices-content__iTextBox__div__h6 text-transform-uppercase f-700"> LAK\xC1STEXTIL VEGYTISZT\xCDT\xC1S </h6><div class="prices-content__iTextBox__div__prices-box pa"><h3 class="prices-content__iTextBox__div__prices-box__h3 text-center text-color-w"> 1400 Ft-t\xF3l </h3></div></div></div><div class="blog-slug-content__psychologicalBox text-center"><p class="blog-slug-content__psychologicalBox__p"><i class="blog-slug-content__psychologicalBox__i f-500">M\xE1r csak egy l\xE9p\xE9s v\xE1laszt el a t\xF6k\xE9letes tisztas\xE1gt\xF3l \xE9s frissess\xE9gt\u0151l! <br> Nyomd meg az al\xE1bbi gombot az igenhez!</i></p></div><div class="blog-slug-content__linkBox text-center">`);
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
      _push(`</div></div></section><section><div class="page-information-content page-information-content--format page-information-content--bg t-end pr">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/page-information/page-information2.webp",
        alt: "Vasal\xE1s Mester",
        class: "page-information-content__img"
      }, null, _parent));
      _push(`<div class="page-information-content__iTextBox page-information-content__iTextBox--format bg-color-w pa"><h4 class="page-information-content__iTextBox__h4 text-transform-uppercase f-700"> H\xC1ZT\xD3L H\xC1ZIG SZ\xC1LL\xCDT\xC1S </h4><p class="page-information-content__iTextBox__p f-500"> C\xE9g\xFCnk b\xFCszk\xE9n k\xEDn\xE1lja vev\u0151inek a folyamatos, 0-24 \xF3r\xE1s online megrendel\xE9si lehet\u0151s\xE9get, ami lehet\u0151v\xE9 teszi, hogy b\xE1rmikor, b\xE1rhol leadhass\xE1k rendel\xE9seiket. Elk\xF6telezettek vagyunk amellett, hogy term\xE9keinket gyorsan \xE9s hat\xE9konyan sz\xE1ll\xEDtsuk h\xE1zt\xF3l h\xE1zig, biztos\xEDtva ezzel, hogy mindenki sz\xE1m\xE1ra k\xE9nyelmes \xE9s z\xF6kken\u0151mentes legyen a v\xE1s\xE1rl\xE1si \xE9lm\xE9ny. </p><p class="page-information-content__iTextBox__p f-500"> A h\xE1zhozsz\xE1ll\xEDt\xE1sunk rugalmas \xE9s megb\xEDzhat\xF3, \xEDgy \xFCgyfeleink mindig id\u0151ben megkapj\xE1k a k\xEDv\xE1nt term\xE9keket, mindezt an\xE9lk\xFCl, hogy otthonuk k\xE9nyelm\xE9t elhagyn\xE1k. </p><div class="page-information-content__iTextBox__link-box">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ajanlatkeres",
        class: "page-link page-link--format text-color f-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Leadom a rendel\xE9sem `);
          } else {
            return [
              createTextVNode(" Leadom a rendel\xE9sem ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="page-information-content__blog-content"><h3 class="page-information-content__blog-content__h3 text-center text-transform-uppercase f-700"> BLOG </h3><div class="page-information-content__blog-content__gBox pr grid-3"><!--[-->`);
      ssrRenderList(unref(latestPosts), (post) => {
        _push(`<div class="page-information-content__blog-content__gBox__iTextBox">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "blog-box__link-box__Nuxtlink",
          to: `/posts/${post.slug}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2;
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtImg, {
                height: "100%",
                loading: "lazy",
                class: "page-information-content__blog-content__gBox__iTextBox__img",
                src: `${_ctx.$config.public.apiBaseUrl}/storage/${post.image}`,
                alt: "{{ post.title }}"
              }, null, _parent2, _scopeId));
              _push2(`<div class="page-information-content__blog-content__gBox__iTextBox__tBox"${_scopeId}><h5 class="page-information-content__blog-content__gBox__iTextBox__tBox__h5 text-color-w"${_scopeId}>${ssrInterpolate(post.title)}</h5><p class="page-information-content__blog-content__gBox__iTextBox__tBox__p text-color-w"${_scopeId}>${(_a2 = unref(truncateContent)(post.body, 150)) != null ? _a2 : ""}</p></div>`);
            } else {
              return [
                createVNode(_component_NuxtImg, {
                  height: "100%",
                  loading: "lazy",
                  class: "page-information-content__blog-content__gBox__iTextBox__img",
                  src: `${_ctx.$config.public.apiBaseUrl}/storage/${post.image}`,
                  alt: "{{ post.title }}"
                }, null, 8, ["src"]),
                createVNode("div", { class: "page-information-content__blog-content__gBox__iTextBox__tBox" }, [
                  createVNode("h5", { class: "page-information-content__blog-content__gBox__iTextBox__tBox__h5 text-color-w" }, toDisplayString(post.title), 1),
                  createVNode("p", {
                    class: "page-information-content__blog-content__gBox__iTextBox__tBox__p text-color-w",
                    innerHTML: unref(truncateContent)(post.body, 150)
                  }, null, 8, ["innerHTML"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></section><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Dcu9fWjL.mjs.map
