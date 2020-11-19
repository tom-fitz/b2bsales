<template>
  <v-container fluid class="pb-0 pt-0">
    <v-row>
      <v-col cols="12" class="pb-0 pt-0">
        <v-row
          :align="alignment"
          :justify="justify"
        >
          <v-col md="8">
            <v-card
              class="mt-10 mb-10 pt-6 pb-6 mx-auto transparent"
              tile
              elevation="0"
            >
              <h1 class="hero-title">About Us</h1>
              <p>One of the biggest challenges facing any startup is landing the first few paying customers. Often with no prior sales experience, most technical founders hack their way into initial sales attempts — missing crucial first customer opportunities and exhausting precious startup time and capital.</p>
              <p>Kent Summers’ sales training workshops are uniquely suited to the needs of technical founders and earlystage ventures, focusing on B2B sales fundamentals at the “how to” level — practical knowledge, skills and insights that founders and key sales personnel can apply right away to improve sales execution and performance. 20+ years supporting the sales needs of early-stage ventures confirms that most founders, regardless of background, are able to grasp essential sales concepts and skills in a short amount of time, and this basic knowledge can make a huge difference in the success and growth of a new venture.</p>
            </v-card>
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
<style scoped>
h2 {
  color: #993333 !important;
}
.background-image-about {
  background: linear-gradient(
      rgba(153, 0, 0, 0.75), 
      rgba(255, 102, 102, 0.75)
    ), url("../../assets/a.jpg");
  background-size: cover;
  color: white;
}
.shadow {
  -webkit-box-shadow: 0px 5px 10px -5px rgba(102,102,102,1);
  -moz-box-shadow: 0px 5px 10px -5px rgba(102,102,102,1);
  box-shadow: 0px 5px 10px -5px rgba(102,102,102,1);
}
.bg-trans {
  background-color: transparent!important;
}
.transparent {
  background-color: transparent!important;
  opacity: 0.95;
  border-color: transparent!important;
}
.mission-statement {
  background: rgba(232,209,209,1);
  background: -moz-linear-gradient(-45deg, rgba(232,209,209,1) 0%, rgba(251,247,247,1) 100%);
  background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(232,209,209,1)), color-stop(100%, rgba(251,247,247,1)));
  background: -webkit-linear-gradient(-45deg, rgba(232,209,209,1) 0%, rgba(251,247,247,1) 100%);
  background: -o-linear-gradient(-45deg, rgba(232,209,209,1) 0%, rgba(251,247,247,1) 100%);
  background: -ms-linear-gradient(-45deg, rgba(232,209,209,1) 0%, rgba(251,247,247,1) 100%);
  background: linear-gradient(135deg, rgba(232,209,209,1) 0%, rgba(251,247,247,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e8d1d1', endColorstr='#fbf7f7', GradientType=1 );
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
</style>