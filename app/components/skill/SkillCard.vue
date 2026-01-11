<template>
  <div
    class="skill-card group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-white/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
  >
    <!-- Decorative gradient corner -->
    <div
      class="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-blue/5 to-transparent rounded-br-full pointer-events-none"
    ></div>

    <!-- Tags -->
    <div class="flex gap-2 flex-wrap mb-5 relative z-10">
      <span
        v-for="(t, i) in tagsArr"
        :key="i"
        class="tag-item px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-105 hover:shadow-md"
        :class="tagColor(t)"
        :style="{ animationDelay: `${i * 0.05}s` }"
      >
        {{ t }}
      </span>
    </div>

    <!-- Title -->
    <h4
      class="text-xl font-bold text-gray-dark mb-4 group-hover:text-blue transition-colors duration-300"
    >
      {{ title }}
    </h4>

    <!-- Bullets -->
    <ul class="space-y-3">
      <li
        v-for="(b, i) in bullets"
        :key="i"
        class="bullet-item flex items-start gap-3 text-sm text-gray leading-relaxed"
        :style="{ animationDelay: `${(i + tagsArr.length) * 0.05}s` }"
      >
        <span
          class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-pink to-blue mt-2"
        ></span>
        <span v-html="b"></span>
      </li>
    </ul>

    <!-- Bottom decorative line -->
    <div
      class="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-gray/10 to-transparent rounded-full"
    ></div>
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
  return getTagColorClass(tag);
}
</script>

<style scoped>
.skill-card {
  animation: fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.skill-card:nth-child(1) {
  animation-delay: 0.1s;
}
.skill-card:nth-child(2) {
  animation-delay: 0.2s;
}
.skill-card:nth-child(3) {
  animation-delay: 0.3s;
}

.tag-item {
  animation: pop-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.bullet-item {
  animation: slide-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
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

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
