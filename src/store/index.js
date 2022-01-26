import {createStore} from 'vuex'
import counterStore from './counter'


const store=createStore({

    modules:{
         counter: counterStore,
         // Por ejemplo
         //products: productsStore
         //auth:authStore
    }

})
console.log(store)
export default store