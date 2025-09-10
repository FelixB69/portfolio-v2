<template>
  <div class="min-h-screen bg-gray-light text-gray-dark font-sans">
    <!-- Top navigation -->
    <header
      class="fixed top-0 left-0 right-0 z-30 bg-white/40 backdrop-blur-sm border-b border-white/10"
    >
      <div
        class="container mx-auto px-6 md:px-10 lg:px-5 py-4 flex items-center justify-between"
      >
        <div class="flex items-center gap-4">
          <img
            src="../assets/img/logo-fb.png"
            alt="Logo"
            class="h-30 w-30 object-contain"
          />
        </div>
      </div>
    </header>

    <main class="pt-24">
      <!-- Hero - centered card -->
      <section id="hero" class="min-h-[60vh] flex items-center mt-9">
        <div class="container mx-auto px-6 md:px-10 lg:px-20 py-12">
          <div class="max-w-2xl mx-auto">
            <div
              class="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center transform transition hover:shadow-[0_30px_60px_rgba(38,84,124,0.12)] animate-fade-in-up"
              style="border: 1px solid rgba(39, 52, 68, 0.06)"
            >
              <!-- Avatar & Contact -->
              <div class="relative mb-4">
                <button
                  class="absolute top-0 right-0 bg-gray-dark text-white px-4 py-2 rounded-full text-sm shadow-md hover:brightness-95 transition"
                >
                  Contactez-moi
                </button>
                <img
                  src="../assets/img/pp-fb.jpg"
                  alt="Logo"
                  class="inline-flex items-center justify-center w-50 h-50 bg-blue text-white rounded-full mx-auto text-xl font-bold shadow-md"
                />
              </div>

              <h1
                class="text-3xl md:text-4xl font-extrabold text-blue leading-tight mb-1"
              >
                Félix Berger
              </h1>
              <p class="text-lg text-gray mb-4">
                Team lead | Développeur Full-stack | Chef de projet technique
              </p>
              <p class="text-lg text-gray mb-4">
                Je recherche continuellement à allier design, accessibilité et
                performance pour répondre aux enjeux métiers des entreprises.
              </p>

              <!-- Compétences -->
              <div class="mt-4 flex flex-wrap justify-center gap-3 mb-6">
                <span
                  class="px-3 py-1 rounded-full bg-gray/10 text-gray-dark text-xs font-medium"
                  >HTML</span
                >
                <span
                  class="px-3 py-1 rounded-full bg-gray/10 text-gray-dark text-xs font-medium"
                  >CSS</span
                >
                <span
                  class="px-3 py-1 rounded-full bg-gray/10 text-gray-dark text-xs font-medium"
                  >Vue</span
                >
                <span
                  class="px-3 py-1 rounded-full bg-gray/10 text-gray-dark text-xs font-medium"
                  >Tailwind</span
                >
                <span
                  class="px-3 py-1 rounded-full bg-gray/10 text-gray-dark text-xs font-medium"
                  >Figma</span
                >
              </div>

              <div class="flex items-center justify-center gap-4 mt-4">
                <a
                  href="#projets"
                  class="inline-flex items-center gap-3 px-6 py-3 bg-pink text-white rounded-full shadow hover:scale-105 transition transform animate-pop"
                >
                  Voir mes projets
                </a>
                <a
                  href="#competences"
                  class="text-sm text-gray hover:text-blue transition"
                  >Voir mes compétences →</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects -->
      <section
        id="projets"
        class="container mx-auto px-6 md:px-10 lg:px-20 py-12 pt-[150px]"
      >
        <h2
          class="text-2xl md:text-3xl font-bold text-blue mb-8 animate-fade-in-up"
        >
          Projets sélectionnés
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Project A -->
          <article
            class="relative group rounded-xl overflow-hidden shadow-lg bg-white transform transition hover:scale-[1.02] duration-300"
          >
            <img
              src="../assets/img/project1.png"
              alt="Projet A"
              class="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div
              class="absolute top-0 left-0 right-0 h-56 md:h-64 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>

            <div class="p-6 flex flex-col items-center">
              <h3 class="text-xl font-semibold text-blue mb-2">
                Dev, votre salaire est-il aligné avec le marché ?
              </h3>
              <p class="mt-2 text-sm text-gray-dark text-center max-w-xl">
                Découvrez en quelques secondes si votre rémunération correspond
                aux standards actuels grâce à un <b>simulateur</b> basé sur plus
                de 500 salaires analysés grâce au machine learning.
              </p>
              <div class="mt-4 flex flex-wrap gap-2 justify-center">
                <span
                  class="text-xs bg-blue text-white px-3 py-1 rounded-full font-medium"
                  >Next.js</span
                >
                <span
                  class="text-xs bg-green text-white px-3 py-1 rounded-full font-medium"
                  >Node.js</span
                >
                <span
                  class="text-xs bg-orange text-gray-dark px-3 py-1 rounded-full font-medium"
                  >TensorFlow</span
                >
              </div>
            </div>
            <a class="absolute inset-0" href="#"></a>
          </article>

          <!-- Project B -->
          <article
            class="relative group rounded-xl overflow-hidden shadow-lg bg-white transform transition hover:scale-[1.02] duration-300"
          >
            <img
              src="../assets/img/project2.png"
              alt="Projet B"
              class="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div
              class="absolute top-0 left-0 right-0 h-56 md:h-64 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div class="p-6 flex flex-col items-center">
              <h3 class="text-xl font-semibold text-blue mb-2">
                Dev, quel salaire en France ?
              </h3>
              <p class="mt-2 text-sm text-gray-dark text-center max-w-xl">
                Consultez ce tableau de bord et découvrez les salaires des
                développeurs de votre région. Données extraites de
                <a href="https://salaires.dev" class="text-blue underline"
                  >salaires.dev</a
                >.
              </p>
              <div class="mt-4 flex flex-wrap gap-2 justify-center">
                <span
                  class="text-xs bg-pink text-white px-3 py-1 rounded-full font-medium"
                  >Angular</span
                >
                <span
                  class="text-xs bg-green text-white px-3 py-1 rounded-full font-medium"
                  >Node.js</span
                >
              </div>
            </div>
            <a class="absolute inset-0" href="#"></a>
          </article>
        </div>
      </section>

      <!-- Skills -->
      <section
        id="competences"
        class="container mx-auto px-6 md:px-10 lg:px-20 py-12"
      >
        <h2
          class="text-2xl md:text-3xl font-bold text-blue mb-6 animate-fade-in-up"
        >
          Compétences
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Produit & Management -->
          <div
            class="bg-white rounded-xl p-6 shadow hover:shadow-xl transition transform hover:-translate-y-2"
          >
            <h4 class="font-semibold mb-3">Produit & Management</h4>
            <p class="text-sm text-gray mb-4">
              Lancement de produit SaaS, roadmap, mise en production<br />
              Refonte logicielle, pilotage UX/UI<br />
              Structuration et pilotage d’équipe IT (agile)
            </p>
            <div class="flex gap-2 flex-wrap">
              <span class="px-3 py-1 bg-blue text-white rounded-full text-xs"
                >Agile</span
              >
              <span class="px-3 py-1 bg-green text-white rounded-full text-xs"
                >Team Lead</span
              >
              <span class="px-3 py-1 bg-pink text-white rounded-full text-xs"
                >UX/UI</span
              >
            </div>
          </div>

          <!-- Architecture & Process -->
          <div
            class="bg-white rounded-xl p-6 shadow hover:shadow-xl transition transform hover:-translate-y-2"
          >
            <h4 class="font-semibold mb-3">Architecture & Process</h4>
            <p class="text-sm text-gray mb-4">
              Plan de Continuité d’Activité (PCA), résilience SI<br />
              CI/CD, code review, qualité logicielle<br />
              API Rest & GraphQL, Docker
            </p>
            <div class="flex gap-2 flex-wrap">
              <span
                class="px-3 py-1 bg-orange text-gray-dark rounded-full text-xs"
                >CI/CD</span
              >
              <span class="px-3 py-1 bg-blue text-white rounded-full text-xs"
                >Docker</span
              >
              <span class="px-3 py-1 bg-green text-white rounded-full text-xs"
                >API</span
              >
              <span class="px-3 py-1 bg-pink text-white rounded-full text-xs"
                >Qualité</span
              >
            </div>
          </div>

          <!-- Stack technique -->
          <div
            class="bg-white rounded-xl p-6 shadow hover:shadow-xl transition transform hover:-translate-y-2"
          >
            <h4 class="font-semibold mb-3">Stack technique</h4>
            <p class="text-sm text-gray mb-4">
              Toujours à la recherche des technologies modernes et adaptées aux
              projets.
            </p>
            <div class="flex gap-2 flex-wrap">
              <span class="px-3 py-1 bg-blue text-white rounded-full text-xs"
                >TypeScript</span
              >
              <span class="px-3 py-1 bg-green text-white rounded-full text-xs"
                >React</span
              >
              <span class="px-3 py-1 bg-pink text-white rounded-full text-xs"
                >Angular</span
              >
              <span
                class="px-3 py-1 bg-orange text-gray-dark rounded-full text-xs"
                >Node.js</span
              >
              <span class="px-3 py-1 bg-blue text-white rounded-full text-xs"
                >NestJS</span
              >
              <span class="px-3 py-1 bg-green text-white rounded-full text-xs"
                >SQL</span
              >
              <span class="px-3 py-1 bg-pink text-white rounded-full text-xs"
                >Firebase</span
              >
            </div>
          </div>
        </div>
      </section>

      <footer class="py-12 text-center text-sm text-gray">
        © {{ new Date().getFullYear() }} - Félix Berger
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
// logique possible : load projects dynamiquement, router anchors, etc.
</script>

<style scoped>
/* Animations */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes zoom-in {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes pop {
  0% {
    transform: scale(0.98);
  }
  60% {
    transform: scale(1.03);
  }
  100% {
    transform: scale(1);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}
.animate-zoom-in {
  animation: zoom-in 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}
.animate-pop {
  animation: pop 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both;
}

.container {
  max-width: 1200px;
}

/* Responsive tweaks */
@media (max-width: 640px) {
  header nav {
    display: none;
  }
  header .container {
    padding-left: 14px;
    padding-right: 14px;
  }
}
</style>
