import { defineStore } from 'pinia'

export const useCountStore = defineStore('counter', () => {
  const count = ref(0)

  function inc() {
    count.value++
  }

  function dec() {
    count.value--
  }

  return {
    count,
    inc,
    dec,
  }
})
