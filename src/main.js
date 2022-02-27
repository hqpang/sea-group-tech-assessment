import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhYxsYCsaYKM5bwKIGr-NBfyo1azfGu1I",
  authDomain: "sea-case-study-4e830.firebaseapp.com",
  projectId: "sea-case-study-4e830",
  storageBucket: "sea-case-study-4e830.appspot.com",
  messagingSenderId: "173092964657",
  appId: "1:173092964657:web:be71e11a80cc1041264810",
  measurementId: "G-PSQ7P4H8Q4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);



Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
