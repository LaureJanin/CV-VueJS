<script setup>
import { ref } from "vue";
const skills = ref([
  { name: "HTML" },
  { name: "CSS" },
  { name: "SCSS" },
  { name: "JavaScript" },
  { name: "React" },
  { name: "Vue.Js" },
  { name: "Node JS" },
  { name: "SQL" },
  { name: "Express" },
  { name: "UX/UI Design" },
  { name: "Responsive Design" },
  { name: "SEO" },
]);
</script>

<template>
    <h1>Skills</h1>
    <div class="skills">
        <p v-for="(skill, index) in skills" :key="index">{{ skill.name}}</p>
    </div>
</template>

<style scoped>
h1 {
color: #eb9ec4;
margin-top: 1.5rem;
margin-bottom: 1rem;
text-align: center;
}
.skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 2rem;
    font-weight: 500;
}

@media screen and (min-width: 780px) {
    h1 {
        text-align:left;
    }
    .skills {
        width: 80%;
        margin: auto;
        display:flex;
        justify-content: flex-start;
        gap: 6rem;
    }
}
</style>