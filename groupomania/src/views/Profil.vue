<template>
  <div class="profil">
    <LogOut msg="Log Out" />
    <Banner />
    <div class="main">
      <Info msg="Les Infos" />
      <div class="main__right">
        <PostCreation msg="Partagez avec vos collègues !" />
        <LastestPosts msg="Vos dernieres publications" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import Info from "@/components/Info.vue";
import PostCreation from "@/components/PostCreation.vue";
import LastestPosts from "@/components/LastestPosts.vue";
import LogOut from "@/components/LogOut.vue";

export default {
  name: "Profil",
  components: {
    LogOut,
    Banner,
    Info,
    PostCreation,
    LastestPosts,
  },
};

main();

function main(){
    fetch('http://localhost:3000/api/stuff')
    .then((response) => {
        return response.json()
    })
    .then((theResponse) => {
        console.log(theResponse);
    })
    .catch((error) => {
        console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message)
    });
}

</script>

<style scoped lang="scss">
.profil {
  display: flex;
  flex: wrap;
  justify-content: space-around;
  flex-direction: column;
  height: 800px;
  .main {
    display: flex;
    flex: wrap;
    justify-content: space-around;
    flex-direction: row;
    &__right {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      border: 3px solid #42b983;
      border-radius: 10px;
      width: 60%;
    }
  }
}
</style>
