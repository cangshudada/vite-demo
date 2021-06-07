<template>
  <ElButton @click="trigger">{{ name || "trigger emit" }}</ElButton>
  <span>{{ homeState.value }}</span>
</template>

<script lang='ts' setup>
import { ElButton } from "element-plus";
import {
  watch,
  toRefs,
  computed,
  readonly,
  defineEmit,
  useContext,
  defineProps,
  watchEffect,
} from "vue";
import { useStore } from "vuex";
// 定义porps
const props = defineProps<{
  name: string;
  type?: "small" | "medium" | "large";
  age?: number;
}>();
// 定义emit
const emit = defineEmit(["trigger"]);

const store = useStore();
const { expose } = useContext();
const homeState = computed(() => readonly(store.state.home));

function trigger(event: MouseEvent | unknown) {
  emit("trigger", event);
}

function change() {
  console.log("change");
}

// 暴露给父组件的
expose({ change });
</script>

<style scoped lang='less'>
</style>
