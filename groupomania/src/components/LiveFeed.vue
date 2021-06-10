<template>
  <div class="LiveFeed">
    <div class="LiveFeed__post"><h3>Post 1</h3></div>
    <div class="LiveFeed__post"><h3>Post 2</h3></div>
    <div class="LiveFeed__post"><h3>Post 3</h3></div>
    <div class="LiveFeed__post"><h3>Post 4</h3></div>
  </div>
</template>

<script>
export default {
  name: "LiveFeed",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.LiveFeed {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  height: 80%;
  width: 50%;
  border: 3px solid #42b983;
  border-radius: 5px;
  &__post {
    height: 24%;
    width: 99%;
    border: 1px solid #2c3e50;
  }
}
</style>
