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
                Send a mail to <a href="mailto:newlatest9ja@gmail.com">newlatest9ja@gmail.com</a>
              </p>
              <br />
              <p>
                For more enquiries, please send a mail to
                <a href="mailto:newlatest9ja@gmail.com">newlatest9ja@gmail.com</a>
              </p>
              <div class="content mt-4">
                <p>
                  Follow us on:<br>
                  <a href="#">
                    <i class="fab fa-facebook-f fa-2x"></i>
                  </a>
                  <a href="#" class="ml-3">
                    <i class="fab fa-twitter fa-2x"></i>
                  </a>
                  <a href="https://instagram.com/latest9jaa" target="_blank" class="ml-3">
                    <i class="fab fa-instagram fa-2x"></i>
                  </a>
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
