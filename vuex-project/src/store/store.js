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
   },
    getters:{
       saleProducts: state => {
               let saleProducts = state.products.map(product => {
                   return {
                       name: '**' + product.name + '**',
                       price: product.price/2
                   }
               });
               return saleProducts;
           }
       }

});