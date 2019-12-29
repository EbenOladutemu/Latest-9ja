<!-- eslint-disable vue/singleline-html-element-content-newline -->
<!-- eslint-disable vue/multiline-html-element-content-newline -->
<template>
  <div id="contact-page" class="page-wrapper contact-page content-page">
    <site-hero
      title="Contact Us"
      subtitle="We are always available"
      image="/uploads/contact-hero.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title has-text-centered">
                Hello!
              </p>
              <p class="subtitle">
                How can we be of assistance today?
              </p>
              <p>For Music and Video Promotion, Ad Placement and to Submit a post on Latest 9ja</p>
              <p>
                Send a mail to <nuxt-link to="mailto:media@latest9ja.com.ng">media@latest9ja.com.ng</nuxt-link>
              </p>
              <br />
              <p>
                For more enquiries, please send a mail to
                <nuxt-link to="mailto:info@latest9ja.com.ng">info@latest9ja.com.ng</nuxt-link>
              </p>
              <div class="content mt-4">
                <p>
                  Follow us on:
                  <!-- <font-awesome-icon icon="coffee"></font-awesome-icon>
                  <span>
                    <font-awesome-icon icon="twitter" />
                    <i class="fas fa-twitter"></i>
                  </span>
                  <span>
                    <font-awesome-icon icon="instagram" />
                    <i class="fas fa-instagram"></i>
                  </span>
                  <span>
                    <font-awesome-icon icon="facebook" />
                    <i class="fas fa-facebook"></i>
                  </span> -->
                </p>
              </div>
            </article>
          </div>
          <div class="tile is-parent is-8">
            <article class="tile is-child box">
              <contact-form />
            </article>
          </div>
        </div>
      </template>
      <template v-slot:sidebar>
        <h3 class="subtitle is-4">
          Latest Posts
        </h3>
        <!-- Latest Posts -->
        <posts-grid :per-row="1" :number="2" />
      </template>
    </main-section>
  </div>
</template>
<script>
import ContactForm from '~/components/ContactForm'
export default {
  head() {
    return {
      title: `Contact | ${this.$siteConfig.siteName}`
    }
  },
  components: { ContactForm }
}
</script>
