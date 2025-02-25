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
          <i class="blog-slug-content__psychologicalBox__i f-500">
            Képzeld el azt a friss, tiszta érzést, amikor minden tökéletesen
            rendben van!
            <br />
            Egyetlen kattintás, és mi gondoskodunk róla helyetted!
          </i>
        </p>
      </div>
      <div class="blog-slug-content__linkBox text-center">
        <NuxtLink
          to="/ajanlatkeres"
          class="blog-slug-content__linkBox__link text-color-w f-700"
        >
          Én is időpontot foglalok
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
            src="/img/services/vasalas.webp"
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
            src="/img/services/mosas.webp"
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
            src="/img/services/tisztitas.webp"
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
          to="/ettermi-textil"
          class="services-content__linkItextBox__content__tBox__link text-transform-uppercase text-color-w f-700"
        >
          <NuxtImg
            src="/img/services/etterem.webp"
            alt="Vasalás Mester"
            class="services-content__linkItextBox__content__img"
          />
          <div
            class="services-content__linkItextBox__content__tBox text-center pa"
          >
            ÉTTERMI TEXTIL
          </div>
        </NuxtLink>
      </div>

      <div class="services-content__linkItextBox__content pr">
        <NuxtLink
          to="/lakas-textil"
          class="services-content__linkItextBox__content__tBox__link text-transform-uppercase text-color-w f-700"
        >
          <NuxtImg
            src="/img/services/lakastextil.webp"
            alt="Vasalás Mester"
            class="services-content__linkItextBox__content__img"
          />
          <div
            class="services-content__linkItextBox__content__tBox text-center pa"
          >
            LAKÁSTEXTIL
          </div>
        </NuxtLink>
      </div>

      <div class="services-content__linkItextBox__content pr">
        <NuxtLink
          to="/menyasszonyi-ruha"
          class="services-content__linkItextBox__content__tBox__link text-transform-uppercase text-color-w f-700"
        >
          <NuxtImg
            src="/img/services/menyasszony.webp"
            alt="Vasalás Mester"
            class="services-content__linkItextBox__content__img"
          />
          <div
            class="services-content__linkItextBox__content__tBox text-center pa"
          >
            MENYASSZONYI RUHA
          </div>
        </NuxtLink>
      </div>

      <div class="services-content__linkItextBox__content pr">
        <NuxtLink
          to="/szonyegtisztitas"
          class="services-content__linkItextBox__content__tBox__link text-transform-uppercase text-color-w f-700"
        >
          <NuxtImg
            src="/img/services/szonyeg.webp"
            alt="Vasalás Mester"
            class="services-content__linkItextBox__content__img"
          />
          <div
            class="services-content__linkItextBox__content__tBox text-center pa"
          >
            SZŐNYETISZTÍTÁS
          </div>
        </NuxtLink>
      </div>

      <div class="services-content__linkItextBox__content pr">
        <NuxtLink
          to="/fuggonytisztitas"
          class="services-content__linkItextBox__content__tBox__link text-transform-uppercase text-color-w f-700"
        >
          <NuxtImg
            src="/img/services/fuggony.webp"
            alt="Vasalás Mester"
            class="services-content__linkItextBox__content__img"
          />
          <div
            class="services-content__linkItextBox__content__tBox text-center pa"
          >
            FÜGGÖNYTISZTÍTÁS
          </div>
        </NuxtLink>
      </div>

      <div class="services-content__linkItextBox__content pr">
        <NuxtLink
          to="/varras"
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
            Varrás
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
