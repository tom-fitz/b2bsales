<template>
  <v-container fluid class="ma-0 pa-0">
    <v-dialog v-model="dialog" fullscreen full-width>
      <v-container
          fluid
          fill-height
          class="background-image-nav"
      >
        <v-row
            fill-height
            :align="alignment"
            :justify="justify"
        >
          <v-col cols="12">
            <v-row
                :align="alignment"
                :justify="justify"
                style="height: 350px;"
                class="pl-12 pr-12"
            >
              <v-col
                  cols="6"
              >
                <v-btn
                    text
                    color="white"
                    class="btn-text"
                    to="/home"
                >
                  B2B Sales<br />4 Startups
                </v-btn>
              </v-col>
              <v-col
                  cols="6"
                  align="right"
                  justify="right"
              >
                <v-icon @click.stop="dialog = false" x-large dark>close</v-icon>
              </v-col>
            </v-row>
            <v-row
                :align="alignment"
                :justify="justify"
            >
              <v-btn
                  text
                  color="white"
                  class="btn-text"
                  @click.stop="dialog = false"
                  to="/home"
              >
                HOME
              </v-btn>
              <v-btn
                  text
                  color="white"
                  class="btn-text"
                  @click.stop="dialog = false"
                  to="/sales-tips"
              >
                B2B Sales Tips
              </v-btn>

              <v-menu open-on-hover bottom offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      text
                      color="white"
                      class="btn-text"
                      v-bind="attrs"
                      v-on="on"
                  >
                    Who We Serve
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item
                      v-for="(item, index) in foundersItems"
                      :key="index"
                      @click.stop="dialog = false"
                      :to="item.route"
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>

              </v-menu>


              <v-menu open-on-hover bottom offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      text
                      color="white"
                      class="btn-text"
                      v-bind="attrs"
                      v-on="on"
                  >
                    Programs
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item
                      v-for="(item, index) in programsItems"
                      :key="index"
                      @click.stop="dialog = false"
                      :to="item.route"
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>

              </v-menu>

              <v-btn
                  text
                  color="white"
                  class="btn-text"
                  @click.stop="dialog = false"
                  to="/about"
              >
                About
              </v-btn>

              <v-btn
                  text
                  color="white"
                  class="btn-text"
                  @click.stop="dialog = false"
                  to="/contact"
              >
                Contact
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-dialog>
    <v-app-bar
        color="transparent"
        light
        prominent
        fixed
        class="app-bar-border ml-12 mr-12"
    >
      <v-avatar
          height="100"
          width="300"
          class="ml-10"
          style="border-radius:0!important;"
          align="top"
      >
        <v-img contain src="../../assets/new_logo.png" ></v-img>
      </v-avatar>
        <v-spacer></v-spacer>
      <v-icon
          @click.stop="dialog = true"
          size="55"
          color="black"
          dark
          class="mr-8 mt-4 pa-4"
          style="opacity:0.6;border-radius:0 !important;background-color:white;"
      >
        menu
      </v-icon>
    </v-app-bar>
  </v-container>
</template>
<script>
export default {
  name: "navigation",
  data: () => {
    return {
      alignment: "start",
      justify: "space-around",
      hover: true,
      dialog: null,
      foundersItems: [
        { title: 'Founders', route: '/founders' },
        { title: 'Accelerators', route: '/accelerators' },
        { title: 'Universities', route: '/universities' },
        { title: "Eco Dev't Orgs / Investors", route: '/investors' },
        { title: "What They Have to Say", route: '/testimonial' }
      ],
      programsItems: [
        { title: '1-Day Crashcourse', route: '/one-day-course' },
        { title: '2 1/2 Day Crashcourse', route:'/two-day-course' },
        { title: 'Sales Office Hours', route: '/sales-office-hours' }
      ]
    }
  },
  methods: {
    routeFounders(item){
      console.log("item: ", item)
      this.$router.push({ name: item.route })
    }
  }
}
</script>
<style scoped>
.container.fill-height{
  align-items: start !important;
}
.v-menu__content {
  box-shadow: none !important;
  border-radius: 0 !important;
}
.v-list {
  background: transparent !important;
}
.v-list-item{
  margin-bottom: 16px !important;
}
.v-list-item:hover{
  color:red!important;
}
.v-list-item__title {
  font-size: 24px !important;
  color: white !important;
  text-decoration: none !important;
}
.v-list-item__title:hover {
  color: white !important;
}
.v-list-item__title::before {
  content: "" !important;
  position: absolute !important;
  width: 100% !important;
  height: 2px !important;
  bottom: 0 !important;
  left: 0 !important;
  background-color: transparent !important;
  visibility: hidden !important;
  transform: scaleX(0) !important;
  transition: all 0.3s ease-in-out 0s !important;
}
.v-list-item__title:hover::before {
  visibility: visible !important;
  transform: scaleX(1) !important;
}



.contact-button {
  width:100px !important;
  border-radius: 6px !important;
  font-size:15px;
}
.app-bar-border {
  box-shadow: none !important;
}
.background-image-nav {
  box-shadow: inset 2000px 0 0 0 rgba(0, 25, 51, 0.90);
  background: url("../../assets/2.jpg");
  background-size: cover;
  /*color: white;*/
}
.btn-text {
  font-size: 30px !important;
  line-height: 40px !important;
  letter-spacing: 4.5px !important;
}
.btn-text::before {
  color: transparent !important;
}
.btn-text:focus {
  color: transparent !important;
}
.trans {
  background-color: transparent !important;
  border: none !important;
  border-radius: 0 !important;
}
</style>
