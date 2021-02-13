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
              <v-card-title class="contact-title">Connect With Us.</v-card-title>
              <v-card-text class="contact-text">
                <p>Request more information on B2B Sales training and get added to our monthly Sales Tips emails.</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row
      class="ml-12"
    >
      <v-col cols="2">
        <v-card
          tile
          elevation="0"
        >
          <v-card-title class="left-card">
            Let's get better at<br />B2B Sales.
          </v-card-title>
          <v-card-text>
            <p>
              <span style="color: #993333;">P:</span> +1.617.555.5555<br/>
              <span style="color: #993333;">E:</span> email@email.com
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
          cols="10"
      >
        <v-row class="pl-6">
          <v-col cols="12" class="red-bg">
            <v-card
                outlined
                class="trans-form"
            >
              <v-row
                  justify="left"
              >
                <v-col md="11">
                  <v-card
                      class="pa-6 transparent"
                      dark
                      outlined
                      min-height="400"
                  >
                    <v-slide-y-transition>
                      <div v-if="loaded">
                        <v-card-subtitle color="white" style="opacity:1">
                          <h1>Thank you for connecting. Kent will be in touch shortly.</h1>
                        </v-card-subtitle>
                      </div>
                      <form v-else>
                        <v-row>
                          <v-col cols="10">
                            <v-text-field
                                v-model="contact.name"
                                label="First Name"
                                required
                                color="white"
                                dark
                            ></v-text-field>
                            <v-text-field
                                v-model="contact.email"
                                label="E-mail"
                                color="white"
                                required
                                dark
                            ></v-text-field>
                            <v-text-field
                                v-model="contact.company"
                                label="Company Name"
                                color="white"
                                required
                                dark
                            ></v-text-field>
                            <v-textarea
                                background-color=""
                                outlined
                                v-model="contact.comment"
                                label="Tell us more about your sales needs."
                            >
                            </v-textarea>
                          </v-col>
                        </v-row>
                        <v-btn
                            outlined
                            color="white"
                            class="mr-4 mt-4 pa-6 btn-text"
                            @click="submit"
                            :loading="loading"
                        >
                          submit
                        </v-btn>
                      </form>
                    </v-slide-y-transition>
                  </v-card>
                </v-col>
              </v-row>
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
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
import Navigation from "@/Home/modules/navigation-section";
import Footer from "@/Home/modules/footer-section";
import TestimonialsSection from "@/Home/modules/testimonials-section";
import Logos from "@/Home/modules/logo-banner-section";
import {mapState} from "vuex"
export default {
  name: "contact",
  components: {
    Navigation,
    Footer,
    TestimonialsSection,
    Logos,
  },
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(30) },
    email: { required, email },
  },
  computed: {
    ...mapState({
      formResponse: ['form'],
      loaded: ['loaded'],
      loading: ['loading']
    })
  },
  data(){
      return {
        alignment: 'center',
        justify: 'center',
        contact: {
          name: '',
          email: '',
          company: '',
          comment: ''
        }
      }
  },
  methods: {
    submit () {
      this.$v.$touch()
      this.$store.dispatch('postToContactPageList', this.contact)
      .then(resp => {
        console.log("vue resp: ", resp)
      })
      .catch(err => {
        console.log("vue err: ", err)
      })
    },
    clear () {
      this.$v.$reset()
      this.contact = {
        name: '',
            email: '',
            company: '',
            comment: ''
      }
    },
  },
}
</script>
<style scoped>
.red-bg {
  background-color: #993333;
}
.trans-form {
  background-color: transparent !important;
  border: none !important;
  border-radius: 0 !important;
}
.btn-text {
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 4.5px;
}
.btn-text::before {
  color: transparent;
}
.btn-text:focus {
  color: transparent;
}
.left-card {
  font-size:38px;
  line-height: 40px;
  color: #993333;
}
.contact-title {
  font-size:92px;
  line-height: 92px;
  font-weight:600;
  margin: 0px 0px;
  color: #993333;
}
.contact-text {
  font-size: 22px;
  line-height: 28px;
}
.contact-form {
  opacity: 0.80;
}
</style>