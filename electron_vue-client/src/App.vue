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
import NavBar from "@/components/NavBar.vue";
import Vue from "vue";

export default Vue.extend({
  name: "App",
  components: {
    NavBar,
  },
});
</script>