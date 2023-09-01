<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const state = ref(false);
const links = ref([
  { name: "Home", path: "/" },
  { name: "Project", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
]);

const router = useRouter();
</script>

<template>
  <div id="header">
    <img src="../assets/logo.svg" alt="logo" class="img" />

    <!-- menu mobile -->
    <div class="burger" @click="state = !state" :class="{ 'burger-open': state }">
      <div class="trait"></div>
      <div class="trait"></div>
      <div class="trait"></div>
    </div>
    <div class="menu--burger" :class="{ open: state }">
      <ul v-if="state" class="links--burger">
        <li v-for="(link, index) in links" :key="index"> 
          <router-link class="link--burger" :to="link.path" @click="state = !state">{{ link.name }}</router-link>  
        </li>
      </ul>
    </div>

    <!-- menu desktop -->
    <ul class="links">
      <li v-for="(link, index) in links" :key="index"> 
        <router-link class="link" :to="link.path">{{ link.name }}</router-link>  
      </li>
    </ul>
  </div>
</template>

<style scoped>
#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#header .img {
  height: 50px;
  z-index: 2;
}

#header .burger .trait {
  height: 3px;
  width: 23px;
  background-color: #000;
  margin-bottom: 3px;
}

#header .menu--burger {
  height: 100vh;
  width: 100vw;
  background-color: #6a9d89;
  position: fixed;
  top: 0;
  left: 100%;
  transition: 0.3s;
}

#header .open {
  left: 0%;
}

#header .burger-open {
  z-index: 2;
}

#header .links {
  display: none;
}

#header .links--burger {
display: flex;
flex-direction: column;
align-items: center;
gap: 3rem;
margin-top: 150px;
list-style-type: none;
}
#header .link--burger {
text-decoration: none;
color:#eb9ec4;
font-size: 18px;
}

#header .link--burger:hover {
  color: #000;
}

@media screen and (min-width: 780px) {

  #header .burger,
  #header .menu--burger {
    display: none;
  }

  #header .links {
    display: flex;
  }
  
  #header .links li {
    list-style-type: none;
    margin-right: 10px;
    font-weight: 500;
    text-decoration: none;
  }
  #header .links a {
    text-decoration: none;
    color: #000;
  }

  #header .links a:hover {
    color:#eb9ec4;
  }
}
</style>
