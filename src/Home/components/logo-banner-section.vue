<template>
  <v-container fluid class="ma-0 pa-0">
    <div class="">
      <v-row
          justify="center"
          aling="center"
          class="ml-12 mt-12 mb-12 fill-height"
      >
        <v-col cols="3" class="">
          <v-row
              align="center"
              justify="end"
              class="fill-height"
          >
            <v-btn
                text
                color="#993333"
                class="btn-text"
            >Clients we serve.</v-btn>
          </v-row>
        </v-col>
        <v-col cols="9" class="ma-0 pa-0">
          <v-sheet
              class="mx-auto pt-5 pb-5 trans"
              max-width="90%"
          >
            <v-slide-group multiple show-arrows>
              <v-slide-item
                  v-for="(n, i) in logos"
                  :key="i"
              >
                <v-btn
                    height="95"
                    text
                    class="pa-0 ma-0 custom-btn"
                    @click="redirect(n.path)"
                >
                  <v-card
                      class="ma-4 transparent"
                      height="100"
                      width="100"
                      tile
                      elevation="0"
                  >
                    <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                    >
                      <v-img
                          contain
                          max-height="95"
                          :src="n.imageName"
                      ></v-img>
                    </v-row>
                  </v-card>
                </v-btn>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
import {mapState} from "vuex";

export default {
  name: "LogoBannerSection",
  data: () => ({
    model: null,
    items: []
  }),
  computed: {
    ...mapState({
      logos: ['logos']
    })
  },
  created(){
    this.$store.dispatch('getLogos')
        .catch(() => null)
  },
  methods: {
    redirect(path){
      window.location.href = path
    }
  }
}
</script>
<style scoped>
.transparent {
  background-color: white !important;
  opacity: 0.95;
  border-color: transparent !important;
}

.trans {
  background-color: transparent !important;
  border-color: transparent !important;
  border-radius: 0 !important;
}
.custom-btn:active {
  color: transparent
}
.custom-btn::before {
  color: transparent
}
.custom-btn::after {
  color: transparent
}
.custom-btn:hover {
  color: transparent;
}
.btn-text {
   font-size: 20px;
   line-height: 25px;
   letter-spacing: 4.5px;
 }
.btn-text:active {
  color: transparent
}
.btn-text::before {
  color: transparent
}
.btn-text::after {
  color: transparent
}
.btn-text:hover {
  color: transparent;
}

</style>