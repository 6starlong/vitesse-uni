<script setup lang="ts">
const name = $ref('')
</script>

<template>
  <div>
    <TheLogo />

    <div py-4 />

    <TheInput v-model:value="name" placeholder="输入你的名字" />

    <div>
      <button
        m-3 text-sm btn
        :disabled="!name"
        @click="router.push(`/pages/hi?name=${name}`)"
      >
        确认
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
layout: home
</route>
