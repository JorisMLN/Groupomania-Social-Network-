<template>
  <div class="LastestPosts">
    <h2>{{ msg }}</h2>
    <div class="container">{{ container }}</div>
  </div>
</template>

<script>
export default {
  name: "LastestPosts",
  props: {
    msg: String,
    container: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.LastestPosts {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  height: 48%;
  width: 99%;
  overflow: hidden;
  h2 {
    display: flex;
    margin: 0px;
    font-size: 18px;
    border-bottom: 1px solid #2c3e50;
    width: 100%;
    padding-left: 20px;
  }
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
