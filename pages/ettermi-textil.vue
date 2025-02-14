<script setup>
useHead({
  title: 'Éttermi Textil - Vasalás Mester',
  meta: [
    {
      name: 'description',
      content:
        'Professzionális éttermi textil tisztítás Budapesten és környékén a Vasalás Mesterrel. Terítők, szalvéták és egyéb textíliák kifogástalan tisztítása és vasalása.',
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
    <h2 class="supage-content__h2">
      Éttermi Textil Tisztítás - Vasalás Mester
    </h2>

    <p class="supage-content__p">
      A Vasalás Mester professzionális éttermi textil tisztítási szolgáltatást
      kínál Budapesten és környékén. Az éttermek számára elengedhetetlen, hogy a
      terítők, szalvéták és egyéb textíliák mindig makulátlanul tiszták és
      higiénikusak legyenek. Szolgáltatásaink biztosítják a textíliák
      frissességét és hosszú élettartamát.
    </p>

    <h3 class="supage-content__h3">Tökéletes tisztaság az éttermek számára</h3>

    <p class="supage-content__p">
      Az éttermek textíliái napi szinten ki vannak téve szennyeződéseknek,
      foltoknak és zsíros lerakódásoknak. Szakértő csapatunk speciális
      tisztítási technikákkal gondoskodik arról, hogy a terítők, szalvéták és
      egyéb textíliák mindig kifogástalan állapotban kerüljenek vissza az
      asztalokra.
    </p>

    <h4 class="supage-content__h4">Környezetbarát tisztítási eljárások</h4>

    <p class="supage-content__p">
      Tisztítási folyamataink során kíméletes, de hatékony mosószereket
      alkalmazunk, amelyek nemcsak az anyagok élettartamát növelik, hanem
      környezetbarát megoldást is biztosítanak. Energiahatékony gépeinkkel
      minimalizáljuk a víz- és áramfogyasztást.
    </p>

    <h5 class="supage-content__h5">Rugalmas és gyors szolgáltatás</h5>

    <p class="supage-content__p">
      Szolgáltatásunk Budapest egész területén és környékén elérhető. Az
      éttermek számára rugalmas időpontokban biztosítunk szállítási és
      tisztítási megoldásokat, hogy mindig tiszta textíliákkal várhassák
      vendégeiket.
    </p>

    <h6 class="supage-content__h6">Miért válassza a Vasalás Mestert?</h6>

    <ul class="supage-content__ul">
      <li class="supage-content__ul__li">
        <strong class="supage-content__ul__li__strong"
          >Professzionális tisztítás:</strong
        >
        Magas minőségű tisztítási eljárásokkal garantáljuk a tökéletes
        eredményt.
      </li>
      <li class="supage-content__ul__li">
        <strong class="supage-content__ul__li__strong"
          >Környezetbarát eljárások:</strong
        >
        Kímélő, de hatékony mosási technikák, amelyek óvják a textíliákat és a
        környezetet.
      </li>
      <li class="supage-content__ul__li">
        <strong class="supage-content__ul__li__strong"
          >Gyors és megbízható kiszolgálás:</strong
        >
        Rugalmas szállítás és időpontok az éttermek igényeihez igazítva.
      </li>
    </ul>

    <p class="supage-content__p">
      <strong class="supage-content__p__strong"
        >Lépjen kapcsolatba velünk</strong
      >, és tapasztalja meg a Vasalás Mester megbízható éttermi textil
      tisztítási szolgáltatását. Bízza ránk textíliái tisztítását, és
      garantáljuk a makulátlan eredményt!
    </p>

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
