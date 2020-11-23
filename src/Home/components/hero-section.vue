<template>
  <v-container fluid class="ma-0 pb-0 pt-0">
    <v-row class="ml-12 mt-12 mb-12">
      <v-col
          cols="12"
          class="mt-12 mb-12"
      >
        <v-card
            outlined
            class="transparent"
        >
          <h2 class="hero-title">Success begins with<br />learning sales essentials.</h2>
          <p class="hero-text">One of the biggest challenges facing any startup is landing the first few paying customers. Often with no prior sales experience, most technical founders hack their way into initial sales attempts — missing crucial first customer opportunities and exhausting precious startup time and capital.</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
    name: "hero-section",
    data: () => ({
        justify: 'center'
    }),
    method: {
      redirectFounders(){
        this.$router.push({ name: 'Founders' })
      },
      redirectAccelerators(){
        this.$router.push({ name: 'Accelerators' })
      }
    }
}
</script>
<style>
* {
  font-family: "Roboto",sans-serif;
}
.hero-title {
  font-size: 92px;
  line-height: 92px;
  margin: 25px 0px;
  color: #993333;
}
.transparent {
  background-color: white!important;
  opacity: 0.95;
  border-color: transparent!important;
}
.hero-text {
  font-size:20px;
  font-weight: 400;
  line-height: 28px;
  color: #555555;
  width:800px;
}
</style>
