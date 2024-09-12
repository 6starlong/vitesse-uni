<script setup lang="ts">
const name = $ref('')
const go = () => uni.navigateTo({ url: `/pages/hi?name=${name}` })
</script>

<template>
  <view>
    <TheLogo />

    <view py-4 />

    <TheInput
      v-model:value="name"
      placeholder="输入你的名字"
      autocomplete="false"
      @keydown.enter="go"
    />

    <view>
      <button
        m-3 text-sm btn
        :disabled="!name"
        @click="go"
      >
        确认
      </button>
    </view>
  </view>
</template>

<route type="home" lang="json">
{}
</route>
