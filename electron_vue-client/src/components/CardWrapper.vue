<template>
  <div class="Wrapper">
    <v-row class="ml-1 mr-1 mt-4" justify="center">
      <v-card width="800" elevation="8">
        <v-container>
          <v-card-title v-if="title">{{ title }}</v-card-title>
          <slot></slot>
          <v-card-subtitle v-if="subtitle">* {{ subtitle }}</v-card-subtitle>
        </v-container>
      </v-card>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {
  VRow,
  VCard,
  VContainer,
  VCardTitle,
  VCardSubtitle,
} from "vuetify/lib";

export default Vue.extend({
  name: "CardWrapper",
  components: {
    VRow,
    VCard,
    VContainer,
    VCardTitle,
    VCardSubtitle,
  },
  props: {
    subtitle: String,
    title: String,
  },
});
</script>

<style lang="scss">
</style>