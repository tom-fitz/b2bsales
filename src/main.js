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
  apiKey: "AIzaSyAme7ipXJ2C8_BaoowuC5UtcSANnoBugUE",
  authDomain: "b2bsales-9a61f.firebaseapp.com",
  databaseURL: "https://b2bsales-9a61f.firebaseio.com",
  projectId: "b2bsales-9a61f",
  storageBucket: "b2bsales-9a61f.appspot.com",
  messagingSenderId: "771415598179",
  appId: "1:771415598179:web:791829795053dc6f6d0456",
  measurementId: "G-LFHDK9VB15"
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
