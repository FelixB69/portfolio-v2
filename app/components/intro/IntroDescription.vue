<template>
  <div>
    <p class="text-md text-gray mb-4" v-html="t('hero.bio.p1')"></p>
    <p class="text-md text-gray mb-4" v-html="t('hero.bio.p2')"></p>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>
