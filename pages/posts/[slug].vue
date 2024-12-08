<script setup lang="ts">
import { useAsyncData, useRoute, useRuntimeConfig } from '#app'

interface Post {
  id: number
  title: string
  slug: string
  body: string
  image: string
  meta_description: string
}

const config = useRuntimeConfig()

const route = useRoute()

const { data: post, error } = await useAsyncData<Post>('post', () =>
  $fetch(`${config.public.apiBaseUrl}/json-posts/${route.params.slug}`)
)

if (post?.value) {
  const baseUrl = config.public.apiBaseUrl.replace(/\/$/, '') 
  const postPath = route.path.replace(/^\//, '') 

  const metaTags = [
    { name: 'description', content: post.value.meta_description || '' },
    { property: 'og:title', content: `${post.value.title} - Vasalás Mester` },
    { property: 'og:description', content: post.value.meta_description || '' },
    { property: 'og:image', content: `${baseUrl}/storage/${post.value.image}` },
    { property: 'og:url', content: `https://vasalasmester.hu/${postPath}` }, 
  ]

//  console.log('Meta Tags:', metaTags)

  useHead({
    title: `${post.value.title} - Vasalás Mester`,
    meta: metaTags,
  })
}
</script>

<template>
  <div v-if="error">Hiba történt: {{ error.message }}</div>
  <div v-else-if="!post">Betöltés...</div>
  <div v-else>
    <NuxtImg
      class="slug-blog__img"
      :src="`${config.public.apiBaseUrl}/storage/${post.image}`"
      :alt="post.title"
    />
    <div
      class="blog-slug-content supage-content supage-content--services pr bg-color-w"
    >
      <h2 class="slug-blog__h2">{{ post.title }}</h2>
      <div v-html="post.body"></div>
      <div class="blog-slug-content__psychologicalBox text-center">
        <p class="blog-slug-content__psychologicalBox__p">
          <i class="blog-slug-content__psychologicalBox__i f-500"
            >Már csak egy lépés választ el a tökéletes tisztaságtól és
            frissességtől! <br />
            Nyomd meg az alábbi gombot az igenhez!</i
          >
        </p>
      </div>
      <div class="blog-slug-content__linkBox text-center">
        <NuxtLink
          to="/ajanlatkeres"
          class="blog-slug-content__linkBox__link text-color-w f-700"
        >
          IGEN, kérem a tisztaságot!
        </NuxtLink>
      </div>
    </div>
  </div>
  <div class="subapage-services-content pr">
    <h3 class="services-content__h3 text-center text-transform-uppercase f-700">
      SZOLGÁLTATÁSAINK
    </h3>

    <div
      class="services-content__linkItextBox services-content__linkItextBox--zIndex pr grid-3"
    >
      <div class="services-content__linkItextBox__content pr">
        <NuxtLink
          to="/vasalas"
          class="services-content__linkItextBox__content__tBox__link text-transform-uppercase text-color-w f-700"
        >
          <NuxtImg
            src="/img/services/services.webp"
            alt="Vasalás Mester"
            class="services-content__linkItextBox__content__img"
          />
          <div
            class="services-content__linkItextBox__content__tBox text-center pa"
          >
            VASALÁS
          </div>
        </NuxtLink>
      </div>

      <div class="services-content__linkItextBox__content pr">
        <NuxtLink
          to="/mosas"
          class="services-content__linkItextBox__content__tBox__link text-transform-uppercase text-color-w f-700"
        >
          <NuxtImg
            src="/img/services/services2.webp"
            alt="Vasalás Mester"
            class="services-content__linkItextBox__content__img"
          />
          <div
            class="services-content__linkItextBox__content__tBox text-center pa"
          >
            MOSÁS
          </div>
        </NuxtLink>
      </div>

      <div class="services-content__linkItextBox__content pr">
        <NuxtLink
          to="/tisztitas"
          class="services-content__linkItextBox__content__tBox__link text-transform-uppercase text-color-w f-700"
        >
          <NuxtImg
            src="/img/services/services3.webp"
            alt="Vasalás Mester"
            class="services-content__linkItextBox__content__img"
          />
          <div
            class="services-content__linkItextBox__content__tBox text-center pa"
          >
            TISZTÍTÁS
          </div>
        </NuxtLink>
      </div>

      <div class="services-content__linkItextBox__content pr">
        <NuxtLink
          to="/varras"
          class="services-content__linkItextBox__content__tBox__link text-transform-uppercase text-color-w f-700"
        >
          <NuxtImg
            src="/img/services/services4.webp"
            alt="Vasalás Mester"
            class="services-content__linkItextBox__content__img"
          />
          <div
            class="services-content__linkItextBox__content__tBox text-center pa"
          >
            VARRÁS
          </div>
        </NuxtLink>
      </div>

      <div class="services-content__linkItextBox__content pr">
        <NuxtLink
          to="/javitas"
          class="services-content__linkItextBox__content__tBox__link text-transform-uppercase text-color-w f-700"
        >
          <NuxtImg
            src="/img/services/services5.webp"
            alt="Vasalás Mester"
            class="services-content__linkItextBox__content__img"
          />
          <div
            class="services-content__linkItextBox__content__tBox text-center pa"
          >
            JAVÍTÁS
          </div>
        </NuxtLink>
      </div>

      <div class="services-content__linkItextBox__content pr">
        <NuxtLink
          to="/nagy-mennyiseg"
          class="services-content__linkItextBox__content__tBox__link text-transform-uppercase text-color-w f-700"
        >
          <NuxtImg
            src="/img/services/services6.webp"
            alt="Vasalás Mester"
            class="services-content__linkItextBox__content__img"
          />
          <div
            class="services-content__linkItextBox__content__tBox text-center pa"
          >
            NAGY MENNYISÉG
          </div>
        </NuxtLink>
      </div>

      <div class="services-content__linkItextBox__content pr">
        <NuxtLink
          to="/meretre-szabas-igazitas"
          class="services-content__linkItextBox__content__tBox__link text-transform-uppercase text-color-w f-700"
        >
          <NuxtImg
            src="/img/services/services7.webp"
            alt="Vasalás Mester"
            class="services-content__linkItextBox__content__img"
          />
          <div
            class="services-content__linkItextBox__content__tBox text-center pa"
          >
            MÉRETRE SZABÁS IGAZÍTÁS
          </div>
        </NuxtLink>
      </div>

      <div class="services-content__linkItextBox__content pr">
        <NuxtLink
          to="/kolcsonzes"
          class="services-content__linkItextBox__content__tBox__link text-transform-uppercase text-color-w f-700"
        >
          <NuxtImg
            src="/img/services/services8.webp"
            alt="Vasalás Mester"
            class="services-content__linkItextBox__content__img"
          />
          <div
            class="services-content__linkItextBox__content__tBox text-center pa"
          >
            KÖLCSÖNZÉS
          </div>
        </NuxtLink>
      </div>

      <div class="services-content__linkItextBox__content pr">
        <NuxtLink
          to="/egyeni-igenyek"
          class="services-content__linkItextBox__content__tBox__link text-transform-uppercase text-color-w f-700"
        >
          <NuxtImg
            src="/img/services/services9.webp"
            alt="Vasalás Mester"
            class="services-content__linkItextBox__content__img"
          />
          <div
            class="services-content__linkItextBox__content__tBox text-center pa"
          >
            EGYÉNI IGÉNYEK MEGVALÓSÍTÁSA
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
