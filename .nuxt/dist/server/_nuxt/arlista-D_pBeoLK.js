import { u as useHead, b as _sfc_main$1, a as __nuxt_component_0 } from "../server.mjs";
import { withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
const _sfc_main = {
  __name: "arlista",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Árlista - Vasalás Mester",
      meta: [
        {
          name: "description",
          content: "Professzionális ingvasalási szolgáltatások Budapesten és környékén a Vasalás Mesterrel. Környezetbarát eljárások és csomagolás."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(_attrs)}><div class="subpage-imgBox">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/subpage.webp",
        alt: "Vasalás Mester",
        class: "slug-blog__img",
        loading: "lazy"
      }, null, _parent));
      _push(`</div><div class="page-information-content--subpage-about"><div class="prices-content prices-content--subpage-format"><h3 class="prices-content__h3 prices-content__h3--mt0 text-center text-transform-uppercase f-700"> ÁRAINK </h3><div class="prices-content__iTextBox grid-6"><div class="prices-content__iTextBox__div bg-color-w pr">`);
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
      _push(`<h6 class="prices-content__iTextBox__div__h6 text-transform-uppercase f-700"> LAKÁSTEXTIL VEGYTISZTÍTÁS </h6><div class="prices-content__iTextBox__div__prices-box pa"><h3 class="prices-content__iTextBox__div__prices-box__h3 text-center text-color-w"> 1400 Ft-tól </h3></div></div></div></div></div><div class="blog-slug-content__psychologicalBox text-center"><p class="blog-slug-content__psychologicalBox__p"><i class="blog-slug-content__psychologicalBox__i f-500">Kérdése van? Csak egy hívásra vagyunk, hogy mindent elintézzünk Önnek!</i></p></div><div class="blog-slug-content__linkBox text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/ajanlatkeres",
        class: "blog-slug-content__linkBox__link text-color-w f-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` IGEN, hívás most! `);
          } else {
            return [
              createTextVNode(" IGEN, hívás most! ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/arlista.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=arlista-D_pBeoLK.js.map
