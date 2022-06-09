<template>
  <div class="LinkNav">
    <v-row justify="start" align-items="center">
      <div class="ml-2 mr-2 nav-link" v-for="(item, i) in linkTab" :key="i">
        <router-link :to="{ name: item.value }">{{ item.text }}</router-link>
      </div>
      <v-spacer></v-spacer>
      <div class="ml-2 mr-2 nav-link" v-if="logout">
        <a @click="clickedLogout()">Déconnexion</a>
      </div>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { VRow } from "vuetify/lib";
import store from "@/store";

export default Vue.extend({
  name: "LinkNav",
  components: { VRow },
  props: {
    linkTab: Array,
    logout: Boolean,
  },
  methods: {
    clickedLogout() {
      store.dispatch("logout");
    },
  },
});
</script>

<style lang="scss">
.LinkNav {
  .nav-link a {
    text-decoration: none;
  }
  .router-link-exact-active,
  .router-link-active {
    color: var(--v-primary-lighten2);
  }
}
</style>