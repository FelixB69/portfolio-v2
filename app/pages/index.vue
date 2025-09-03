<template>
  <main>
    <!-- Section Accueil -->
    <section id="accueil" class="section accueil">
      <h1>Bienvenue sur mon portfolio</h1>
      <p>Je suis [Votre Nom], développeur web.</p>
    </section>

    <!-- Section À propos -->
    <section id="a-propos" class="section a-propos">
      <h2>À propos de moi</h2>
      <p>Quelques lignes pour te présenter.</p>
    </section>

    <!-- Section Projets -->
    <section id="projets" class="section projets">
      <h2>Mes projets</h2>
      <ul>
        <li>Projet 1</li>
        <li>Projet 2</li>
        <li>Projet 3</li>
      </ul>
    </section>

    <!-- Section Compétences -->
    <section id="competences" class="section competences">
      <h2>Compétences</h2>
      <ul>
        <li>HTML/CSS</li>
        <li>JavaScript</li>
        <li>Vue/Nuxt</li>
      </ul>
    </section>

    <!-- Section Contact -->
    <section id="contact" class="section contact">
      <h2>Contact</h2>
      <form>
        <input type="text" placeholder="Votre nom" required />
        <input type="email" placeholder="Votre email" required />
        <textarea placeholder="Votre message" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  </main>
</template>

<script setup lang="ts">
// Tu pourras ajouter ici la logique de ton portfolio
</script>

<style scoped>
.section {
  padding: 60px 0;
  max-width: 900px;
  margin: 0 auto;
}
.accueil {
  text-align: center;
  background: #f5f5f5;
}
.a-propos,
.projets,
.competences,
.contact {
  margin-top: 40px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 400px;
}
button {
  background: #007bff;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background: #0056b3;
}
</style>
