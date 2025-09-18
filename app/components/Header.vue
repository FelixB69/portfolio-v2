<template>
  <header
    class="fixed top-0 left-0 right-0 z-30 bg-white/40 backdrop-blur-sm border-b border-white/10 overflow-visible shadow-[0_2px_6px_rgba(2,6,23,0.03),0_12px_36px_rgba(2,6,23,0.05)]"
  >
    <div
      class="container mx-auto px-6 md:px-10 lg:px-5 py-3 flex items-center justify-between relative max-w-[1100px]"
    >
      <div class="flex items-center z-20">
        <a href="/" aria-label="Accueil" class="flex items-center">
          <img
            src="/img/logo-fb.png"
            alt="Logo"
            class="h-17 w-17 object-contain"
          />
        </a>
      </div>

      <nav
        aria-label="Menu principal"
        class="hidden sm:flex items-center space-x-4 absolute left-1/2 transform -translate-x-1/2 z-10"
      >
        <button
          type="button"
          @click="goTo('projets')"
          class="px-4 py-2 rounded-lg text-[17px] font-medium text-gray-700 hover:bg-white/70 hover:text-gray-900 hover:shadow-md transform hover:-translate-y-0.5 transition duration-150"
        >
          Projets
        </button>

        <button
          type="button"
          @click="goTo('parcours')"
          class="px-4 py-2 rounded-lg text-[17px] font-medium text-gray-700 hover:bg-white/70 hover:text-gray-900 hover:shadow-md transform hover:-translate-y-0.5 transition duration-150"
        >
          Parcours
        </button>

        <button
          type="button"
          @click="goTo('skills')"
          class="px-4 py-2 rounded-lg text-[17px] font-medium text-gray-700 hover:bg-white/70 hover:text-gray-900 hover:shadow-md transform hover:-translate-y-0.5 transition duration-150"
        >
          Compétences
        </button>
      </nav>

      <!-- Right : actions / mobile hamburger -->
      <div class="flex items-center z-20">
        <!-- Hamburger pour mobile -->
        <button
          @click="isOpen = !isOpen"
          aria-expanded="isOpen"
          aria-controls="mobile-menu"
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-white/60 sm:hidden"
        >
          <span class="sr-only">Ouvrir le menu</span>
          <svg
            v-if="!isOpen"
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile menu (small screens) -->
      <div
        id="mobile-menu"
        v-show="isOpen"
        class="sm:hidden absolute left-0 right-0 top-full mt-2 bg-white/95 backdrop-blur-sm border-t border-white/10 shadow-md z-50"
      >
        <div class="px-4 py-4 flex flex-col space-y-2">
          <button
            @click="goTo('projets')"
            class="text-left font-medium px-4 py-3 rounded-md text-gray-700 hover:bg-white/70 hover:text-gray-900 transition duration-150"
          >
            Projets
          </button>
          <button
            @click="goTo('parcours')"
            class="text-left font-medium px-4 py-3 rounded-md text-gray-700 hover:bg-white/70 hover:text-gray-900 transition duration-150"
          >
            Parcours
          </button>
          <button
            @click="goTo('skills')"
            class="text-left font-medium px-4 py-3 rounded-md text-gray-700 hover:bg-white/70 hover:text-gray-900 transition duration-150"
          >
            Compétences
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["scroll-to"]);
const isOpen = ref(false);

function goTo(id) {
  isOpen.value = false;
  emit("scroll-to", id);
}
</script>
