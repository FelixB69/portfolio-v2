<template>
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
    <div
      v-for="stat in stats"
      :key="stat.key"
      class="flex flex-col items-center justify-center px-3 py-3 rounded-2xl bg-blue/5 border border-blue/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
    >
      <span class="text-2xl md:text-3xl font-extrabold gradient-text leading-none">
        {{ t(`hero.stats.${stat.key}.value`) }}
      </span>
      <span class="mt-1 text-xs md:text-sm text-gray text-center leading-tight">
        {{ t(`hero.stats.${stat.key}.label`) }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

const stats = [
  { key: "experience" },
  { key: "users" },
  { key: "team" },
  { key: "projects" },
];
</script>
