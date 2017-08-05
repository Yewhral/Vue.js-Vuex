<template>
  <div id="app">
    <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products="products"></product-list-two>

  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne.vue';
import ProductListTwo from './components/ProductListTwo.vue';

export default {
    components:{
        'product-list-one':ProductListOne,
        'product-list-two':ProductListTwo
    },
  name: 'app',
  data () {
    return {
        products:[
            {name:'Heat pump', price:80},
            {name:'Boiler', price:60},
            {name:'Water Heater', price:30},
            {name:'Solar panel', price:50}
        ]
        }
    }

}
</script>

<style>

</style>
