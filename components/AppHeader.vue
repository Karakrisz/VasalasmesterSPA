<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const specialPaths = [
  '/galeria',
  '/rolunk',
  '/ajanlatkeres',
  '/szolgaltatasok',
  '/arlista',
  '/vasalas',
  '/mosas',
  '/tisztitas',
  '/varras',
  '/javitas',
  '/nagy-mennyiseg',
  '/meretre-szabas-igazitas',
  '/kolcsonzes',
  '/egyeni-igenyek',
  '/adatvedelmi-tajekoztato',
  '/blog',
]

const isSpecialPage = computed(
  () => specialPaths.includes(route.path) || route.path.startsWith('/posts/')
)

const links = [
  { name: 'Kezdőlap', path: '/' },
  // { name: 'Galéria', path: '/galeria' },
  { name: 'Rólunk', path: '/rolunk' },
  { name: 'Ajánlatkérés', path: '/ajanlatkeres' },
  { name: 'Szolgáltatások', path: '/szolgaltatasok' },
  // { name: 'Árlista', path: '/arlista' },
]

const isMenuOpen = ref(false)
</script>

<template>
  <header class="header pr">
    <div
      :class="[
        'header-content d-flex',
        { 'header-content-bg-special': isSpecialPage },
      ]"
    >
      <div class="nav-box header-content__nav-box d-flex">
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="hamburger"
          :class="{ open: isMenuOpen }"
        >
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </button>
        <nav :class="{ 'menu--open': isMenuOpen, menu: true }" id="menu">
          <ul id="menu__list" class="menu__list d-flex">
            <li v-for="link in links" :key="link.path" class="menu__list__li">
              <NuxtLink
                :to="link.path"
                :class="['menu__item text-color-w f-500']"
              >
                <template v-if="link.imagePath">
                  <NuxtImg
                    class="menu__list__li__img"
                    height="100%"
                    :src="link.imagePath"
                    :alt="link.name"
                  />
                </template>
                <template v-else>
                  {{ link.name }}
                </template>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="logo-box header-content__logo-box t-end">
        <NuxtLink to="/" class="header-content__logo-box__link">
          <NuxtImg
            src="/img/header/logo.svg"
            alt="Vasalás Mester"
            class="header-content__logo-box__link__img"
          />
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
