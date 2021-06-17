<template>
  <div class="PostCreation">
    <div class="PostCreation__top">
      <h3>{{ msg }}</h3>
      <button>Poster</button>
    </div>
    <form>
      <textarea name="post"></textarea>
    </form>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "PostCreation",
  props: {
    msg: String,
  },
  // created() {
  //   axios
  //     .post("http://localhost:3000/api/posts")
  //     .then((response) => {
  //       this.list = response.data;
  //       console.log(response.data);
  //     })
  //     .catch((e) => {
  //       this.error.push(e);
  //     });
  // }
};
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
  &__top {
    border: 1px solid #2c3e50;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    width: 70%;
    h3 {
      height: 10%;
    }
    button {
      width: 100px;
    }
  }
  form {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    // height: 20%;
    textarea {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
