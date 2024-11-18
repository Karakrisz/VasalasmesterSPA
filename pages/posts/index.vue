<script setup lang="ts">
import { fetchPosts, truncateContent } from '~/utils/js/utils'

const itemsPost = await fetchPosts()

</script>
<template>
  <section>
    <div class="subpage-imgBox">
      <NuxtImg
        src="/img/subpage.webp"
        alt="Vasalás Mester"
        class="slug-blog__img"
        loading="lazy"
      />
    </div>
    <div class="supage-content supage-content--blog-format pr bg-color-w">
      <div class="page-information-content__blog-content">
        <h3
          class="page-information-content__blog-content__h3 text-center text-transform-uppercase f-700"
        >
          BLOG
        </h3>

        <div
          class="page-information-content__blog-content__gBox page-information-content__blog-content__gBox--hiddenPage pr grid-3"
        >
          <div
            v-for="post in itemsPost"
            :key="post.slug"
            class="page-information-content__blog-content__gBox__iTextBox"
          >
            <NuxtLink
              class="blog-box__link-box__Nuxtlink"
              :to="`/posts/${post.slug}`"
            >
              <NuxtImg
                height="100%"
                loading="lazy"
                class="page-information-content__blog-content__gBox__iTextBox__img"
                :src="`${$config.public.apiBaseUrl}/storage/${post.image}`"
                alt="{{ post.title }}"
              />
              <div
                class="page-information-content__blog-content__gBox__iTextBox__tBox"
              >
                <h5
                  class="page-information-content__blog-content__gBox__iTextBox__tBox__h5 text-color-w"
                >
                  {{ post.title }}
                </h5>
                <p
                  class="page-information-content__blog-content__gBox__iTextBox__tBox__p text-color-w"
                  v-html="truncateContent(post.body, 150)"
                ></p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
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
  </section>
</template>