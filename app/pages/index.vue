<template>
  <div class="min-h-screen text-gray-dark font-sans">
    <Header @scroll-to="scrollToSection" />
    <main class="pt-20">
      <HeroSection>
        <template #contact-bar>
          <HeroContactBar />
        </template>

        <template #description>
          <HeroDescription />
        </template>

        <template #skills>
          <HeroSkills />
        </template>
      </HeroSection>

      <section id="projets">
        <Projects>
          <!-- Project Simulator -->
          <ProjectCard
            image="/img/project1.png"
            alt="Projet A"
            title="Dev, votre salaire est-il aligné avec le marché ?"
            href="https://simulateur.felixberger.fr/"
            :ariaLabel="'Ouvrir le simulateur'"
            :tags="['Next.js', 'Node.js', 'NestJS', 'TensorFlow']"
          >
            Découvrez en quelques secondes si votre rémunération correspond aux
            standards actuels grâce à un <b>simulateur</b> basé sur plus de 500
            salaires analysés via du machine learning.
          </ProjectCard>

          <!-- Project Dashboard -->
          <ProjectCard
            image="/img/project2.png"
            alt="Projet B"
            title="Dev, quel salaire en France ?"
            href="https://salaires.felixberger.fr/"
            :ariaLabel="'Ouvrir le dashboard salaires'"
            :tags="['Angular', 'Node.js', 'NestJS']"
          >
            Consultez ce tableau de bord et découvrez les salaires des
            développeurs de votre région. Données extraites de
            <a
              href="https://salaires.dev"
              target="_blank"
              rel="noopener"
              class="text-blue font-medium hover:underline"
              >salaires.dev</a
            >.
          </ProjectCard>
        </Projects>
      </section>

      <section id="parcours" ref="flowContainer">
        <Suspense>
          <template #default>
            <CareerFlowLazy v-if="showFlow" />
          </template>
          <template #fallback>
            <div
              class="h-[500px] sm:h-[650px] md:h-[800px] bg-white/50 backdrop-blur-sm rounded-3xl flex items-center justify-center text-gray mx-6 md:mx-20"
            >
              <div class="flex flex-col items-center gap-4">
                <div
                  class="w-10 h-10 border-4 border-blue/30 border-t-blue rounded-full animate-spin"
                ></div>
                <span class="text-gray-dark/60 font-medium"
                  >Chargement du parcours...</span
                >
              </div>
            </div>
          </template>
        </Suspense>
      </section>

      <section id="skills">
        <Skills>
          <CompetenceCard
            title="Pilotage & Management"
            :tags="['Scrum', 'Jira', 'Team Lead', 'UX/UI', 'Freelance']"
            :bullets="[
              `Lancement d'un produit SaaS : de la roadmap à la mise en production`,
              `Pilotage d'un projet freelance (Kiweeto) : architecture y compris encadrement et gestion de projet`,
              `Pilotage d'une refonte logicielle avec un partenaire UX/UI`,
              `Structuration et pilotage d'une équipe IT en mode agile`,
            ]"
          />

          <CompetenceCard
            title="Architecture & Process"
            :tags="['Architecture', 'Qualité', 'Orchestration']"
            :bullets="[
              `Mise en place d'une architecture microservices`,
              `Élaboration d'un Plan de Continuité d'Activité (PCA)`,
              `Modélisation d'une cartographie du SI`,
              `Mise en place d'une CI/CD, de processus de déploiement, de code review…`,
              `Orchestration de conteneurs via Docker et CapRover`,
            ]"
          />

          <CompetenceCard
            title="Stack technique"
            :tags="[
              'TypeScript',
              'Node',
              'React',
              'Next.js',
              'NestJS',
              'Supabase',
              'Firebase',
              'Socket.io',
              'SQL',
              'Angular',
            ]"
            :bullets="[
              `Refonte de l'API et de l'UX/UI d'une application existante utilisée par plus de 200 clients (3 000 utilisateurs)`,
              `Création d'une application web professionnelle from scratch utilisée par plus de 200 utilisateurs`,
              `Développement d'une application web complexe (Kiweeto) : Next.js, Supabase, Socket.io`,
              `Mise en place d'une API complète avec authentification et tests`,
            ]"
          />
        </Skills>
      </section>

      <!-- Modern Footer -->
      <footer class="relative py-8 mt-2">
        <!-- Subtle top border -->
        <div
          class="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gray/10"
        ></div>

        <div class="relative z-10 text-center">
          <p class="text-gray font-medium">
            © {{ new Date().getFullYear() }} —
            <span class="text-blue font-semibold">Félix Berger</span>
          </p>
          <p class="text-sm text-gray/60 mt-2">Fait avec passion à Lyon</p>
        </div>
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, defineAsyncComponent } from "vue";
import Header from "../components/Header.vue";
import HeroSection from "../components/intro/IntroSection.vue";
import Projects from "../components/project/Projects.vue";
import Skills from "../components/skill/Skills.vue";
import HeroContactBar from "../components/intro/IntroContactBar.vue";
import HeroDescription from "../components/intro/IntroDescription.vue";
import HeroSkills from "../components/intro/IntroSkills.vue";
import ProjectCard from "../components/project/ProjectCard.vue";
import CompetenceCard from "../components/skill/SkillCard.vue";

const CareerFlowLazy = defineAsyncComponent(
  () => import("../components/flow/CareerFlow.vue"),
);

const flowContainer = ref<HTMLElement | null>(null);
const showFlow = ref(false);

onMounted(() => {
  const preloadDelay = 1500;

  if (typeof window.requestIdleCallback === "function") {
    window.requestIdleCallback(() => {
      setTimeout(() => {
        showFlow.value = true;
      }, preloadDelay);
    });
  } else {
    setTimeout(() => {
      showFlow.value = true;
    }, preloadDelay);
  }
});

function smoothScrollTo(selector: string) {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function onScrollToProjets(e: Event) {
  e.preventDefault();
  smoothScrollTo("#projets");
}

function onScrollToCompetences(e: Event) {
  e.preventDefault();
  smoothScrollTo("#competences");
}

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};
</script>

<style scoped>
/* Responsive tweaks */
@media (max-width: 640px) {
  header nav {
    display: none;
  }
  header .container {
    padding-left: 14px;
    padding-right: 14px;
  }

  .cta-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  .cta-buttons :deep(a) {
    width: 100%;
    text-align: center;
  }
}
</style>
