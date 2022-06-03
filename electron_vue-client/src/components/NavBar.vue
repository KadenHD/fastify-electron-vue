<template>
  <div class="NavBar">
    <v-app-bar app absolute elevation="8">
      <router-link class="mr-1 ml-1" :to="{ name: 'Default' }">
        <v-img
          src="@/assets/logo.png"
          lazy-src="@/assets/logo.png"
          class="mx-auto"
          max-width="50"
        ></v-img
      ></router-link>
      <v-divider class="mr-5 ml-2" vertical inset></v-divider>
      <v-app-bar-title class="hidden-md-and-up" align-items="center">{{
        appTitle
      }}</v-app-bar-title>
      <div class="hidden-sm-and-down">
        <v-row justify="start" align-items="center">
          <div class="ml-2 mr-2 nav-link" v-for="(item, i) in linkTab" :key="i">
            <router-link :to="{ name: item.value }">{{
              item.text
            }}</router-link>
          </div>
        </v-row>
      </div>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        id="drawer"
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title> Actions </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group>
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
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
// import { mapGetters } from "vuex";
// import store from "@/store";
import router from "@/router";
import Vue from "vue";

export default Vue.extend({
  name: "NavBar",
  data: () => {
    return {
      appTitle: "Swashing",
      drawer: false,
      linkTab: [
        { icon: "mdi-login-variant", text: "Connexion", value: "Login" },
        { icon: "mdi-account-plus", text: "Inscription", value: "Register" },
        { icon: "mdi-account-multiple", text: "Utilisateurs", value: "Users" },
      ],
    };
  },
  methods: {
    drawerRedirect(value: string) {
      if (router.currentRoute.name != value) {
        router.push({ name: value });
      }
    },
  },
});
</script>

<style lang="scss">
.NavBar {
  .nav-link a {
    text-decoration: none;
  }
  .router-link-exact-active,
  .router-link-active {
    color: var(--v-primary-lighten2);
  }
}
</style>