import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import './assets/css/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
const app = createApp(App);
  
//app.config.globalProperties.url = 'https://redis-una.netlify.app';
app.use(router).mount("#app");