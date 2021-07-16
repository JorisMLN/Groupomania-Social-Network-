<template>
  <div class="banner">
    <div class="photoBan">
      <img alt="bannière de profil" src="../assets/bantest.png" />
    </div>
    <div class="avatar">
      <img alt="Photo de profil" :src="$store.state.picture"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner"
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.banner {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 250px;
  .photoBan {
    display: flex;
    align-items: center;
    border: 1px solid #2c3e50;
    height: 80%;
    width: 99%;
    overflow: hidden;
  }
  .avatar {
    border: 3px solid #2c3e50;
    height: 200px;
    width: 200px;
    border-radius: 130px;
    overflow: hidden;
    margin-top: -220px;
    img {
      width: 100%;
      display: flex;
      overflow: hidden;
    }
  }
}

@media screen and (max-width: 430px) {
  .banner {
    .photoBan {
      display: flex;
      align-items: center;
      border: 1px solid #2c3e50;
      height: 80%;
      width: 99%;
      overflow: hidden;
    }
    .avatar {
      border: 3px solid #2c3e50;
      height: 150px;
      width: 150px;
      border-radius: 130px;
      overflow: hidden;
      margin-top: -220px;
      img {
        width: 100%;
        display: flex;
        overflow: hidden;
      }
    }
  }
}
</style>
