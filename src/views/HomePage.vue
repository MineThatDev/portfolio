<template>
  <q-page>
    <div class="flex flex-center" style="margin-top: 12rem">
      <MyProfile id="profile" />
    </div>
    <div class="flex flex-center" style="margin-top: 24rem">
      <MyPortfolio />
    </div>
    <div class="flex flex-center" style="margin-top: 24rem">
      <MyAbout id="about" />
    </div>
    <div
      class="flex flex-center"
      style="margin-top: 24rem; margin-bottom: 4rem"
    >
      <MyContact />
    </div>
  </q-page>
</template>

<script>
// @ is an alias to /src
import MyProfile from "@/components/MyProfile.vue";
import MyPortfolio from "@/components/MyPortfolio.vue";
import MyAbout from "@/components/MyAbout.vue";
import MyContact from "@/components/MyContact.vue";
export default {
  name: "HomeView",
  components: {
    MyProfile,
    MyPortfolio,
    MyAbout,
    MyContact,
  },
  setup() {
    return {};
  },
};
</script>
