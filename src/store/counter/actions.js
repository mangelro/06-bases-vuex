import getRndInt from '../../helpers/RandonInt'

  /*
    * Pueden ser ASÍNCRONAS. Al recibir la repuesta disparan el commit
    */
   export default {
    //async incrementRndInt(context){
    //async incrementRndInt({commit}){
    incrementRndInt: async ({commit}) => {        
            commit('setLoading',true)
            const value=await getRndInt()
            commit('incrementBy',value)
            commit('setLoading',false)
        }
    }


/*
    Si utilizamos este forma de exportar, la importación en index.js
    debería ser:
    import * as actions from './actions'
*/
// export const incrementRndInt =async ({commit}) => {
//     commit('setLoading',true)
//     const value=await getRndInt()
//     commit('incrementBy',value)
//     commit('setLoading',false)
// }
