<template>
<v-container fluid class="pt-0 pb-0">
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
              <v-text-field label="Title*" v-model="newSalesTip.title" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Sub Title*" v-model="newSalesTip.subTitle" required></v-text-field>
            </v-col>
<!--            <v-col cols="12">-->
<!--              <v-text-field label="Date*" v-model="newSalesTip.date" required></v-text-field>-->
<!--            </v-col>-->
          </v-row>
          <v-row>
            <div>
              <quill-editor v-model="newSalesTip.content"
                            ref="quillEditor"
                            :options="editorOption"
              >
              </quill-editor>
            </div>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="warning" light @click="postNewSalesTactic()">Save new sales tip</v-btn>
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
              <v-text-field label="Title" v-model="editableContent.title"></v-text-field>
            </v-col>
            <v-row>
              <div>
                <quill-editor v-model="editableContent.text"
                              ref="quillEditor"
                              :options="editorOption"
                >
                </quill-editor>
              </div>
            </v-row>
          </v-row>
        </v-container>
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
      @click.stop="addNewSalesTactic()">Add New Sales Tactic</v-btn>
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
              <v-card-title class="sales-title">{{ salesTips.title }}</v-card-title>
              <v-card-text class="sales-text" v-html="salesTips.text"></v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-hover>
  <v-row justify="center" class="mb-12 ml-12 posts-bg">
    <v-col cols="12" class="mb-12">
      <v-expansion-panels
          multiple
          flat
          v-model="panel"
      >
        <v-expansion-panel
            v-for="(item,i) in salesTips.list"
            :key="i"
            class="panel-style"
        >
          <v-expansion-panel-header class="custom-headline">
            {{ item.title }}
          </v-expansion-panel-header>
          <v-expansion-panel-content class="pa-0 ma-0 red-bg">
            <v-card
                tile
                elevation="0"
                class="pa-0 ma-0"
            >
              <v-flex xs12>
                <v-card
                    outlined
                    light
                    class="pt-10 pb-10 no-border red-bg"
                >
                  <v-layout
                      class="pa-0 ma-0"
                      align-center
                  >
                    <v-flex
                        xs7
                        lg9
                        class="content-margin"
                    >
                      <v-card-subtitle class="custom-sub-headline">
                        {{ item.subtitle }}
                      </v-card-subtitle>
                      <v-card-text
                          v-line-clamp:20="3"
                          class="pt-0 pb-0 tip-content"
                      >
                        <div v-html="item.content"></div>
                      </v-card-text>
                      <v-card-text class="tip-date">
                        Date Posted: {{ item.date }}
                      </v-card-text>
                      <v-card-actions>
                        <v-btn
                            outlined
                            color="white"
                            style="border:none;"
                            @click="openPost(item.id)"
                            class="tip-button"
                        >
                          Read More
                        </v-btn>
                      </v-card-actions>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </v-row>
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
  </v-container>
</template>
<script>
import { quillEditor } from "vue-quill-editor";
import { ref } from "@/main";
import { mapState } from 'vuex';
export default {
  name: "admin-sales-tips",
  components: {
      quillEditor
  },
  data: () => ({
    alignment: 'center',
    justify: 'center',
    editableContent: "",
    dialog: false,
    introDialog: false,
    dialogText: "Add New",
    dialogBtn: null,
    content: "",
    tab: null,
    newItem: {},
    newSalesTip: {
      title: "",
      subTitle: "",
      content: "",
      imageName: "",
      date: ""
    },
    snackbar: false,
    text: 'Successfully Edited!',
    timeout: 3000,
    editorOption: {
      modules: {
        toolbar: ['bold', 'italic', 'underline', 'strike']
      },
      bounds: 'self'
    },
    panel: [0],
    tip: {
        title: "",
        subTitle: "",
        content: "",
        imageName: "",
        date: ""
    },
    image: "",
    imageFile: "",
    imageExist: false,
    fileRef: "",
    file: "",
    items: [],
  }),
  computed: {
    ...mapState({
      salesTips: ['tips'],
      error: ['error'],
      success: ['success']
    })
  },
  methods: {
    onFileChange(e) {
      this.file = e.target.files[0]
      this.fileRef = ref.child('salestips/' + this.file.name)
      this.newSalesTip.imageName = this.file.name
      this.imageExist = true
      this.image = URL.createObjectURL(this.file)
    },
    addNewSalesTactic(){
        this.content = ""
        this.dialog = true
        this.dialogBtn = this.postNewSalesTactic
    },
    postNewSalesTactic() {
      this.newSalesTip.date = new Date().toLocaleDateString()
      this.$store.dispatch('postSalesTip', this.newSalesTip)
      .catch(() => null)
      this.snackbar = true
      this.saveImage()
      this.dialog = false
      this.imageExist = false
    },
    sendEdits(){
      this.$store.dispatch('updateSalesTipIntro', {
        text: this.editableContent.text,
        title: this.editableContent.title
      })
      .then(() => {
        this.snackbar = true
        this.introDialog = false
      })
      .catch(() => null)
    },
    saveImage() {
      this.fileRef.put(this.file).catch(err => {
        console.log("image upload err: ", err)
      })
    },
    openPost(id){
      this.$router.push({name: 'Admin-Sales-Tip-Post' , params: { id: id }})
    }
  },
  created() {
    this.$store.dispatch('getSalesTips')
    .then(resp => {
      this.editableContent = Object.assign({}, resp)
    })
    .catch(() => null)
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
.sales-title {
  font-size:92px;
  line-height: 92px;
  margin: 25px 0;
  color: #993333;
}
.sales-text {
  font-size:20px;
  font-weight: 400;
  line-height: 28px;
  color: #555555;
}
.tip-content {
  font-size: 18px;
  line-height: 28px;
  color: white !important;
  width: 70% !important;
}

.tip-date {
  font-size: 20px;
  line-height: 32px;
  color: white !important;
  font-weight: 600;
}
.tip-button {
  color: white !important;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 4.5px;
}
.posts-bg {
  background-color: white;
}
.red-bg {
  background-color: #993333 !important;
}
.v-expansion-panel-content >>> .v-expansion-panel-content__wrap {
  padding: 0 !important;
  margin: 0 !important;
}
.content-margin {
  margin-left: 46px !important;
}
.no-border {
  border-radius: 0 !important;
  border: 0 transparent !important;
}
.panel-style {
  border-width: 0 0 4px 0 !important;
  border-color: #999 !important;
  border-style: solid !important;
  border-radius: 0 !important;
}
.custom-sub-headline {
  color: white !important;
  font-size: 38px;
  line-height: 38px;
}
.custom-headline {
  font-size:42px;
  line-height: 50px;
  color: #993333 !important;
  padding-left: 65px;
}
</style>