<template>
  <div class="profil">
    <Banner msg="La banner"/>
    <Info msg="Les Infos"/>
    <PostCreation msg="Que dire ?"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import Info from '@/components/Info.vue'
import PostCreation from '@/components/PostCreation.vue'

export default {
  name: 'Profil',
  components: {
    Banner,
    Info,
    PostCreation,
  }
}
</script>

<style scoped lang="scss">
.profil {
    display: flex;
    flex: wrap;
    justify-content: space-around;
    flex-direction: column;
    height: 900px;
}
</style>
