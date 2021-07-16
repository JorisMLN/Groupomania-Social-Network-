<template>
  <div class="Delete">
    <h2>{{ msg }}</h2>
    <div class="Delete__login">
      <fieldset>
        <legend>Your Password</legend>
        <input type="password" v-model="form.password" required />
        <br />
      </fieldset>
      <button @click="unSub">{{ unsub }}</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import checkToken from "@/services/checkToken.js";

export default {
  name: "DeleteAccount",
  props: {
    msg: String,
    unsub: String,
  },

  computed: {
    ...mapState({
      userId: "userId",
      token: "token",
    }),
  },

  data() {
    return {
      form: {
        password: "",
      },
    };
  },

  // created() {
  //   let token = checkToken.getUserToken(this.$store);
  //   if (token) {
  //       window.location = "http://localhost:8080/#/profil";
  //   }
  // },

  methods: {
    unSub: function () {
      if (window.confirm("Voulez-vous vraiment supprimer votre compte?")) {
        let token = checkToken.getUserToken(this.$store);
        let userId = token.userId;
        if (token) {
          console.log(this.form);
          // request for delete the acount
          axios
            .delete("http://localhost:3000/api/user/unsub/" + userId, {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer: " + this.$store.state.token,
              },
              data: JSON.stringify({ post: this.form }),
            })
            .then((response) => {
              console.log(response.data);
              console.log("Utilisateur supprimé !");
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
      this.clearStoreAndStorage();
    },

    clearStoreAndStorage() {
      localStorage.clear();
      this.$store.commit("cleanStore");
      window.location = "http://localhost:8080/#/";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Delete {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  width: 70%;
  height: 25%;
  border: 1px solid #2c3e50;
  h2 {
    width: 40%;
    font-size: 18px;
  }
  &__login {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    border: 1px solid green;
    border-radius: 5px;
    width: 55%;
    height: 40%;
    fieldset {
      width: 45%;
      margin-top: -7px;
      input {
        width: 90%;
      }
    }
    button {
      border: 1px solid #2c3e50;
      color: #42b983;
      width: 40%;
      height: 55%;
      text-decoration: none;
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

@media screen and (max-width: 740px) {
  .Delete {
    width: 90%;
    height: 20%;
    flex-direction: column;
    h2 {
      width: 90%;
      height: 20%;
      font-size: 18px;
    }
    &__login {
      width: 90%;
      height: 60%;
      flex-direction: column;
      fieldset {
        width: 70%;
        input {
          width: 90%;
        }
      }
      button {
        border: 1px solid #2c3e50;
        color: #42b983;
        width: 40%;
        height: 25%;
        text-decoration: none;
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
}
</style>
