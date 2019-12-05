<template>
  <footer class="site-footer">
    {{ $siteConfig.siteName }} &copy; {{ new Date().getFullYear() }} - All
    Rights Reserved
    <br />
    Crafted with <span style="color: #e25555;">&#9829;</span> by
    <a href="https://eben.com.ng" title="Eben Web Krafts">Eben</a>
    <br />
    <small style="font-size: 0.6em">
      Shoutout to
      <a href="https://twitter.com/danielkelly_io">danielkelly.io</a>
      for this awesome template
    </small>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter'
}
</script>

<style scoped>
footer {
  background: #eee;
  padding: 15px 10px;
  text-align: center;
  transition: 0.5s ease all;
}
</style>
