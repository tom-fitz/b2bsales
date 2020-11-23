<template>
  <div>
    <v-row>
      <!--      <Message :error="error" :success="success" :snackbar="snackbar" :timeout="3000"/>-->
      <div class="text-center">
        <v-snackbar
            v-if="error"
            color="red"
            v-model="snackbar"
            :timeout="timeout"
        >
          {{ error }}
        </v-snackbar>
        <v-snackbar
            v-if="success"
            color="green"
            v-model="snackbar"
        >
          {{ success }}
        </v-snackbar>
      </div>
    </v-row>
    <v-row>
      <v-btn
          class="ml-12 mt-12"
          color="primary"
          light
          @click.stop="$refs.dialog.show()"
      >
        Edit {{ name }} Text
      </v-btn>
    </v-row>
    <Dialog
        ref="dialog"
        :title="title"
        v-on:action="saveEditedText()"
    >
      <v-col cols="12">
        <v-text-field
            label="Title"
            v-model="editableContent.title"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
            v-if="editableContent.buttonText"
            label="Button Text"
            v-model="editableContent.buttonText"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
            v-if="editableContent.buttonLink"
            label="Button Link"
            v-model="editableContent.buttonLink"
        ></v-text-field>
      </v-col>
      <v-row>
        <div>
          <quill-editor
              v-model="editableContent.text"
              ref="quillEditor"
              :options="editorOption"
          >
          </quill-editor>
        </div>
      </v-row>
    </Dialog>
    <v-container fluid class="pb-0 pt-0">
      <v-row class="pa-0 ml-12 mt-12 mb-12">
        <v-col cols="6" class="pb-0 pt-0">
          <v-row
              justify-start
          >
            <v-col md="12">
              <ContentBody :name="name"></ContentBody>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import Dialog from "../components/admin-template-dialog";
import ContentBody from "../components/admin-template-body";
// import Message from "../components/admin-message";
import { quillEditor } from "vue-quill-editor";
export default {
  name: "admin-terms",
  components: {
    quillEditor,
    Dialog,
    // Message,
    ContentBody
  },
  data: () => ({
    name: "terms",
    editableContent: "",
    dialog: false,
    title: "Edit terms Text",
    snackbar: false,
    timeout: 3000,
    editorOption: {
      modules: {
        toolbar: ['bold', 'italic', 'underline', 'strike']
      },
      bounds: 'self'
    }
  }),
  computed: {
    ...mapState(['success', 'error'])
  },
  created() {
    this.$store.dispatch("getData", this.name)
        .then(resp => {
          this.editableContent = Object.assign({}, resp)
        })
        .catch(() => null)
  },
  methods: {
    saveEditedText() {
      this.$store.dispatch("patchData", {
        data: Object.assign({}, this.editableContent),
        name: this.name
      })
          .then(() => {
            this.snackbar = true
            this.dialog = false
          })
          .catch(() => null)
    },
    cancelEdits() {
      this.dialog = false
    }
  },
};
</script>