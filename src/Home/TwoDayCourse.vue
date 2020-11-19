<template>
  <v-container fluid class="pt-12 ma-0">
    <Navigation/>
    <v-row class="pa-0 ml-12 mt-12 mb-12 twoDayCourse-background-image">
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
              <v-card-title class="twoDayCourse-title">{{ twoDayCourse.title }}</v-card-title>
              <v-card-text class="twoDayCourse-text" v-html="twoDayCourse.text">
              </v-card-text>
              <v-card-actions>
                <v-btn
                    outlined
                    style=""
                    class="tip-button"
                    target="_blank"
                    :href="twoDayCourse.buttonLink"
                    v-if="twoDayCourse.buttonText !== ''"
                >
                  {{ twoDayCourse.buttonText }} <v-icon>mdi-chevron-right</v-icon>
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
  name: "twoDayCourse-page",
  components: {
    Navigation,
    Footer,
    TestimonialsSection,
    Logos,
  },
  data(){
    return {
      name: "twoDayCourse"
    }
  },
  computed: {
    ...mapState({
      twoDayCourse: ['twoDayCourse']
    })
  },
  created() {
    this.$store.dispatch("getData", this.name)
  }
}
</script>
<style scoped>
.twoDayCourse-title {
  font-size:92px;
  line-height: 92px;
  margin: 25px 0px;
  color: #993333;
}
.twoDayCourse-text {
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
.twoDayCourse-background-image {
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255,255,255,1) 60%, rgba(255,255,255,0) 100%), url("../assets/3_banner.png");
  background-size: cover;
}
</style>
