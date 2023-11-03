<script setup lang="ts">
const props = defineProps<{ name: string }>()
</script>

<template>
  <div>
    <div i-carbon-pedestrian inline-block text-4xl />
    <p my-1>
      你好, {{ props.name }}!
    </p>
    <p text-sm italic op75>
      <em>动态路由演示</em>
    </p>

    <div m="t-8 b-5">
      <TheCounter />
    </div>

    <div>
      <button m-3 text-sm btn @click="router.back()">
        返回
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: Hi
</route>
