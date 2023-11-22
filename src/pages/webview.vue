<script setup lang="ts">
const { url } = defineProps<{ url: string }>()
</script>

<template>
  <web-view :src="url" />
</template>

<route lang="yaml">
layout: false
</route>
