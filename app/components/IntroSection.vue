<template>
  <section id="hero" class="min-h-[60vh] flex items-center">
    <div class="container mx-auto px-6 md:px-10 lg:px-20 py-8">
      <div class="max-w-3xl mx-auto">
        <div
          class="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center transform transition hover:shadow-[0_30px_60px_rgba(38,84,124,0.12)] animate-fade-in-up"
          style="border: 1px solid rgba(39, 52, 68, 0.06)"
        >
          <!-- Avatar -->
          <div class="relative mb-4">
            <img
              src="../../img/pp-fb.png"
              alt="Logo"
              class="inline-flex items-center justify-center w-40 h-40 bg-blue text-white rounded-full mx-auto text-xl font-bold shadow-md"
            />
          </div>
          <!-- Contact bar -->
          <div class="flex justify-center gap-5 mt-4">
            <slot name="contact-bar"></slot>
          </div>
          <h1
            class="text-3xl md:text-4xl font-extrabold text-blue leading-tight my-1"
          >
            Félix Berger
          </h1>
          <p class="text-lg text-gray mb-4">
            Team lead | Développeur Full-stack | Chef de projet technique
          </p>
          <slot name="description"></slot>
          <div class="mt-8 flex flex-wrap justify-center gap-3 mb-6">
            <slot name="skills"></slot>
          </div>
          <div class="flex items-center justify-center gap-4 mt-8">
            <slot name="cta-buttons"></slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
