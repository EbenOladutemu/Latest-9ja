<template>
  <div id="home-page" class="page-wrapper home-page">
    <site-hero :title="title" :subtitle="subtitle" :image="featureImage" class="site-hero">
    <!-- <button
        class="button is-primary"
        @click="$eventBus.$emit('modal-triggered', 'newsletter-modal')"
      >
        Subscribe To Our Newsletter
      </button> -->
    </site-hero>
    <!-- <div class="container">
      <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel" style="padding-top: 0px">
        <div class="carousel-inner">
          <div class="carousel-item active" data-interval="10000">
            <slider-card />
          </div>
          <div class="carousel-item" data-interval="2000">
            <slider-card />
          </div>
          <div class="carousel-item">
            <slider-card />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div> -->
    <main-section theme="one-column" style="margin-top: 0px">
      <template v-slot:default>
        <!-- All Posts -->
        <h1 class="new-post">
          New Posts
        </h1>
        <posts-grid />
      </template>
      <template v-slot:sidebar>
        Nothing here
      </template>
    </main-section>
    <!-- <news-letter-form-modal /> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { setPageData } from '../helper'
// import Slider from '~/components/grids/Slider'
// import NewsLetterFormModal from '~/components/NewsLetterFormModal'

export default {
  name: 'HomePage',
  // components: {
  //   'slider-card': Slider
  // },
  head() {
    return {
      title: `Home | ${this.$siteConfig.siteName}`
    }
  },
  computed: {
    ...mapState(['title', 'subtitle', 'featureImage'])
  },
  fetch({ store, params }) {
    setPageData(store, { slug: 'home' })
  }
}
</script>

<style>
.home-page .under-subtitle {
  border-top: none;
}
.site-hero {
  margin-top: 2em!important;
}
a {
  text-decoration: none!important;
  color: #068744;
}
.new-post {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
}
.button .is-primary {
  color:#068744!important;
}
</style>
