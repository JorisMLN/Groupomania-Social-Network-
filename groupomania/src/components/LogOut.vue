<template>
  <div class="LogOut">
    <a>{{ msg }}</a>
  </div>
</template>

<script>
export default {
  name: "LogOut",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.LogOut {
  margin-top: -15px;
  a {
    border: 2px solid #42b983;
    width: 100px;
    padding: 2px;
  }
}
</style>
