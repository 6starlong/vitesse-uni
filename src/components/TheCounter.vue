<script setup lang="ts">
const { count, inc, dec } = $(useCountStore())
</script>

<template>
  <view my-3 inline-flex>
    <button rounded-full p-2 btn @click="dec()">
      <view i-carbon-subtract />
    </button>
    <view font="mono" w="15" m-auto inline-block>
      {{ count }}
    </view>
    <button rounded-full p-2 btn @click="inc()">
      <view i-carbon-add />
    </button>
  </view>
</template>
