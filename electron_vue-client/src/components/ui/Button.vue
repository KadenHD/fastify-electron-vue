<template>
  <div class="UiButton">
    <v-btn class="mt-4" @click="handleClick" :color="color">
      {{ value }}
    </v-btn>
  </div>
</template>

<script lang="ts">
export default {
  name: "UiButton",
  props: {
    handleClick: Function,
    color: String,
    value: String,
  },
};
</script>