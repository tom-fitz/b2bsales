<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row
          :align="alignment"
          :justify="justify"
        >
          <v-col md="8">
            <v-card
              class="ma-3 pa-6"
              outlined
              tile
            >
              <p><span class="initial-letter">O</span>ne of the biggest challenges facing any startup is landing the first few paying customers. Often with no prior sales experience, most technical founders hack their way into initial sales attempts — missing crucial first customer opportunities and exhausting precious startup time and capital.</p>
              <p>Kent Summers’ sales training workshops are uniquely suited to the needs of technical founders and earlystage ventures, focusing on B2B sales fundamentals at the “how to” level — practical knowledge, skills and insights that founders and key sales personnel can apply right away to improve sales execution and performance. 20+ years supporting the sales needs of early-stage ventures confirms that most founders, regardless of background, are able to grasp essential sales concepts and skills in a short amount of time, and this basic knowledge can make a huge difference in the success and growth of a new venture.</p>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-row 
              :justify="justify"
              class="grey lighten-5"
            >
              <v-col md="3">
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
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
    name: "about-section",
    data: () => ({
        alignment: 'center',
        justify: 'center'
    })
}
</script>
<style>
.initial-letter {
  font-size: 24px
}
</style>