<template>
  <article
    class="project-card group relative glass-card overflow-hidden hover-lift transition-all duration-500"
  >
    <!-- Image container -->
    <div class="relative h-56 md:h-64 overflow-hidden">
      <img
        :src="image"
        :alt="alt"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <!-- Gradient overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-gray-dark/80 via-gray-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      ></div>

      <!-- Link indicator on hover -->
      <div
        class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
      >
        <span
          class="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-sm font-medium text-gray-dark shadow-lg"
        >
          Voir le projet →
        </span>
      </div>
    </div>

    <!-- Content -->
    <div class="p-6 md:p-8">
      <h3
        class="text-xl md:text-2xl font-bold text-gray-dark mb-3 group-hover:text-blue transition-colors duration-300"
      >
        {{ title }}
      </h3>

      <p class="text-base text-gray leading-relaxed mb-5">
        <slot />
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2">
        <span
          v-for="(t, i) in normalizedTags"
          :key="i"
          :class="tagClass(t)"
          class="tag-item px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-105 hover:shadow-md"
          :style="{ animationDelay: `${i * 0.05}s` }"
        >
          {{ t }}
        </span>
      </div>
    </div>

    <!-- Full card link -->
    <a
      class="absolute inset-0"
      :href="href"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="ariaLabel"
    ></a>

    <!-- Decorative corner gradient -->
    <div
      class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
    ></div>
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
  return getTagColorClass(tag);
}
</script>

<style scoped>
.project-card {
  animation: fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.project-card:nth-child(1) {
  animation-delay: 0.1s;
}
.project-card:nth-child(2) {
  animation-delay: 0.2s;
}
.project-card:nth-child(3) {
  animation-delay: 0.3s;
}
.project-card:nth-child(4) {
  animation-delay: 0.4s;
}

.tag-item {
  animation: pop-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pop-in {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
