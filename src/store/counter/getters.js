


  /*
    * Muy similares a la computed properties
    */     
export default {
    squareCount: (state) => Math.pow(state.count,2)
}

/*
    Si utilizamos la siguiente forma de exportar, la importación en index.js
    debería ser:
    import * as getters from './getters'
*/

// export const squareCount = (state) => {
//      return Math.pow(state.count,2)
// }

