<template>
  <div class="NavBar">
    <div class="NavWrapper">
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
            <div v-if="currentUser.role.label === 'ROLE_ADMIN'">
              <link-nav :linkTab="linkTab.admin" logout> </link-nav>
            </div>
            <div v-if="currentUser.role.label === 'ROLE_USER'">
              <link-nav :linkTab="linkTab.user" logout> </link-nav>
            </div>
            <div v-if="!currentUser">
              <link-nav :linkTab="linkTab.unlog"> </link-nav>
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
    </div>
    <div class="DrawerWrapper">
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title> {{ appTitle }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list nav dense>
          <v-list-item-group>
            <div v-if="currentUser.role.label === 'ROLE_ADMIN'">
              <link-drawer :linkTab="linkTab.admin" logout></link-drawer>
            </div>
            <div v-if="currentUser.role.label === 'ROLE_USER'">
              <link-drawer :linkTab="linkTab.user" logout></link-drawer>
            </div>
            <div v-if="!currentUser">
              <link-drawer :linkTab="linkTab.unlog"></link-drawer>
            </div>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import {
  VAppBar,
  VImg,
  VDivider,
  VAppBarTitle,
  VRow,
  VSpacer,
  VAppBarNavIcon,
  VNavigationDrawer,
  VListItem,
  VListItemContent,
  VListItemTitle,
  VList,
  VListItemGroup,
} from "vuetify/lib";
import LinkNav from "@/components/navbar/LinkNav.vue";
import LinkDrawer from "@/components/navbar/LinkDrawer.vue";

export default Vue.extend({
  name: "NavBar",
  components: {
    VAppBar,
    VImg,
    VDivider,
    VAppBarTitle,
    VRow,
    VSpacer,
    VAppBarNavIcon,
    VNavigationDrawer,
    VListItem,
    VListItemContent,
    VListItemTitle,
    VList,
    VListItemGroup,
    LinkNav,
    LinkDrawer,
  },
  data: () => {
    return {
      appTitle: "Swashing",
      drawer: false,
      linkTab: {
        admin: [],
        user: [],
        unlog: [
          { icon: "mdi-login-variant", text: "Connexion", value: "Login" },
          {
            icon: "mdi-account-plus",
            text: "Inscription",
            value: "Register",
          },
        ],
      },
    };
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
});
</script>