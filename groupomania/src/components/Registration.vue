<template>
  <div class="Reg">
    <div class="Reg__login">
      <h1>{{ msg }}</h1>
      <form method="post" class="formulaire">
        <fieldset>
          <legend>E-mail</legend>
          <input type="email" name="email" id="email" value="test@gmail.com" required />
          <br />
        </fieldset>
        <fieldset>
          <legend>Password</legend>
          <input type="text" name="password" id="password" required />
          <br />
        </fieldset>
        <button>Valider</button>
      </form>
      <div><a href="http://localhost:8080/#/" id="SignUp"> Login </a> <a href="" id="SignOut"> Désinscription ?</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Registration",
  props: {
    msg: String,
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
    height: 90%;
    .formulaire {
      height: 40%;
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
