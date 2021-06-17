<template>
  <div class="Reg">
    <div class="Reg__login">
      <h1>{{ msg }}</h1>
      <div class="formulaire">
        <fieldset>
          <legend>Email</legend>
          <input type="email" value="test@gmail.com" v-model="form.email" />
          <br />
        </fieldset>
        <fieldset>
          <legend>Password</legend>
          <input type="text" v-model="form.password" />
          <br />
        </fieldset>
        <button v-on:click="submit()">Valider</button>
        <!-- <div><a href="http://localhost:8080/#/home" id="Login"> Login </a> <a href="" id="SignOut"> Désinscription ?</a></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Registration",
  props: {
    msg: String,
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
        .post("http://localhost:3000/api/user/signup", this.form)
        .then((response) => {
          console.log(response.data);
        })
        .catch((e) => {
          this.error.push(e);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Reg {
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
    width: 330px;
    height: 70%;
    .formulaire {
      height: 65%;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      button {
        margin-top: 11px;
        height: 25%;
        width: 98%;
      }
    }
    a {
      border: 1px solid green;
      width: 100px;
      margin: 10px;
      padding: 2px;
      color: #42b983;
      text-decoration: none;
    }
  }
}
</style>
