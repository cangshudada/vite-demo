<template>
  <div @click="changeValue" class="image"></div>
  <Child ref="childRef" :name="name" @trigger="trigger" />
</template>

<script lang='ts' setup>
import Child from "./child.vue";
import { useStore } from "vuex";
import { SET_VALUE } from "../store/home";
import { ref, defineEmit, defineProps, useContext, onMounted } from "vue";

const { dispatch } = useStore();

const { expose } = useContext();
const name = ref<string>("点我");
const value = ref<string>("hello world");
const childRef = ref<typeof Child | null>(null);

function trigger(event: MouseEvent) {
  console.log(`event`, event);
}

function changeValue() {
  dispatch(`home/${SET_VALUE}`, "large");
}

onMounted(() => {
  setTimeout(() => {
    name.value = "hahha";
  }, 1000);

  if (childRef.value) {
    childRef.value.change();
  }
});
</script>

<style scoped lang='less'>
.image {
  width: 100px;
  height: 100px;
  background: url("../assets/logo.png") no-repeat center;
  background-size: contain;
}
</style>
