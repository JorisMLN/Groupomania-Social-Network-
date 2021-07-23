<template>
  <div class="info">
    <h2>{{ msg }}</h2>
    <article>
      <div class="listInfo">Prénom: {{ $store.state.firstname }}</div>
      <div class="listInfo">Nom de Famille: {{ $store.state.lastname }}</div>
      <div class="listInfo">Poste: {{ $store.state.job }}</div>
      <div class="listInfo">Loisirs: {{ $store.state.hobbies }}</div>
      <div class="listInfo">Site web: {{ $store.state.website }}</div>
      <div class="listInfo">E-mail: {{ $store.state.email }}</div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Info",
  props: {
    msg: String,
    unsub: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.info {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 95%;
  width: 300px;
  border: 1px solid #2c3e50;
  h1 {
    height: 10%;
  }
  article {
    height: 80%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    .listInfo {
      height: 5%;
      display: flex;
      // justify-content: space-around;
      flex-direction: column;
      font-size: 20px;
      color: #2c3e50;
      align-items: flex-start;
      padding-left: 10%;
    }
  }
}

@media screen and (max-width: 600px) {
  .info {
    display: flex;
    justify-content: space-between;
    border: 1px solid #2c3e50;
    width: 98%;
    height: 45%;
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
      button {
        border: 1px solid #2c3e50;
        color: #42b983;
        width: 150px;
        height: 15%;
        text-decoration: none;
        align-self: center;
        margin-left: 0%;
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
