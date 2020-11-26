import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'quill/dist/quill.snow.css'
import router from './Router/index'
import Vuelidate from 'vuelidate'
import VueFire from "vuefire"
import firebase from "firebase"
import lineClamp from 'vue-line-clamp'
import store from "./Store"
import 'firebase/firestore'
import 'firebase/auth'

Vue.config.productionTip = false

let VueScrollTo = require('vue-scrollto')

Vue.use(Vuelidate, VueScrollTo, VueFire)

Vue.use(lineClamp, {
  importCss: true
})

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DB_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
}

firebase.initializeApp(config)

const ref = firebase.storage().ref()
const storage = firebase.storage()
const db = firebase.database()
const auth = firebase.auth()

// firebase.getCurrentUser = () => {
//   return new Promise((resolve, reject) => {
//       const unsubscribe = firebase.auth().onAuthStateChanged(user => {
//           console.log("user: ", user)
//           unsubscribe();
//           resolve(user);
//       }, reject);
//   })
// };

export {
    ref,
    storage,
    db,
    auth
}

let app
auth.onAuthStateChanged(() => {
    if(!app) {
        app = new Vue({
            vuetify,
            render: h => h(App),
            router,
            store: store,
        }).$mount('#app')
    }
})
