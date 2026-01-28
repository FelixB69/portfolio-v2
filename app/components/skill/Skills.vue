<template>
  <section
    id="competences"
    class="container mx-auto px-6 md:px-10 lg:px-20 py-16 pt-[130px] relative"
  >
    <!-- Background decoration -->
    <div
      class="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
    >
      <div
        class="absolute top-20 -right-20 w-80 h-80 bg-green/4 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-40 -left-20 w-96 h-96 bg-orange/4 rounded-full blur-3xl"
      ></div>
    </div>

    <div class="relative z-10">
      <!-- Section header -->
      <div class="flex items-center gap-3 mb-10 animate-fade-in-up">
        <div class="relative flex items-center justify-center w-5 h-5">
          <div
            class="absolute inset-0 bg-blue/30 rounded-full animate-ping opacity-75"
          ></div>
          <div
            class="relative w-2 h-2 bg-blue rounded-full shadow-[0_0_8px_rgba(38,84,124,0.6)]"
          ></div>
        </div>
        <h2 class="text-3xl md:text-4xl font-bold gradient-text pb-1">
          Mes compétences
        </h2>
      </div>

      <!-- Skills grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

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
  animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
}
</style>
