<template>
  <section id="hero" class="min-h-[60vh] flex items-center">
    <div class="container mx-auto px-6 md:px-10 lg:px-20 py-10">
      <div class="max-w-3xl mx-auto">
        <div
          class="glass-card-strong p-8 md:p-12 text-center transform transition hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] animate-fade-in-up"
        >
          <!-- Avatar -->
          <div class="relative mb-3">
            <div class="relative inline-block">
              <div
                class="absolute inset-0 rounded-full bg-gradient-to-tr from-blue via-blue-light to-green blur-md opacity-40 animate-pulse-soft"
              ></div>
              <img
                src="/img/pp-fb.png"
                alt="Félix Berger"
                class="relative z-10 w-40 h-40 rounded-full shadow-2xl object-cover border-4 border-white/80"
              />
              <!-- Status indicator -->
              <div
                class="absolute bottom-2 right-2 z-20 w-6 h-6 bg-green rounded-full border-4 border-white shadow-lg"
              ></div>
            </div>
          </div>

          <!-- Contact bar -->
          <div class="flex justify-center gap-5 mt-2">
            <slot name="contact-bar"></slot>
          </div>

          <!-- Name -->
          <h1
            class="text-4xl md:text-5xl font-extrabold gradient-text leading-tight my-3 tracking-tight"
          >
            Félix Berger
          </h1>
        <!-- Availability badge -->
          <div class="flex justify-center mb-5">
            <span
              class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green/10 text-green-dark border border-green/20 text-sm font-semibold"
            >
              <span
                class="w-2 h-2 rounded-full bg-green animate-pulse-soft"
              ></span>
              {{ t("hero.available") }}
            </span>
          </div>
          <!-- Role -->
          <div class="flex flex-wrap justify-center gap-3 mb-4">
            <span
              v-for="role in roles"
              :key="role"
              class="px-5 py-2 bg-blue/10 text-blue border border-blue/20 shadow-sm backdrop-blur-md rounded-full font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default"
            >
              {{ role }}
            </span>
          </div>

          <!-- Stats -->
          <div class="mb-6">
            <slot name="stats"></slot>
          </div>

          <!-- Skills -->
          <div class="mt-5 flex flex-wrap justify-center gap-3 mb-4">
            <slot name="skills"></slot>
          </div>
          <!-- Tagline -->
          <p
            class="max-w-2xl mx-auto text-lg md:text-lg font-bold text-blue mb-4"
          >
            {{ t("hero.tagline") }}
          </p>

          <!-- Description -->
          <slot name="description"></slot>
  

          <!-- CTA Buttons -->
          <div
            class="cta-buttons flex flex-wrap items-center justify-center gap-4 mt-6"
          >
            <slot name="cta-buttons"></slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";

const { t } = useI18n();

const roles = computed(() => [
  t("hero.roles.projectLead"),
  t("hero.roles.fullstack"),
  t("hero.roles.lead"),
]);
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease both;
}
</style>
