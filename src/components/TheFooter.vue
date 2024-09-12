<script setup lang="ts">
function openGithub() {
  const url = 'https://github.com/6starlong/vitesse-uni'
  if (window)
    window.open(url)
  else
    uni.navigateTo({ url: `/pages/webview?url=${url}` })
}
</script>

<template>
  <view flex="~ gap-4" mt-6 justify-center text-xl>
    <navigator icon-btn title="Home" url="/pages/index" open-type="redirect">
      <view i-carbon-campsite />
    </navigator>

    <view icon-btn title="GitHub" @click="openGithub">
      <view i-carbon-logo-github />
    </view>

    <view icon-btn title="Toggle dark mode" @click="toggleDark()">
      <view i-carbon-sun dark:i-carbon-moon />
    </view>
  </view>
</template>
