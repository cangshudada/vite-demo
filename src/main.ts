import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

// 处理组件渲染方法执行期间以及侦听器抛出的未捕获错误
app.config.errorHandler = (err, vm, info) => {
  console.log(`errorHandler err`, err)
  console.log(`errorHandler vm`, vm)
  console.log(`errorHandler info`, info)
};

app.use(router).use(store).mount("#app");
