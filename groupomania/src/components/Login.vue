<template>
  <div class="Log">
    <div class="Log__login">
      <h1>{{ msg }}</h1>
      <div class="formulaire">
        <fieldset>
          <legend>Login</legend>
          <input type="email" value="joris@gmail.com" v-model="form.email" required />
          <br />
        </fieldset>
        <fieldset>
          <legend>Password</legend>
          <input type="text" v-model="form.password" required />
          <br />
        </fieldset>
        <button v-on:click="submit()">Valider</button>
      </div>
      <div>
        <a href="http://localhost:8080/#/register" id="SignUp"> Inscription ? </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import checkToken from "@/services/checkToken.js";

export default {
  name: "Login",
  props: {
    msg: String,
  },

  created() {
    let token = checkToken.getUserToken(this.$store);
    if (token) {
      window.location = "http://localhost:8080/#/profil";
    }
  },

  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    submit() {
      axios
        .post("http://localhost:3000/api/user/login", this.form)
        .then((response) => {
          console.log(response.data);
          localStorage.setItem("user", JSON.stringify(response.data));
          this.$store.commit("addId", response.data.userId);
          this.$store.commit("addToken", response.data.token);
          window.location = "http://localhost:8080/#/profil";
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Log {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60vh;
  &__login {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    border: 1px solid green;
    border-radius: 5px;
    width: 290px;
    height: 90%;
    .formulaire {
      height: 40%;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      button {
        margin-top: 11px;
        height: 25%;
        width: 98%;
        &:hover {
          background-color: #42b983;
          color: #2c3e50;
          // font-size: 25px;
          border: 1px solid #2c3e50;
        }
        &:active {
          background-color: lighten(#42b983, $amount: 20);
        }
      }
    }
    a {
      border: 1px solid green;
      width: 100px;
      margin: 10px;
      padding: 2px;
      color: #42b983;
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
}
</style>
