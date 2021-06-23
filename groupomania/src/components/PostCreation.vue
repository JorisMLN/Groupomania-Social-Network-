<template>
  <div class="PostCreation">
    <fieldset>
      <legend>Partagez avec vos super collègues !</legend>
      <textarea type="text" v-model="form.text" />
    </fieldset>
    <button v-on:click="submit()">Poster</button>
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
      },
      token: this.$store.state.token,
    };
  },

  methods: {
    submit(){
      const requestOptions = {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        authorization: "Bearer: "+this.token,
       },
      body: JSON.stringify({ post: this.form })
      };
    fetch("http://localhost:3000/api/posts", requestOptions)
    .then(response => response.json())
    .then(data => (this.postId = data.id));
    }
  },
}

  // methods: {
  //   submit(){
  //     axios
  //       .request({
  //       method: "post",
  //       baseURL: "http://localhost:3000/api/posts",
  //       headers: {
  //         // authorization: "Bearer: "+this.token,
  //       },
  //       body: {
  //         post: JSON.stringify(this.form),
  //       }
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((e) => {
  //       this.error.push(e);
  //     });
  //   },
  // },

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.PostCreation {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  height: 42%;
  width: 99%;
  overflow: hidden;
  fieldset {
    width: 92%;
    height: 70%;
    color: #42b983;
    textarea {
      width: 100%;
      height: 90%;
    }
  }
  button {
    width: 150px;
  }
}
</style>
