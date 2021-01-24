<template>
  <v-container fluid class="pt-12 ma-0">
    <Navigation/>
    <v-row class="pa-0 ml-12 mt-12 mb-12">
      <v-col cols="6" class="pb-0 pt-0">
        <v-row
            justify-start
        >
          <v-col md="12">
            <v-card
                class="mt-10 pt-0 mx-auto"
                tile
                elevation="0"
                max-height="650"
            >
              <!-- Calendly inline widget begin -->
              <div class="calendly-inline-widget" data-url="https://calendly.com/b2b-test-account?primary_color=993333" style="min-width:320px;height:780px;"></div>
              <script type="application/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
              <!-- Calendly inline widget end -->
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <TestimonialsSection/>
      <Logos/>
      <Footer />
    </v-row>
  </v-container>
</template>
<script>
import Footer from "./modules/footer-section"
import Navigation from "./modules/navigation-section"
import TestimonialsSection from "./modules/testimonials-section"
import Logos from "./modules/logo-banner-section"

export default {
  name: "calendar-office-page",
  components: {
    Navigation,
    Footer,
    TestimonialsSection,
    Logos,
  },
}
</script>
<style scoped>
.calendar-office-title {
  font-size:92px;
  line-height: 92px;
  margin: 25px 0px;
  color: #993333;
}
.calendar-office-text {
  font-size:20px;
  font-weight: 400;
  line-height: 28px;
  color: #555555;
}
.tip-button {
  color: #993333 !important;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 4.5px;
  padding: 25px !important;
}
.calendar-office-background-image {
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255,255,255,1) 60%, rgba(255,255,255,0) 100%), url("../assets/3_banner.png");
  background-size: cover;
}
</style>
