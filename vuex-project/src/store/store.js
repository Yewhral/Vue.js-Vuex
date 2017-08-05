import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
   state:{
       products:[
           {name:'Heat pump', price:80},
           {name:'Boiler', price:60},
           {name:'Water Heater', price:30},
           {name:'Solar panel', price:50}
       ]
   }

});