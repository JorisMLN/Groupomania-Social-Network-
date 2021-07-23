<template>
  <div class="Footer">
    <div class="Footer__module">
      <h2 class="before">{{ beforeMsg }}</h2>
      <h2>{{ msg }}</h2>
    </div>
    <div class="Footer__module">
      <h2 class="before">{{ beforeSigned }}</h2>
      <h2>{{ signed }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    beforeMsg: String,
    msg: String,
    beforeSigned: String,
    signed: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Footer {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid #2c3e50;
  margin: -5px;
  height: 80px;
  margin-bottom: -52px;
  width: 100%;
  &__module {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    height: 80px;
    width: 23%;
    .before {
      font-size: 15px;
      color: #42b983;
    }
    h2 {
    font-size: 15px;
    }
  }
}

@media screen and (max-width: 600px) {
  .Footer {
    height: 100px;
    flex-direction: column;
    &__module {
      height: 45%;
      width: 80%;
    }
  }
}
</style>
