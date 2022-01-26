
    /*
    * Van a permitir modificar directamente el state - SÍNCRONAS
    */

export default {
    
    //increment(state){
    increment: (state) => {
        state.count++
        state.lastMutation='increment'
    },

    //incrementBy(state,val){
    incrementBy: (state,val) => {
        state.count+=val
        state.lastMutation='incrementBy ' + val

    },

    //setLoading(state,val){
    setLoading: (state,val)=>{
        state.isLoading=val
        state.lastMutation='setLoading'
    }
}


/*
    Si utilizamos la siguiente forma de exportar, la importación en index.js
    debería ser:
    import * as mutations from './mutations'
*/

// export const increment=(state) => {
//         state.count++
//         state.lastMutation='increment'
//     }

// export const incrementBy= (state,val) =>{
//         state.count+=val
//         state.lastMutation='incrementBy ' + val

//     }
// export const setLoading= (state,val)=>{
//         state.isLoading=val
//         state.lastMutation='setLoading'
//     }

