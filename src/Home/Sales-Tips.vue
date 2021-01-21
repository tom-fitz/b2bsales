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
            <v-card-title class="sales-title">{{ items.title }}</v-card-title>
            <v-card-text class="sales-text" v-html="items.text">
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
  <v-row justify="center" class="mb-12 ml-12 posts-bg">
    <v-col cols="12" class="mb-12">
      <v-expansion-panels
          multiple
          flat
          v-model="panel"
      >
        <v-expansion-panel
            v-for="(item,i) in items.list"
            :key="i"
            class="panel-style"
        >
          <v-expansion-panel-header class="custom-headline">
            {{ item.title }}
          </v-expansion-panel-header>
          <v-expansion-panel-content class="pa-0 ma-0 red-bg">
            <v-card
                tile
                elevation="0"
                class="pa-0 ma-0"
            >
              <v-flex xs12>
                <v-card
                    outlined
                    light
                    class="pt-10 pb-10 no-border red-bg"
                >
                  <v-layout
                      class="pa-0 ma-0"
                      align-center
                  >
                    <v-flex
                        xs7
                        lg9
                        class="content-margin"
                    >
                      <v-card-title class="custom-sub-headline">
                        {{ item.subTitle}}
                      </v-card-title>
                      <span v-line-clamp:20="3">
                        <v-card-text
                            class="pt-0 pb-0 tip-content"
                            v-html="item.content"
                        ></v-card-text>
                      </span>

                      <v-card-text class="tip-date">
                        Date Posted: {{ item.date }}
                      </v-card-text>
                      <v-card-actions>
                        <v-btn
                            outlined
                            color="white"
                            style="border:none;"
                            @click="openPost(item.id)"
                            class="tip-button"
                        >
                          Read More
                        </v-btn>
                      </v-card-actions>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </v-row>
  <v-row
      align="center"
      justify="center"
  >
    <TestimonialsSection/>
    <Logos/>
    <FooterSection/>
  </v-row>
</v-container>
</template>
<script>
import TestimonialsSection from "../Home/components/testimonials-section";
import FooterSection from "../Home/components/footer-section";
import Navigation from "../Home/components/navigation-section";
import Logos from "../Home/components/logo-banner-section";
import {mapState} from "vuex";
import moment from 'moment';
export default {
  name: "sales-tactics",
  components: {
      TestimonialsSection,
      FooterSection,
      Navigation,
      Logos,
  },
  computed: {
    ...mapState({
      items: ['tips'],
    })
  },
  created() {
    this.$store.dispatch('getSalesTips')
        .then(resp => {
          this.items = Object.assign({}, resp)
          this.items.list.forEach(x => {
            x.date = new Date(x.date)
          })
          this.items.list.sort(function compare(a, b) {
            let dateA = new Date(a.date);
            let dateB = new Date(b.date);
            return dateB - dateA;
          })
          this.items.list.forEach(i => {
            i.date = moment(String(i.date)).format('MM/DD/YYYY')
          })

          console.log("items: ", this.items)
        })
        .catch(() => null)
  },
  data: () => ({
    salesTips: {
      title: "B2B Sales Tips.",
      text: ["<p>One of the biggest challenges facing any startup is landing the first few paying customers. Often with no prior sales experience, most technical founders hack their way into initial sales attempts — missing crucial first customer opportunities and exhausting precious startup time and capital.</p>"]
    },
    alignment: 'center',
    justify: 'center',
    itemsToShow: 3,
    tab: null,
    panel: [0,1,2,3,4],
    // items: [
    //   {
    //     id: 1,
    //     title: 'Sale Tip 1 Title',
    //     date: '01/01/2020',
    //     subtitle: 'Sales tip subtitle',
    //     imageUrl: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
    //     content: 'Sales tip content goes here. This can be limited/brief text or display the whole post, up to you. The "tab" can display anything you want, so instead of "One", I was thinking it could display the posts date, but what ever you think will work best. These are very customizable, so you can also bring in pictures, and links and whatever else you see fit.'
    //   },
    //   {
    //     id: 2,
    //     title: 'Sale Tip 2 Title',
    //     date: '01/01/2020',
    //     subtitle: 'Sales tip subtitle',
    //     imageUrl: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
    //     content: 'Sales tip content goes here. This can be limited/brief text or display the whole post, up to you. The "tab" can display anything you want, so instead of "One", I was thinking it could display the posts date, but what ever you think will work best. These are very customizable, so you can also bring in pictures, and links and whatever else you see fit.'
    //   },
    //   {
    //     id: 3,
    //     title: 'Sale Tip 3 Title',
    //     date: '01/01/2020',
    //     subtitle: 'Sales tip subtitle',
    //     imageUrl: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
    //     content: 'Sales tip content goes here. This can be limited/brief text or display the whole post, up to you. The "tab" can display anything you want, so instead of "One", I was thinking it could display the posts date, but what ever you think will work best. These are very customizable, so you can also bring in pictures, and links and whatever else you see fit.'
    //   },
    //   {
    //     id: 4,
    //     title: 'Sale Tip 4 Title',
    //     date: '01/01/2020',
    //     subtitle: 'Sales tip subtitle',
    //     imageUrl: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
    //     content: 'Sales tip content goes here. This can be limited/brief text or display the whole post, up to you. The "tab" can display anything you want, so instead of "One", I was thinking it could display the posts date, but what ever you think will work best. These are very customizable, so you can also bring in pictures, and links and whatever else you see fit.'
    //   },
    //   {
    //     id: 5,
    //     title: 'Sale Tip 5 Title',
    //     date: '01/01/2020',
    //     subtitle: 'Sales tip subtitle',
    //     imageUrl: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
    //     content: 'Sales tip content goes here. This can be limited/brief text or display the whole post, up to you. The "tab" can display anything you want, so instead of "One", I was thinking it could display the posts date, but what ever you think will work best. These are very customizable, so you can also bring in pictures, and links and whatever else you see fit.'
    //   },
    // ],
  }),
  methods: {
      openPost(id){
          this.$router.push({name: 'SalesTipPost' , params: { id: id }})
      }
  }
}
</script>
<style scoped>
.sales-title {
  font-size:92px;
  line-height: 92px;
  margin: 25px 0px;
  color: #993333;
}
.sales-text {
  font-size:20px;
  font-weight: 400;
  line-height: 28px;
  color: #555555;
}
.tip-content {
  font-size: 18px;
  line-height: 28px;
  color: white !important;
  width: 70% !important;
}

.tip-date {
  font-size: 20px;
  line-height: 32px;
  color: white !important;
  font-weight: 600;
}
.tip-button {
  color: white !important;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 4.5px;
}
.posts-bg {
  background-color: white;
}
.red-bg {
  background-color: #993333 !important;
}
.v-expansion-panel-content >>> .v-expansion-panel-content__wrap {
  padding: 0 !important;
  margin: 0 !important;
}
.content-margin {
  margin-left: 46px !important;
}
.no-border {
  border-radius: 0 !important;
  border: 0 transparent !important;
}
.panel-style {
  border-width: 0 0 4px 0 !important;
  border-color: #999 !important;
  border-style: solid !important;
  border-radius: 0 !important;
}
.custom-sub-headline {
  color: white !important;
  font-size: 38px;
  line-height: 38px;
}
.custom-headline {
  font-size:42px;
  line-height: 50px;
  color: #993333 !important;
  padding-left: 65px;
}
</style>