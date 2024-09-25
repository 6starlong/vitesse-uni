<script setup lang="ts">
import logo from '~/static/logo.png'
</script>

<template>
  <view>
    <view mb-3 flex justify-center>
      <view flex="~ col">
        <view h-18 w-18 flex="~ center">
          <image h-15 w-15 :src="logo" />
        </view>
        <text>uni-app</text>
      </view>
      <view
        text="3xl gray-4" m="x-4 y-auto" i-carbon-add
        class="transform transition-all-500 hover:rotate-135"
      />
      <view flex="~ col">
        <view i-carbon-campsite inline-block text-6xl />
        <text>Vitesse</text>
      </view>
    </view>
    <view>
      <text text-sm italic op75>
        固执己见的 uni-app + Vite 项目模板
      </text>
    </view>
  </view>
</template>
