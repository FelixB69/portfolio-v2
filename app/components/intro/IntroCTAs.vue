<template>
  <div class="flex items-center justify-center gap-4">
    <a
      href="#projets"
      @click="onProjetsHandler"
      class="inline-flex items-center gap-3 px-6 py-3 bg-pink text-white rounded-full shadow hover:scale-105 transition transform animate-pop"
    >
      Découvrir mes projets
    </a>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  onProjets: (e: Event) => void;
  onCompetences: (e: Event) => void;
}>();

function onProjetsHandler(e: Event) {
  if (props.onProjets) props.onProjets(e);
}
function onCompetencesHandler(e: Event) {
  if (props.onCompetences) props.onCompetences(e);
}
</script>
