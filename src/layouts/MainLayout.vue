<template>
  <q-layout view="lHh lpr lFf">
    <MainHeader />
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
    <MainFooter />
  </q-layout>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
export default {
  components: {
    MainHeader,
    MainFooter,
  },
  setup() {
    return {};
  },
};
</script>
