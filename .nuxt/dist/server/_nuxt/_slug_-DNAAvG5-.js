import { c as useRoute, u as useHead, d as useRuntimeConfig, b as _sfc_main$1, a as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, withAsyncContext, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { u as useAsyncData } from "./asyncData-bDMPQB53.js";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "ufo";
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
      const baseUrl = config.public.apiBaseUrl.replace(/\/$/, "");
      const postPath = route.path.replace(/^\//, "");
      const metaTags = [
        { name: "description", content: post.value.meta_description || "" },
        { property: "og:title", content: `${post.value.title} - Vasalás Mester` },
        { property: "og:description", content: post.value.meta_description || "" },
        { property: "og:image", content: `${baseUrl}/storage/${post.value.image}` },
        { property: "og:url", content: `https://vasalasmester.hu/${postPath}` }
      ];
      useHead({
        title: `${post.value.title} - Vasalás Mester`,
        meta: metaTags
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[-->`);
      if (unref(error)) {
        _push(`<div>Hiba történt: ${ssrInterpolate(unref(error).message)}</div>`);
      } else if (!unref(post)) {
        _push(`<div>Betöltés...</div>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          class: "slug-blog__img",
          src: `${unref(config).public.apiBaseUrl}/storage/${unref(post).image}`,
          alt: unref(post).title
        }, null, _parent));
        _push(`<div class="blog-slug-content supage-content supage-content--services pr bg-color-w"><h2 class="slug-blog__h2">${ssrInterpolate(unref(post).title)}</h2><div>${unref(post).body ?? ""}</div><div class="blog-slug-content__psychologicalBox text-center"><p class="blog-slug-content__psychologicalBox__p"><i class="blog-slug-content__psychologicalBox__i f-500">Már csak egy lépés választ el a tökéletes tisztaságtól és frissességtől! <br> Nyomd meg az alábbi gombot az igenhez!</i></p></div><div class="blog-slug-content__linkBox text-center">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/ajanlatkeres",
          class: "blog-slug-content__linkBox__link text-color-w f-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` IGEN, kérem a tisztaságot! `);
            } else {
              return [
                createTextVNode(" IGEN, kérem a tisztaságot! ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      }
      _push(`<div class="subapage-services-content pr"><h3 class="services-content__h3 text-center text-transform-uppercase f-700"> SZOLGÁLTATÁSAINK </h3><div class="services-content__linkItextBox services-content__linkItextBox--zIndex pr grid-3"><div class="services-content__linkItextBox__content pr">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/vasalas",
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
        to: "/mosas",
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
        to: "/tisztitas",
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
        to: "/varras",
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
        to: "/javitas",
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
        to: "/nagy-mennyiseg",
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
        to: "/meretre-szabas-igazitas",
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
        to: "/kolcsonzes",
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
        to: "/egyeni-igenyek",
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
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-DNAAvG5-.js.map
