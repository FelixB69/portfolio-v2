<template>
  <Transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-white/60 backdrop-blur-md transition-all duration-500"
      @click="isOpen = false"
    >
      <div
        class="relative w-full h-full md:h-auto md:w-full md:max-w-2xl p-6 pt-20 md:p-10 space-y-3 md:space-y-2 text-center bg-white md:shadow-2xl md:rounded-3xl md:border border-gray-100 mx-0 md:mx-auto flex flex-col"
        @click.stop
      >
        <!-- Mobile Close Button -->
        <button
          @click="isOpen = false"
          class="absolute top-6 right-6 p-2 text-gray-500 hover:text-gray-700 focus:outline-none md:hidden"
        >
          <UIcon name="i-heroicons-x-mark" class="w-6 h-6" />
        </button>
        <!-- Header -->
        <div class="space-y-2 md:space-y-1 flex flex-col items-center md:mb-6">
          <h1 class="text-md md:text-lg font-bold text-gray-900 !leading-tight">
            Développeur full-stack, responsable d’équipe à la croisée du code et
            du produit
          </h1>
          <p
            class="text-xs md:text-sm text-gray-500 max-w-xs md:min-w-xl mx-auto !leading-relaxed flex items-center justify-center"
          >
            Chaque parcours mérite une expérience adaptée. Pour cela, je vous
            invite à choisir une ambiance pour explorer mon univers à votre
            image.
          </p>
        </div>

        <!-- Theme Grid -->
        <div class="space-y-2 md:space-y-6">
          <h3
            class="text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-widest"
          >
            Thème
          </h3>
          <div class="grid grid-cols-2 gap-5">
            <button
              v-for="theme in themes"
              :key="theme.id"
              @click="selectTheme(theme)"
              class="cursor-pointer group relative p-3 md:p-3 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02]"
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
              <div
                class="flex justify-center -space-x-2 md:-space-x-3 mb-1.5 md:mb-2"
              >
                <div
                  class="w-6 h-6 md:w-8 md:h-8 rounded-full shadow-sm border-2 border-white transition-transform group-hover:-translate-y-1"
                  :style="{ backgroundColor: theme.colors.blue }"
                ></div>
                <div
                  class="w-6 h-6 md:w-8 md:h-8 rounded-full shadow-sm border-2 border-white transition-transform group-hover:-translate-y-1 delay-75"
                  :style="{ backgroundColor: theme.colors.pink }"
                ></div>
                <div
                  class="w-6 h-6 md:w-8 md:h-8 rounded-full shadow-sm border-2 border-white transition-transform group-hover:-translate-y-1 delay-150"
                  :style="{ backgroundColor: theme.colors.green }"
                ></div>
              </div>

              <!-- Label -->
              <h3
                class="text-xs md:text-sm font-bold text-gray-900 mb-0.5 md:mb-1"
              >
                {{ theme.name }}
              </h3>
              <p class="text-[10px] md:text-[12px] text-gray-500 leading-tight">
                {{ theme.description }}
              </p>
            </button>
          </div>
        </div>

        <!-- Typography Section -->
        <div class="space-y-2 md:space-y-6">
          <h3
            class="text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-widest"
          >
            Typographie
          </h3>
          <div class="grid grid-cols-3 gap-2">
            <button
              v-for="font in fonts"
              :key="font.id"
              @click="selectFont(font)"
              class="cursor-pointer px-3 py-2 md:px-3 md:py-2 rounded-xl border transition-all duration-200"
              :class="[
                selectedFont?.id === font.id
                  ? 'border-gray-900 bg-gray-50 text-gray-900 shadow-sm'
                  : 'border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50',
              ]"
            >
              <div
                class="text-base md:text-lg"
                :style="{ fontFamily: font.family }"
              >
                {{ font.preview }}
              </div>
              <div class="text-[10px] md:text-xs font-medium mt-0.5 md:mt-1">
                {{ font.name }}
              </div>
            </button>
          </div>
        </div>

        <!-- Footer Action -->
        <div class="mt-2 md:mt-8">
          <UButton
            size="md"
            color="black"
            variant="solid"
            trailing-icon="i-heroicons-arrow-right-20-solid"
            class="cursor-pointer px-5 py-1.5 md:px-6 md:py-2 rounded-full text-xs md:text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all text-white"
            :style="{ backgroundColor: selectedTheme?.colors.pink }"
            @click="confirmTheme"
            :disabled="!selectedTheme"
          >
            Commencer l'expérience
          </UButton>
        </div>
      </div>
    </div>
  </Transition>

  <!-- Re-open trigger -->
  <div v-if="!isOpen" class="fixed bottom-8 right-6 z-50">
    <UButton
      icon="i-heroicons-paint-brush"
      color="white"
      class="cursor-pointer rounded-full shadow-lg dark:text-gray-900 hover:scale-110 transition-transform"
      @click="isOpen = true"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
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

interface Font {
  id: string;
  name: string;
  family: string;
  class: string;
  preview: string;
}

const selectedFont = ref<Font | null>(null);

const fonts: Font[] = [
  {
    id: "inter",
    name: "Standard",
    family: "var(--font-inter)",
    class: "font-theme-inter",
    preview: "Félix",
  },
  {
    id: "playfair",
    name: "Élégant",
    family: "var(--font-playfair)",
    class: "font-theme-playfair",
    preview: "Berger",
  },
  {
    id: "outfit",
    name: "Moderne",
    family: "var(--font-outfit)",
    class: "font-theme-outfit",
    preview: "Dev",
  },
];

const applyFont = (font: Font) => {
  document.body.classList.remove(
    "font-theme-inter",
    "font-theme-playfair",
    "font-theme-outfit",
  );

  document.body.classList.add(font.class);
};

const selectFont = (font: Font) => {
  selectedFont.value = font;
  applyFont(font);
};

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
    if (selectedFont.value)
      localStorage.setItem("user-font-id", selectedFont.value.id);
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
  } else {
    selectedTheme.value = themes[0];
    selectedFont.value = fonts[0];
    isOpen.value = true;
  }

  // Load saved font or default
  const savedFontId = localStorage.getItem("user-font-id");
  if (savedFontId) {
    const found = fonts.find((f) => f.id === savedFontId);
    if (found) {
      selectedFont.value = found;
      applyFont(found);
    }
  } else {
    selectedFont.value = fonts[0];
    applyFont(fonts[0]);
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
