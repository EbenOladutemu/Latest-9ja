<template>
  <div>
    <nav
      class="navbar has-shadow is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <site-logo v-if="$siteConfig.logo === 'logo-component'" />
          <img
            v-else
            :src="$siteConfig.logo"
            :alt="$siteConfig.siteName"
            class="logo"
          />
        </nuxt-link>
        <hamburger-button @click="active = !active" />
      </div>

      <div
        :class="{
          'navbar-menu': true,
          'is-active': active
        }"
      >
        <ul class="navbar-end">
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
  </div>
</template>
<script>
import SiteSearch from '~/components/SiteSearch'
import HamburgerButton from '~/components/HamburgerButton'
export default {
  name: 'SiteNav',
  components: { SiteSearch, HamburgerButton },
  data() {
    return {
      active: false
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar-item img {
  max-height: 2rem;
}
.site-search-wrapper {
  transform: translateX(5px);
  @media (max-width: 1023px) {
    display: none;
  }
}
.navbar-burger {
  height: auto;
}

.navbar-menu a {
  display: block;
}
</style>
