<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/icon-left-font-monochrome-black.svg">
    <HelloWorld subtitle="For your quality of Life"/>
    <Login msg="Login here?"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Login from '@/components/Login.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Login
  }
}
</script>