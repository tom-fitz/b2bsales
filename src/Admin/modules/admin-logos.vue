<template>
  <div class="home">
    <!-- dialog -->
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ dialogText }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <input type="file" id="headshot" accept="image/jpeg" multiple v-on:change="onFileChange">
              </v-col>
              <v-col cols="12" v-if="imageExist">
                <v-card flat>
                  <v-avatar
                      tile
                      size="200"
                  >
                    <v-img
                        v-bind:src="image"
                        contain
                    ></v-img>
                  </v-avatar>
                </v-card>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Link*" v-model="logo.path" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="warning" light @click="dialogButtonFunc">{{ dialogButtonText }}</v-btn>
          <v-btn color="primary" light @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
<!--    End of dialog -->
    <v-row class="pl-12 mt-12">
      <v-btn
          color="primary"
          light
          @click.stop="addLogo()"
      >
        Add New Logo
      </v-btn>
    </v-row>
    <v-row>
      <v-container fluid class="pa-0 ma-0">
        <v-row>
          <v-col>
            <v-row class="ml-12 mr-12">
              <v-col
                  justify="center"
                  align-center
                  cols="12"
                  xs="12"
                  sm="2"
                  v-for="(x, i) in logos" :key="i"
              >
                <v-hover v-slot="{ hover }">
                  <v-card
                      class="pa-2 mb-10 ml-5 mr-5"
                      max-width="200"
                      light
                      style="border-color:#993333;"
                  >
                    <v-img
                        v-bind:src="x.imageName"
                    >
                      <v-expand-transition>
                        <div
                            v-if="hover"
                            class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-3 white--text"
                            style="height: 100%;"
                        >
                          <v-btn
                              @click="editLogo(x)"
                          >
                            EDIT
                          </v-btn>
                        </div>
                      </v-expand-transition>
                    </v-img>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </div>
</template>
<script>
// import { quillEditor } from "vue-quill-editor";
import { ref } from "@/main"
import { mapState } from "vuex";
export default {
  name: "admin-logos",
  components: {
    // quillEditor
  },
  data () {
    return {
      dialog: false,
      introDialog: false,
      editorOption: {
        theme: 'snow'
      },
      image: "",
      imageFile: "",
      imageExist: false,
      fileRef: "",
      file: "",
      logo: {
        imageName: "",
        path: ""
      },
      editableLogo: "",
      dialogText: "",
      dialogButtonText: "",
      dialogButtonFunc: ""
    }
  },
  computed: {
    ...mapState({
      logos: ['logos']
    })
  },
  created(){
    this.$store.dispatch('getLogos')
        .catch(() => null)
  },
  methods: {
    onFileChange(e) {
      this.file = e.target.files[0]
      this.fileRef = ref.child('logos/' + this.file.name)
      this.logo.imageName = this.file.name
      this.imageExist = true
      this.image = URL.createObjectURL(this.file)
    },
    addLogo() {
      this.dialog = true
      this.dialogText = "Add New Logo"
      this.dialogButtonText = "Add New Logo"
      this.dialogButtonFunc = this.postNewLogo
    },
    postNewLogo() {
      this.$store.dispatch('postNewLogo', this.logo)
          .then(resp => {
            console.log("post new: ", resp);
          })
          .catch(() => null)

      this.saveImage()

      this.dialog = false
      this.imageExist = false
    },
    editLogo(logo) {
      this.dialog = true
      this.dialogText = "Edit Logo"
      this.dialogButtonText = "Edit Logo"
      this.dialogButtonFunc = this.sendEdits
      this.logo = Object.assign({}, logo)
      this.image = logo.imageName
      this.imageExist = true
    },
    sendEdits(){
      this.$store.dispatch("updateLogo", this.logo)
          .then(() => {
            // TODO: delete previous image on update
            this.dialog = false
            this.saveImage()
          })
          .catch(() => null)
    },
    saveImage(){
      this.fileRef.put(this.file).then((snapshot) => {
        console.log("snapshot: ", snapshot)
      }).catch(err => {
        console.log("image upload err: ", err)
      })
    }
  }
}
</script>
<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
.red-title {
  color: rgb(153, 0, 0);
  font-size: 1.7em;
}
</style>