<template>
  <div class="UiInput">
    <v-text-field
      :rules="rules"
      :label="label"
      :counter="counter"
      :type="type"
      :value="value"
      @input="$emit('input', $event)"
    ></v-text-field>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { VTextField } from "vuetify/lib";

export default Vue.extend({
  name: "UiInput",
  components: {
    VTextField,
  },
  props: {
    rules: Array,
    label: String,
    counter: Boolean,
    type: String,
    value: String,
  },
});
</script>

<style lang="scss">
</style>