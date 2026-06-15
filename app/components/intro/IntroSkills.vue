<template>
  <div class="flex flex-wrap justify-center gap-3">
    <span
      v-for="(s, i) in tm('hero.skills')"
      :key="i"
      class="px-3 py-1 rounded-full bg-pink/10 text-pink font-medium border border-pink/20 shadow-sm text-md transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default"
      >{{ rt(s) }}</span
    >
  </div>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n();
</script>
