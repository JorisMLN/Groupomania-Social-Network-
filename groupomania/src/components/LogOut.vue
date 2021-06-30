<template>
  <div class="LogOut">
    <button @click="logOut">{{ msg }}</button>
  </div>
</template>

<script>
export default {
  name: "LogOut",
  props: {
    msg: String,
  },
  methods: {
    logOut: function () {
      localStorage.clear();
      this.$store.commit("addId", "");
      this.$store.commit("addToken", "");
      this.$store.commit("addFirstname", "");
      this.$store.commit("addLastname", "");
      this.$store.commit("addEmail", "");
      this.$store.commit("addHobbies", "");
      this.$store.commit("addJob", "");
      this.$store.commit("addWebsite", "");
      window.location = "http://localhost:8080/#/";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.LogOut {
  // margin-top: -8px;
  button {
    border: 2px solid #2c3e50;
    color: #42b983;
    width: 100px;
    padding: 2px;
    text-decoration: none;
  }
}
</style>
