<template>
  <v-container fluid class="pb-0 pt-0">
    <v-row>
      <v-col cols="12" class="pb-0 pt-0 ml-12">
        <v-row
          :align="alignment"
          :justify="justify"
        >
          <v-col cols="12">
            <v-card
                tile
                elevation="0"
                class="pa-0 ma-0"
            >
              <v-flex xs12>
                <v-card
                    tile
                    elevation="0"
                    class="pt-0 pb-10 no-border"
                >
                  <v-layout
                      class="pa-0 ma-0"
                      align-start
                  >
                                        <v-img
                                            src="../../assets/20171207_133255.png"
                                            max-width="500px"
                                            contain
                                        ></v-img>
                    <v-flex
                        xs7
                        lg9
                        class="content-padding red-bg"
                    >
<!--                      <v-card-subtitle class="custom-sub-headline">-->
<!--                        {{ item.subtitle }}-->
<!--                      </v-card-subtitle>-->
                      <v-card-text
                          class="pt-0 pb-0 tip-content"
                      >
                        <h1 class="bio-title">Kent Summers</h1>
                        <p>Kent Summers is a seasoned technology executive with four successful exits (three as founder &amp; CEO) and 30 years contribution to the Boston entrepreneurship community in operating, advisory and board roles. His passion is working with technical founders to navigate early-stage company formation and growth challenges — with a specific focus on sales strategies and execution to accelerate a company's path to customers and revenue.</p>
                        <p>For the past 19 years Summers has been an active volunteer mentor with the MIT Venture Mentoring Service (VMS), where he helps technical founders establish and grow new companies; and an Instructor with the VMS Outreach team, where he helps many organizations around the globe — universities, business accelerators, economic development orgs and investment consortia — successfully adopt and scale the MIT VMS Team Mentoring model.</p>
                        <p>Summers teaches the B2B Sales for Startups IAP course at MIT and is a regular lecturer at the Harvard Business School. Kent is a retained EIR with two international VC funds, advises Fellows enrolled in the Harvard Advanced Leadership Initiative (ALI), is on the teaching Faculty of TiE Boston, serves on the boards of Sigma Labs (NASDAQ:SGLB), Massachusetts Materials Technology, LLC and iQ3Connect, Inc., and advises several early-stage companies in the Boston and NYC areas.</p>
                      </v-card-text>
<!--                      <v-card-text class="tip-date">-->
<!--                        Date Posted: {{ item.date }}-->
<!--                      </v-card-text>-->
                      <v-card-actions>
                        <v-btn
                            outlined
                            color="white"
                            style=""
                            class="tip-button"
                        >
                          Lets Connect
                        </v-btn>
                      </v-card-actions>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
    name: "bio-section",
    data: () => ({
        alignment: 'center',
        justify: 'center',
    })
}
</script>
<style scoped>
.content-padding {
  padding-left: 46px !important;
  padding-top: 44px !important;
  padding-bottom: 44px !important;
}
.tip-button {
  color: white !important;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 4.5px;
  padding: 25px !important;
}
.red-bg {
  background-color: #993333 !important;
}
.bio-title {
  color: white !important;
  font-size: 38px;
  line-height: 38px;
  margin: 25px 0;
}
.tip-content {
  font-size: 18px;
  line-height: 28px;
  color: white !important;
  width: 70% !important;
}
.background-image-about {
  background: linear-gradient(
      rgba(153, 0, 0, 0.75), 
      rgba(255, 102, 102, 0.75)
    ), url("../../assets/a.jpg");
  background-size: cover;
  color: white;
}
.transparent {
  background-color: white!important;
  opacity: 0.95;
  border-color: transparent!important;
}
.padding-126 {
  padding-top: 50px;
  padding-bottom: 80px;
}

.cta-title {
  color: #ad5b5b;
  font-size: 1.3em;
  padding: 15px 25px;
}
.padding-126 {
  padding-top: 126px;
  padding-bottom: 126px;
}
.v-card__text, .v-card__title {
  word-break: normal !important;
}
.av-img {
  border-radius: 0 !important;
}
</style>