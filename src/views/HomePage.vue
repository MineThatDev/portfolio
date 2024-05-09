<template>
  <q-page>
    <div
      class="flex flex-center"
      :style="$q.screen.gt.sm ? 'margin-top: 10rem' : 'margin-top: 1rem'"
    >
      <MyProfile id="profile" />
    </div>
    <div
      class="flex flex-center"
      :style="$q.screen.gt.sm ? 'margin-top: 24rem' : 'margin-top: 8rem'"
    >
      <MyPortfolio id="portfolio" />
    </div>
    <div
      class="flex flex-center"
      :style="$q.screen.gt.sm ? 'margin-top: 24rem' : 'margin-top: 8rem'"
    >
      <MyAbout id="about" />
    </div>
    <div
      class="flex flex-center"
      :style="
        $q.screen.gt.sm
          ? 'margin-top: 24rem; margin-bottom: 4rem'
          : 'margin-top: 8rem; margin-bottom: 2rem'
      "
    >
      <MyContact id="contact" />
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
