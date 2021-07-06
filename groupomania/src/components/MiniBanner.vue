<template>
  <div class="MiniBanner">
    <div class="avatar">
      <img alt="o" src="../assets/moi.jpg" />
    </div>
    <div class="photoBan">
      <img alt="o" src="../assets/bantest.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MiniBanner",
  props: {
    // msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.MiniBanner {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 110px;
  width: 80%;
  .photoBan {
    display: flex;
    align-items: center;
    border: 1px solid #2c3e50;
    height: 80%;
    width: 90%;
    overflow: hidden;
  }
  .avatar {
    border: 3px solid #2c3e50;
    height: 130px;
    width: 130px;
    border-radius: 130px;
    overflow: hidden;
    margin-right: -40px;
    z-index: 20;
    img {
      width: 100%;
      display: flex;
      overflow: hidden;
    }
  }
}
@media screen and (max-width: 430px) {
  .MiniBanner {
    height: 80px;
    width: 97%;
    .avatar {
      height: 110%;
      width: 25%;
    }
  }
}
</style>
