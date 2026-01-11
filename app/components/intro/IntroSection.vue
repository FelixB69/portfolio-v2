<template>
  <section id="hero" class="min-h-[60vh] flex items-center">
    <div class="container mx-auto px-6 md:px-10 lg:px-20 py-10">
      <div class="max-w-3xl mx-auto">
        <div
          class="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center transform transition hover:shadow-[0_30px_60px_rgba(38,84,124,0.12)] animate-fade-in-up"
          style="border: 1px solid rgba(39, 52, 68, 0.06)"
        >
          <!-- Avatar -->
          <div class="relative mb-4">
            <img
              src="/img/pp-fb.png"
              alt="Félix Berger"
              class="inline-flex items-center justify-center w-40 h-40 rounded-full mx-auto shadow-md object-cover"
            />
            <!-- Status indicator -->
            <div
              class="absolute bottom-2 right-1/2 translate-x-[70px] w-5 h-5 bg-green rounded-full border-4 border-white shadow-lg"
            ></div>
          </div>

          <!-- Contact bar -->
          <div class="flex justify-center gap-5 mt-4">
            <slot name="contact-bar"></slot>
          </div>

          <!-- Name -->
          <h1
            class="text-3xl md:text-4xl font-extrabold text-blue leading-tight my-4"
          >
            Félix Berger
          </h1>

          <!-- Role -->
          <div class="flex flex-wrap justify-center gap-3 mb-6">
            <span
              class="px-5 py-2 bg-blue/10 text-blue rounded-full font-bold text-base border border-blue/20"
            >
              Team lead
            </span>
            <span
              class="px-5 py-2 bg-blue/10 text-blue rounded-full font-bold text-base border border-blue/20"
            >
              Développeur Full-stack
            </span>
            <span
              class="px-5 py-2 bg-blue/10 text-blue rounded-full font-bold text-base border border-blue/20"
            >
              Chef de projet technique
            </span>
          </div>

          <!-- Description -->
          <slot name="description"></slot>

          <!-- Skills -->
          <div class="mt-8 flex flex-wrap justify-center gap-3 mb-6">
            <slot name="skills"></slot>
          </div>

          <!-- CTA Buttons -->
          <div class="flex items-center justify-center gap-4 mt-8">
            <slot name="cta-buttons"></slot>
          </div>
        </div>
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
  animation: fade-in-up 0.6s ease both;
}
</style>
