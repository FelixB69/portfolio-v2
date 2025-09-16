<template>
  <article
    class="relative group rounded-xl overflow-hidden shadow-lg bg-white transform transition hover:scale-[1.02] duration-300"
  >
    <img
      :src="image"
      :alt="alt"
      class="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
    />
    <div
      class="absolute top-0 left-0 right-0 h-56 md:h-64 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    ></div>

    <div class="p-6 flex flex-col items-center">
      <h3 class="text-xl font-semibold text-blue mb-2">{{ title }}</h3>
      <p class="mt-2 text-sm text-gray-dark text-center max-w-xl"><slot /></p>
      <div class="mt-4 flex flex-wrap gap-2 justify-center">
        <span
          v-for="(t, i) in normalizedTags"
          :key="i"
          :class="tagClass(t)"
          class="px-3 py-1 rounded-full text-xs"
          >{{ t }}</span
        >
      </div>
    </div>

    <a
      class="absolute inset-0"
      :href="href"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="ariaLabel"
    ></a>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string;
  alt?: string;
  title: string;
  href: string;
  ariaLabel?: string;
  tags?: string[] | string;
}>();

const normalizedTags = Array.isArray(props.tags)
  ? props.tags
  : props.tags
  ? String(props.tags).split(",")
  : [];

function tagClass(tag: string) {
  // simple mapping to preserve original colors from index
  const lower = (tag || "").toLowerCase();
  if (lower.includes("node")) return "bg-green text-white";
  if (lower.includes("next") || lower.includes("react"))
    return "bg-blue text-white";
  if (lower.includes("angular")) return "bg-pink text-white";
  if (lower.includes("tensor") || lower.includes("tensorflow"))
    return "bg-orange text-gray-dark";
  return "bg-blue text-white";
}
</script>
