<template>
  <div class="PostCreation">
    <h1> {{msg}} </h1>
  </div>
</template>

<script>
export default {
  name: "PostCreation",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.PostCreation {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    border: 1px solid #2c3e50;
    border-radius: 5px;
    height: 42%;
    width: 99%;
}
</style>
