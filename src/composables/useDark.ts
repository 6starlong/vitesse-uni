export const isDark = useDark()

export function toggleDark() {
  isDark.value = !isDark.value
  uni.setNavigationBarColor({
    frontColor: isDark.value ? '#ffffff' : '#000000',
    backgroundColor: isDark.value ? '#292929' : '#f8f8f8',
  })
}

function useDark() {
  const darkMode = ref(false)
  const systemInfo = uni.getSystemInfoSync()
  darkMode.value = systemInfo?.theme === 'dark'
  uni.onThemeChange(({ theme }) => darkMode.value = theme === 'dark')
  return darkMode
}
