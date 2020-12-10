<template>
  <div>
    <!-- Dialog -->
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ title }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-form ref="form" v-model="formValue" lazy-validation>
                <slot></slot>
              </v-form>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" light @click.stop="action">Save Edited Text</v-btn>
          <v-btn color="warning" light @click.stop="close">Cancel Edits</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "admin-template-dialog",
  props: {
    title: String,
  },
  data () {
    return {
      dialog: false,
    }
  },
  computed: {
    formValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  },
  methods: {
    show() {
      this.dialog = true;
    },
    action() {
      this.$emit("action");
      this.dialog = false;
      this.$emit("close");
    },
    close() {
      this.dialog = false;
      this.$emit("close");
    },
  },
};
</script>