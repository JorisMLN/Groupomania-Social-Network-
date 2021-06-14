<template>
  <div class="LiveFeed">
    <div class="LiveFeed__post" v-for="item in list" :key="item">
      {{ item }}
    </div>
  </div>
</template>

<script>

fetch("http://localhost:3000/api/posts")
  .then((response) => {
    return response.json();
  })
  .then((theResponse) => {
    console.log(theResponse);
  })
  .catch((error) => {
    console.log("Il y a eu un problème avec l'opération fetch: " + error.message);
  });

export default {
  name: "LiveFeed",
  props: {
    msg: String,
    list: {
      type: Array,
      default: (theResponse) => [theResponse],
    },
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
