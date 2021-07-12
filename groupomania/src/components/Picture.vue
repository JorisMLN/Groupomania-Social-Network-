<template>
  <div class="Pic">
    <h1> {{ msg }} </h1>
  </div>
</template>

<script>
// import axios from "axios";
// import checkToken from "@/services/checkToken.js";

export default {
  name: "Picture",
  props: {
    msg: String,
  },

//   created() {
//     let token = checkToken.getUserToken(this.$store);
//     if (token) {
//       window.location = "http://localhost:8080/#/profil";
//     }
//   },

//   data() {
//     return {
//       form: {
//         email: "",
//         password: "",
//       },
//     };
//   },

//   methods: {
//     submit() {
//       axios
//         .post("http://localhost:3000/api/user/login", this.form)
//         .then((response) => {
//           console.log(response.data);
//           localStorage.setItem("user", JSON.stringify(response.data));
//           this.$store.commit("addId", response.data.userId);
//           this.$store.commit("addToken", response.data.token);
//           window.location = "http://localhost:8080/#/profil";
//         })
//         .catch((e) => {
//           console.log(e);
//         });
//     },
//   },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Pic {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 25%;
  border: 1px solid #2c3e50;
}
</style>
