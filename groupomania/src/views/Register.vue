<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/icon-left-font-monochrome-black.svg">
    <HelloWorld subtitle="For your quality of Life"/>
    <Registration msg="Registration Here !"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Registration from '@/components/Registration.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Registration
  }
}
</script>