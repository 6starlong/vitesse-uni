<script setup lang="ts">
const props = defineProps<{ name: string }>()
const router = useRouter()
</script>

<template>
  <view class="app" :class="{ dark: isDark }">
    <view
      p="x-10 y-25"
      text="center gray-700 dark:gray-200"
    >
      <view i-carbon-pedestrian inline-block text-4xl />
      <view my-1>
        你好, {{ props.name }}!
      </view>
      <view text-sm italic op75>
        <text>动态路由演示</text>
      </view>

      <view m3>
        <TheCounter />
      </view>

      <view>
        <button
          mt-3 text-sm btn
          @click="router.back()"
        >
          返回
        </button>
      </view>

      <TheFooter />
    </view>
  </view>
</template>
