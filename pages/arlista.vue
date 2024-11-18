<script setup>
useHead({
  title: 'Árlista - Vasalás Mester',
  meta: [
    {
      name: 'description',
      content:
        'Professzionális ingvasalási szolgáltatások Budapesten és környékén a Vasalás Mesterrel. Környezetbarát eljárások és csomagolás.',
    },
  ],
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
    <div class="page-information-content--subpage-about">
      <div class="prices-content prices-content--subpage-format">
        <h3
          class="prices-content__h3 prices-content__h3--mt0 text-center text-transform-uppercase f-700"
        >
          ÁRAINK
        </h3>

        <div class="prices-content__iTextBox grid-6">
          <div class="prices-content__iTextBox__div bg-color-w pr">
            <NuxtImg
              src="/img/prices/action.svg"
              alt="Vasalás Mester"
              class="prices-content__iTextBox__div__actionImg pa"
            />
            <NuxtImg
              src="/img/prices/prices.svg"
              alt="Vasalás Mester"
              class="prices-content__iTextBox__div__img"
            />
            <h6
              class="prices-content__iTextBox__div__h6 text-transform-uppercase f-700"
            >
              VEGYES RUHA VASALÁS
            </h6>
            <div
              class="prices-content__iTextBox__div__prices-box prices-content__iTextBox__div__prices-box--actionBG pa"
            >
              <h3
                class="prices-content__iTextBox__div__prices-box__h3 text-center text-color-w"
              >
                1990 Ft/kg
              </h3>
            </div>
          </div>

          <div class="prices-content__iTextBox__div bg-color-w pr">
            <NuxtImg
              src="/img/prices/prices2.svg"
              alt="Vasalás Mester"
              class="prices-content__iTextBox__div__img"
            />
            <h6
              class="prices-content__iTextBox__div__h6 text-transform-uppercase f-700"
            >
              ING-BLÚZ VASALÁS
            </h6>
            <div class="prices-content__iTextBox__div__prices-box pa">
              <h3
                class="prices-content__iTextBox__div__prices-box__h3 text-center text-color-w"
              >
                990 Ft/db
              </h3>
            </div>
          </div>

          <div class="prices-content__iTextBox__div bg-color-w pr">
            <NuxtImg
              src="/img/prices/prices3.svg"
              alt="Vasalás Mester"
              class="prices-content__iTextBox__div__img"
            />
            <h6
              class="prices-content__iTextBox__div__h6 text-transform-uppercase f-700"
            >
              MOSÁS-VASALÁS
            </h6>
            <div class="prices-content__iTextBox__div__prices-box pa">
              <h3
                class="prices-content__iTextBox__div__prices-box__h3 text-center text-color-w"
              >
                2450 Ft/kg
              </h3>
            </div>
          </div>

          <div class="prices-content__iTextBox__div bg-color-w pr">
            <NuxtImg
              src="/img/prices/action.svg"
              alt="Vasalás Mester"
              class="prices-content__iTextBox__div__actionImg pa"
            />
            <NuxtImg
              src="/img/prices/prices4.svg"
              alt="Vasalás Mester"
              class="prices-content__iTextBox__div__img"
            />
            <h6
              class="prices-content__iTextBox__div__h6 text-transform-uppercase f-700"
            >
              MOSÁS
            </h6>
            <div
              class="prices-content__iTextBox__div__prices-box prices-content__iTextBox__div__prices-box--actionBG pa"
            >
              <h3
                class="prices-content__iTextBox__div__prices-box__h3 text-center text-color-w"
              >
                1490 Ft/kg
              </h3>
            </div>
          </div>

          <div class="prices-content__iTextBox__div bg-color-w pr">
            <NuxtImg
              src="/img/prices/prices5.svg"
              alt="Vasalás Mester"
              class="prices-content__iTextBox__div__img"
            />
            <h6
              class="prices-content__iTextBox__div__h6 text-transform-uppercase f-700"
            >
              CIPZÁRCSERE
            </h6>
            <div class="prices-content__iTextBox__div__prices-box pa">
              <h3
                class="prices-content__iTextBox__div__prices-box__h3 text-center text-color-w"
              >
                2000 Ft-tól
              </h3>
            </div>
          </div>

          <div class="prices-content__iTextBox__div bg-color-w pr">
            <NuxtImg
              src="/img/prices/prices6.svg"
              alt="Vasalás Mester"
              class="prices-content__iTextBox__div__img"
            />
            <h6
              class="prices-content__iTextBox__div__h6 text-transform-uppercase f-700"
            >
              LAKÁSTEXTIL VEGYTISZTÍTÁS
            </h6>
            <div class="prices-content__iTextBox__div__prices-box pa">
              <h3
                class="prices-content__iTextBox__div__prices-box__h3 text-center text-color-w"
              >
                1400 Ft-tól
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="blog-slug-content__psychologicalBox text-center">
      <p class="blog-slug-content__psychologicalBox__p">
        <i class="blog-slug-content__psychologicalBox__i f-500"
          >Kérdése van? Csak egy hívásra vagyunk, hogy mindent elintézzünk
          Önnek!</i
        >
      </p>
    </div>
    <div class="blog-slug-content__linkBox text-center">
      <NuxtLink
        to="/ajanlatkeres"
        class="blog-slug-content__linkBox__link text-color-w f-700"
      >
        IGEN, hívás most!
      </NuxtLink>
    </div>
  </section>
</template>
