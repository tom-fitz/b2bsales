<template>
    <v-container fluid class="pa-0 ma-0 mt-12">
        <Navigation/>
        <v-row justify="center" class="pt-12 pb-12">
            <v-col cols="10" class="mt-12">
                <v-card
                    tile
                    elevation="0"
                >
                    <v-flex xs12>
                        <v-card
                          tile
                          elevation="0"
                        >
                            <v-layout>
                                <v-flex xs5 lg3>
                                    <v-img
                                      :src=item.imageUrl
                                      max-width="400px"
                                      contain
                                    ></v-img>
                                </v-flex>
                                <v-flex
                                    xs7
                                    lg9
                                    class="content-margin"
                                >
                                    <div>
                                      <v-card-title primary-title class="item-title pt-0">
                                          {{ item.title }}
                                      </v-card-title>
                                      <v-card-subtitle class="tips-sub-title">
                                          {{ item.subtitle }}
                                      </v-card-subtitle>
                                      <v-card-text class="tips-text pt-0 pb-0">
                                          {{ item.content }}
                                      </v-card-text>
                                      <v-card-text class="tip-date">
                                        Date Posted: {{ item.date }}
                                      </v-card-text>
                                      <v-row class="mt-12">
                                        <v-card tile
                                                elevation="0"
                                        >
                                          <v-card-title>
                                            <h2 class="red-color">Sign up for monthly email sales tips.</h2>
                                          </v-card-title>
                                          <v-card-text>
                                            <v-text-field color="#ad5b5b" placeholder="Enter your email"></v-text-field>
                                            <v-btn outlined color="#ad5b5b">Submit</v-btn>
                                          </v-card-text>
                                        </v-card>
                                      </v-row>
                                    </div>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-flex>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
          <TestimonialsSection/>
          <Logos />
          <FooterSection/>
        </v-row>
    </v-container>
</template>
<script>
import TestimonialsSection from "../Home/components/testimonials-section"
import FooterSection from "../Home/components/footer-section"
import Navigation from "../Home/components/navigation-section"
import Logos from "../Home/components/logo-banner-section"
// import mailChimp from "mailchimp-api-v3"

// const mailChimp = require('mailchimp-api-v3')
export default {
  name: "sales-tip-post",
  components: {
    TestimonialsSection,
    FooterSection,
    Navigation,
    Logos,
  },
  data: () => ({
    alignment: 'center',
    justify: 'center',
    tab: null,
    item: {
      id: 1,
      title: 'Sales Tip 1 Title',
      date: '01/01/2020',
      subtitle: 'Sales tip subtitle',
      imageUrl: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
      content: 'Sales tip content goes here. This can be limited/brief text or display the whole post, up to you. The "tab" can display anything you want, so instead of "One", I was thinking it could display the posts date, but what ever you think will work best. These are very customizable, so you can also bring in pictures, and links and whatever else you see fit. Sales tip content goes here. This can be limited/brief text or display the whole post, up to you. The "tab" can display anything you want, so instead of "One", I was thinking it could display the posts date, but what ever you think will work best. These are very customizable, so you can also bring in pictures, and links and whatever else you see fit. Sales tip content goes here. This can be limited/brief text or display the whole post, up to you. The "tab" can display anything you want, so instead of "One", I was thinking it could display the posts date, but what ever you think will work best. These are very customizable, so you can also bring in pictures, and links and whatever else you see fit.'
    },
  }),
  created(){
    // console.log("chimp: ", mailChimp)
    // mailChimp.get({
    //   path: '/list'
    // }, (err, result) => {
    //   console.log("result: ", result)
    //   console.log("err: ", err)
    // })
  }
}
</script>
<style scoped>
.red-color {
    color: #993333 !important;
}
.item-title {
  font-size:92px;
  line-height: 92px;
  color: #993333 !important;
}
.tips-sub-title {
    font-size: 36px;
    margin:15px 0;
    color: #ad5b5b;
}
.tips-text {
  font-size:18px;
  line-height: 26px;
  color: #555555;
}
.tip-date {
  font-size: 20px;
  line-height: 32px;
  font-weight: 600;
}
.content-margin {
  margin-left: 46px !important;
}
</style>