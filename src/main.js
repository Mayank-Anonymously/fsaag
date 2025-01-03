import "./assets/main.css";
import "./assets/card.css";
import "./assets/form.css";
import "./assets/descriptions.css";
import "./assets/tab.css";
import "./assets/table.css";
import "./assets/dialog.css";
import "./assets/pagination.css";
import "./assets/select.css";
import "./assets/filter.css";
import "./assets/fliterDateTime.css";
// import "element-plus/dist/index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(ElementPlus);
app.use(createPinia());
app.use(router);

app.mount("#app");
