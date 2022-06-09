<template>
  <div class="NotFound">
    <v-btn class="font-weight-black" :to="{ name: 'Default' }"
      >Retouner sur le site</v-btn
    >
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { VBtn } from "vuetify/lib";

export default Vue.extend({
  name: "NotFound",
  components: { VBtn },
});
</script>

<style lang="scss">
</style>