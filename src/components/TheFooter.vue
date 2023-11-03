<template>
  <div flex="~ x-center" mt-5 gap-4 text-xl>
    <div title="Home" @click="router.replace('/pages/index')">
      <div i-carbon-campsite icon-btn />
    </div>
    <div icon-btn title="GitHub" @click="router.push('https://github.com/6starlong/vitesse-uni')">
      <div i-carbon-logo-github />
    </div>

    <div icon-btn title="Toggle dark mode" @click="toggleDark()">
      <div i-carbon-sun dark:i-carbon-moon />
    </div>
  </div>
</template>
