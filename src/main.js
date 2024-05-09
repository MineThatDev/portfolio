import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import commonStyle from "./styles/common/common.scss";

createApp(App)
  .use(Quasar, quasarUserOptions, commonStyle)
  .use(router)
  .mount("#app");
