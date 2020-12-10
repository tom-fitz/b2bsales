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
            >
              <v-card-title class="privacy-title">{{ privacy.title }}</v-card-title>
              <v-card-text class="privacy-text" v-html="privacy.text">
              </v-card-text>
              <v-card-actions>
                <v-btn
                    outlined
                    style=""
                    class="tip-button"
                    target="_blank"
                    :href="privacy.buttonLink"
                    v-if="privacy.buttonText !== ''"
                >
                  {{ privacy.buttonText }} <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </v-card-actions>
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
import Footer from "../Home/components/footer-section"
import Navigation from "../Home/components/navigation-section"
import TestimonialsSection from "../Home/components/testimonials-section"
import Logos from "../Home/components/logo-banner-section"
import { mapState } from "vuex";
export default {
  name: "privacy-page",
  components: {
    Navigation,
    Footer,
    TestimonialsSection,
    Logos,
  },
  data(){
    return {
      name: "privacy"
    }
  },
  computed: {
    ...mapState({
      privacy: ['privacy']
    })
  },
  created() {
    this.$store.dispatch("getData", this.name)
  }
}
</script>
<style scoped>
.privacy-title {
  font-size:92px;
  line-height: 92px;
  margin: 25px 0px;
  color: #993333;
}
.privacy-text {
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
</style>
