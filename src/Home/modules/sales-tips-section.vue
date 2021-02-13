<template>
<v-container fluid class="pt-0 pb-0 background-gradient-tips">
        <v-row class="padding-126">
            <v-col cols="12">
                <v-row
                :align="alignment"
                :justify="justify"
                >
                    <v-col 
                        md="8"
                        :align="alignment"
                        :justify="justify"
                    >
                        <h1 class="hero-title">Sales Tactics</h1>
                    </v-col>
                </v-row>
              <v-row
                  justify="center"
              >
                <v-col cols="8" class="pb-0 pt-0">
                  <v-row
                      align="center"
                      justify="center"
                  >
                    <v-col md="12">
                      <v-card
                          class="mt-10 pt-6 mx-auto transparent"
                          tile
                          elevation="0"
                      >
                        <p>One of the biggest challenges facing any startup is landing the first few paying customers. Often with no prior sales experience, most technical founders hack their way into initial sales attempts — missing crucial first customer opportunities and exhausting precious startup time and capital.</p>
                        <p>Kent Summers’ sales training workshops are uniquely suited to the needs of technical founders and earlystage ventures, focusing on B2B sales fundamentals at the “how to” level — practical knowledge, skills and insights that founders and key sales personnel can apply right away to improve sales execution and performance. 20+ years supporting the sales needs of early-stage ventures confirms that most founders, regardless of background, are able to grasp essential sales concepts and skills in a short amount of time, and this basic knowledge can make a huge difference in the success and growth of a new venture.</p>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
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
                        <v-tabs
                        v-model="tab"
                        background-color="#993333"
                        dark
                        >
                            <v-tab
                                v-for="item in items"
                                :key="item.tab"
                            >
                                {{ item.tab }}
                            </v-tab>
                        </v-tabs>

                        <v-tabs-items v-model="tab">
                            <v-tab-item
                                v-for="item in items"
                                :key="item.tab"
                            >
                                <v-card flat>
                                <v-card-title class="tips-sub-title">{{ item.title }}</v-card-title>
                                <v-card-text class="tips-text">{{ item.content }}</v-card-text>
                                <v-card-actions>
                                    <v-btn text>Read More <v-icon>mdi-chevron-right</v-icon></v-btn>
                                </v-card-actions>
                                </v-card>
                            </v-tab-item>
                        </v-tabs-items>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: "sales-tips-section",
    data: () => ({
        alignment: 'center',
        justify: 'center',
        tab: null,
        items: [
          { tab: 'One', title: 'Sale Tip 1 Title', content: 'Sales tip content goes here. This can be limited/brief text or display the whole post, up to you. The "tab" can display anything you want, so instead of "One", I was thinking it could display the posts date, but what ever you think will work best. These are very customizable, so you can also bring in pictures, and links and whatever else you see fit.' },
          { tab: 'Two', content: 'Tab 2 Content' },
          { tab: 'Three', content: 'Tab 3 Content' },
          { tab: 'Four', content: 'Tab 4 Content' },
          { tab: 'Five', content: 'Tab 5 Content' },
          { tab: 'Six', content: 'Tab 6 Content' },
          { tab: 'Seven', content: 'Tab 7 Content' },
          { tab: 'Eight', content: 'Tab 8 Content' },
          { tab: 'Nine', content: 'Tab 9 Content' },
          { tab: 'Ten', content: 'Tab 10 Content' },
        ],
    })
}
</script>
<style scoped>
.background-gradient-tips {
  background-image: linear-gradient(to bottom right, rgba(255, 255, 255, 0.65), 
    rgba(255, 255, 255, 0.95)), url("../../assets/webb_02.png");
  background-repeat: repeat;
  background-attachment: fixed;
  background-position:left;
}
.tips-sub-title {
  font-size:2.0em;
  margin:15px 0px;
  color: #ad5b5b;
}
.tips-text {
  font-size:1.1em;
  color: #555555;
}
.padding-126 {
  padding-top: 126px;
  padding-bottom: 126px;
}
</style>