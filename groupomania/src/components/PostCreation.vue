<template>
  <div class="postCreation">
    <fieldset>
      <legend>Partagez avec vos super collègues !</legend>
      <textarea type="text" v-model="form.text" />
    </fieldset>
    <div class="postCreation__bot">
      <button class="gif">.GIF</button>
      <button class="poster" v-on:click="submit()">Poster</button>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "PostCreation",

  data() {
    return {
      form: {
        text: "",
        userId: this.$store.state.userId
      },
      token: this.$store.state.token,
    };
  },

  methods: {
    submit() {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer: " + this.token,
        },
        body: JSON.stringify({ post: this.form }),
      };
      fetch("http://localhost:3000/api/posts", requestOptions)
        .then((response) => response.json())
        .then((data) => (this.postId = data.id))
        .catch((e) => {
          this.error.push(e);
        });
    },
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.postCreation {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  height: 40%;
  width: 99%;
  overflow: hidden;
  fieldset {
    width: 94%;
    height: 70%;
    color: #42b983;
    textarea {
      width: 99%;
      height: 90%;
    }
  }
  &__bot {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 10%;
    width: 250px;
    .poster {
      width: 150px;
    }
    .gif {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 50px;
    }
  }
}
</style>
