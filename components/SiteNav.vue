<!-- eslint-disable vue/html-indent -->
<!-- eslint-disable vue/html-closing-bracket-newline -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable indent -->
<!-- eslint-disable prettier/prettier -->
<template>
<header>
  <nav
    class="navbar has-shadow is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <nuxt-link class="navbar-item pt-0 pb-0" to="/">
      <!-- Large and medium device screens -->
        <img class="d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block" src="/logo-frames/latest-9ja.png" alt="Latest 9ja">
        <!-- Small device screens -->
        <div class="d-block d-sm-none d-none d-sm-block d-md-none hide-logo">
          <img src="/logo-frames/latest-9ja.png" alt="Latest 9ja">
          <site-search />
        </div>
        <!-- <site-logo v-if="$siteConfig.logo === 'logo-component'" />
        <img
          v-else
          :src="$siteConfig.logo"
          :alt="$siteConfig.siteName"
          class="logo"
        /> -->
      </nuxt-link>
      <!-- <hamburger-button @click="active = !active" /> -->
    </div>

    <div
      class="show-nav"
      :class="{
        'navbar-menu': true,
        'is-active': active
      }"
    >
      <ul class="navbar-end show-nav-list">
        <li
          v-for="item in $siteConfig.mainMenu"
          :key="item.link"
          class="navbar-item"
          @click="active = false"
        >
          <component
            :is="item.link.startsWith('http') ? 'a' : 'nuxt-link'"
            :href="item.link"
            :to="item.link"
            :target="item.target ? item.target : '_self'"
          >
            {{ item.name }}
          </component>
        </li>
        <li class="navbar-item site-search-wrapper">
          <site-search />
        </li>
      </ul>
    </div>
  </nav>
  <nav class="bg-light d-block d-sm-none d-none d-sm-block d-md-none" style="margin-top: 70px">
    <div
      :class="{
        'nav': true,
        'is-active': active
      }"
      style="justify-content: center"
    >
      <ul class="nav" style="justify-content: center">
        <li
          v-for="item in $siteConfig.mainMenu"
          :key="item.link"
          class="nav-item"
          style="text-align: center"
          @click="active = false"
        >
          <component
            :is="item.link.startsWith('http') ? 'a' : 'nuxt-link'"
            :href="item.link"
            :to="item.link"
            :target="item.target ? item.target : '_self'"
          >
            {{ item.name }}
          </component>
        </li>
      </ul>
    </div>
  </nav>
</header>
</template>
<script>
import SiteSearch from '~/components/SiteSearch'
import HamburgerButton from '~/components/HamburgerButton'
export default {
  name: 'SiteNav',
  components: { SiteSearch, HamburgerButton },
  props: {
    hideNav: Boolean
  },
  data() {
    return {
      active: false
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  padding: 0rem 1rem!important;
}
.navbar-item img {
  max-height: 3rem ;
  height: 60px;
  width: 75px;
}
.site-search-wrapper {
  transform: translateX(5px);
  @media (max-width: 767px) {
    display: block;
  }
}
@media screen and (max-width: 1023px) {
  .navbar-menu {
    box-shadow: none!important;
  }
}
@media screen and (min-width: 1024px) {
  .navbar-menu {
    margin: auto;
  }
}
@media (min-width: 766px) and (max-width: 1024px) {
  .show-nav {
    display: block;
  }
}
@media (min-width: 767px) and (max-width: 1024px) {
  .show-nav-list {
    display: flex;
  }
}
@media (min-width: 575px) and (max-width: 767px) {
  .hide-logo {
    display: none!important;
  }
}
.navbar-burger {
  height: auto;
}
.navbar-brand {
  margin-right: auto;
}
.navbar-menu a {
  display: block;
}
.nav-item {
  padding: 10px;
}

a {
  text-decoration: none;
}
</style>
