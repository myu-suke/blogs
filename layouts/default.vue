<template>
  <div class="flex flex-col min-h-screen box-border">
    <mheader />
    <Nuxt class="flex-1" />
    <mfooter />
  </div>
</template>

<script>
import mheader from '~/components/mheader'
import mfooter from '~/components/mfooter'

export default {
  components: {
    mheader,
    mfooter,
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
