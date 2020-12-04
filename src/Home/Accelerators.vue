<!--<template>-->
<!--    <v-container fluid class="pa-0 ma-0">-->
<!--      <Navigation/>-->
<!--      <v-row class="pa-0 ml-12 mt-12 mb-12 background-image">-->
<!--        <v-col cols="6" class="pb-0 pt-0">-->
<!--          <v-row-->
<!--              justify-start-->
<!--          >-->
<!--            <v-col md="12">-->
<!--              <v-card-->
<!--                  class="mt-10 pt-0 mx-auto"-->
<!--                  tile-->
<!--                  elevation="0"-->
<!--              >-->
<!--                <v-card-title class="accelerator-title">Accelerators.</v-card-title>-->
<!--                <v-card-text class="accelerator-text" v-html="accelerators[0]">-->
<!--                </v-card-text>-->
<!--              </v-card>-->
<!--            </v-col>-->
<!--          </v-row>-->
<!--        </v-col>-->
<!--      </v-row>-->
<!--        <v-row>-->
<!--          <TestimonialsSection/>-->
<!--          <Logos/>-->
<!--          <Footer />-->
<!--        </v-row>-->
<!--    </v-container>-->
<!--</template>-->
<!--<script>-->
<!--import Navigation from "../Home/components/navigation-section"-->
<!--import Footer from "../Home/components/footer-section"-->
<!--import TestimonialsSection from "../Home/components/testimonials-section"-->
<!--import Logos from "../Home/components/logo-banner-section"-->
<!--export default {-->
<!--  name: "accelerators-section",-->
<!--  components: {-->
<!--      Navigation,-->
<!--      Footer,-->
<!--      TestimonialsSection,-->
<!--      Logos,-->
<!--  },-->
<!--  data(){-->
<!--    return {-->
<!--      accelerators: ["<p>The one-day CRASHCOURSE in B2B Sales provides founders &amp; key startup personnel a highly-accelerated education in the endto-end B2B sales process — addressing the critical needs and challenges that most founders will face during the first 2-3 years of starting a new venture, compressed into two intensive half-day sessions.</p>\n                  <p>The morning session covers the basic \"tools and mechanics\" required for sales focus and efficiency. The afternoon session addresses important qualitative aspects of successful seller-buyer interaction — with many effective techniques to engage prospective customers, build a business case and decision-making team consensus, overcome common objections and decision barriers, and proven approaches to product pricing, packaging, proposal development and negotiation to close deals.</p>\n                  <p>The CRASHCOURSE combines lecture, lots of attendee interaction, and real-world anecdotes from 25+ years of different sales situations. To reinforce the material presented during the day, attendees will also trouble-shoot a number of “failed sales” mini-case studies to recommend corrective sales action or behavior.</p>"]-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->
<!--<style scoped>-->
<!--.accelerator-title {-->
<!--  font-size:92px;-->
<!--  line-height: 92px;-->
<!--  margin: 25px 0px;-->
<!--  color: #993333;-->
<!--}-->
<!--.accelerator-text {-->
<!--  font-size:20px;-->
<!--  font-weight: 400;-->
<!--  line-height: 28px;-->
<!--  color: #555555;-->
<!--}-->
<!--.background-image {-->
<!--    background: rgb(255,255,255);-->
<!--    background: linear-gradient(90deg, rgba(255,255,255,1) 60%, rgba(255,255,255,0) 100%), url("../assets/2_test.jpg");-->
<!--    background-size: cover;-->
<!--}-->
<!--</style>-->
<template>
  <v-container fluid class="pt-12 ma-0">
    <Navigation/>
    <v-row class="pa-0 ml-12 mt-12 mb-12 accelerators-background-image">
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
              <v-card-title class="accelerators-title">{{ accelerators.title }}</v-card-title>
              <v-card-text class="accelerators-text" v-html="accelerators.text">
              </v-card-text>
              <v-card-actions>
                <v-btn
                    outlined
                    style=""
                    class="tip-button"
                    target="_blank"
                    :href="accelerators.buttonLink"
                    v-if="accelerators.buttonText !== ''"
                >
                  {{ accelerators.buttonText }} <v-icon>mdi-chevron-right</v-icon>
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
  name: "accelerators-page",
  components: {
    Navigation,
    Footer,
    TestimonialsSection,
    Logos,
  },
  data(){
    return {
      name: "accelerators"
    }
  },
  computed: {
    ...mapState({
      accelerators: ['accelerators']
    })
  },
  created() {
    this.$store.dispatch("getData", this.name)
  }
}
</script>
<style scoped>
.accelerators-title {
  font-size:92px;
  line-height: 92px;
  margin: 25px 0px;
  color: #993333;
}
.accelerators-text {
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
.accelerators-background-image {
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255,255,255,1) 60%, rgba(255,255,255,0) 100%), url("../assets/2_test.jpg");
  background-size: cover;
}
</style>
