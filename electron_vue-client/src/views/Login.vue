<template>
  <div class="Login">
    <card-wrapper :title="title" :subtitle="subtitle">
      <v-form ref="form">
        <ui-input
          v-for="(item, index) in inputs"
          :key="index"
          :rules="item.rules"
          :label="item.label"
          :counter="item.counter"
          :type="item.type"
          v-model="item.value"
        />
        <ui-button
          :handleClick="submitLoginForm"
          color="primary"
          value="Se connecter"
        />
      </v-form>
    </card-wrapper>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { VForm } from "vuetify/lib";
import CardWrapper from "@/components/CardWrapper.vue";
import UiInput from "@/components/ui/Input.vue";
import UiButton from "@/components/ui/Button.vue";
import { emailRule, passwordRule } from "@/utils/inputRule";
import store from "@/store";

export default Vue.extend({
  name: "Login",
  components: { VForm, CardWrapper, UiInput, UiButton },
  data: () => ({
    inputs: {
      email: {
        value: null,
        rules: emailRule,
        label: "E-mail",
        counter: false,
        type: "email",
      },
      password: {
        value: null,
        rules: passwordRule,
        label: "Mot de passe",
        counter: true,
        type: "password",
      },
    },
    title: "Connexion",
    subtitle:
      "Nous ne montrons vos informations personnelles à aucun autre utilisateur",
  }),
  methods: {
    submitLoginForm() {
      const form: any = this.$refs.form;
      if (form.validate()) {
        const data = {
          email: this.inputs.email.value,
          password: this.inputs.password.value,
        };
        store.dispatch("login", data);
      }
    },
  },
});
</script>

<style lang="scss">
</style>