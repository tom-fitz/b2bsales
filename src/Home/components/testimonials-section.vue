<template>
  <v-container fluid class="test-cont">
    <v-hover v-slot:default="{ hover }">
      <v-carousel
          show-arrows-on-hover
          hide-delimiters
          height="650"
          :cycle="!hover"
      >
        <v-carousel-item
            v-for="(t, i) in testimonials.list"
            :key="i"
            reverse-transition="fade-transition"
            transition="fade-transition"
        >
          <v-sheet
              height="100%"
              light
              tile
              color="white"
              class=""
          >
            <v-row
                class="fill-height"
                align="center"
                justify="center"
            >
              <v-col cols="10">
                <v-card
                    height=""
                    align="center"
                    justify="center"
                    class="testimonial-card pa-6"
                    outlined
                >
                  <v-card-title
                      align="center"
                      justify="center"
                  >
                    <v-row
                        class="fill-height flex-column ml-10 mr-10"
                        justify="center"
                        align="center"
                    >
                      <div class="quote arrow_box">
                        <span class="left">❝</span>
                        <blockquote>
                          {{ t.quote }}
                        </blockquote>
                        <span class="right">❞</span>
                      </div>
                    </v-row>
                    <v-row
                        class="fill-height flex-column mt-10"
                        justify="center"
                        align="center"
                    >
                      <v-row
                          justify="center"
                          align="center"
                      >
                        <v-col cols="2">
                          <v-avatar
                              size="150"
                              class="elevation"
                          >
                            <v-img
                                :src="t.imageName"
                                contain
                            ></v-img>
                          </v-avatar>
                        </v-col>
                        <v-col
                            cols="8"
                            align="left"
                            class="pl-6"
                        >
                          <p class="quote-name">{{ t.name }}</p>
                          <p class="quote-title">{{ t.subHeading }}</p>
                        </v-col>
                      </v-row>
                    </v-row>
                  </v-card-title>
                </v-card>
              </v-col>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-hover>
  </v-container>
</template>
<script>
import {mapState} from "vuex";

export default {
  name: "testimonials-section",
  data () {
    return {
      testimonialList: [],
    }
  },
  computed: {
    ...mapState({
      testimonials: ['testimonials']
    })
  },
  created(){
    this.$store.dispatch('getTestimonials')
        .catch(() => null)
  }
}
</script>
<style scoped>
.test-cont {
  margin-bottom: 148px !important;
}

/*Option 2*/
.testimonial-card {
  border: none !important;
  padding: 6px;
  border-radius: 0 !important;
}

.quote {
  text-align: center;
  font-size: 1.6rem;
  line-height: 38px;
  margin: auto;
  border: 2px solid #993333;
  position: relative;
  margin-top: 100px;
}

.quote-name {
  font-size: 1.8rem;
  line-height:34px;
  color: #993333;
  margin: 0;
}

.quote-title {
  font-size: 1.4rem;
  line-height: 34px;
  color: #666666;
}

blockquote {
  color: #666666;
  font-style: italic;
  position: relative;
  z-index: 20;
  padding: 65px;
}

.left {
  position: absolute;
  top: -50px;
  left: -20px;
  width: 150px;
  text-align: left;
  z-index: 10;
  font-size: 9rem;
  color: #993333;
  background-color: white;
  line-height: 200px;
}

.right {
  position: absolute;
  bottom: -50px;
  right: -20px;
  width: 150px;
  text-align: right;
  z-index: 10;
  font-size: 9rem;
  color: #993333;
  background-color: white;
  line-height: 200px;
}

small {
  font-size: 1.7rem;
  color: #993333;
  position: relative;
  z-index: 20;
}
small:before {
  content: "\2014 \0020";
  width: 5px;
}

.arrow_box {
  position: relative;
}
.arrow_box:after, .arrow_box:before {
  top: 100%;
  left: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}

.arrow_box:after {
  border-color: rgba(136, 183, 213, 0);
  border-top-color: #993333;
  border-width: 30px;
  margin-left: -30px;
}
.arrow_box:before {
  border-color: rgba(194, 225, 245, 0);
  border-top-color: #993333;
  border-width: 30px;
  margin-left: -30px;
}

.elevation {
  -webkit-box-shadow: 0 0 8px 0 rgba(153,153,153,1);
  -moz-box-shadow: 0 0 8px 0 rgba(153,153,153,1);
  box-shadow: 0 0 8px 0 rgba(153,153,153,1);
}

</style>