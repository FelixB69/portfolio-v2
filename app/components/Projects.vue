<template>
  <section
    id="projets"
    class="container mx-auto px-6 md:px-10 lg:px-20 py-12 pt-[140px]"
  >
    <h2
      class="text-2xl md:text-3xl font-bold text-blue mb-8 animate-fade-in-up"
    >
      Projets sélectionnés
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <slot></slot>
    </div>
  </section>
</template>
