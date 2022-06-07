<template>
  <div class="App">
    <v-app>
      <nav-bar />
      <v-main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { VApp, VMain, VContainer } from "vuetify/lib";
import NavBar from "@/components/NavBar.vue";

export default Vue.extend({
  name: "App",
  components: {
    VApp,
    VMain,
    VContainer,
    NavBar,
  },
});
</script>

<style lang="scss">
</style>