<template>
  <q-header>
    <q-toolbar class="bg-white text-dark q-py-sm q-px-lg">
      <div class="font-montserrat-bold font-size-22">Ruchchanon.dev</div>
      <q-space />
      <q-tabs v-model="tab" shrink>
        <q-tab
          v-for="(item, index) in headerTabs"
          :key="index"
          class="font-montserrat-bold font-size-14"
          :name="item.name"
          >{{ item.label }}</q-tab
        >
      </q-tabs>
    </q-toolbar>
  </q-header>
</template>

<script>
import { ref, watch } from "vue";
import commonFunction from "@/utils/commonFunction";
export default {
  setup() {
    const { scrollToElementById } = commonFunction();
    const tab = ref("Home");
    watch(tab, (name) => {
      const currentTab = headerTabs.find((info) => {
        return info.name === name;
      });
      scrollToElementById(currentTab.id);
    });
    return { headerTabs, tab };
  },
};
const headerTabs = [
  {
    label: "Home",
    name: "Home",
    id: "profile",
  },
  {
    label: "Project",
    name: "Project",
    id: "portfolio",
  },
  {
    label: "About",
    name: "About",
    id: "about",
  },
  {
    label: "Contact",
    name: "Contact",
    id: "contact",
  },
];
</script>
