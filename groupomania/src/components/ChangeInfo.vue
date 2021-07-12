<template>
  <div class="info">
    <h2>{{ msg }}</h2>
    <article class="formulaire">
      <fieldset>
        <legend>Email *</legend>
        <input type="email" value="test@gmail.com" v-model="form.email" required />
        <br />
      </fieldset>
      <fieldset>
        <legend>Last Name *</legend>
        <input type="text" v-model="form.lastname" required />
        <br />
      </fieldset>
      <fieldset>
        <legend>First Name *</legend>
        <input type="text" v-model="form.firstname" required />
        <br />
      </fieldset>
      <fieldset>
        <legend>Job *</legend>
        <input type="text" v-model="form.job" required />
        <br />
      </fieldset>
      <fieldset>
        <legend>Web Site</legend>
        <input type="text" v-model="form.website" />
        <br />
      </fieldset>
      <fieldset>
        <legend>Hobbies</legend>
        <input type="text" v-model="form.hobbies" />
        <br />
      </fieldset>
    </article>
    <button v-on:click="submit()">Confirm</button>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
// import jwt_decode from "jwt-decode";
import checkToken from "@/services/checkToken.js";

export default {
  name: "ChangeInfo",
  props: {
    msg: String,
  },

  data() {
    return {
      form: {
        email: "",
        lastname: "",
        firstname: "",
        job: "",
        website: "",
        hobbies: "",
      },
    };
  },

  computed: {
    ...mapState({
      userId: "userId",
      token: "token",
    }),
  },

  methods: {
    submit: function () {
      if (window.confirm("Voulez-vous vraiment modifier votre compte?")) {
        let token = checkToken.getUserToken(this.$store);
        let userId = token.userId;
        if (token) {
          // request for modify a profil
          console.log(this.form);
          axios
            .put("http://localhost:3000/api/user/modify/" + userId, {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer: " + this.$store.state.token,
              },
              data: this.form 
            })
            .then((response) => {
              console.log(response.data);
              console.log("Utilisateur modifier !");
            })
            .catch((e) => {
              console.log(e);
            });
        } else {
          this.clearStoreAndStorage();
        }
      } else {
        console.log("You pressed Cancel!");
      }
      window.location = "http://localhost:8080/#/profil/";
    },

    clearStoreAndStorage() {
      localStorage.clear();
      this.$store.commit("cleanStore");
      window.location = "http://localhost:8080/#/";
    },
  },

  created() {
    let token = checkToken.getUserToken(this.$store);
    if (!token) {
      this.clearStoreAndStorage();
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.info {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 40%;
  width: 70%;
  border: 1px solid #2c3e50;
  align-items: center;
  h2 {
    height: 4%;
    font-size: 18px;
  }
  .formulaire {
    // border: 1px solid red;
    height: 90%;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    // flex-direction: column;
    flex-wrap: wrap;
    fieldset {
      width: 40%;
      height: 17%;
      color: #42b983;
      input {
        width: 70%;
      }
    }
    // article {
    //   height: 70%;
    //   width: 90%;
    //   display: flex;
    // justify-content: space-around;
    // flex-wrap: wrap;
    // align-self: center;
    // border: 1px solid red;
    // flex-direction: column;
    // .fieldset{
    // height: 5%;
    // width: 40%;
    // display: flex;
    // justify-content: space-around;
    // flex-direction: column;
    // font-size: 20px;
    // color: #2c3e50;
    // align-items: flex-start;
    // padding-left: 10%;
    // input{
    // height: 10%;
    // }
    // }
  }
  button {
    border: 1px solid #2c3e50;
    color: #42b983;
    width: 30%;
    height: 10%;
    text-decoration: none;
    align-self: center;
    margin: 10px;
    &:hover {
      background-color: #b53737;
      color: white;
      border: 1px solid white;
    }
    &:active {
      background-color: lighten(#42b983, $amount: 20);
    }
  }
}

@media screen and (max-width: 430px) {
  .info {
    display: flex;
    justify-content: space-between;
    border: 1px solid #2c3e50;
    width: 98%;
    height: 25%;
    h2 {
      display: none;
    }
    article {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      height: 99%;
      flex-wrap: wrap;
      align-items: center;
      .listInfo {
        height: 5%;
        display: flex;
        width: 90%;
        flex-wrap: wrap;
        flex-direction: column;
        font-size: 15px;
        color: #2c3e50;
        align-items: center;
        padding-left: 0%;
      }
    }
  }
}
</style>
