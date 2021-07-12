<template>
  <div class="Delete">
    <div class="Delete__login">
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// import checkToken from "@/services/checkToken.js";

export default {
  name: "DeleteAccount",
  props: {
    msg: String,
  },

//   created() {
    // let token = checkToken.getUserToken(this.$store);
    // if (token) {
    //   window.location = "http://localhost:8080/#/profil";
    // }
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
    // submit() {
    //   axios
    //     .post("http://localhost:3000/api/user/login", this.form)
    //     .then((response) => {
    //       console.log(response.data);
    //       localStorage.setItem("user", JSON.stringify(response.data));
    //       this.$store.commit("addId", response.data.userId);
    //       this.$store.commit("addToken", response.data.token);
    //       window.location = "http://localhost:8080/#/profil";
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // },
//   },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Delete {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 25%;
  border: 1px solid #2c3e50;
  &__login {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    border: 1px solid green;
    border-radius: 5px;
    width: 290px;
    height: 90%;
  }
}
</style>
