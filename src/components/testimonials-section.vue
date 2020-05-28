<template>
  <div>
    <v-carousel 
      v-model="model"
      height="700"
    >
      <!-- slide 1 -->
      <v-carousel-item>
        <v-sheet
          height="100%"
          light
          tile
          color="white"
          class="background-gradient"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-col cols="7">
                <v-card
                    class="mx-auto transparent"
                    md=""
                    elevation="0"
                >
                    <div class="d-flex flex-no-wrap justify-space-between">
                      <v-avatar
                          tile
                          size="200"
                          align="left"
                          justify="center"
                          pl="16"
                      >
                        <v-img src="../assets/Headshots/rob_snyder.jpg" aspect-ratio="1.7"></v-img> 
                      </v-avatar>
                      <div>
                        <v-card-text class="text-body">
                            “Your session today may have just changed the trajectory of our young company — I took 23 pages of notes and am reflecting on them tonight to see how we might restructure our current GTM!  Massively valuable content.”
                        </v-card-text>
                        <v-card-title class="red-title">
                            Rob Snyder
                        </v-card-title>
                        <v-card-subtitle>
                            Harvard Business School 2018<br />
                            Co-Founder Aday Technologies, Inc
                        </v-card-subtitle>
                      </div>
                    </div>
                </v-card>
            </v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>
      <!-- end slide 1 -->
      <!-- slide 2 -->
      <v-carousel-item>
        <v-sheet
          height="100%"
          tile
          light
          color="white"
          class="background-gradient"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-col cols="7">
                <v-card
                    class="mx-auto transparent"
                    md=""
                    elevation="0"
                >
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <v-avatar
                        tile
                        size="200"
                        align="left"
                        pl="16"
                    >
                       <v-img src="../assets/Headshots/lou_goldish.jpg" aspect-ratio="1.7"></v-img> 
                    </v-avatar>
                    <div>
                      <v-card-text class="text-body">
                          “Our entrepreneurs enrolled in MIT VMS are ecstatic about Kent’s IAP Sales Course, and what he has done to turn an esoteric topic into practical procedures and advice that technical founders understand and can apply immediately to their business.  Kent’s material on enterprise sales makes a major difference in how our founders are now selling and the overall success with their new ventures.”
                      </v-card-text>
                      <v-card-title class="red-title">
                          Lou Goldish, Senior Venture Advisor 
                      </v-card-title>
                      <v-card-subtitle>
                          Venture Mentoring Service (VMS) Massachusetts Institute of Technology Cambridge MA
                      </v-card-subtitle>
                    </div>
                  </div>
                </v-card>
            </v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>
      <!-- end slide 2 -->
      <!-- slide 3 -->
      <v-carousel-item>
        <v-sheet
          height="100%"
          tile
          light
          color="white"
          class="background-gradient padding-126"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-col cols="7">
                <v-card
                    class="mx-auto transparent"
                    md=""
                    elevation="0"
                >
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <v-avatar
                        tile
                        size="200"
                        align="left"
                        pl="16"
                    >
                       <v-img src="../assets/Headshots/josh_dorfman.jpg" aspect-ratio="1.7"></v-img> 
                    </v-avatar>
                    <div>
                      <v-card-text class="text-body">
                          “Kent Summers is a master at engaging entrepreneurs and revving them up on implementing effective sales processes. He is witty and seasoned and delivers real-world anecdotes from the trenches that hammer home his key points. One of our city’s most successful tech founders remarked afterwards that he wished he had met Kent eight years ago so he could have avoided so much headache and built his sales organization effectively from the start. We can’t wait to have Kent back to Asheville!”
                      </v-card-text>
                      <v-card-title class="red-title">
                          Josh Dorfman, Director of Entrepreneurship
                      </v-card-title>
                      <v-card-subtitle>
                          Venture Asheville, Managing Director, Asheville NC Angels
                      </v-card-subtitle>
                      
                    </div>
                  </div>
                </v-card>
            </v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>
      <!-- end slide 3 -->
      <!-- slide 4 -->
      <v-carousel-item>
        <v-sheet
          height="100%"
          tile
          light
          color="white"
          class="background-gradient"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-col cols="7">
                <v-card
                    class="mx-auto transparent"
                    md=""
                    elevation="0"
                >
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <v-avatar
                        tile
                        size="200"
                        align="left"
                        pl="16"
                    >
                       <v-img src="../assets/Headshots/serban_georgescu.jpg" aspect-ratio="1.7"></v-img> 
                    </v-avatar>
                    <div>
                      <v-card-text class="text-body">
                          “Our Canadian Technology Accelerator companies praised Kent’s workshop as very informative, clear, direct, and really simplifying the sales process. These appreciations came from new company founders as well as entrepreneurs with decades of global selling experience, and that says something!”
                      </v-card-text>
                      <v-card-title class="red-title">
                          Serban Georgescu, MD
                      </v-card-title>
                      <v-card-subtitle>
                          Program Manager, Canadian Technology Accelerator Trade Commissioner, Digital Health Canadian Consulate General, Boston
                      </v-card-subtitle>
                    </div>
                  </div>
                </v-card>
            </v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>
      <!-- end slide 4 -->
      <!-- slide 5 -->
      <v-carousel-item>
        <v-sheet
          height="100%"
          tile
          light
          color="white"
          class="background-gradient"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-col cols="7">
                <v-card
                    class="mx-auto transparent"
                    md=""
                    elevation="0"
                >
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <v-avatar
                        tile
                        size="200"
                        align="left"
                        pl="16"
                    >
                       <v-img src="../assets/Headshots/jay_sherman.jpg" aspect-ratio="1.7"></v-img> 
                    </v-avatar>
                    <div>
                      <v-card-text class="text-body">
                          “Kent has been a fantastic resource for MIT Sloan over many years. Kent’s Sales Bootcamp consistently receives unanimous positive feedback from Sales Club members. He covers the nuts &amp; bolts of the entire sales process, enabling Sloan MBA students to put effective sales skills into their professional repertoires immediately.”
                      </v-card-text>
                      <v-card-title class="red-title">
                          Jay Sherman, Co-President 
                      </v-card-title>
                      <v-card-subtitle>
                          Sales &amp; Business Dev’t Club MIT Sloan School of Mgmt MBA Candidate | Class of 2016 Director, MIT $100K Competition
                      </v-card-subtitle>
                    </div>
                  </div>
                </v-card>
            </v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>
      <!-- end slide 5 -->
    </v-carousel>
  </div>
</template>
<script>
export default {
    name: "hero-section",
    data () {
      return {
        colors: [
          'primary',
          'secondary',
          'yellow darken-2',
          'red',
          'orange',
        ],
        model: 0,
      }
    },
}
</script>
<style>
.headline-2 {
    font-size: 1.0rem !important
}
.v-avatar--tile {
    margin-left:16px !important
}
.transparent {
   background-color: white!important;
   opacity: 0.95;
   border-color: transparent!important;
 }
.background-gradient {
  background-image: linear-gradient(to bottom right, rgba(255, 255, 255, 0.65), 
    rgba(255, 255, 255, 0.95)), url("../assets/webb_02.png");
  background-repeat: repeat;
  background-attachment: fixed;
  background-position:left;
}
.v-image__image {
  border-radius: 50% !important;
}
.padding-126 {
  padding-top: 126px;
  padding-bottom: 126px;
}
.red-title {
  color: rgb(153, 0, 0);
  font-size: 1.7em;
}
.text-body {
  font-size: 1.3em;
}
</style>