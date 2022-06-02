<template>
  <div class="Wrapper">
    <v-row class="ml-1 mr-1 mt-4" justify="center">
      <v-card width="800" elevation="8">
        <v-card-title v-if="title">{{ title }}</v-card-title>
        <slot></slot>
        <v-card-subtitle v-if="subtitle">{{ subtitle }}</v-card-subtitle>
      </v-card>
    </v-row>
  </div>
</template>

<script lang="ts">
export default {
  name: "CardWrapper",
  props: {
    subtitle: String,
    title: String,
  },
};
</script>