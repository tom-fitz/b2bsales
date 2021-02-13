<template>
    <v-content class="d-flex">
      <HeroSection/>
      <WhoWeServeSection/>
      <TestimonialsSection/>
      <ProgramsSection/>
      <LogoBannerSection/>
      <FooterSection/>
    </v-content>
</template>
<script>
import WhoWeServeSection from "./modules/who-we-serve-section"
import HeroSection from './modules/hero-section'
import TestimonialsSection from "./modules/testimonials-section"
import LogoBannerSection from "./modules/logo-banner-section"
import ProgramsSection from "./modules/programs-section"
import FooterSection from "./modules/footer-section"
export default {
  name: 'Home',
  components: {
    HeroSection,
    WhoWeServeSection,
    TestimonialsSection,
    LogoBannerSection,
    ProgramsSection,
    FooterSection,
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