<template>
    <v-container fluid class="pb-2">
      <v-row class="ml-12 red-bg">
        <v-col
            cols="7"
            class="mt-12 ml-12 mb-12"
        >
          <v-card
              outlined
              class="trans-form"
          >
            <h2 class="footer-title ml-8">Subscribe to monthly email sales tips.</h2>
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
            cols="3"
            class="mt-12 ml-12 mb-12"
        >
          <v-card
              outlined
              class="trans"
              style="border-right:solid 1px white"
          >
            <h2 class="footer-title ml-8">Connect with Kent.</h2>

            <v-row
                align="center"
                justify="center"
                class="ml-4 pt-4"
            >
              <v-col
                  cols="2"
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
                class="ml-6 pt-4 pb-0 mb-0"
            >
              <v-col cols="12">
                <v-btn
                    text
                    color="white"
                    class="pa-0 btn-text"
                    @click="submit"
                >
                  <v-icon large class="pr-5">contact_phone</v-icon>+1 617.555.5555
                </v-btn>
              </v-col>
            </v-row>

            <v-row
                class="ml-6"
            >
              <v-col cols="12">
                <v-btn
                    text
                    color="white"
                    class="pa-0 btn-text"
                    @click="submit"
                >
                  <v-icon large class="pr-5">email</v-icon>test@test.com
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row
          class="ml-12 mr-12 mt-4 pa-0 bottom-footer"
      >
        <v-col
            cols="6"
            aling="left"
            class="pl-12 pa-0"
        >
          <p class="ma-0 pa-0">© Thirteen B, LLC. All Rights Reserved.</p>
        </v-col>
        <v-col
            cols="6"
            align="right"
            class="ma-0 pa-0"
        >
          <p class="ma-0 pa-0">
            <v-btn
                text
                x-small
                :to="{name: 'Login'}"
            >Admin Login</v-btn> /
            <v-btn
                text
                x-small
                :to="{name: 'PrivacyPolicy'}"
            >Privacy Policy</v-btn> /
            <v-btn
                text
                x-small
                :to="{name: 'Terms'}"
            >Terms of Service</v-btn>
          </p>
        </v-col>
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
.trans-form {
  background-color: transparent !important;
  border-top: none !important;
  border-bottom: none !important;
  border-left: none !important;
  border-right: solid 1px white !important;
  border-radius: 0 !important;
}
.trans {
  background-color: transparent !important;
  border: none !important;
  border-radius: 0 !important;
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
  font-size: 50px;
  line-height: 52px;
  color: white;
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