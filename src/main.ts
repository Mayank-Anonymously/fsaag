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

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
