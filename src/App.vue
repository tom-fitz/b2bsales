<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      right
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="#f3f3f3"
      light
    >
      <!-- <v-spacer></v-spacer>

      <v-toolbar-title>Application</v-toolbar-title>

      <v-btn>
        About
      </v-btn>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->

      <v-col cols="12" class="pb-0">
        <v-row
          :align="alignment"
          :justify="justify"
          class="padding-126"
        >
          <v-col md="2">
            <h1 style="color:#993333">Image here</h1>
            <!-- <v-card
              class="ma-3 pa-6 mx-auto transparent"
              tile
              elevation="0"
            >
              <v-btn align="right">
                About
              </v-btn>
              
            </v-card> -->

          </v-col>
          <v-col md="6" class="d-flex justify-end" style="color:#993333">
            <v-btn text x-large color="#ad5b5b" class="nav-btn">
              About
            </v-btn>
            <v-btn text x-large color="#ad5b5b" class="nav-btn">
              Offerings
            </v-btn>
            <v-btn text x-large color="#ad5b5b" class="nav-btn">
              Sales Tactics
            </v-btn>
            <v-btn text x-large color="#ad5b5b" class="nav-btn">
              Who we serve
            </v-btn>
            <v-btn text x-large color="#ad5b5b" class="nav-btn">
              Calendar
            </v-btn>
            <v-btn text x-large color="#ad5b5b" class="nav-btn">
              Contact
            </v-btn>
            
          </v-col>
        </v-row>
      </v-col>


    </v-app-bar>

    <!-- <v-navigation-drawer v-model="sidebar" app>
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app>
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="sidebar = !sidebar">
        </v-toolbar-side-icon>
      </span>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar> -->

    <!-- <v-layout row justify-center>
      <v-app-bar app dark color="blue-grey darken-1" class="hidden-xs-and-down">
        <v-toolbar-title>Desktop Menu</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
         <v-btn
           v-for="item in nav"
           :key="item.icon"
           to="#"
           :title="item.title"
           text
         >{{ item.text }}</v-btn>
        </v-toolbar-items>
      </v-app-bar>
      
      <v-app-bar app dark color="blue-grey darken-3" class="hidden-sm-and-up">
        <v-toolbar-title>Mobile Menu</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
          <v-toolbar-side-icon dark slot="activator"></v-toolbar-side-icon>
          <v-card>
            <v-toolbar flat color="blue-grey darken-2">
              <v-toolbar-title>Mobile Menu</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon @click.native="dialog = false">
                <v-icon>close</v-icon>
              </v-btn>
            </v-toolbar>

            <v-list>
              <v-list-tile
                v-for="(item, index) in nav"
                :key="index"
                to="#"
              >
                <v-list-tile-action>
                  <v-icon v-if="item.icon">{{item.icon}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title :title="item.title">{{ item.text }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-dialog>

      </v-app-bar>
    </v-layout> -->



    <!-- <v-toolbar 
      fixed>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn>
        About
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar> -->

    <v-content>
      <HeroSection/>
      <AboutSection/>
      <TestimonialsSection/>
      <ContactSection/>
      <SalesTipsSection/>
      <OfferingsSection/>
    </v-content>
  </v-app>
</template>

<script>
import AboutSection from './components/about-section'
import HeroSection from './components/hero-section'
import TestimonialsSection from "./components/testimonials-section"
import ContactSection from "./components/contact-section"
import SalesTipsSection from "./components/sales-tips-section"
import OfferingsSection from "./components/offerings-section"

export default {
  name: 'App',

  components: {
    HeroSection,
    AboutSection,
    TestimonialsSection,
    ContactSection,
    SalesTipsSection,
    OfferingsSection,
  },

  data(){
    return {
      drawer: false,
      alignment: 'center',
      justify: 'center'
    }
  },
  props: {
    source: String
  }
};
</script>
<style scoped>
.nav-btn {
  color: #ad5b5b;
}
</style>
