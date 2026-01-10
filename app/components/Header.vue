<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'py-2' : 'py-4'"
  >
    <div class="container mx-auto px-4 md:px-6 max-w-[1200px]">
      <div
        class="flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-300"
        :class="
          scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-gray-dark/5 border border-white/50'
            : 'bg-white/60 backdrop-blur-md border border-white/30'
        "
      >
        <!-- Logo -->
        <a href="/" aria-label="Accueil" class="flex items-center gap-3 group">
          <img
            src="/img/logo-fb.png"
            alt="Logo Félix Berger"
            class="h-15 w-15 object-contain rounded-xl transition-transform duration-300 group-hover:scale-110"
          />
        </a>

        <!-- Navigation Desktop - Pill centrale -->
        <nav
          aria-label="Menu principal"
          class="hidden md:flex items-center gap-1 bg-gray-light/80 rounded-full px-2 py-1.5 border border-gray/10"
        >
          <button
            v-for="item in navItems"
            :key="item.id"
            type="button"
            @click="goTo(item.id)"
            class="relative px-4 py-2 rounded-full text-[15px] font-medium text-gray-dark/80 hover:text-gray-dark transition-all duration-200 group"
          >
            <span class="relative z-10">{{ item.label }}</span>
            <span
              class="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-100 shadow-sm transition-all duration-200 scale-95 group-hover:scale-100"
            ></span>
          </button>
        </nav>

        <!-- Actions -->
        <div class="flex items-center gap-3">
          <!-- CV Download Button (Desktop) -->
          <a
            href="/CV - Félix BERGER.pdf"
            download
            class="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[14px] font-semibold text-white bg-pink hover:bg-pink/90 shadow-lg shadow-pink/20 hover:shadow-pink/30 hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Mon CV
          </a>

          <!-- Hamburger Mobile -->
          <button
            @click="toggleMenu"
            aria-expanded="isOpen"
            aria-controls="mobile-menu"
            class="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/80 hover:bg-white border border-gray/10 transition-all duration-200"
          >
            <span class="sr-only"
              >{{ isOpen ? "Fermer" : "Ouvrir" }} le menu</span
            >
            <div class="w-5 h-4 flex flex-col justify-between">
              <span
                class="w-full h-0.5 bg-gray-dark rounded-full transition-all duration-300 origin-left"
                :class="isOpen ? 'rotate-45 translate-x-0.5' : ''"
              ></span>
              <span
                class="w-full h-0.5 bg-gray-dark rounded-full transition-all duration-300"
                :class="isOpen ? 'opacity-0 translate-x-2' : ''"
              ></span>
              <span
                class="w-full h-0.5 bg-gray-dark rounded-full transition-all duration-300 origin-left"
                :class="isOpen ? '-rotate-45 translate-x-0.5' : ''"
              ></span>
            </div>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4 scale-95"
        enter-to-class="opacity-100 translate-y-0 scale-100"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0 scale-100"
        leave-to-class="opacity-0 -translate-y-4 scale-95"
      >
        <div
          v-show="isOpen"
          id="mobile-menu"
          class="md:hidden mt-3 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-gray-dark/10 border border-white/50 overflow-hidden"
        >
          <div class="p-4 flex flex-col gap-1">
            <button
              v-for="item in navItems"
              :key="item.id"
              @click="goTo(item.id)"
              class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-left font-medium text-gray-dark/80 hover:text-gray-dark hover:bg-gray-light/80 transition-all duration-200"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-blue/50"></span>
              {{ item.label }}
            </button>

            <!-- Separator -->
            <div class="h-px bg-gray/10 my-2"></div>

            <!-- CV Download Button (Mobile) -->
            <a
              href="/CV - Félix BERGER.pdf"
              download
              class="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-[15px] font-semibold text-white bg-pink shadow-lg shadow-pink/20 transition-all duration-200 active:scale-[0.98]"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Télécharger mon CV
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const emit = defineEmits(["scroll-to"]);

const isOpen = ref(false);
const scrolled = ref(false);

const navItems = [
  { id: "projets", label: "Projets" },
  { id: "parcours", label: "Parcours" },
  { id: "skills", label: "Compétences" },
];

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

function goTo(id) {
  isOpen.value = false;
  emit("scroll-to", id);
}

function handleScroll() {
  scrolled.value = window.scrollY > 20;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
