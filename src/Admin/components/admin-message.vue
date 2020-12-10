<template>
  <div class="text-center">
    <v-snackbar
        v-if="error"
        color="red"
        v-model="snackbar"
        :timeout="timeout"
    >
      {{ error }}

      <template v-slot:action="{ attrs }">
        <v-btn
            color="blue"
            text
            v-bind="attrs"
            @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar
        v-if="success"
        color="green"
        v-model="snackbar"
    >
      {{ success }}

      <template v-slot:action="{ attrs }">
        <v-btn
            color="blue"
            text
            v-bind="attrs"
            @click="close"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
export default {
  name: "admin-message",
  props: {
    error: String,
    success: String,
    snackbar: Boolean,
    timeout: Number
  },
  methods: {
    close(){
      this.$emit("close");
    }
  }
}
</script>