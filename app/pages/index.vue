<template>
  <div class="min-h-screen bg-gray-light text-gray-dark font-sans">
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

        <template #cta-buttons>
          <HeroCTAs
            :on-projets="onScrollToProjets"
            :on-competences="onScrollToCompetences"
            class="cta-buttons"
          />
        </template>
      </HeroSection>

      <section id="projets">
        <Projects>
          <!-- Project Simulator -->
          <ProjectCard
            image="/img/project1.png"
            alt="Projet A"
            title="Dev, votre salaire est-il aligné avec le marché ?"
            href="https://simulator-rh.felixberger.fr/"
            :ariaLabel="'Ouvrir le simulateur'"
            :tags="['Next.js', 'Node.js', 'TensorFlow']"
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
            href="https://dev-rh.felixberger.fr/"
            :ariaLabel="'Ouvrir le dashboard salaires'"
            :tags="['Angular', 'Node.js']"
          >
            Consultez ce tableau de bord et découvrez les salaires des
            développeurs de votre région. Données extraites de
            <a
              href="https://salaires.dev"
              target="_blank"
              rel="noopener"
              class="text-blue underline"
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
              class="h-[500px] sm:h-[650px] md:h-[800px] bg-gray-50 rounded-2xl flex items-center justify-center text-gray"
            >
              Chargement...
            </div>
          </template>
        </Suspense>
      </section>

      <section id="skills">
        <Skills>
          <CompetenceCard
            title="Produit & Management"
            :tags="['Scrum', 'Jira', 'Team Lead', 'UX/UI']"
            :bullets="[
              'Lancement d’un produit SaaS : de la roadmap à la mise en production',
              'Pilotage d’un projet interne avec un partenaire UX/UI',
              'Structuration et pilotage d’une équipe IT en mode agile',
            ]"
          />

          <CompetenceCard
            title="Architecture & Process"
            :tags="['Architecture', 'Qualité', 'Orchestration']"
            :bullets="[
              'Mise en place d’une architecture microservices',
              'Élaboration d’un Plan de Continuité d’Activité (PCA)',
              'Modélisation d’une cartographie du SI',
              'Mise en place d’une CI/CD, de processus de déploiement, de code review…',
              'Orchestration de conteneurs via Docker et CapRover',
            ]"
          />

          <CompetenceCard
            title="Stack technique"
            :tags="[
              'TypeScript',
              'Node',
              'React',
              'NestJS',
              'SQL / NoSQL',
              'Angular',
            ]"
            :bullets="[
              'Mise en place d’une API complète avec authentification et tests',
              'Création d’une application web from scratch utilisée par plus de 200 utilisateurs',
              'Refonte UX/UI d’une application existante utilisée par plus de 200 clients (3 000 utilisateurs)',
            ]"
          />
        </Skills>
      </section>

      <footer class="py-12 text-center text-sm text-gray">
        © {{ new Date().getFullYear() }} - Félix Berger
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
import HeroCTAs from "../components/intro/IntroCTAs.vue";
import ProjectCard from "../components/project/ProjectCard.vue";
import CompetenceCard from "../components/skill/SkillCard.vue";

const CareerFlowLazy = defineAsyncComponent(
  () => import("../components/flow/CareerFlow.vue"),
);

const flowContainer = ref<HTMLElement | null>(null);
const showFlow = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          showFlow.value = true;
          observer.disconnect();
          break;
        }
      }
    },
    { root: null, rootMargin: "300px", threshold: 0.01 },
  );

  if (flowContainer.value) observer.observe(flowContainer.value);

  onUnmounted(() => observer.disconnect());
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

// si tu as déjà une fonction, remplace ou utilise la tienne
const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};
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
