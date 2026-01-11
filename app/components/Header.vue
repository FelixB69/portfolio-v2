<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="scrolled ? 'py-2' : 'py-4'"
  >
    <div class="container mx-auto px-4 md:px-6 max-w-[1200px]">
      <div
        class="flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-500"
        :class="
          scrolled
            ? 'bg-white/90 backdrop-blur-2xl shadow-lg shadow-gray-dark/8 border border-white/60'
            : 'bg-white/70 backdrop-blur-xl border border-white/40'
        "
      >
        <!-- Logo -->
        <a href="/" aria-label="Accueil" class="flex items-center gap-3 group">
          <div class="relative">
            <img
              src="/img/logo-fb.png"
              alt="Logo Félix Berger"
              class="h-14 w-14 object-contain rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
            />
            <div
              class="absolute inset-0 rounded-xl bg-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </div>
        </a>

        <!-- Navigation Desktop - Pill centrale -->
        <nav
          aria-label="Menu principal"
          class="hidden md:flex items-center gap-1 bg-gray-light/90 rounded-full px-2 py-1.5 border border-gray/8 shadow-inner"
        >
          <button
            v-for="(item, index) in navItems"
            :key="item.id"
            type="button"
            @click="goTo(item.id)"
            class="nav-item relative px-5 py-2.5 rounded-full text-[15px] font-medium text-gray-dark/70 hover:text-gray-dark transition-all duration-300 group cursor-pointer"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <span class="relative z-10">{{ item.label }}</span>
            <span
              class="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-100 shadow-md transition-all duration-300 scale-90 group-hover:scale-100"
            ></span>
          </button>
        </nav>

        <!-- Actions -->
        <div class="flex items-center gap-3">
          <!-- CV Download Button (Desktop) -->
          <a
            href="/CV - Félix BERGER.pdf"
            download
            class="btn-download hidden md:inline-flex items-center gap-3 px-6 py-3 rounded-full text-[14px] font-semibold text-white bg-pink shadow hover:scale-105 transition transform"
          >
            <span>Télécharger mon CV</span>
          </a>

          <!-- Hamburger Mobile -->
          <button
            @click="toggleMenu"
            aria-expanded="isOpen"
            aria-controls="mobile-menu"
            class="md:hidden relative w-12 h-12 flex items-center justify-center rounded-xl bg-white/90 hover:bg-white border border-gray/10 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            <span class="sr-only"
              >{{ isOpen ? "Fermer" : "Ouvrir" }} le menu</span
            >
            <div class="w-5 h-4 flex flex-col justify-between">
              <span
                class="w-full h-0.5 bg-gray-dark rounded-full transition-all duration-300 origin-left"
                :class="isOpen ? 'rotate-45 translate-x-0.5 w-6' : ''"
              ></span>
              <span
                class="w-full h-0.5 bg-gray-dark rounded-full transition-all duration-300"
                :class="isOpen ? 'opacity-0 scale-x-0' : ''"
              ></span>
              <span
                class="w-full h-0.5 bg-gray-dark rounded-full transition-all duration-300 origin-left"
                :class="isOpen ? '-rotate-45 translate-x-0.5 w-6' : ''"
              ></span>
            </div>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition-all duration-400 ease-out"
        enter-from-class="opacity-0 -translate-y-6 scale-95"
        enter-to-class="opacity-100 translate-y-0 scale-100"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 translate-y-0 scale-100"
        leave-to-class="opacity-0 -translate-y-6 scale-95"
      >
        <div
          v-show="isOpen"
          id="mobile-menu"
          class="md:hidden mt-3 bg-white/98 backdrop-blur-2xl rounded-2xl shadow-2xl shadow-gray-dark/15 border border-white/60 overflow-hidden"
        >
          <div class="p-5 flex flex-col gap-1">
            <button
              v-for="(item, index) in navItems"
              :key="item.id"
              @click="goTo(item.id)"
              class="mobile-nav-item flex items-center gap-4 px-4 py-4 rounded-xl text-left font-medium text-gray-dark/80 hover:text-gray-dark hover:bg-gradient-to-r hover:from-gray-light hover:to-white transition-all duration-300 cursor-pointer"
              :style="{ animationDelay: `${index * 0.05}s` }"
            >
              <span class="w-2 h-2 rounded-full bg-blue"></span>
              <span class="text-lg">{{ item.label }}</span>
            </button>

            <!-- Separator -->
            <div
              class="h-px bg-gradient-to-r from-transparent via-gray/20 to-transparent my-3"
            ></div>

            <!-- CV Download Button (Mobile) -->
            <a
              href="/CV - Félix BERGER.pdf"
              download
              class="flex items-center justify-center gap-3 px-5 py-4 rounded-xl text-[15px] font-semibold text-white bg-pink shadow hover:scale-105 transition transform"
            >
              <span>Télécharger mon CV</span>
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

<style scoped>
.nav-item {
  animation: fade-in-up 0.5s ease both;
}

.mobile-nav-item {
  animation: slide-in-left 0.4s ease both;
}

.btn-download span:first-child span {
  animation: none;
}

.btn-download:hover span:first-child span {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
