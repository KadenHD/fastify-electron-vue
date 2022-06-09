<template>
  <div class="LinkDrawer">
    <v-list-item
      v-for="(item, i) in linkTab"
      @click="drawerRedirect(item.value)"
      :key="i"
    >
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-title>{{ item.text }}</v-list-item-title>
    </v-list-item>
    <v-list-item v-if="logout" @click="clickedLogout()">
      <v-list-item-icon>
        <v-icon>mdi-logout-variant</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Déconnexion</v-list-item-title>
    </v-list-item>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { VListItem, VListItemIcon, VIcon, VListItemTitle } from "vuetify/lib";
import router from "@/router";
import store from "@/store";

export default Vue.extend({
  name: "LinkDrawer",
  components: { VListItem, VListItemIcon, VIcon, VListItemTitle },
  props: {
    linkTab: Array,
    logout: Boolean,
  },
  methods: {
    drawerRedirect(value: string) {
      if (router.currentRoute.name != value) {
        router.push({ name: value });
      }
    },
    clickedLogout() {
      store.dispatch("logout");
    },
  },
});
</script>

<style lang="scss">
</style>
            
