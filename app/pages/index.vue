<template>
  <div class="min-h-screen text-gray-dark font-sans">
    <Header @scroll-to="scrollToSection" />
    <main class="pt-20">
      <HeroSection>
        <template #contact-bar>
          <HeroContactBar />
        </template>

        <template #stats>
          <HeroStats />
        </template>

        <template #description>
          <HeroDescription />
        </template>

        <template #skills>
          <HeroSkills />
        </template>

        <template #cta-buttons>
          <a
            href="mailto:fb.felixberger@gmail.com"
            class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue to-blue-light shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            {{ t("hero.cta.contact") }}
          </a>
          <a
            href="/CV - Félix BERGER.pdf"
            download
            class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-blue bg-blue/10 border border-blue/20 hover:bg-blue/20 hover:scale-105 transition-all duration-300"
          >
            {{ t("hero.cta.cv") }}
          </a>
        </template>
      </HeroSection>

      <section id="projets">
        <Projects>
          <ProjectCard
            v-for="p in projects"
            :key="p.id"
            :featured="p.featured"
            :image="p.image"
            :alt="t(`projects.${p.id}.title`)"
            :title="t(`projects.${p.id}.title`)"
            :description="t(`projects.${p.id}.desc`)"
            :href="p.href"
            :aria-label="t(`projects.${p.id}.aria`)"
            :tags="p.tags"
          />
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
                <span class="text-gray-dark/60 font-medium">{{
                  t("career.loading")
                }}</span>
              </div>
            </div>
          </template>
        </Suspense>
      </section>

      <section id="skills">
        <Skills>
          <CompetenceCard
            v-for="s in skills"
            :key="s.id"
            :title="t(`skills.${s.id}.title`)"
            :tags="s.tags"
            :bullets="skillBullets(s.id)"
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
          <p class="text-sm text-gray/60 mt-2">{{ t("footer.tagline") }}</p>
        </div>
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from "vue";
import Header from "../components/Header.vue";
import HeroSection from "../components/intro/IntroSection.vue";
import Projects from "../components/project/Projects.vue";
import Skills from "../components/skill/Skills.vue";
import HeroContactBar from "../components/intro/IntroContactBar.vue";
import HeroDescription from "../components/intro/IntroDescription.vue";
import HeroSkills from "../components/intro/IntroSkills.vue";
import HeroStats from "../components/intro/IntroStats.vue";
import ProjectCard from "../components/project/ProjectCard.vue";
import CompetenceCard from "../components/skill/SkillCard.vue";
import { projects } from "../data/projects";
import { skills } from "../data/skills";

const CareerFlowLazy = defineAsyncComponent(
  () => import("../components/flow/CareerFlow.vue"),
);

const { t, tm, rt, locale } = useI18n();

function skillBullets(id: string): string[] {
  return (tm(`skills.${id}.bullets`) as unknown[]).map((b) => rt(b as never));
}

// --- SEO & social sharing ---
const siteUrl = "https://www.felixberger.fr";
const ogImage = `${siteUrl}/og-image.png`;

useSeoMeta({
  title: () => t("seo.title"),
  description: () => t("seo.description"),
  ogTitle: () => t("seo.title"),
  ogDescription: () => t("seo.description"),
  ogType: "website",
  ogUrl: () => (locale.value === "fr" ? siteUrl : `${siteUrl}/en`),
  ogImage: ogImage,
  ogLocale: () => (locale.value === "fr" ? "fr_FR" : "en_US"),
  ogLocaleAlternate: () => (locale.value === "fr" ? "en_US" : "fr_FR"),
  twitterCard: "summary_large_image",
  twitterTitle: () => t("seo.title"),
  twitterDescription: () => t("seo.description"),
  twitterImage: ogImage,
});

// i18n SEO: <html lang>, canonical + hreflang alternates, og:url, og:locale
const localeHead = useLocaleHead({ seo: true });
useHead(() => ({
  htmlAttrs: localeHead.value.htmlAttrs,
  link: [
    ...(localeHead.value.link ?? []),
    {
      rel: "canonical",
      href: locale.value === "fr" ? siteUrl : `${siteUrl}/en`,
    },
  ],
  meta: localeHead.value.meta,
}));

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Félix Berger",
        jobTitle: "Chef de projet IT & Développeur Full-Stack",
        url: siteUrl,
        email: "fb.felixberger@gmail.com",
        sameAs: [
          "https://www.linkedin.com/in/felix-berger/",
          "https://github.com/FelixB69",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lyon",
          addressCountry: "FR",
        },
      }),
    },
  ],
});

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
