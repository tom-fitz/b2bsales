<template>
  <v-container fluid :class="[
      $vuetify.breakpoint.mdAndUp ? 'test-cont-md' : '',
      $vuetify.breakpoint.smAndDown ? 'test-cont-sm' : 'test-cont-md'
  ]">
    <v-hover v-slot:default="{ hover }">
      <v-carousel
          height="auto"
          :show-arrows="$vuetify.breakpoint.mdAndUp ? hover : false"
          hide-delimiters
          :cycle="false"
      >
        <v-carousel-item
            v-for="(t, i) in testimonials.list"
            :key="i"
            reverse-transition="fade-transition"
            transition="fade-transition"
        >
          <v-sheet
              light
              tile
              color="white"
              class=""
          >
            <v-row
                class=""
                align="center"
                justify="center"
            >
              <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 10">
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
                        :class="[
                            $vuetify.breakpoint.mdAndUp ? 'ml-10 mr-10' : '',
                            $vuetify.breakpoint.smAndDown ? 'ml-0 mr-0' : '',
                            'flex-column fill-height'
                        ]"
                        justify="center"
                        align="center"
                    >
                      <div :class="[
                          $vuetify.breakpoint.mdAndUp ? 'quote-md' : '',
                          $vuetify.breakpoint.smAndDown ? 'quote-sm' : 'quote-md',
                          'arrow-box quote'
                      ]">
                        <span :class="[
                            $vuetify.breakpoint.mdOnly ? 'left-md' : 'left-md',
                            $vuetify.breakpoint.smAndDown ? 'left-sm' : '',
                            'left'
                        ]">❝</span>
                        <blockquote :class="[
                            $vuetify.breakpoint.mdAndUp ? 'blockquote-md' : '',
                            $vuetify.breakpoint.smAndDown ? 'blockquote-sm' : 'blockquote-md'
                        ]">
                          {{ t.quote }}
                        </blockquote>
                        <span :class="[
                            $vuetify.breakpoint.mdOnly ? 'right-md' : 'right-md',
                            $vuetify.breakpoint.smAndDown ? 'right-sm' : '',
                            'right'
                        ]">❞</span>
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
                        <v-col cols="2" v-if="$vuetify.breakpoint.mdAndUp">
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
                            :class="[
                                $vuetify.breakpoint.mdAndUp ? 'pl-6' : 'pa-0'
                            ]"
                            style="z-index:100;"
                        >
                          <p :class="[
                              $vuetify.breakpoint.mdAndUp ? 'quote-name-md' : '',
                              $vuetify.breakpoint.smAndDown ? 'quote-name-sm' : 'quote-name-md',
                              'quote-name'
                          ]">{{ t.name }}</p>
                          <p :class="[
                              $vuetify.breakpoint.mdAndUp ? 'quote-title-md' : '',
                              $vuetify.breakpoint.smAndDown ? 'quote-title-sm' : 'quote-title-md',
                              'quote-title'
                          ]">{{ t.subHeading }}</p>
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
      // testimonials: {
      //   title: "test title",
      //   text: "test text for offline testing. test text for offline testing. test text for offline testing. test text for offline testing. test text for offline testing. test text for offline testing. test text for offline testing. test text for offline testing. ",
      //   list: [{
      //     quote: "test text for offline testing. test text for offline testing. test text for offline testing. test text for offline testing. test text for offline testing. test text for offline testing. test text for offline testing. test text for offline testing. ",
      //     name: "Test name for mobile testing",
      //     subHeading: "Test Sub heading. This is an prolonged subheading for mobile testing while offline."
      //   }],
      // }
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
.test-cont-md {
  margin-bottom: 148px !important;
}

.test-cont-sm {
  margin-bottom: 38px !important;
}

.testimonial-card {
  border: none !important;
  padding: 6px;
  border-radius: 0 !important;
}

.quote {
  text-align: center;
  margin: auto;
  border: 2px solid #993333;
  position: relative;
  margin-top: 100px;
}

.quote-md {
  font-size: 1.6rem;
  line-height: 38px;
}

.quote-sm {
  font-size: 1.1rem;
  line-height: 25px;
}

.quote-name {
  line-height:34px;
  color: #993333;
  margin: 0;
}
.quote-name-md {
  font-size: 1.8rem;
}

.quote-name-sm {
  font-size: 1.3rem;
}

.quote-title {
  line-height: 34px;
  color: #666666;
}

.quote-title-md {
  font-size: 1.4rem;
}

.quote-title-sm {
  font-size: 1.0rem;
  line-height: 26px;
}

blockquote {
  color: #666666;
  font-style: italic;
  position: relative;
  z-index: 20;
}
.blockquote-md {
  padding: 65px;
}

.blockquote-sm {
  padding: 45px 25px;
}

.left {
  position: absolute;
  text-align: left;
  z-index: 10;
  color: #993333;
  background-color: white;
}

.left-md {
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

.left-sm {
  position: absolute;
  top: -10px;
  left: -5px;
  width: 110px;
  text-align: left;
  z-index: 10;
  font-size: 6rem;
  color: #993333;
  background-color: white;
  line-height: 100px;
}

.right {
  position: absolute;
  text-align: right;
  z-index: 10;
  color: #993333;
  background-color: white;
}
.right-md {
  bottom: -100px;
  right: -20px;
  width: 130px;
  font-size: 9rem;
  line-height: 200px;
}

.right-sm {
  bottom: -75px;
  right: -10px;
  width: 110px;
  font-size: 6rem;
  line-height: 150px;
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