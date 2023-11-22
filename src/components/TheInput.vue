<script setup lang="ts">
const { value, placeholder } = defineProps<{
  value: string
  placeholder: string
}>()

const emit = defineEmits(['update:value'])
const modelValue = ref(value)
watchEffect(() => emit('update:value', modelValue.value))
</script>

<template>
  <input
    v-model="modelValue"
    :placeholder="placeholder"
    type="text"
    inline-block
    w="250px"
    h="42px"
    border="~ solid rounded gray-200 dark:gray-700"
  >
</template>
