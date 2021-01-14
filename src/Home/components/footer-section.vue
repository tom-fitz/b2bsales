<template>
    <v-container fluid class="pb-2">
      <v-row :class="[
          $vuetify.breakpoint.mdAndUp ? 'ml-12' : 'ml-6',
          'red-bg'
      ]">
        <v-col
            sm="12"
            md="7"
            :class="[
                $vuetify.breakpoint.mdAndUp ? 'ml-12 mb-12' : 'ml-0 mb-6 white-border-sm',
                'mt-12'
            ]"
        >
          <v-card
              elevation="0"
              :class="[
                  $vuetify.breakpoint.mdAndUp ? 'white-border-md' : '',
                  'trans-form'
              ]"
          >
            <v-card-title :class="[
                $vuetify.breakpoint.mdAndUp ? 'footer-title-md ml-8' : 'footer-title-sm ml-4'
            ]">
              Subscribe to monthly email sales tips.
            </v-card-title>
            <v-row
                align="center"
                justify="left"
                class=""
            >
              <v-col md="11">
                <v-card
                    class="pa-6 contact-form transparent"
                    dark
                    outlined
                >
                  <form>
                    <v-text-field
                        v-model="name"
                        :counter="30"
                        label="Name"
                        required
                        color="white"
                        dark
                    ></v-text-field>
                    <v-text-field
                        v-model="email"
                        label="E-mail"
                        color="white"
                        required
                        dark
                    ></v-text-field>
                    <v-text-field
                        v-model="company"
                        :counter="30"
                        label="Company Name"
                        color="white"
                        required
                        dark
                    ></v-text-field>
                    <v-btn
                        outlined
                        color="white"
                        class="mr-4 mt-4 pa-6 btn-text"
                        @click="submit"
                    >
                      submit
                    </v-btn>
                  </form>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col
            sm="12"
            md="3"
            :class="[
                $vuetify.breakpoint.mdAndUp ? 'ml-12 mb-12 mt-12' : 'ml-0 mb-6 mt-0'
            ]"
        >
          <v-card
              outlined
              class="trans"
          >
            <v-card-title class="footer-title ml-8">Connect with Kent.</v-card-title>

            <v-row
                class="ml-4 pt-4"
            >
              <v-col
                  cols="2"
                  width="35"
                  class="pa-0 ma-0"
              >
                <v-img
                    src="../../assets/linkedin_logo.png"
                    height="35px"
                    contain
                ></v-img>
              </v-col>
              <v-col
                  cols="10"
                  class="pa-0 ma-0"
              >
                <v-btn
                    text
                    color="white"
                    class="pa-0 btn-text"
                    @click="submit"
                >
                  Linked in
                </v-btn>
              </v-col>
            </v-row>

            <v-row
                class="ml-4 pt-4"
            >
              <v-col
                  cols="2"
                  width="35"
                  class="pa-0 ma-0 center"
              >
                <v-icon
                    large
                    class=""
                    color="white"
                >contact_phone</v-icon>
              </v-col>
              <v-col
                  cols="10"
                  class="pa-0 ma-0"
              >
                <v-btn
                    text
                    color="white"
                    class="pa-0 btn-text"
                    @click="submit"
                >
                  +1 617.555.5555
                </v-btn>
              </v-col>
            </v-row>

            <v-row
                class="ml-4 pt-4"
            >
              <v-col
                  cols="2"
                  width="35"
                  class="pa-0 ma-0 center"
              >
                <v-icon
                    class=""
                    color="white"
                    size="35"
                >email</v-icon>
              </v-col>
              <v-col
                  cols="10"
                  class="pa-0 ma-0"
              >
                <v-btn
                    text
                    color="white"
                    class="pa-0 btn-text"
                    @click="submit"
                >
                  test@test.com
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row
          :class="[
              $vuetify.breakpoint.mdAndUp ? 'ml-12 mr-12' : 'ml-0 mr-0',
              'mt-4 pa-0'
          ]"
      >
        <v-col
            sm="12"
            :align="$vuetify.breakpoint.mdAndUp ? 'left' : 'center'"
            :class="[
                $vuetify.breakpoint.mdAndUp ? 'pl-12' : 'pa-0'
            ]"
        >
          <p class="ma-0 pa-0">© Thirteen B, LLC. All Rights Reserved.</p>
        </v-col>
        <v-col
            sm="12"
            :align="$vuetify.breakpoint.mdAndUp ? 'left' : 'center'"
            :class="[
                $vuetify.breakpoint.mdAndUp ? 'pl-12' : 'pa-0'
            ]"
        >
          <p class="ma-0 pa-0">© Thirteen B, LLC. All Rights Reserved.</p>
        </v-col>
<!--        <v-col-->
<!--            sm="12"-->
<!--            md="6"-->
<!--            class="ma-0 pa-0"-->
<!--        >-->
<!--          <p class="ma-0 pa-0">-->
<!--            <v-btn-->
<!--                text-->
<!--                x-small-->
<!--                :to="{name: 'Login'}"-->
<!--            >Admin Login</v-btn> /-->
<!--            <v-btn-->
<!--                text-->
<!--                x-small-->
<!--                :to="{name: 'PrivacyPolicy'}"-->
<!--            >Privacy Policy</v-btn> /-->
<!--            <v-btn-->
<!--                text-->
<!--                x-small-->
<!--                :to="{name: 'Terms'}"-->
<!--            >Terms of Service</v-btn>-->
<!--          </p>-->
<!--        </v-col>-->
      </v-row>
    </v-container>
</template>
<script>
export default {
  data () {
    return {
      name: "",
      email: "",
      company: "",
    }
  },
  methods: {
    login(){
      this.$router.push({ name: 'Login' })
    },
    submit(){
      alert("handle submit")
    },
    clear(){
      alert("handle form reset")
    }
  }
}
</script>
<style scoped>
.background-image-footer {
    border-top: solid lightgrey 10px;
    background-color: rgba(153, 0, 0, 0.75);
}
.red-bg {
  background-color: #993333;
}
.center {
  text-align: center !important;
}
.trans-form {
  background-color: transparent !important;
  border-radius: 0 !important;
}
.trans {
  background-color: transparent !important;
  border: none !important;
  border-radius: 0 !important;
}
.white-border-md {
  border-right:solid 1px white !important;
  border-top: none !important;
  border-bottom: none !important;
  border-left: none !important;
}
.white-border-sm {
  border-bottom:solid 1px white !important;
  border-top: none !important;
  border-right: none !important;
  border-left: none !important;
}
.container {
    width: 100% !important;
    padding: 0px;
    margin: 0px !important;
}
.v-card__title {
    font-size: 1.7em !important;
    color: white;
}
.copyright {
    font-size: 1.1em !important;
    color: rgb(255, 158, 158) !important;
}
.footer-title {
  color: white;
}
.footer-title-md {
  font-size: 50px;
  line-height: 52px;
}
.footer-title-sm {
  font-size: 28px;
  line-height: 28px;
}
.footer-text {
    padding: 0px 16px !important;
    color: white !important;
    opacity: 0.85;
}
.footer-text-size {
    font-size: 1.0em;
}
.footer-newsletter {
    color: white !important;
    opacity: 0.85;
    font-size:1.1em;
}
.theme--dark.v-label {
  color: rgb(255,255,255) !important;
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
</style>