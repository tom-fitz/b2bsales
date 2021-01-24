<template>
    <v-container fluid class="pa-0 ma-0">
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
                <v-card-title class="testimonial-page-title">Testimonials.</v-card-title>
                <v-card-text class="testimonial-page-text">
                  <p>Here what others are saying about us.</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-container fluid class="pa-0 ma-0">
            <v-row>
              <v-col>
                <v-row class="ml-12 mr-12">
                  <v-col
                      justify="center"
                      align-center
                      cols="12"
                      xs="12"
                      sm="3"
                      v-for="(x, i) in testimonials.list" :key="i"
                  >
                      <v-card
                          class="pa-2 mb-10 ml-5 mr-5"
                          max-width="350"
                          light
                          style="border-color:#993333;"
                      >
                        <v-img :src="x.imageName" aspect-ratio="1.1"></v-img>
                        <v-card-title class="red-title">{{ x.name }}</v-card-title>
                        <v-card-subtitle class="red-sub-title"><strong>{{ x.subHeading }}</strong></v-card-subtitle>
                        <v-card-text>{{ x.quote }}</v-card-text>
                      </v-card>
                  </v-col>
                </v-row>
              </v-col>
              <v-col
                  cols="12"
              >
                <v-row class="ml-12">
                  <Logos/>
                  <FooterSection/>
                </v-row>
              </v-col>
            </v-row>
        </v-container>
    </v-row>
    </v-container>
</template>
<script>
import FooterSection from "./modules/footer-section";
import Navigation from "./modules/navigation-section";
import Logos from "@/Home/modules/logo-banner-section";
import {mapState} from "vuex";
export default {
  name: "testimonial",
  components: {
    Navigation,
    FooterSection,
    Logos,
  },
  data(){
      return {
          testimonialList: [],
          programLeaderList: [],
          founderList: [],
          toggle: 0
      }
  },
  computed: {
    ...mapState({
      testimonials: ['testimonials']
    })
  },
  created(){
    this.$store.dispatch('getTestimonials')
        .then(resp => {
          this.editableTest = Object.assign({}, resp)
        })
        .catch(() => null)
  },
}
</script>
<style scoped>
.testimonial-page-title {
  font-size:92px;
  line-height: 92px;
  margin: 25px 0;
  color: #993333;
}
.testimonial-page-text {
  font-size:20px;
  font-weight: 400;
  line-height: 28px;
  color: #555555;
}
.red-title {
  color: rgb(153, 0, 0);
  font-size: 1.7em;
}
.red-sub-title {
  color: rgb(153, 0, 0) !important;
  opacity: 0.7;
}
.testimonial-avatar {
  border-radius: 50% !important;
}
</style>
