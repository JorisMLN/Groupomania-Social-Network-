<template>
  <div class="Log">
    <div class="Log__login">
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Log {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60vh;
  &__login {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid green;
    border-radius: 5px;
    width: 20%;
    height: 90%;
  }
}
</style>
