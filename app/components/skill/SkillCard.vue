<template>
  <div
    class="bg-white rounded-xl p-6 shadow hover:shadow-xl transition transform hover:-translate-y-2"
  >
    <div class="flex gap-2 flex-wrap mb-4 justify-start">
      <span
        v-for="(t, i) in tagsArr"
        :key="i"
        class="px-3 py-1 rounded-full text-xs"
        :class="tagColor(t)"
        >{{ t }}</span
      >
    </div>
    <h4 class="font-semibold mb-3">{{ title }}</h4>
    <ul class="list-disc list-inside text-sm text-gray mb-4 text-left">
      <li v-for="(b, i) in bullets" :key="i" v-html="b"></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  tags?: string[] | string;
  bullets?: string[];
}>();

const tagsArr = Array.isArray(props.tags)
  ? props.tags
  : props.tags
  ? String(props.tags).split(",")
  : [];

function tagColor(tag: string) {
  const lower = (tag || "").toLowerCase();
  if (lower.includes("scrum") || lower.includes("team"))
    return "bg-blue text-white";
  if (lower.includes("node") || lower.includes("nest"))
    return "bg-orange text-gray-dark";
  if (
    lower.includes("architecture") ||
    lower.includes("typescript") ||
    lower.includes("jira")
  )
    return "bg-green text-white";
  if (
    lower.includes("ux") ||
    lower.includes("orchestration") ||
    lower.includes("angular")
  )
    return "bg-pink text-white";
  return "bg-blue text-white";
}
</script>
