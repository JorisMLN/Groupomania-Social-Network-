<template>
  <div class="home">
    <Banner msg="La banner"/>
  </div>
</template>

<script>
// @ is an alias to /src

import Banner from '@/components/Banner.vue'

export default {
  name: 'Home',
  components: {
    Banner,
  }
}
</script>