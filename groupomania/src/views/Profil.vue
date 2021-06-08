<template>
  <div class="profil">
    <h1>This is a Profil page</h1>
    <Banner msg="La Banner"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'

export default {
  name: 'Profil',
  components: Banner
}
</script>