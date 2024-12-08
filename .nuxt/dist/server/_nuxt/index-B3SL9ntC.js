import { b as _sfc_main$1, a as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, withAsyncContext, withCtx, createTextVNode, createVNode, unref, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { f as fetchPosts, t as truncateContent } from "./utils-CRtLxz24.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "destr";
import "klona";
import "./asyncData-bDMPQB53.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const itemsPost = ([__temp, __restore] = withAsyncContext(() => fetchPosts()), __temp = await __temp, __restore(), __temp);
    const latestPosts = ((_a = itemsPost.value) == null ? void 0 : _a.slice(-3)) || [];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><section><div class="slider-content pr">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/slider/slider.webp",
        alt: "Vasalás Mester",
        class: "slider-content__img",
        height: "100%"
      }, null, _parent));
      _push(`<div class="slider-content__tBox pa">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/slider/slider-elem.svg",
        alt: "Vasalás Mester",
        class: "slider-content__tBox__topImg pa",
        height: "100%"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/slider/slider-elem2.svg",
        alt: "Vasalás Mester",
        class: "slider-content__tBox__nextTopImg pa",
        height: "100%"
      }, null, _parent));
      _push(`<h1 class="slider-content__tBox__h1 text-transform-uppercase text-color-w f-800"> TISZTA ILLATOS EGYENES </h1><h5 class="slider-content__tBox__h5 text-color-w f-500"> Mi így szeretjük. </h5><p class="slider-content__tBox__p text-color-w f-500"> Cégünk komplex szolgáltatást nyújt magánszemélyeknek és cégeknek egyaránt már 35 éve! Akár egy ruhadarabot is elvállalunk, vagy akár több ezret is egyszerre - igénytől függően. </p><div class="slider-content__tBox__lBox">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ajanlatkeres",
        class: "page-link text-color f-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Leadom a rendelésem `);
          } else {
            return [
              createTextVNode(" Leadom a rendelésem ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section><section><div class="services-content pr"><div class="services-content__iTextBox grid-3"><div class="services-content__iTextBox-content d-flex bg-color-w"><div class="services-content__iTextBox-content__iBox">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/services/phone.svg",
        alt: "Vasalás Mester",
        class: "services-content__iTextBox-content__iBox__img",
        height: "100%"
      }, null, _parent));
      _push(`</div><div class="services-content__iTextBox-content__tBox"><h2 class="services-content__iTextBox-content__tBox__h2 f-600 text-color"> Kérdése van? Hívjon bizalommal </h2><p class="services-content__iTextBox-content__tBox__p"><a class="services-content__iTextBox-content__tBox__link f-300 text-color" href="tel:+36307777009">06 30 7777 009</a></p></div></div><div class="services-content__iTextBox-content d-flex bg-color-w"><div class="services-content__iTextBox-content__iBox">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/services/time.svg",
        alt: "Vasalás Mester",
        class: "services-content__iTextBox-content__iBox__img",
        height: "100%"
      }, null, _parent));
      _push(`</div><div class="services-content__iTextBox-content__tBox"><h2 class="services-content__iTextBox-content__tBox__h2 f-600 text-color"> Nyitva vagyunk </h2><p class="services-content__iTextBox-content__tBox__p f-300 text-color"> H-P 08:00 - 17:00 </p></div></div><div class="services-content__iTextBox-content d-flex bg-color-w"><div class="services-content__iTextBox-content__iBox">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/services/map.svg",
        alt: "Vasalás Mester",
        class: "services-content__iTextBox-content__iBox__img",
        height: "100%"
      }, null, _parent));
      _push(`</div><div class="services-content__iTextBox-content__tBox"><h2 class="services-content__iTextBox-content__tBox__h2 f-600 text-color"> Jöjjön el személyesen </h2><p class="services-content__iTextBox-content__tBox__p"><a class="services-content__iTextBox-content__tBox__link f-300 text-color" target="_blank" href="https://www.google.com/maps/place/Budapest,+J%C3%B3zsef+Attila+u.+36,+1042/@47.5615728,19.0831989,17z/data=!3m1!4b1!4m6!3m5!1s0x4741da31219d1d95:0x9681f22116d16e6d!8m2!3d47.5615692!4d19.0857738!16s%2Fg%2F11fwhllv70?authuser=0&amp;entry=ttu">1042 Budapest, József Attila utca 36.</a></p></div></div></div><h3 class="services-content__h3 text-center text-transform-uppercase f-700"> SZOLGÁLTATÁSAINK </h3><div class="services-content__linkItextBox grid-3"><div class="services-content__linkItextBox__content pr">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "vasalas",
        class: "services-content__linkItextBox__content__tBox__link text-transform-uppercase text-color-w f-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/img/services/services.webp",
              alt: "Vasalás Mester",
              class: "services-content__linkItextBox__content__img"
            }, null, _parent2, _scopeId));
            _push2(`<div class="services-content__linkItextBox__content__tBox text-center pa"${_scopeId}> VASALÁS </div>`);
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/img/services/services.webp",
                alt: "Vasalás Mester",
                class: "services-content__linkItextBox__content__img"
              }),
              createVNode("div", { class: "services-content__linkItextBox__content__tBox text-center pa" }, " VASALÁS ")
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
              alt: "Vasalás Mester",
              class: "services-content__linkItextBox__content__img"
            }, null, _parent2, _scopeId));
            _push2(`<div class="services-content__linkItextBox__content__tBox text-center pa"${_scopeId}> MOSÁS </div>`);
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/img/services/services2.webp",
                alt: "Vasalás Mester",
                class: "services-content__linkItextBox__content__img"
              }),
              createVNode("div", { class: "services-content__linkItextBox__content__tBox text-center pa" }, " MOSÁS ")
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
              alt: "Vasalás Mester",
              class: "services-content__linkItextBox__content__img"
            }, null, _parent2, _scopeId));
            _push2(`<div class="services-content__linkItextBox__content__tBox text-center pa"${_scopeId}> TISZTÍTÁS </div>`);
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/img/services/services3.webp",
                alt: "Vasalás Mester",
                class: "services-content__linkItextBox__content__img"
              }),
              createVNode("div", { class: "services-content__linkItextBox__content__tBox text-center pa" }, " TISZTÍTÁS ")
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
              alt: "Vasalás Mester",
              class: "services-content__linkItextBox__content__img"
            }, null, _parent2, _scopeId));
            _push2(`<div class="services-content__linkItextBox__content__tBox text-center pa"${_scopeId}> VARRÁS </div>`);
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/img/services/services4.webp",
                alt: "Vasalás Mester",
                class: "services-content__linkItextBox__content__img"
              }),
              createVNode("div", { class: "services-content__linkItextBox__content__tBox text-center pa" }, " VARRÁS ")
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
              alt: "Vasalás Mester",
              class: "services-content__linkItextBox__content__img"
            }, null, _parent2, _scopeId));
            _push2(`<div class="services-content__linkItextBox__content__tBox text-center pa"${_scopeId}> JAVÍTÁS </div>`);
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/img/services/services5.webp",
                alt: "Vasalás Mester",
                class: "services-content__linkItextBox__content__img"
              }),
              createVNode("div", { class: "services-content__linkItextBox__content__tBox text-center pa" }, " JAVÍTÁS ")
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
              alt: "Vasalás Mester",
              class: "services-content__linkItextBox__content__img"
            }, null, _parent2, _scopeId));
            _push2(`<div class="services-content__linkItextBox__content__tBox text-center pa"${_scopeId}> NAGY MENNYISÉG </div>`);
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/img/services/services6.webp",
                alt: "Vasalás Mester",
                class: "services-content__linkItextBox__content__img"
              }),
              createVNode("div", { class: "services-content__linkItextBox__content__tBox text-center pa" }, " NAGY MENNYISÉG ")
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
              alt: "Vasalás Mester",
              class: "services-content__linkItextBox__content__img"
            }, null, _parent2, _scopeId));
            _push2(`<div class="services-content__linkItextBox__content__tBox text-center pa"${_scopeId}> MÉRETRE SZABÁS IGAZÍTÁS </div>`);
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/img/services/services7.webp",
                alt: "Vasalás Mester",
                class: "services-content__linkItextBox__content__img"
              }),
              createVNode("div", { class: "services-content__linkItextBox__content__tBox text-center pa" }, " MÉRETRE SZABÁS IGAZÍTÁS ")
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
              alt: "Vasalás Mester",
              class: "services-content__linkItextBox__content__img"
            }, null, _parent2, _scopeId));
            _push2(`<div class="services-content__linkItextBox__content__tBox text-center pa"${_scopeId}> KÖLCSÖNZÉS </div>`);
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/img/services/services8.webp",
                alt: "Vasalás Mester",
                class: "services-content__linkItextBox__content__img"
              }),
              createVNode("div", { class: "services-content__linkItextBox__content__tBox text-center pa" }, " KÖLCSÖNZÉS ")
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
              alt: "Vasalás Mester",
              class: "services-content__linkItextBox__content__img"
            }, null, _parent2, _scopeId));
            _push2(`<div class="services-content__linkItextBox__content__tBox text-center pa"${_scopeId}> EGYÉNI IGÉNYEK MEGVALÓSÍTÁSA </div>`);
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/img/services/services9.webp",
                alt: "Vasalás Mester",
                class: "services-content__linkItextBox__content__img"
              }),
              createVNode("div", { class: "services-content__linkItextBox__content__tBox text-center pa" }, " EGYÉNI IGÉNYEK MEGVALÓSÍTÁSA ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section><section><div class="page-information-content pr">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/page-information/page-information.webp",
        alt: "Vasalás Mester",
        class: "page-information-content__img"
      }, null, _parent));
      _push(`<div class="page-information-content__iTextBox bg-color-w pa"><h4 class="page-information-content__iTextBox__h4 text-transform-uppercase f-700"> RÓLUNK </h4><p class="page-information-content__iTextBox__p f-500"> A vasalás.net 100%-ig magyar tulajdonban álló vállalkozás, amely 2011-ben jelent meg a ruhatisztító piacon. Fő profiljába tartozik az otthonokban felgyülemlett szennyes ruházat mosása, vasalása; a különleges kezelést igénylő kabátok, öltönyök, és kosztümök tisztítása; valamint a ruhák, huzatok, textilanyagok varrása és javítása. </p><p class="page-information-content__iTextBox__p f-500"> Ha már Ön is unja a vasalást, mosást és a házimunkát; ha nincs ideje és már jó ideje tornyosul a szennyes; ha egy megbízható ruhatisztítót, ruhaklinikát keres, akkor nézze meg a vasalás.net ajánlatát! </p><div class="page-information-content__iTextBox__link-box">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ajanlatkeres",
        class: "page-link page-link--format text-color f-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Leadom a rendelésem `);
          } else {
            return [
              createTextVNode(" Leadom a rendelésem ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section><section><div class="prices-content"><h3 class="prices-content__h3 prices-content__h3--mt0 text-center text-transform-uppercase f-700"> ÁRAINK </h3><div class="prices-content__iTextBox grid-6"><div class="prices-content__iTextBox__div bg-color-w pr">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/prices/action.svg",
        alt: "Vasalás Mester",
        class: "prices-content__iTextBox__div__actionImg pa"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/prices/prices.svg",
        alt: "Vasalás Mester",
        class: "prices-content__iTextBox__div__img"
      }, null, _parent));
      _push(`<h6 class="prices-content__iTextBox__div__h6 text-transform-uppercase f-700"> VEGYES RUHA VASALÁS </h6><div class="prices-content__iTextBox__div__prices-box prices-content__iTextBox__div__prices-box--actionBG pa"><h3 class="prices-content__iTextBox__div__prices-box__h3 text-center text-color-w"> 1990 Ft/kg </h3></div></div><div class="prices-content__iTextBox__div bg-color-w pr">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/prices/prices2.svg",
        alt: "Vasalás Mester",
        class: "prices-content__iTextBox__div__img"
      }, null, _parent));
      _push(`<h6 class="prices-content__iTextBox__div__h6 text-transform-uppercase f-700"> ING-BLÚZ VASALÁS </h6><div class="prices-content__iTextBox__div__prices-box pa"><h3 class="prices-content__iTextBox__div__prices-box__h3 text-center text-color-w"> 990 Ft/db </h3></div></div><div class="prices-content__iTextBox__div bg-color-w pr">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/prices/prices3.svg",
        alt: "Vasalás Mester",
        class: "prices-content__iTextBox__div__img"
      }, null, _parent));
      _push(`<h6 class="prices-content__iTextBox__div__h6 text-transform-uppercase f-700"> MOSÁS-VASALÁS </h6><div class="prices-content__iTextBox__div__prices-box pa"><h3 class="prices-content__iTextBox__div__prices-box__h3 text-center text-color-w"> 2450 Ft/kg </h3></div></div><div class="prices-content__iTextBox__div bg-color-w pr">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/prices/action.svg",
        alt: "Vasalás Mester",
        class: "prices-content__iTextBox__div__actionImg pa"
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/prices/prices4.svg",
        alt: "Vasalás Mester",
        class: "prices-content__iTextBox__div__img"
      }, null, _parent));
      _push(`<h6 class="prices-content__iTextBox__div__h6 text-transform-uppercase f-700"> MOSÁS </h6><div class="prices-content__iTextBox__div__prices-box prices-content__iTextBox__div__prices-box--actionBG pa"><h3 class="prices-content__iTextBox__div__prices-box__h3 text-center text-color-w"> 1490 Ft/kg </h3></div></div><div class="prices-content__iTextBox__div bg-color-w pr">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/prices/prices5.svg",
        alt: "Vasalás Mester",
        class: "prices-content__iTextBox__div__img"
      }, null, _parent));
      _push(`<h6 class="prices-content__iTextBox__div__h6 text-transform-uppercase f-700"> CIPZÁRCSERE </h6><div class="prices-content__iTextBox__div__prices-box pa"><h3 class="prices-content__iTextBox__div__prices-box__h3 text-center text-color-w"> 2000 Ft-tól </h3></div></div><div class="prices-content__iTextBox__div bg-color-w pr">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/prices/prices6.svg",
        alt: "Vasalás Mester",
        class: "prices-content__iTextBox__div__img"
      }, null, _parent));
      _push(`<h6 class="prices-content__iTextBox__div__h6 text-transform-uppercase f-700"> LAKÁSTEXTIL VEGYTISZTÍTÁS </h6><div class="prices-content__iTextBox__div__prices-box pa"><h3 class="prices-content__iTextBox__div__prices-box__h3 text-center text-color-w"> 1400 Ft-tól </h3></div></div></div><div class="blog-slug-content__psychologicalBox text-center"><p class="blog-slug-content__psychologicalBox__p"><i class="blog-slug-content__psychologicalBox__i f-500">Már csak egy lépés választ el a tökéletes tisztaságtól és frissességtől! <br> Nyomd meg az alábbi gombot az igenhez!</i></p></div><div class="blog-slug-content__linkBox text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ajanlatkeres",
        class: "blog-slug-content__linkBox__link text-color-w f-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` IGEN, Nekem is erre van szükségem! `);
          } else {
            return [
              createTextVNode(" IGEN, Nekem is erre van szükségem! ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section><div class="page-information-content page-information-content--format page-information-content--bg t-end pr">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/page-information/page-information2.webp",
        alt: "Vasalás Mester",
        class: "page-information-content__img"
      }, null, _parent));
      _push(`<div class="page-information-content__iTextBox page-information-content__iTextBox--format bg-color-w pa"><h4 class="page-information-content__iTextBox__h4 text-transform-uppercase f-700"> HÁZTÓL HÁZIG SZÁLLÍTÁS </h4><p class="page-information-content__iTextBox__p f-500"> Cégünk büszkén kínálja vevőinek a folyamatos, 0-24 órás online megrendelési lehetőséget, ami lehetővé teszi, hogy bármikor, bárhol leadhassák rendeléseiket. Elkötelezettek vagyunk amellett, hogy termékeinket gyorsan és hatékonyan szállítsuk háztól házig, biztosítva ezzel, hogy mindenki számára kényelmes és zökkenőmentes legyen a vásárlási élmény. </p><p class="page-information-content__iTextBox__p f-500"> A házhozszállításunk rugalmas és megbízható, így ügyfeleink mindig időben megkapják a kívánt termékeket, mindezt anélkül, hogy otthonuk kényelmét elhagynák. </p><div class="page-information-content__iTextBox__link-box">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ajanlatkeres",
        class: "page-link page-link--format text-color f-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Leadom a rendelésem `);
          } else {
            return [
              createTextVNode(" Leadom a rendelésem ")
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
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtImg, {
                height: "100%",
                loading: "lazy",
                class: "page-information-content__blog-content__gBox__iTextBox__img",
                src: `${_ctx.$config.public.apiBaseUrl}/storage/${post.image}`,
                alt: "{{ post.title }}"
              }, null, _parent2, _scopeId));
              _push2(`<div class="page-information-content__blog-content__gBox__iTextBox__tBox"${_scopeId}><h5 class="page-information-content__blog-content__gBox__iTextBox__tBox__h5 text-color-w"${_scopeId}>${ssrInterpolate(post.title)}</h5><p class="page-information-content__blog-content__gBox__iTextBox__tBox__p text-color-w"${_scopeId}>${unref(truncateContent)(post.body, 150) ?? ""}</p></div>`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-B3SL9ntC.js.map
