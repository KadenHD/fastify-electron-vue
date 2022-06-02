<template>
  <div class="Login">
    <card-wrapper :title="title" :subtitle="subtitle">
      <ui-input />
      <ui-button />
    </card-wrapper>
  </div>
</template>

<script lang="ts">
import CardWrapper from "@/components/CardWrapper.vue";
import UiInput from "@/components/ui/Input.vue";
import UiButton from "@/components/ui/Button.vue";

export default {
  data() {
    const title: string = "Connexion";
    const subtitle: string =
      "Nous ne montrons vos informations personnelles à aucun autre utilisateur";
    return { title, subtitle };
  },
  components: { CardWrapper, UiInput, UiButton },
};
</script>