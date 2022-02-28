import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'material-design-icons-iconfont/dist/material-design-icons.css' 
import '@fortawesome/fontawesome-free/css/all.css'
import 'vuetify/dist/vuetify.min.css'
import VueImg from 'v-img'


Vue.use(Vuetify);
Vue.use(VueImg);

export default new Vuetify({
    icons: {
        iconfont: 'md' || 'fa',
      },
    theme: {
    options: { customProperties: true },
    },
});
