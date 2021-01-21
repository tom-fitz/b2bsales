<template>
  <v-container fluid class="ma-0 pb-0 pt-0">
    <v-row :class="[$vuetify.breakpoint.mdAndUp ? 'ml-12 mb-12' : 'ml-2', 'mt-12', 'd-flex']">
      <v-col
          cols="12"
          class="mt-12 mb-12"
      >
        <v-card
            outlined
            class="transparent flex"
        >
          <v-card-title :class="[
              $vuetify.breakpoint.lgAndUp ? 'hero-title-md' : '',
              $vuetify.breakpoint.mdOnly ? 'hero-title-md' : '',
              $vuetify.breakpoint.smAndDown ? 'hero-title-xs' : 'hero-title-md',
              'hero-title'
              ]">Success begins with learning sales essentials.</v-card-title>
          <v-card-text :class="[$vuetify.breakpoint.mdAndUp ? 'hero-text-md' : 'hero-text-sm', 'hero-text']">One of the biggest challenges facing any startup is landing the first few paying customers. Often with no prior sales experience, most technical founders hack their way into initial sales attempts — missing crucial first customer opportunities and exhausting precious startup time and capital.</v-card-text>
        </v-card>
      </v-col>
  </v-row>
  </v-container>
</template>
<script>
export default {
  name: "hero-section"
}
</script>
<style scoped>
* {
  font-family: "Roboto",sans-serif;
}
.hero-title {
  margin: 25px 0;
  color: #993333;
  max-width: 680px;
}
.hero-title-md {
  font-size: 92px;
  line-height: 92px;
}
.hero-title-sm {
  font-size: 55px;
  line-height: 55px;
}
.hero-title-xs {
  font-size: 45px;
  line-height: 45px;
}
.transparent {
  background-color: white!important;
  opacity: 0.95;
  border-color: transparent!important;
}
.hero-text {
  font-weight: 400;
  color: #555555;
  max-width: 800px;
}
.hero-text-md {
  font-size: 20px;
  line-height: 28px;
}
.hero-text-sm {
  font-size: 14px;
  line-height: 22px;
}
</style>
