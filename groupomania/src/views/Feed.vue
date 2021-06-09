<template>
  <div class="feed">
    <MiniBanner/>
    <LiveFeed/>
  </div>
</template>

<script>
// @ is an alias to /src
import MiniBanner from "@/components/MiniBanner.vue";
import LiveFeed from "@/components/LiveFeed.vue";


export default {
  name: "Feed",
  components: {
    MiniBanner,
    LiveFeed
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
