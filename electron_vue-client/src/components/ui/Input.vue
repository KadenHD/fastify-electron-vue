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
export default {
  name: "UiInput",
  props: {
    rules: Array,
    label: String,
    counter: Boolean,
    type: String,
    value: String,
  },
};
</script>