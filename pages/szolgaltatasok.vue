<script setup>
useHead({
  title: 'Szolgáltatások',
})
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
    <div class="supage-content supage-content--format supage-content--services bg-color-w pr">
      <h3
        class="services-content__h3 services-content__h3--margin-format services-content__h3--subpage-format text-center text-transform-uppercase f-700"
      >
        SZOLGÁLTATÁSAINK
      </h3>

      <div
        class="services-content__linkItextBox services-content__linkItextBox--p-0 grid-3"
      >
        <div class="services-content__linkItextBox__content pr">
          <NuxtLink
            to="vasalas"
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
            to="mosas"
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
            to="tisztitas"
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
            to="varras"
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
            to="javitas"
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
            to="nagy-mennyiseg"
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
            to="meretre-szabas-igazitas"
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
            to="kolcsonzes"
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
            to="egyeni-igenyek"
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
  </section>
</template>
