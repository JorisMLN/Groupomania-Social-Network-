<template>
  <div class="banner">
    <div class="photoBan">
      <img alt="o" src="../assets/bantest.png" />
    </div>
    <div class="avatar">
      <img alt="o" src="../assets/moi.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    // msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.banner {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  .photoBan {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #2c3e50;
    height: 200px;
    width: 100%;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .avatar {
    border: 1px solid #2c3e50;
    height: 150px;
    width: 150px;
    margin-bottom: -120px;
    border-radius: 150px;
    overflow: hidden;
    margin-top: -120px;
    img {
      width: 100%;
      display: flex;
      overflow: hidden;
    }
  }
}
</style>
