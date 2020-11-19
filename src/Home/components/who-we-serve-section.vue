<template>
  <v-container fluid>
    <v-row class="fill-height background-image-about ml-12 mb-12" align="center" justify="center">
      <template v-for="(item, i) in items">
        <v-col
            :key="i"
            cols="12"
            md="4"
            class="ma-0 pa-0"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card
                :class="[{ 'on-hover': hover, 'red-border': i === 1 }, 'ma-0', 'pa-6', 'trans']"
                tile
            >
              <v-card-title class="">
                <v-row
                    class="fill-height flex-column"
                >
                  <h2 :class="[{ 'title-hover': hover }, 'mt-4', 'cta-title', 'text-left']">{{ item.title }}</h2>

                  <div style="height:350px;" justify="center">
                    <p :class="[{ 'show-text': hover }, 'mt-6', 'mb-6', 'pa-6', 'text-display']">
                      {{ item.text }}
                    </p>
                  </div>
                  <div>
                    <v-btn
                        :class="[{ 'show-btns': hover }, 'ml-6', 'pa-6', 'btn-text']"
                        outlined
                        :to=" item.route "
                    >
                      Read More
                    </v-btn>
                  </div>
                </v-row>
              </v-card-title>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "who-we-serve-section",
  data: () => ({
    alignment: 'center',
    justify: 'center',
    transparent: 'rgba(255, 255, 255, 0)',
    icons: ['mdi-rewind', 'mdi-play', 'mdi-fast-forward'],
    items: [
      {
        title: 'Accelerators',
        text: "Too often startups fail when the founder believes that “hiring a salesperson” will solve the initial customer sales dilemma. For the majority of startups, the technical founder must be the first salesperson ― and success begins with learning sales essentials from a skilled practitioner.",
        route: "/accelerators",
      },
      {
        title: 'Universities',
        text: 'Founders who manage to gain initial customer traction must now transition from founder-only sales to the first sales hire. This can be especially challenging for technical founders who lack experience recruiting and managing a salesperson. Expectations are seldom realized, and too often the first few sales hires fail, stalling growth by a year or more.',
        route: "/universities",
      },
      {
        title: 'Investors',
        text: 'Following successful first sales hire, founders must then build a team sales process for scale. This stage of growth presents many unique needs and challenges; for example, how to: drive and support a team sales process, acquire customers more cost-effectively, forecast revenue, expand market reach through partners — and how to make the all-important transition from startup “build” mindset to scaleup with “team sales” culture.',
        route: "/investors",
      },
    ],
  })
}
</script>
<style scoped>
* {
  font-family: "Roboto",sans-serif;
}
.initial-letter {
  font-size: 24px
}
.v-card {
  transition: .4s ease-in-out;
}

.v-card:hover {
  box-shadow: inset 2000px 0 0 0 rgba(0, 25, 51, 0.7) !important;
}

.title-hover {
  transform: scaleX(1);
}

.title-hover:after{
  display:block;
  content: '';
  border-bottom: solid 3px #019fb6;
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
}

.title-hover.cta-title:after {
  transform-origin:  0% 50%;
}

.text-display{
  color: transparent;
}

.show-text{
  color: rgba(255, 255, 255, 1) !important;
  font-size: 16px;
  line-height: 26px;
  padding-right: 180px !important;
}

.show-btns {
  border-color: #993333 !important;
  color: white !important;
  font-weight: 600;
  opacity: 0.9 !important;
}
.btn-text {
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 4.5px;
  color: transparent;
}
.background-image-about {
  box-shadow: inset 2000px 0 0 0 rgba(0, 51, 102, 0.7);
  background: url("../../assets/3_new.jpg");
  background-size: cover;
  /*color: white;*/
}
.trans {
  background-color: transparent!important;
  box-shadow: none !important;
  height: 600px;
}
.red-border {
  border-right:1px solid #D1D0D0 !important;
  border-left:1px solid #D1D0D0 !important;
  opacity: 0.80;
}
.padding-126 {
  padding-top: 50px;
  padding-bottom: 80px;
}

.cta-title{
  display: inline-block;
  color: #D1D0D0;
  font-size: 40px;
  line-height:46px;
  padding: 15px 25px;
}

.padding-126 {
  padding-top: 126px;
  padding-bottom: 126px;
}
.v-card__text, .v-card__title {
  word-break: normal !important;
}
</style>