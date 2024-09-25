<template>
  <view class="app" :class="{ dark: isDark }">
    <view
      p="x-10 y-25"
      text="center gray-700 dark:gray-200"
    >
      <slot />

      <TheFooter />

      <view mx-auto mt-4 text-center text-sm op50>
        [Home Layout]
      </view>
    </view>
  </view>
</template>
