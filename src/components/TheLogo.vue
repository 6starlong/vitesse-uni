<script setup lang="ts">
import logo from '~/static/logo.png'
</script>

<template>
  <div>
    <div mb-1 flex-x-center>
      <div flex flex-col>
        <div h-18 w-18 flex-center>
          <img h-15 w-15 :src="logo">
        </div>
        <span>Uni App</span>
      </div>
      <div
        text="3xl gray4"
        m="x-4 y-auto"
        i-carbon-add transform transition-all-500 hover:rotate-135
      />
      <div flex flex-col>
        <div i-carbon-campsite inline-block text-6xl />
        <span>Vitesse</span>
      </div>
    </div>
    <p>
      <em text-sm italic op75>固执己见的 Vite + UniApp 项目模板</em>
    </p>
  </div>
</template>
