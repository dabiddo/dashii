import Vue from 'vue';  
import Vuetify from 'vuetify'; 
/*Vue.use(Vuetify);*/  
if (process.BROWSER_BUILD) { 
    Vue.use(Vuetify); 
}