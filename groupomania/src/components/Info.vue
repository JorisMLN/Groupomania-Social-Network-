<template>
  <div class="info">
    <h1> {{msg}} </h1>
    <article>
        <h2>Nom:</h2>
        <h2>Prenom</h2>
        <h2>Poste</h2>
        <h2>Email</h2>
        <h2>Site Web</h2>
        <h2>Hobbies</h2>
    </article>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Info",
  props: {
    // name: response.data.name,
  },

  created() {

    let user_json = localStorage.getItem('user');
    let user = JSON.parse(user_json);
    console.log(user.userId, user.token);

    axios
      .get("http://localhost:3000/api/user/info")
      .then((response) => {
        this.props = response;
        console.log(response.data);
        return response.data
      })
      .catch((e) => {
        this.error.push(e);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.info {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    height: 500px;
    width: 300px;
    border: 1px solid #2c3e50;
}
</style>
