<template>
  <div class="home">
    <Banner msg="La banner"/>
    <Info msg="Les Infos"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import Info from '@/components/Info.vue'

export default {
  name: 'Profil',
  components: {
    Banner,
    Info
  }
}
</script>