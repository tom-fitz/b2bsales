<template>
  <!-- <v-parallax
    dark
    src="../assets/3.jpg"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4">b2b Sales 4 Startups</h1>
        <h4 class="subheading">Build your application today!</h4>
      </v-col>
    </v-row>
  </v-parallax> -->
  <v-container fluid class="pb-0 pt-0">
      <v-row 
            :justify="justify"
            class="grey lighten-5 padding-126 background-image-hero"
          >
        <v-col cols="8" class="pb-0">
          <!-- <v-row>
            <v-col md="3" >
              <v-card
                class="ma-3 pa-6"
                outlined
                tile
              >
                <v-card-title>
                  FOUNDER SALES
                </v-card-title>
                <v-card-text>
                  Too often startups fail when the founder believes that “hiring a salesperson” will solve the initial customer sales dilemma. For the majority of startups, the technical founder must be the first salesperson ― and success begins with learning sales essentials from a skilled practitioner.
                </v-card-text>
              </v-card>
            </v-col>
            <v-col md="3">
              <v-card
                class="ma-3 pa-6"
                outlined
                tile
              >
                <v-card-title>
                  STARTUP SALES 
                </v-card-title>
                <v-card-text>
                  Founders who manage to gain initial customer traction must now transition from founder-only sales to the first sales hire. This can be especially challenging for technical founders who lack experience recruiting and managing a salesperson. Expectations are seldom realized, and too often the first few sales hires fail, stalling growth by a year or more.
                </v-card-text> 
              </v-card>
            </v-col>
            <v-col md="3">
              <v-card
                class="ma-3 pa-6"
                outlined
                tile
              >
                <v-card-title>
                  SCALEUP SALES
                </v-card-title>
                <v-card-text>
                  Following successful first sales hire, founders must then build a team sales process for scale. This stage of growth presents many unique needs and challenges; for example, how to: drive and support a team sales process, acquire customers more cost-effectively, forecast revenue, expand market reach through partners — and how to make the all-important transition from startup “build” mindset to scaleup with “team sales” culture.
                </v-card-text> 
              </v-card>
            </v-col>
          </v-row> -->
          <v-card
            class="ma-3 pa-6 transparent"
            outlined
            tile
          >
            <v-card-title>
              <h1 class="hero-title">Enterprise B2B Sales Training</h1>
            </v-card-title>
            <v-card-subtitle>
              <h2 class="hero-sub-title">for STARTUP Founders &amp; SCALEUP Teams</h2>
            </v-card-subtitle>
            <v-card-text>
              <h3 class="hero-text">Success begins with learning sales essentials from a skilled practitioner.</h3>
            </v-card-text>
            <v-card-actions>
              <v-btn tile color="#993333" x-large dark class="hero-button">Learn More</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>
<script>
export default {
    name: "hero-section",
    data: () => ({
        justify: 'center'
    })
}
</script>
<style>
.background-image-hero {
  background: linear-gradient(
      rgba(253, 253, 253, 0.75), 
      rgba(234, 232, 232, 0.75)
    ), url("../assets/3.jpg");
  background-size: cover;
  color: white;
}
.hero-title {
  font-size: 2.6em;
  margin: 25px 0px;
  color: #993333;
}
.hero-sub-title {
  font-size:2.5em;
  margin:25px 0px;
  color: #ad5b5b;
}
.transparent {
  background-color: white!important;
  opacity: 0.95;
  border-color: transparent!important;
}
.hero-text {
  font-size:1.6em;
  color: #555555;
}
.hero-button {
  height: 65px !important;
  padding: 0px 89px !important;
  font-size: 1.3em !important;
  opacity: 0.85;
}
</style>