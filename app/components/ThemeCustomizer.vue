<template>
  <Transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-white"
    >
      <div class="w-full max-w-2xl p-6 space-y-6 text-center">
        <!-- Header -->
        <div class="space-y-2 animate-fade-in-up">
          <h1 class="text-2xl md:text-3xl font-bold text-gray-900">
            Bienvenue sur mon Portfolio
          </h1>
          <p class="text-base text-gray-500 max-w-lg mx-auto leading-relaxed">
            Je souhaite vous faire vivre une expérience mémorable. Personnalisez
            l'ambiance du site pour découvrir mon parcours à votre image.
          </p>
        </div>

        <!-- Theme Grid -->
        <div class="grid grid-cols-2 gap-4 animate-fade-in-up delay-100">
          <button
            v-for="theme in themes"
            :key="theme.id"
            @click="selectTheme(theme)"
            class="cursor-pointer group relative p-4 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02]"
            :class="[
              selectedTheme?.id === theme.id
                ? 'border-gray-900 bg-white shadow-lg scale-[1.02]'
                : 'border-transparent bg-white/50 hover:bg-white hover:shadow-md',
            ]"
          >
            <!-- Checkmark -->
            <div
              v-if="selectedTheme?.id === theme.id"
              class="absolute -top-2 -right-2 bg-gray-900 text-white rounded-full p-1 shadow-md"
            >
              <UIcon name="i-heroicons-check" class="w-3 h-3" />
            </div>

            <!-- Color Bubbles -->
            <div class="flex justify-center -space-x-3 mb-3">
              <div
                class="w-10 h-10 rounded-full shadow-sm border-2 border-white transition-transform group-hover:-translate-y-1"
                :style="{ backgroundColor: theme.colors.blue }"
              ></div>
              <div
                class="w-10 h-10 rounded-full shadow-sm border-2 border-white transition-transform group-hover:-translate-y-1 delay-75"
                :style="{ backgroundColor: theme.colors.pink }"
              ></div>
              <div
                class="w-10 h-10 rounded-full shadow-sm border-2 border-white transition-transform group-hover:-translate-y-1 delay-150"
                :style="{ backgroundColor: theme.colors.green }"
              ></div>
            </div>

            <!-- Label -->
            <h3 class="text-sm font-bold text-gray-900 mb-1">
              {{ theme.name }}
            </h3>
            <p class="text-[10px] text-gray-500 leading-tight">
              {{ theme.description }}
            </p>
          </button>
        </div>

        <!-- Footer Action -->
        <div class="animate-fade-in-up delay-200">
          <UButton
            size="lg"
            color="black"
            variant="solid"
            class="cursor-pointer px-8 py-2.5 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all"
            @click="confirmTheme"
            :disabled="!selectedTheme"
          >
            Commencer l'expérience
            <template #trailing>
              <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
            </template>
          </UButton>
        </div>
      </div>
    </div>
  </Transition>

  <!-- Re-open trigger -->
  <div v-if="!isOpen" class="fixed bottom-6 right-6 z-40">
    <UButton
      icon="i-heroicons-paint-brush"
      color="white"
      class="cursor-pointer rounded-full shadow-lg dark:text-gray-900 hover:scale-110 transition-transform"
      @click="isOpen = true"
    />
  </div>
</template>

<script setup lang="ts">
interface ThemeColors {
  blue: string;
  pink: string;
  green: string;
  orange?: string;
}

interface Theme {
  id: string;
  name: string;
  description: string;
  colors: ThemeColors;
}

const isOpen = ref(false);
const selectedTheme = ref<Theme | null>(null);

const themes: Theme[] = [
  {
    id: "default",
    name: "Classique",
    description: "Élégant et professionnel, équilibré pour la lecture.",
    colors: {
      blue: "#26547c",
      pink: "#ef476f",
      green: "#06d6a0",
      orange: "#ffd166",
    },
  },
  {
    id: "sunset",
    name: "Lumineux",
    description: "Chaleureux et énergique, pour en avoir plein les yeux.",
    colors: {
      blue: "#6d4c41",
      pink: "#ff9f1c",
      green: "#ffbf69",
      orange: "#f2bb05",
    },
  },
  {
    id: "neon",
    name: "Moderne",
    description: "Moderne et audacieux, pour les amateurs de la tech.",
    colors: {
      blue: "#2b2d42",
      pink: "#f72585",
      green: "#4cc9f0",
      orange: "#7209b7",
    },
  },
  {
    id: "forest",
    name: "Calme",
    description: "Douceur et nature, pour une navigation apaisée.",
    colors: {
      blue: "#2d6a4f",
      pink: "#52b788",
      green: "#d8f3dc",
      orange: "#95d5b2",
    },
  },
];

// Helper to update CSS variables
const applyColors = (colors: ThemeColors) => {
  const root = document.documentElement;

  // Update main colors
  root.style.setProperty("--color-blue", colors.blue);
  root.style.setProperty("--color-pink", colors.pink);
  root.style.setProperty("--color-green", colors.green);
  if (colors.orange) root.style.setProperty("--color-orange", colors.orange);

  // Auto-generate 'light' variants for gradients if needed
  root.style.setProperty("--color-blue-light", colors.blue);
  root.style.setProperty("--color-pink-light", colors.pink);
  root.style.setProperty("--color-green-light", colors.green);
};

const selectTheme = (theme: Theme) => {
  selectedTheme.value = theme;
  applyColors(theme.colors);
};

const confirmTheme = () => {
  if (selectedTheme.value) {
    localStorage.setItem("user-theme-id", selectedTheme.value.id);
    isOpen.value = false;
  }
};

onMounted(() => {
  const savedThemeId = localStorage.getItem("user-theme-id");
  if (savedThemeId) {
    const found = themes.find((t) => t.id === savedThemeId);
    if (found) {
      selectedTheme.value = found;
      applyColors(found.colors);
    }
    // Don't open if already saved (or maybe open if user requested to edit?
    // The requirement was "quand il rentre sur le site, je veux lui afficher une pop up")
    // If it's a first visit (no saved theme), we show it.
    // But since I'm dev-ing, I'll force it open for now or check a session flag if I want to simulate "entrance".
    // Let's stick to: if saved, apply it. If not saved, show popup.
  } else {
    // Select default but don't save yet
    selectedTheme.value = themes[0];
    isOpen.value = true;
  }
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
