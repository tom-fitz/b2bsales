<template>
  <v-container fluid class="ma-0 pb-0 pt-0">
    <v-row
        :class="[$vuetify.breakpoint.mdAndUp ? 'ml-12 mb-12' : 'ml-8',
        'align-start d-flex fill-height background-image-about']"
        align="stretch"
        justify="center"
    >
      <template v-for="(item, i) in items">
        <v-col
            :key="i"
            cols="12"
            md="4"
            class="ma-0 pa-0"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card
                :class="[{ 'on-hover': $vuetify.breakpoint.mdAndUp ? hover : false},
                $vuetify.breakpoint.mdAndUp ? {'white-border-side' : i === 1} : {'white-border-top-bottom' : i === 1},
                'ma-0 pa-6 trans d-flex flex-column'
                ]"
                tile
            >
              <v-card-title
                  :class="[$vuetify.breakpoint.mdAndUp ? 'cta-title-md' : 'cta-title-sm', 'title-hover', 'mt-4']"
              >
                {{ item.title }}
              </v-card-title>
              <div>
                <v-card-text

                    :class="[$vuetify.breakpoint.mdAndUp ? { 'show-text text-size-md mt-6 mb-6': hover, 'mt-6 mb-6' : !hover } : 'show-text text-size-sm',
                      'mt-2 mb-2 pa-6 text-display']"
                >
                  {{ item.text }}
                </v-card-text>
              </div>
              <v-spacer></v-spacer>
              <v-card-actions>
                <v-btn
                    :class="[$vuetify.breakpoint.mdAndUp ? { 'show-btns btn-text-md': hover } : 'btn-text-sm show-btns mb-6',
                    'ml-6', 'pa-6 hide']"
                    outlined
                    :to=" item.route "
                >
                  Read More
                </v-btn>
              </v-card-actions>
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

.hide {
  color: transparent;
}

.title-hover {
  /*transform: scaleX(1);*/
  transform: translate3d(0,0,0);
  -webkit-transform: translate3d(0,0,0);
  -moz-transform: translate3d(0,0,0);
}

.title-hover:after{
  display:block;
  content: '';
  border-bottom: solid 3px #019fb6;
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
  -webkit-transition: transform 250ms ease-in-out;
  -moz-transition: transform 250ms ease-in-out;
}

.title-hover.cta-title:after {
  transform-origin:  0% 50%;
}

.text-display{
  color: transparent;
  font-size: 16px;
  line-height: 26px;
  width:75%;
}

.show-text{
  color: rgba(255, 255, 255, 1) !important;
}

.text-size-md {
  font-size: 16px;
  line-height: 26px;
}

.text-size-sm {
  font-size: 14px;
  line-height: 22px;
}

.padding-right {
  padding-right: 180px !important;
  font-size: 16px;
  line-height: 26px;
}

.show-btns {
  border-color: #993333 !important;
  color: white !important;
  font-weight: 600;
  opacity: 0.9 !important;
}
.btn-text-md {
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 4.5px;
  color: transparent;
}
.btn-text-sm {
  font-size: 16px;
  line-height: 20px;
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
  height: 100%;
}
.white-border-side {
  border-right:1px solid #D1D0D0 !important;
  border-left:1px solid #D1D0D0 !important;
  opacity: 0.80;
}
.white-border-top-bottom {
  border-top: 1px solid #D1D0D0 !important;
  border-bottom: 1px solid #D1D0D0 !important;
  opacity: 0.80;
}
.padding-126 {
  padding-top: 50px;
  padding-bottom: 80px;
}

.cta-title-md {
  display: inline-block;
  color: #D1D0D0;
  font-size: 40px;
  line-height:46px;
  padding: 15px 25px;
}

.cta-title-sm {
  display: inline-block;
  color: #D1D0D0;
  font-size: 28px;
  line-height: 34px;
  padding: 5px 25px;
}

.padding-126 {
  padding-top: 126px;
  padding-bottom: 126px;
}
.v-card__text, .v-card__title {
  word-break: normal !important;
}
</style>