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
              <v-text-field label="Name*" v-model="testimonial.name" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Sub Heading*" v-model="testimonial.subHeading" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Quote*" v-model="testimonial.quote" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-select
                :items="types"
                v-model="testimonial.type"
                item-text="name"
                item-id="id"
                :item-value="testimonial.type"
                label="Select Testimonial Type"
                required
              ></v-select>
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
  <!-- End dialog -->
  <!-- introDialog -->
  <v-dialog v-model="introDialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">Add Testimonial</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field label="Title" v-model="editableTest.title"></v-text-field>
            </v-col>
            <v-row>
              <div>
                <quill-editor v-model="editableTest.text"
                              ref="quillEditor"
                              :options="editorOption"
                >
                </quill-editor>
              </div>
            </v-row>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" light @click.stop="sendEdits()">Save Edited Text</v-btn>
        <v-btn color="warning" light @click.stop="introDialog = false">Cancel Edits</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <!-- End introDialog -->
  <v-row class="pl-12 mt-12">
    <v-btn
        color="primary"
        light
        @click.stop="addTestimonial()"
    >
      Add New Testimonial
    </v-btn>
  </v-row>
  <v-hover v-slot="{ hover }">
    <v-row class="pa-0 ml-12 mt-12 mb-12">
      <v-col cols="6" class="pb-0 pt-0">
        <v-row
            justify-start
        >
          <v-col md="12">
            <v-card
                class="mt-10 pt-0 mx-auto"
                tile
                elevation="0"
            >
              <v-expand-transition>
                <div
                    v-if="hover"
                    class="d-flex
                    transition-fast-in-fast-out
                    grey
                    darken-2
                    v-card--reveal
                    display-3
                    white--text"
                    style="height: 100%;"
                >
                  <v-btn
                    @click="introDialog = true"
                  >
                    EDIT
                  </v-btn>
                </div>
              </v-expand-transition>
              <v-card-title class="testimonial-title">{{ testimonials.title }}</v-card-title>
              <v-card-text class="testimonial-text" v-html="testimonials.text"></v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-hover>
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
                sm="3"
                v-for="(x, i) in testimonials.list" :key="i"
            >
              <v-hover v-slot="{ hover }">
              <v-card
                  class="pa-2 mb-10 ml-5 mr-5"
                  max-width="400"
                  light
                  style="border-color:#993333;"
              >
                  <v-img
                    v-bind:src="x.imageName"
                    aspect-ratio="1.1"
                  >
                    <v-expand-transition>
                      <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal display-3 white--text"
                          style="height: 100%;"
                      >
                        <v-btn
                            @click="editTestimonial(x)"
                        >
                          EDIT
                        </v-btn>
                      </div>
                    </v-expand-transition>
                  </v-img>
                <v-card-title class="red-title">{{ x.name }}</v-card-title>
                <v-card-subtitle class="red-sub-title"><strong>{{ x.subHeading }}</strong></v-card-subtitle>
                <v-card-text>{{ x.quote }}</v-card-text>
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
import { quillEditor } from "vue-quill-editor";
import { ref } from "@/main"
import { mapState } from "vuex";
export default {
  name: "admin-testimonials",
  components: {
    quillEditor
  },
  data () {
    return {
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
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
      types: [
        {
          id: 1,
          name: "Program Leader"
        },
        {
          id: 2,
          name: "Founders"
        },
        {
          id: 3,
          name: "Accelerators"
        },
        {
          id: 4,
          name: "University"
        }
        ],
      editableTest: "",
      testimonial: {
        name: "",
        subHeading: "",
        quote: "",
        type: "",
        imageName: ""
      },
      dialogText: "",
      dialogButtonText: "",
      dialogButtonFunc: ""
    }
  },
  computed: {
    ...mapState({
      testimonials: ['testimonials']
    })
  },
  created(){
    this.$store.dispatch('getTestimonials')
    .then(resp => {
      this.editableTest = Object.assign({}, resp)
    })
    .catch(() => null)
  },
  methods: {
    onFileChange(e) {
      this.file = e.target.files[0]
      this.fileRef = ref.child('images/' + this.file.name)
      this.testimonial.imageName = this.file.name
      this.imageExist = true
      this.image = URL.createObjectURL(this.file)
    },
    addTestimonial() {
      this.dialog = true
      this.dialogText = "Add New Testimonial"
      this.dialogButtonText = "Add New Testimonial"
      this.dialogButtonFunc = this.postNewTestimonial
    },
    postNewTestimonial() {
      this.$store.dispatch('postNewTestimonial', this.testimonial)
      .then(resp => {
        console.log("post new: ", resp);
      })
      .catch(() => null)

      this.saveImage()

      this.dialog = false
      this.imageExist = false
    },
    editTestimonial(testimonial) {
      this.dialog = true
      this.dialogText = "Edit Testimonial"
      this.dialogButtonText = "Edit Testimonial"
      this.dialogButtonFunc = this.sendEdits
      this.testimonial = Object.assign({}, testimonial)
      this.image = testimonial.imageName
      this.imageExist = true
    },
    sendEdits(){
      this.editableTest.list[this.testimonial.id] = this.testimonial
      this.$store.dispatch("updateTestimonial", this.editableTest)
      .then(() => {
        // TODO: delete previous image on update
        this.dialog = false
        this.introDialog = false
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
.testimonial-title {
  font-size:92px;
  line-height: 92px;
  margin: 25px 0;
  color: #993333;
}
.testimonial-text {
  font-size:20px;
  font-weight: 400;
  line-height: 28px;
  color: #555555;
}
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