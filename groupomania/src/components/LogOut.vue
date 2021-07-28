<template>
  <div class="LogOut">
    <button @click="logOut">{{ msgLog }}</button>
  </div>
</template>

<script>
export default {
  name: "LogOut",
  props: {
    msgLog: String,
    msgUnsub: String,
  },
  methods: {
    logOut: function () {
      // clear data
      localStorage.clear();
      this.$store.commit("cleanStore");
      window.location = "http://localhost:8080/#/";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.LogOut {
  button {
    border: 1px solid #2c3e50;
    color: #398466;
    width: 100px;
    padding: 2px;
    text-decoration: none;
    &:hover {
      background-color: #42b983;
      color: #2c3e50;
      border: 1px solid #2c3e50;
    }
    &:active {
      background-color: lighten(#42b983, $amount: 20);
    }
  }
}
</style>
