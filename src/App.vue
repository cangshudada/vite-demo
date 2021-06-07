<template>
  <ElButton @click="go('home')">to home</ElButton>
  <ElButton @click="go('image')">to image</ElButton>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, onErrorCaptured } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ElButton } from "element-plus";

export default defineComponent({
  name: "App",
  components: { ElButton },
  setup() {
    const router = useRouter();
    const route = useRoute();
    function go(name: string) {
      router.push({
        name,
        query: {
          type: name,
        },
      });

      console.log(`queryPathType`, route.query.type);
    }

    onErrorCaptured((err, instance, info) => {
      console.log(`errorCaptured err`, err);
      console.log(`errorCaptured instance`, instance);
      console.log(`errorCaptured info`, info);
    });

    return {
      go,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
