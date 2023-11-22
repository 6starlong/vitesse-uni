<script setup lang="ts">
const props = defineProps<{ name: string }>()
const back = () => uni.navigateBack()
</script>

<template>
  <view>
    <view i-carbon-pedestrian inline-block text-4xl />
    <view my-1>
      你好, {{ props.name }}!
    </view>
    <view text-sm italic op75>
      <text>动态路由演示</text>
    </view>

    <view m="3">
      <TheCounter />
    </view>

    <view>
      <button
        mt-3 text-sm btn
        @click="back"
      >
        返回
      </button>
    </view>
  </view>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: Hi
</route>
