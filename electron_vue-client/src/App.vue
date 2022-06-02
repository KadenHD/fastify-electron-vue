<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <router-link class="nav-link" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="nav-link ml-2" :to="{ name: 'About' }"
          >About</router-link
        >
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://vuetifyjs.com/en/getting-started/installation/"
        target="_blank"
        text
      >
        Vuetify doc
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>

<style>
.nav-link {
  text-decoration: none;
  color: white !important;
}
</style>
