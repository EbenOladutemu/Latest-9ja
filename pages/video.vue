<!-- eslint-disable vue/html-closing-bracket-newline -->
<!-- prettier-ignore -->
<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <site-hero
      title="Video"
      subtitle="All cuts and chops"
      image="/uploads/video-hero.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="content mb-4">
          <h3>Your Favourite Music Videos!</h3>

          <h3>Teni - Billionare</h3>
          <iframe
            width="560"
            height="515"
            src="https://www.youtube.com/embed/1EDqTOUzCVU"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>

        <div class="content mb-4">
          <h3>Fireboy DML - Scatter</h3>
          <p>
            YBNL talented singer, Fireboy DML has churned out another masterpiece song dubbed, <b>“Scatter“</b>.

            “Scatter” is off Fireboy DML’s recently released debut project, <b>‘Laughter, Tears & Goosebumps‘</b> album.

            Fireboy DML’s album is a solo work where he didn't feature any other artiste and houses 13-tracks with songs like ‘Jealous‘, ‘King‘ and ‘What If I Say‘.
          </p>
          <p>Watch the music video below</p>

          <iframe
            width="560"
            height="515"
            src="https://www.youtube.com/embed/EtbwTgY3AIk"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>

        <div class="content">
          <p>More videos already on the way...</p>
        </div>

        <!-- <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                Cool Stuff We Do
              </p>
              <p class="subtitle">
                Sooo Cool
              </p>
              <figure class="image is-1by1">
                <opti-image width="500" height="500" />
              </figure>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                Other Cool Things
              </p>
              <p class="subtitle">
                Just as cool
              </p>
              <figure class="image is-1by1">
                <opti-image width="500" height="500" />
              </figure>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                All the cool
              </p>
              <p class="subtitle">
                that is all
              </p>
              <figure class="image is-1by1">
                <opti-image width="500" height="500" src="" />
              </figure>
            </article>
          </div>
        </div> -->
      </template>

      <template v-slot:sidebar>
        <h3 class="subtitle is-4">
          Latest Posts
        </h3>
        <posts-grid :per-row="1" :number="2" />
      </template>
    </main-section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `Video | ${this.$siteConfig.siteName}`
    }
  }
}
</script>

<style scoped>
  iframe{
    height: 400px;
  }
</style>
