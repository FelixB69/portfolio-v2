<template>
  <section
    id="projets"
    class="container mx-auto px-6 md:px-10 lg:px-20 py-16 pt-[140px] relative"
  >
    <!-- Background decoration -->
    <div
      class="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
    >
      <div
        class="absolute top-40 -left-20 w-80 h-80 bg-blue/3 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-20 -right-20 w-96 h-96 bg-pink/3 rounded-full blur-3xl"
      ></div>
    </div>

    <div class="relative z-10">
      <!-- Section header -->
      <div class="flex items-center gap-4 mb-10 animate-fade-in-up">
        <div class="w-1.5 h-10 bg-blue rounded-full"></div>
        <h2 class="text-3xl md:text-4xl font-bold text-blue">
          Mes projets personnels
        </h2>
      </div>

      <!-- Projects grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
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
