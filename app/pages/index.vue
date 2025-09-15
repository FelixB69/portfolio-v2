<template>
  <div class="min-h-screen bg-gray-light text-gray-dark font-sans">
    <!-- Top navigation -->
    <header
      class="fixed top-0 left-0 right-0 z-30 bg-white/40 backdrop-blur-sm border-b border-white/10"
    >
      <div
        class="container mx-auto px-6 md:px-10 lg:px-5 py-2 flex items-center justify-between"
      >
        <div class="flex items-center">
          <img
            src="../assets/img/logo-fb.png"
            alt="Logo"
            class="h-25 w-25 object-contain"
          />
        </div>
      </div>
    </header>

    <main class="pt-20">
      <!-- Hero - centered card -->
      <section id="hero" class="min-h-[60vh] flex items-center">
        <div class="container mx-auto px-6 md:px-10 lg:px-20 py-12">
          <div class="max-w-3xl mx-auto">
            <div
              class="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center transform transition hover:shadow-[0_30px_60px_rgba(38,84,124,0.12)] animate-fade-in-up"
              style="border: 1px solid rgba(39, 52, 68, 0.06)"
            >
              <!-- Avatar-->
              <div class="relative mb-4">
                <img
                  src="../assets/img/pp-fb.png"
                  alt="Logo"
                  class="inline-flex items-center justify-center w-40 h-40 bg-blue text-white rounded-full mx-auto text-xl font-bold shadow-md"
                />
              </div>
              <!-- Contact bar -->
              <div class="flex justify-center gap-5 mt-4">
                <!-- Email -->
                <a
                  href="mailto:fb.felixberger@gmail.com"
                  target="_blank"
                  rel="noopener"
                  aria-label="Email"
                  class="transition transform hover:scale-110 bg-gray-dark text-white rounded-full h-8 w-8 flex items-center justify-center"
                >
                  <UIcon
                    name="i-heroicons-envelope"
                    class="w-5 h-5 text-white"
                  />
                </a>

                <!-- LinkedIn -->
                <a
                  href="https://www.linkedin.com/in/felix-berger/"
                  target="_blank"
                  rel="noopener"
                  aria-label="LinkedIn"
                  class="transition transform hover:scale-110 bg-gray-dark hover:text-blue rounded-full h-8 w-8 flex items-center justify-center"
                >
                  <UIcon
                    name="i-simple-icons-linkedin"
                    class="w-4 h-4 text-white"
                  />
                </a>

                <!-- GitHub -->
                <a
                  href="https://github.com/FelixB69"
                  target="_blank"
                  rel="noopener"
                  aria-label="GitHub"
                  class="transition transform hover:scale-110 bg-gray-dark hover:text-[#171515] rounded-full h-8 w-8 flex items-center justify-center"
                >
                  <UIcon
                    name="i-simple-icons-github"
                    class="w-5 h-5 text-white"
                  />
                </a>
              </div>

              <h1
                class="text-3xl md:text-4xl font-extrabold text-blue leading-tight mb-1"
              >
                Félix Berger
              </h1>
              <p class="text-lg text-gray mb-4">
                Team lead | Développeur Full-stack | Chef de projet technique
              </p>
              <p class="text-md text-gray mb-4">
                Avec <b>7+ans</b> d’expérience dans l'industrie logicielle et
                <b>3+ ans</b>
                dans le développement web, j’accompagne les éditeurs dans la
                conception et la réalisation de projets à fort impact.
              </p>
              <p class="text-md text-gray mb-4">
                Actuellement
                <b>Responsable du Développement Informatique</b> chez Likewatt,
                je contribue à la transition numérique des acteurs des énergies
                renouvelables. Je pilote et développe des projets IT
                stratégiques, de la réflexion à l’exécution.
              </p>

              <!-- Skills -->
              <div class="mt-8 flex flex-wrap justify-center gap-3 mb-6">
                <span class="px-3 py-1 rounded-full bg-blue text-white text-xs"
                  >Full-Stack</span
                >
                <span class="px-3 py-1 rounded-full bg-blue text-white text-xs"
                  >Typescript</span
                >
                <span class="px-3 py-1 rounded-full bg-blue text-white text-xs"
                  >Node.js</span
                >
                <span class="px-3 py-1 rounded-full bg-blue text-white text-xs"
                  >React / Next</span
                >
                <span class="px-3 py-1 rounded-full bg-blue text-white text-xs"
                  >NestJS</span
                >
              </div>

              <div class="flex items-center justify-center gap-4 mt-8">
                <a
                  href="#projets"
                  @click="onScrollToProjets"
                  class="inline-flex items-center gap-3 px-6 py-3 bg-pink text-white rounded-full shadow hover:scale-105 transition transform animate-pop"
                >
                  Découvrir mes projets
                </a>
                <a
                  href="#competences"
                  @click="onScrollToCompetences"
                  class="inline-flex items-center gap-3 px-6 py-3 bg-white text-pink rounded-full border border-pink shadow hover:scale-105 transition transform animate-pop"
                >
                  Voir mes compétences
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects -->
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
                <span class="text-xs bg-blue text-white px-3 py-1 rounded-full"
                  >Next.js</span
                >
                <span class="bg-green text-white px-3 py-1 rounded-full text-xs"
                  >Node.js</span
                >
                <span
                  class="bg-orange text-gray-dark px-3 py-1 rounded-full text-xs"
                  >TensorFlow</span
                >
              </div>
            </div>
            <a
              class="absolute inset-0"
              href="https://simulator-rh.felixberger.fr/"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
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
                <span class="text-xs bg-pink text-white px-3 py-1 rounded-full"
                  >Angular</span
                >
                <span class="text-xs bg-green text-white px-3 py-1 rounded-full"
                  >Node.js</span
                >
              </div>
            </div>
            <a
              class="absolute inset-0"
              href="https://dev-rh.felixberger.fr/"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </article>
        </div>
      </section>

      <!-- Skills -->
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
          <!-- Produit & Management -->
          <div
            class="bg-white rounded-xl p-6 shadow hover:shadow-xl transition transform hover:-translate-y-2"
          >
            <div class="flex gap-2 flex-wrap mb-4 justify-start">
              <span class="px-3 py-1 bg-blue text-white rounded-full text-xs"
                >Scrum</span
              >
              <span
                class="px-3 py-1 bg-orange text-gray-dark rounded-full text-xs"
                >Jira</span
              >
              <span class="px-3 py-1 bg-green text-white rounded-full text-xs"
                >Team Lead</span
              >
              <span class="px-3 py-1 bg-pink text-white rounded-full text-xs"
                >UX/UI</span
              >
            </div>
            <h4 class="font-semibold mb-3">Produict & Management</h4>
            <ul class="list-disc list-inside text-sm text-gray mb-4 text-left">
              <li>
                Lancement d'un produit SaaS : de la roadmap à la mise en
                production
              </li>
              <li>Pilotage d'un projet interne avec un partenaire UX/UI</li>
              <li>Structuration et pilotage d’une équipe IT en mode agile</li>
              ...
            </ul>
          </div>

          <!-- Architecture & Process -->
          <div
            class="bg-white rounded-xl p-6 shadow hover:shadow-xl transition transform hover:-translate-y-2"
          >
            <div class="flex gap-2 flex-wrap mb-4 justify-start">
              <span class="px-3 py-1 bg-green text-white rounded-full text-xs"
                >Architecture</span
              >

              <span class="px-3 py-1 bg-pink text-white rounded-full text-xs"
                >Qualité</span
              >

              <span class="px-3 py-1 bg-blue text-white rounded-full text-xs"
                >Orchestration</span
              >
            </div>
            <h4 class="font-semibold mb-3">Architecture & Process</h4>

            <ul class="list-disc list-inside text-sm text-gray mb-4 text-left">
              <li>Mise en place d'une architecture avec des microservices</li>
              <li>Elaboration d'un plan de Continuité d’Activité (PCA)</li>
              <li>Modélisation d'une cartographie du SI</li>
              <li>
                Mise en place d'une CI/CD, de processus de déploiement, de code
                review...
              </li>
              <li>Orchestration de conteneur via Docker et Caprover</li>
              ...
            </ul>
          </div>

          <!-- Stack technique -->
          <div
            class="bg-white rounded-xl p-6 shadow hover:shadow-xl transition transform hover:-translate-y-2"
          >
            <div class="flex gap-2 flex-wrap mb-4 justify-start">
              <span class="px-3 py-1 bg-blue text-white rounded-full text-xs"
                >TypeScript</span
              >
              <span
                class="px-3 py-1 bg-orange text-gray-dark rounded-full text-xs"
                >Node</span
              >
              <span class="px-3 py-1 bg-green text-white rounded-full text-xs"
                >React</span
              >
              <span class="px-3 py-1 bg-pink text-white rounded-full text-xs"
                >Angular</span
              >

              <span class="px-3 py-1 bg-green text-white rounded-full text-xs"
                >SQL / NoSQL</span
              >
              <span class="px-3 py-1 bg-blue text-white rounded-full text-xs"
                >NestJS</span
              >
            </div>
            <h4 class="font-semibold mb-3">Stack technique</h4>
            <ul class="list-disc list-inside text-sm text-gray mb-4 text-left">
              <li>
                Mise en place d'une API complète avec authentification et tests
              </li>
              <li>
                Création d'une application web from scratch utilisée par plus de
                200 utilisateurs
              </li>
              <li>
                Refonte UX/UI d'une application existantes utilisée par plus de
                200 clients (3000 utilisateurs)
              </li>
              ...
            </ul>
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
function smoothScrollTo(selector: string) {
  const el = document.querySelector(selector);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

function onScrollToProjets(e: Event) {
  e.preventDefault();
  smoothScrollTo("#projets");
}

function onScrollToCompetences(e: Event) {
  e.preventDefault();
  smoothScrollTo("#competences");
}
</script>

<style scoped>
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
