<template>
  <div class="postCreation">
    <fieldset>
      <legend>Partagez avec vos super collègues !</legend>
      <textarea type="text" v-model="form.text" />
      <div class="gif-poster">
        <Vueditor></Vueditor>
        <button class="poster" v-on:click="submit()">Poster</button>
      </div>
    </fieldset>
  </div>
</template>

<script>
// import Vueditor from 'vueditor';
// import 'vueditor/dist/style/vueditor.min.css'

export default {
  name: "PostCreation",

  data() {
    return {
      form: {
        text: "",
        userId: this.$store.state.userId,
        firstname: this.$store.state.firstname,
        lastname: this.$store.state.lastname,
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
        .then(
          (data) => (this.postId = data.id),
          (window.location = "http://localhost:8080/#/feed")
        )
        .catch((e) => {
          console.log(e);
        });
    },
  },
};

// function clearText(text){
//   text.value = '';
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.postCreation {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  height: 98%;
  width: 99%;
  overflow: hidden;
  fieldset {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    height: 85%;
    color: #42b983;
    textarea {
      max-width: 99%;
      width: 99%;
      height: 85%;
      overflow-y: scroll;
      scrollbar-color: #2c3e50 #42b983;
      scrollbar-width: thin;
    }
    .gif-poster {
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
}
</style>
