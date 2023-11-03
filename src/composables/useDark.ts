export const isDark = useDark()
export const toggleDark = () => isDark.value = !isDark.value

function useDark() {
  const darkMode = ref(false)
  const systemInfo = uni.getSystemInfoSync()
  darkMode.value = systemInfo?.theme === 'dark'
  uni.onThemeChange(({ theme }) => darkMode.value = theme === 'dark')
  return darkMode
}
