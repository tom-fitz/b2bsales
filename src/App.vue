<template>
  <v-app id="inspire">
    <Navigation v-if="!this.$route.meta.admin"/>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from "./Home/modules/navigation-section"
export default {
  name: 'App',
  components: {
    Navigation,
  }
};
</script>
<style>
.v-card__text, .v-card__title {
  word-break: normal !important;
}
</style>
