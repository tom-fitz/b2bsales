<template>
  <v-container fluid class="pa-0 ma-0 mt-12">
    <!-- Dialog -->
    <v-dialog v-model="dialog" persistent width="1000px">
      <v-card>
        <v-card-title>
          <span class="headline">Edit Post</span>
        </v-card-title>
        <v-col cols="12">
          <input type="file" id="salesTip" accept="image/jpeg" multiple v-on:change="onFileChange">
        </v-col>
        <v-col cols="12" v-if="imageExist">
          <v-card flat>
            <v-avatar
                tile
                size="200"
            >
              <v-img
                  :src="image"
                  contain
              ></v-img>
            </v-avatar>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-text-field label="Sales Tip Title*" v-model="post.title" required></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field label="Sales Tip Sub Title*" v-model="post.subTitle" required></v-text-field>
        </v-col>
        <v-card-text>
          Sales Tip Content*
          <quill-editor v-model="post.content"
                        ref="quillEditor"
                        :options="editorOption"
          >
          </quill-editor>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="saveEdits()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- End Dialog -->
    <v-row class="pl-12 mt-12">
      <v-btn
          color="primary"
          light
          @click.stop="editPost()">Edit Post</v-btn>
    </v-row>
    <v-row justify="center" class="pt-12 pb-12">
      <v-col cols="10" class="mt-12">
        <v-card
            tile
            elevation="0"
        >
          <v-flex xs12>
            <v-card
                tile
                elevation="0"
            >
              <v-layout>
                <v-flex xs5 lg3>
                  <v-img
                      :src=post.imageName
                      max-width="400px"
                      contain
                  ></v-img>
                </v-flex>
                <v-flex
                    xs7
                    lg9
                    class="content-margin"
                >
                  <div>
                    <v-card-title primary-title class="item-title pt-0">
                      {{ post.title }}
                    </v-card-title>
                    <v-card-subtitle class="tips-sub-title">
                      {{ post.subtitle }}
                    </v-card-subtitle>
                    <v-card-text
                        class="tips-text pt-0 pb-0"
                        v-html="post.content"
                    ></v-card-text>
                    <v-card-text class="tip-date">
                      Date Posted: {{ post.date }}
                    </v-card-text>
                    <v-row class="mt-12">
                      <v-card tile
                              elevation="0"
                      >
                        <v-card-title>
                          <h2 class="red-color">Sign up for monthly Sales Tip e-mails</h2>
                        </v-card-title>
                        <v-card-text>
                          <v-text-field color="#ad5b5b" placeholder="Enter your email"></v-text-field>
                          <v-btn outlined color="#ad5b5b">Submit</v-btn>
                        </v-card-text>
                      </v-card>
                    </v-row>
                  </div>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-card>
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
import {ref} from "@/main";
import { mapGetters, mapState } from 'vuex';
import { quillEditor } from "vue-quill-editor";

export default {
  name: "admin-sales-tip-post",
  components: {
    quillEditor
  },
  computed: {
    ...mapGetters(['fetchSalesTips']),
    ...mapState(['tips','success','error']),
    post() {
      let post
      const list = this.fetchSalesTips ? this.fetchSalesTips.list : []
      list.forEach((x) => {
        if (x.id === this.$route.params.id){
          post = Object.assign({}, x)
        }
      })
      return post
    }
  },
  data(){
    return {
      // post: {},
      dialog: false,
      image: "",
      imageFile: "",
      imageExist: false,
      fileRef: "",
      file: "",
      snackbar: false,
      timeout: 3000,
      editorOption: {
        modules: {
          toolbar: ['bold', 'italic', 'underline', 'strike']
        },
        bounds: 'self'
      }
    }
  },
  created(){
    this.$store.dispatch('getSalesTips')
    .catch(() => null)
  },
  methods: {
    onFileChange(e) {
      this.file = e.target.files[0]
      this.fileRef = ref.child('salestip/' + this.file.name)
      this.testimonial.imageName = this.file.name
      this.imageExist = true
      this.image = URL.createObjectURL(this.file)
    },
    editPost(){
      this.dialog = true
      this.image = this.post.imageName
      this.imageExist = true
    },
    saveEdits(){
      this.$store.dispatch('updateSalesTip', this.post)
      .then(() => {
        this.dialog = false
        this.snackbar = true
      })
      .catch(() => null)
    }
  }
}
</script>
<style scoped>
.red-color {
  color: #993333 !important;
}
.item-title {
  font-size:92px;
  line-height: 92px;
  color: #993333 !important;
}
.tips-sub-title {
  font-size: 36px;
  margin:15px 0;
  color: #ad5b5b;
}
.tips-text {
  font-size:18px;
  line-height: 26px;
  color: #555555;
}
.tip-date {
  font-size: 20px;
  line-height: 32px;
  font-weight: 600;
}
.content-margin {
  margin-left: 46px !important;
}
</style>