<template>
    <v-content class="d-flex">
<!--      <HeroSection/>-->
      <WhoWeServeSection/>
<!--      <TestimonialsSection/>-->
      <ProgramsSection/>
<!--      <LogoBannerSection/>-->
<!--      <FooterSection/>-->
    </v-content>
</template>
<script>
import WhoWeServeSection from "./components/who-we-serve-section"
// import HeroSection from './components/hero-section'
// import TestimonialsSection from "./components/testimonials-section"
// import LogoBannerSection from "./components/logo-banner-section"
import ProgramsSection from "./components/programs-section"
// import FooterSection from "./components/footer-section"
export default {
  name: 'Home',
  components: {
    // HeroSection,
    WhoWeServeSection,
    // TestimonialsSection,
    // LogoBannerSection,
    ProgramsSection,
    // FooterSection,
  },

  data(){
    return {
      drawer: false,
      alignment: 'center',
      justify: 'center'
    }
  },
  props: {
    source: String
  }
};
</script>
<style scoped>
.zero-padding {
  padding: 0 !important;
}
</style>