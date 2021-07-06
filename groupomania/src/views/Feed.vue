<template>
  <div class="feed">
    <LogOut msgLog="Log Out" msgUnsub="Unsubscribe" />
    <MiniBanner />
    <LiveFeed />
    <Footer
      beforeMsg="© 2020-2021, "
      msg="Groupomania.git, Inc."
      beforeSigned="Created by "
      signed="'Vingilot Studio ©'"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import MiniBanner from "@/components/MiniBanner.vue";
import LiveFeed from "@/components/LiveFeed.vue";
import LogOut from "@/components/LogOut.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Feed",
  components: {
    LogOut,
    MiniBanner,
    LiveFeed,
    Footer,
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
  height: 88vh;
}

@media screen and (max-width: 430px) {
  .feed {
    height: 100vh;
  }
}
</style>
