<script setup>
useHead({
  title: 'Függönytisztítás - Vasalás Mester',
  meta: [
    {
      name: 'description',
      content:
        'Professzionális függönytisztítás Budapesten és környékén a Vasalás Mesterrel. Kíméletes és alapos tisztítás minden típusú függönyhöz.',
    },
  ],
})
</script>

<template>
  <div class="subpage-imgBox">
    <NuxtImg
      src="/img/subpage.webp"
      alt="Vasalás Mester"
      class="slug-blog__img"
      loading="lazy"
    />
  </div>
  <div class="supage-content supage-content--services bg-color-w pr">
    <h2 class="supage-content__h2">Függönytisztítás - Vasalás Mester</h2>

    <p class="supage-content__p">
      A Vasalás Mester professzionális függönytisztítási szolgáltatást kínál
      Budapesten és környékén. A függönyök folyamatosan ki vannak téve a por és
      egyéb szennyeződések hatásainak, ezért rendszeres tisztításuk
      elengedhetetlen az otthon tisztaságának és frissességének megőrzése
      érdekében.
    </p>

    <h3 class="supage-content__h3">Alapos és kíméletes függönytisztítás</h3>

    <p class="supage-content__p">
      A különböző anyagú függönyök eltérő tisztítási eljárásokat igényelnek.
      Szakértő csapatunk modern technológiákat alkalmaz, hogy minden függöny a
      legmegfelelőbb kezelést kapja, legyen szó vékony organzáról, vastag
      sötétítőfüggönyről vagy csipkefüggönyről.
    </p>

    <h4 class="supage-content__h4">Környezetbarát tisztítás</h4>

    <p class="supage-content__p">
      Kizárólag környezetbarát tisztítószereket használunk, amelyek hatékonyan
      távolítják el a szennyeződéseket, miközben óvják a függönyök anyagát és
      színét. Technológiánk biztosítja a mélytisztítást, így megszabadítva a
      függönyt a poratkáktól és allergénektől.
    </p>

    <h5 class="supage-content__h5">
      Kényelmes szállítási és gyors szolgáltatás
    </h5>

    <p class="supage-content__p">
      Szolgáltatásunkat Budapest teljes területén és környékén kínáljuk. Házhoz
      menő függönyszállítási lehetőséget biztosítunk, így Önnek nem kell a
      függönyök szállításával bajlódnia. A tisztítást követően friss, tiszta és
      illatos állapotban szállítjuk vissza a függönyöket otthonába vagy
      irodájába.
    </p>

    <h6 class="supage-content__h6">Miért válassza a Vasalás Mestert?</h6>

    <ul class="supage-content__ul">
      <li class="supage-content__ul__li">
        <strong class="supage-content__ul__li__strong"
          >Professzionális tisztítás:</strong
        >
        Korszerű technológiával biztosítjuk a makulátlan eredményt minden típusú
        függönynél.
      </li>
      <li class="supage-content__ul__li">
        <strong class="supage-content__ul__li__strong"
          >Környezetbarát megoldások:</strong
        >
        Kíméletes, vegyszermentes tisztítás az anyag és a színek megóvása
        érdekében.
      </li>
      <li class="supage-content__ul__li">
        <strong class="supage-content__ul__li__strong"
          >Gyors és kényelmes szolgáltatás:</strong
        >
        Rugalmas időpontok, háztól házig szállítás a maximális kényelem
        érdekében.
      </li>
    </ul>

    <p class="supage-content__p">
      <strong class="supage-content__p__strong"
        >Lépjen kapcsolatba velünk</strong
      >, és tapasztalja meg a Vasalás Mester professzionális függönytisztítási
      szolgáltatását. Bízza ránk függönyeit, és garantáljuk a makulátlan
      eredményt!
    </p>

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
        IGEN, én is ezt akarom!
      </NuxtLink>
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
