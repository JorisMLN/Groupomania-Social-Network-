<template>
  <div class="LogOut">
    <button @click="logOut" >{{ msg }}</button>
  </div>
</template>

<script>
export default {
  name: "LogOut",
  props: {
    msg: String,
  },
  methods: {
    logOut: function(){
      window.location = "http://localhost:8080/#/";
      localStorage.clear();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.LogOut {
  margin-top: -15px;
  button {
    border: 2px solid #2c3e50;
    color: #42b983;
    width: 100px;
    padding: 2px;
    text-decoration: none;
  }
}
</style>
