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
        console.log(token);
        let userId = token.userId;
        if (token) {
          // request for modify a profil
          console.log(this.form);
          console.log(this.$store.state.token);
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
              window.location = "http://localhost:8080/#/profil/";
            })
            .catch((e) => {
              console.log(e);
            });
        }
      } else {
        console.log("You pressed Cancel!");
      }
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
    height: 90%;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    fieldset {
      width: 40%;
      height: 17%;
      color: #42b983;
      input {
        width: 70%;
      }
    }
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

@media screen and (max-width: 740px) {
.info {
  height: 55%;
  width: 90%;
  h2 {
    height: 7%;
    font-size: 17px;
  }
  .formulaire {
    height: 75%;
    width: 90%;
    fieldset {
      width: 90%;
      height: 8%;
      color: #42b983;
    }
  }
  button {
    border: 1px solid #2c3e50;
    color: #42b983;
    width: 30%;
    height: 5%;
    text-decoration: none;
    align-self: center;
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
}
</style>
