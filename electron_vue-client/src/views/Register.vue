<template>
  <div class="Register">
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
          :handleClick="submitRegisterForm"
          color="primary"
          value="S'incrire"
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
import {
  firstNameRule,
  lastNameRule,
  emailRule,
  passwordRule,
} from "@/utils/inputRule";
import store from "@/store";

export default Vue.extend({
  name: "Register",
  components: { VForm, CardWrapper, UiInput, UiButton },
  data: () => ({
    inputs: {
      lastname: {
        value: null,
        rules: lastNameRule,
        label: "Nom",
        counter: false,
        type: "text",
      },
      firstname: {
        value: null,
        rules: firstNameRule,
        label: "Prénom",
        counter: false,
        type: "text",
      },
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
    valid: false,
    title: "Inscription",
    subtitle:
      "Nous ne montrons vos informations personnelles à aucun autre utilisateur",
  }),
  methods: {
    submitRegisterForm() {
      const form: any = this.$refs.form;
      if (form.validate()) {
        const data = {
          lastname: this.inputs.lastname.value,
          firstname: this.inputs.firstname.value,
          email: this.inputs.email.value,
          password: this.inputs.password.value,
        };
        store.dispatch("register", data);
      }
    },
  },
});
</script>

<style lang="scss">
</style>