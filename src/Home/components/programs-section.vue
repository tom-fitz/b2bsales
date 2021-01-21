<template>
  <v-container fluid>
    <v-row
        :class="[$vuetify.breakpoint.mdAndUp ? 'ml-12 mb-12' : 'ml-8',
        'fill-height background-image-programs']"
        align="stretch"
    >
      <template v-for="(item, i) in items">
        <v-col
            :key="i"
            cols="12"
            md="3"
            :class="[
                'ma-0 pa-0'
                ]"
        >
          <v-card
              :class="[
              $vuetify.breakpoint.mdAndUp ? {'white-border-side' : i === 1 || i === 2 } : {'white-border-top-bottom' : i === 1 || i === 2 },
              'ma-0 pa-6 trans d-flex flex-column'
              ]"
              tile
              height="100%"
          >
            <v-card-title
                :class="[$vuetify.breakpoint.mdAndUp ? 'cta-title-md' : 'cta-title-sm', 'mt-4', 'text-left']"
            >
              {{ item.title }}
            </v-card-title>
            <div>
              <v-card-text
                  :class="[
                    $vuetify.breakpoint.mdAndUp ? 'text-size-md ': 'text-size-sm',
                    'mt-2 mb-2 pa-6 text-display'
                    ]"
              >
                {{ item.text }}
              </v-card-text>
            </div>
            <v-spacer></v-spacer>
            <v-card-actions>
              <v-btn
                  :class="[
                    $vuetify.breakpoint.mdAndUp ? 'btn-text-md' : 'btn-text-sm mb-6',
                   'ml-4 pa-6'
                  ]"
                  outlined
                  color="#D1D0D0"
                  :to=" item.route "
              >
                Read More
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "programs-section",
  data: () => ({
    alignment: 'center',
    justify: 'center',
    transparent: 'rgba(255, 255, 255, 0)',
    items: [
      {
        title: "Founders",
        text: "One of the biggest challenges facing any startup is landing the first few paying customers. Often with no prior sales experience, most technical founders hack their way into initial sales attempts — missing crucial first customer opportunities and exhausting precious startup time and capital.",
        route: "/founders",
      },
      {
        title: '1-Day Crash Course',
        text: "Kent Summers is a seasoned technology executive with four successful exits (three as founder & CEO) and 30 years contribution to the Boston entrepreneurship community in operating, advisory and board roles.",
        route: "/one-day-course"
      },
      {
        title: '2 and 1/2 Day Crash Course',
        text: "Kent Summers is a seasoned technology executive with four successful exits (three as founder & CEO) and 30 years contribution to the Boston entrepreneurship community in operating, advisory and board roles.",
        route: "/two-day-course"
      },
      {
        title: 'Sales Office Hours',
        text: "Kent Summers is a seasoned technology executive with four successful exits (three as founder & CEO) and 30 years contribution to the Boston entrepreneurship community in operating, advisory and board roles.",
        route: "/sales-office-hours",
      }
    ]
  })
}
</script>
<style scoped>
.initial-letter {
  font-size: 24px
}
.program-title{
  display: inline-block;
  color: #D1D0D0;
  font-size: 40px;
  line-height:46px;
}
.outline-color {
  border: 2px #ad5b5b solid !important;
}
.background-image-programs {
  box-shadow: inset 2000px 0 0 0 rgba(0, 51, 102, 0.7);
  background: url("../../assets/b_2.jpg");
  background-size: cover;
}

.red-bg {
  background-color: #993333 !important;
}

.v-card {
  overflow: hidden;
  box-shadow: inset 1500px 0 0 0 rgba(0, 25, 51, 0.7) !important;
  transition: .4s ease-in-out;
}
.trans {
  background-color: transparent!important;
  box-shadow: none !important;
  height: 100%;
}

.text-display {
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

.cta-title-md {
  display: inline-block;
  color: #D1D0D0;
  /*font-size: 40px;*/
  font-size: 3.3vmin;
  line-height:46px;
  padding: 15px 25px;
  /*min-height: 150px;*/
}

.cta-title-sm {
  display: inline-block;
  color: #D1D0D0;
  font-size: 28px;
  line-height: 34px;
  padding: 5px 25px;
}

.founder-title{
  display: inline-block;
  color: white;
  font-size: 40px;
  line-height:46px;
}

.founder-trans {
  background-color: #993333;
  border-left: none !important;
  border-top: none !important;
  box-shadow: none !important;
}

.founder-text {
  color: rgba(255, 255, 255, 1) !important;
  font-size: 16px;
  line-height: 26px;
  padding-right: 80px !important;
}

.v-card__text, .v-card__title {
  word-break: normal !important;
}

.title-display{
  color: transparent;
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

.btn-text-md {
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 4.5px;
}
.btn-text-sm {
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 4.5px;
}

.btn-text {
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 4.5px;
}

.founder-btn-text {
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 4.5px;
}
.founder-btn-text:active {
  color: transparent
}
.founder-btn-text::before {
  color: transparent
}
.founder-btn-text::after {
  color: transparent
}
.founder-btn-text:hover {
  color: transparent;
}

</style>