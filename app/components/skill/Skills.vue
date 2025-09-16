<template>
  <section
    id="competences"
    class="container mx-auto px-6 md:px-10 lg:px-20 py-12 pt-[130px]"
  >
    <h2
      class="text-2xl md:text-3xl font-bold text-blue mb-6 animate-fade-in-up"
    >
      Compétences
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <slot></slot>
    </div>
  </section>
</template>
