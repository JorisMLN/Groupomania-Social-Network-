<template>
  <div id="nav">
    <span v-if="!$store.state.userId">
      <router-link to="/">Home</router-link> |
      <router-link to="/register">Register</router-link>
    </span>
    <span v-else>
      <router-link to="/profil">Profil</router-link> |
      <router-link to="/feed">Feed</router-link>
    </span>
  </div>
</template>

//
<script>
export default {
  name: "NavBar",
  // data(){
  //   return{
  //     userId: "",
  //   }
  // },
  // created(){
  //   let user = JSON.parse(localStorage.getItem("user"));
  //   let userId = user.userId;
  // }
};

</script>
