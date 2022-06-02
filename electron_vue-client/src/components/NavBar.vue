<template>
  <div class="NavBar">
    <v-app-bar app absolute>
      <router-link class="mr-1 ml-1" :to="{ name: 'Home' }">
        <v-img
          src="@/assets/logo.png"
          lazy-src="@/assets/logo.png"
          class="mx-auto"
          max-width="50"
        ></v-img
      ></router-link>
      <v-divider class="mr-5 ml-2" vertical inset></v-divider>
      <div>
        <router-link class="nav-link ml-2" :to="{ name: 'Login' }"
          >Connexion</router-link
        >
        <router-link class="nav-link ml-2" :to="{ name: 'Register' }"
          >Inscription</router-link
        >
      </div>
      <div>
        <router-link class="nav-link ml-2" :to="{ name: 'Home' }"
          >Accueil</router-link
        >
        <router-link class="nav-link ml-2" :to="{ name: 'Users' }"
          >Utilisateurs</router-link
        >
      </div>
      <v-app-bar-nav-icon
        id="drawer"
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title> Actions </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list dense>
        <v-list-group no-action :value="false" active-class="selection--text">
          <template v-slot:activator>
            <v-list-item-title>Non connecté</v-list-item-title>
          </template>
          <v-list-item>
            <v-list-item-title>lorem</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
// import { mapGetters } from "vuex";
// import store from "@/store";

export default {
  data() {
    const drawer: boolean = false;
    return {
      drawer,
    };
  },
  watch: {
    group() {
      console.log("drawer");
      this.drawer = false;
    },
  },
};
</script>

<style lang="scss">
.NavBar {
  .nav-link {
    text-decoration: none;
  }
  .router-link-exact-active,
  .router-link-active {
    color: var(--v-primary-lighten2);
  }
}
</style>