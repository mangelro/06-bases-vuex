
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const counterStore= {

    /*
    * Evita conflictos entre los nombre de las propiedades.
    * Si no se utiliza, el store hijo se incluye de manera global 
    * en el padre, pudiendose producir conflictos entre los nombres
    */
    namespaced: true,

    state,      //state: state
    mutations,  //mutations: mutations
    actions,    //actions: actions
    getters     //getters: getters
}

export default counterStore
