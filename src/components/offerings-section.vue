<template>
  <v-container fluid class="pb-0 pt-0">
    <v-row class="background-image-offerings">
      <v-col cols="12" class="pb-0 pt-0">
        <v-row
          :align="alignment"
          :justify="justify"
        >
          <v-col md="8">
            <v-card
              class="ma-3 pa-6 mx-auto transparent"
              tile
              elevation="0"
            >
              <h1 class="hero-title-white">Offerings</h1>
              <!-- <p><span class="initial-letter">O</span>ne of the biggest challenges facing any startup is landing the first few paying customers. Often with no prior sales experience, most technical founders hack their way into initial sales attempts — missing crucial first customer opportunities and exhausting precious startup time and capital.</p>
              <p>Kent Summers’ sales training workshops are uniquely suited to the needs of technical founders and earlystage ventures, focusing on B2B sales fundamentals at the “how to” level — practical knowledge, skills and insights that founders and key sales personnel can apply right away to improve sales execution and performance. 20+ years supporting the sales needs of early-stage ventures confirms that most founders, regardless of background, are able to grasp essential sales concepts and skills in a short amount of time, and this basic knowledge can make a huge difference in the success and growth of a new venture.</p> -->
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="pb-0 pt-0">
            <v-row 
              :justify="justify"
            >
                <v-col md="8" >
                <v-card
                  class="ma-3 pa-6"
                  outlined
                  tile
                >
                  <!-- <v-card-actions class="justify-center"><v-icon size="115" color="#993333">mdi-account-hard-hat</v-icon></v-card-actions> -->

                  <v-card-title class="cta-title">
                    STARTUP CRASHCOURSE in B2B SALES
                  </v-card-title>
                  <v-card-text>
                    The one-day CRASHCOURSE in B2B Sales provides founders &amp; key startup personnel a highly-accelerated education in the endto-end B2B sales process — addressing the critical needs and challenges that most founders will face during the first 2-3 years of starting a new venture, compressed into two intensive half-day sessions.
                  </v-card-text>
                  <v-card-text>
                    The morning session covers the basic "tools and mechanics" required for sales focus and efficiency. The afternoon session addresses important qualitative aspects of successful seller-buyer interaction — with many effective techniques to engage prospective customers, build a business case and decision-making team consensus, overcome common objections and decision barriers, and proven approaches to product pricing, packaging, proposal development and negotiation to close deals.
                  </v-card-text>
                  <v-card-text>
                    The CRASHCOURSE combines lecture, lots of attendee interaction, and real-world anecdotes from 25+ years of different sales situations. To reinforce the material presented during the day, attendees will also trouble-shoot a number of “failed sales” mini-case studies to recommend corrective sales action or behavior.
                  </v-card-text>
                  
                  <!-- <v-card
                    md="2"
                  >

                  </v-card> -->
                  <v-row :justify="justify">
                      <v-col md="2"
                      >
                        Morning Session
                      </v-col>
                      <v-col md="2"
                      >
                        Afternoon Session
                      </v-col>
                  </v-row>


                  <v-card-actions>
                      <v-btn text color="#993333">Book Now <v-icon>mdi-chevron-right</v-icon></v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
            <v-row 
              :justify="justify"
            >
              <v-col md="8">
                <v-card
                  class="ma-3 pa-6"
                  outlined
                  tile
                >
                  <!-- <v-card-actions class="justify-center"><v-icon size="115" color="#993333">mdi-chart-areaspline</v-icon></v-card-actions> -->

                  <v-card-title class="cta-title">
                    SCALEUP SALES
                  </v-card-title>
                  <v-card-text>
                    The B2B Sales Bootcamp is designed to improve team sales performance for highpotential ventures in the $1M to $5M growth phase — by providing founders and key sales personnel with step-by-step guidance on proven team sales methods.
                  </v-card-text> 
                  <v-card-text>
                    The 2 &amp; 1/2 day Sales Workshop addresses key team sales process challenges that most companies struggle with during early-stage growth, compressed into five interactive working sessions over two and 1/2 days.
                  </v-card-text>
                  <v-card-text>
                    Through instruction, collaborative exercises and lots of discussion, founders and key sales personnel will learn effective team sales practices to improve focus and efficiency, accelerate customer adoption and revenue growth.
                  </v-card-text>
                  <v-card-text>
                    Attendees will develop a Sales Execution Plan for their business (workbook format), and receive POC Proposal and XLS forecasting templates.
                  </v-card-text>
                  <v-card-actions>
                      <v-btn text color="#993333">Book Now <v-icon>mdi-chevron-right</v-icon></v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
            <v-row 
              :justify="justify"
            >
              <v-col md="8">
                <v-card
                  class="ma-3 pa-6"
                  outlined
                  tile
                >
                  <!-- <v-card-actions class="justify-center"><v-icon size="115" color="#993333">mdi-airplane-takeoff</v-icon></v-card-actions> -->

                  <v-card-title class="cta-title">
                    B2B Sales Coaching ― Office Hours
                  </v-card-title>
                  <v-card-text>
                    <strong>90-Min. Coaching Sessions</strong><br />
                    Pre-scheduled (min. 1 session/month). Sales strategy adoption: process, tools and skills to eliminate obstacles and improve sales efficiency and performance
                  </v-card-text> 
                  <v-card-text>
                    <strong>On-demand Sessions</strong><br />
                    As needed: tactical sales advisory support to address urgent / time-sensitive sales needs (team, deals, negotiation, objections, …)
                  </v-card-text>
                  <v-card-text>
                    Sales coaching sessions delivered remotely via Zoom
                  </v-card-text>
                  <v-card-actions>
                      <v-btn text color="#993333">Book Now <v-icon>mdi-chevron-right</v-icon></v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
    name: "offerings-section",
    data: () => ({
        alignment: 'center',
        justify: 'center'
    })
}
</script>
<style scoped>
.initial-letter {
  font-size: 24px
}
.background-image-offerings {
  background: linear-gradient(
      rgba(153, 0, 0, 0.75), 
      rgba(255, 102, 102, 0.75)
    ), url("../assets/2.jpg");
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
.hero-title-white {
  font-size: 2.6em;
  margin: 25px 0px;
  color: white;
}
.cta-title {
  color: #ad5b5b;
  font-size: 1.3em;
  padding: 15px 25
  px;
}

</style>