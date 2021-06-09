<template>
  <div class="feed">
    <MiniBanner/>
    <div class="main">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MiniBanner from "@/components/MiniBanner.vue";


export default {
  name: "Feed",
  components: {
    MiniBanner,
  },
};
</script>

<style scoped lang="scss">
.feed {
  display: flex;
  flex: wrap;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 800px;
}
</style>
