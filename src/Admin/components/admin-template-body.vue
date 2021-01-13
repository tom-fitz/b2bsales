<template>
  <div>
    <v-card
        class="mt-10 pt-0 mx-auto"
        tile
        elevation="0"
    >
      <v-card-title class="data-title">{{ data.title }}</v-card-title>
      <v-card-text class="data-text" v-html="data.text">
      </v-card-text>
      <v-card-actions v-if="data.buttonText">
        <v-btn
            outlined
            style=""
            class="data-button"
            target="_blank"
            :href="data.buttonLink"
        >
          {{ data.buttonText }} <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "admin-template-body",
  props: {
    name: String,
  },
  computed: {
    data: {
      get() {
        return this.$store.state[this.name]
      },
      set(){}
    }
  },
  created() {
    this.$store.dispatch("getData", this.name)
      .then(resp => {
        this.data = resp
      })
      .catch(() => null)
  }
};
</script>
<style>
.data-title {
  font-size:92px;
  line-height: 92px;
  margin: 25px 0;
  color: #993333;
}
.data-text {
  font-size:20px;
  font-weight: 400;
  line-height: 28px;
  color: #555555;
}
.data-button {
  color: #993333 !important;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 4.5px;
  padding: 25px !important;
}
</style>