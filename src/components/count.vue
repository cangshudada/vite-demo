<template>
  <ElInputNumber
    :min="1"
    :max="10"
    @change="handleChange"
    type="text"
    v-model="value"
  />
  <ElBadge :value="value" type="danger">
    <ElButton @click="countAdd">count ++</ElButton>
  </ElBadge>
</template>

<script lang='ts'>
import { ElButton, ElInputNumber, ElBadge } from "element-plus";
import { defineComponent, PropType, ref } from "vue";
export default defineComponent({
  props: {
    title: {
      type: String as PropType<"mini" | "small" | "medium">,
      default: "mini",
    },
  },
  emits: [],
  components: { ElButton, ElInputNumber, ElBadge },
  // 此处props不要使用解构复制 会导致响应式失效 这是错误示范
  setup({ title }, ctx) {
    const value = ref<number>(1);

    function countAdd() {
      value.value++;
    }

    function handleChange(value: string) {
      console.log(`value`, value);
    }

    return {
      value,
      countAdd,
      handleChange,
    };
  },
});
</script>

<style scoped lang='less'>
span {
  color: #ff9291;
}
</style>


