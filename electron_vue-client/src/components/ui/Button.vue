<template>
  <div class="UiButton">
    <v-btn class="mt-4" @click="handleClick" :color="color">
      {{ value }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { VBtn } from "vuetify/lib";

export default Vue.extend({
  name: "UiButton",
  components: {
    VBtn,
  },
  props: {
    handleClick: Function,
    color: String,
    value: String,
  },
});
</script>

<style lang="scss">
</style>