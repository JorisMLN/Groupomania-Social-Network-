<template>
  <div class="banner">
    <h1>{{ msg }}</h1>
    <p>Please check your work email to register you.</p>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    msg: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
