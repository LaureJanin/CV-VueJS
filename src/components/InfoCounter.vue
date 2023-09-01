<script setup>
import Counter from "./Counter.vue";
import { ref } from "vue";

const counters = ref([
  {
    title: "50",
    content: "Projets completed",
  },
  {
    title: "45",
    content: "Github repository",
  },
  {
    title: "5",
    content: "Years expereiences",
  },
  {
    title: "700",
    content: "Youtube subscribers",
  },
]);
</script>

<template>
  <div class="separator"></div>
  <div id="info--counter">
    <Counter class="count" v-for="(counter, index) in counters" :key="index">
      <template #title>{{ counter.title }}+</template>
      <template #content>{{ counter.content }}</template>
    </Counter>
  </div>
  <div class="separator"></div>
</template>

<style scoped>
#info--counter {
  display: flex;
  flex-wrap: wrap;
}
#info--counter .count {
  width: 50%;
  padding-top: 1rem;
}
.separator {
  height: 3px;
  background: #F0F0F5;
  margin-top: 1rem;
}

@media screen and (min-width: 780px) {
    #info--counter {
    display: flex;
    flex-wrap: nowrap;
  }
}

</style>
