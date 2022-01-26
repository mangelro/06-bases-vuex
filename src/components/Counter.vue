<template>
  <h1>Counter - Vuex</h1>
  <p>
    <em>{{myComputed}}</em>&nbsp;
    <input type="tex" v-model.lazy="nombre">
  </p>
  <h2>Direct access: {{$store.state.counter.count}}</h2> <!--No recomendable / se ha añadido modulo -->
  <h2>Computed: {{countComputed}}</h2>

  <h1>mapState</h1>
  <h2>mapState - count: {{count}}</h2>
  <h2>mapState - lastMutation: {{lastMutation}}</h2>

  <button @click="increment">+1</button>
  <button @click="incrementBy5">+5</button>
  <button @click="incrementRnd" :disabled="isLoading">Random</button>
  
  <h1>Getters</h1>
  <h2>Direct access: {{$store.getters['counter/squareCount'] }}</h2> <!--No recomendable -->
  <h1>mapGetters: {{squareCount()}}</h1>
</template>

<script>

import {mapState,mapActions,mapGetters} from 'vuex'

export default {

    data:()=>({
        nombre:'Miguel A.' 
    }),

    computed:{
        myComputed(){
            return `Hola, ${this.nombre} - ${new Date().getSeconds()}`                   //tras mis propiedades computadas propias...
        },
        countComputed(){
            return this.$store.state.counter.count
        },
        ...mapState('counter', ['count','lastMutation','isLoading'])   //...puedo traer las propiedades de state (spread operator)
        // ...mapState({
        //     countState: state=>state.count,                  // Nos permite renombrar la propiedad de state por si existe conflicto                   
        //     lastMutation: state=>state.lastMutation
        // })
        // ...mapState({                                        // Si se utilizan modules
        //     countState: state=>state.counter.count,          // Nos permite renombrar la propiedad de state por si existe conflicto                   
        //     lastMutation: state=>state.counter.lastMutation
        // })
    },

    methods:{
        increment(){
            this.$store.commit('counter/increment')
        },
        incrementBy5(){
            this.$store.commit('counter/incrementBy',5)
            
        },
        
        //...mapActions(['incrementRndInt'])                //Sin moudules
        //...mapActions('counter',['incrementRndInt'])      //Con modules. Al igual que con las propiedades del state, se puede desectruturar las actions
        //...mapActions('counter',{
        //     incrementRnd: 'incrementRndInt'              // Nos permite renombrar los nombre de los actions por si existe conflicto                   
        // }),
        ...mapActions({
            incrementRnd: 'counter/incrementRndInt'         // Nos permite renombrar los nombre de los actions por si existe conflicto                   
                                                            // this.incrementRnd Puede ser llamado como parte del componente en cualquir metodo
        }),
        ...mapGetters('counter',['squareCount'])              
    }

    
}
</script>
