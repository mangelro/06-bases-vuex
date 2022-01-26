    /*
    * No puede, ni debe ser modificado directamente, solo a través de mutations
    * Esta forma de definición como funcion que retorna un obj lo hace reactivo
    */

export default ()=>({
    count:1,
    lastMutation:'none',
    isLoading:false
})


// const funName1 = ()=>{
//     return{
//         member:'Hola, mundo'
//     }
// }

// const funName2 = ()=>({
//     member:'Hola, mundo'
// })


// console.table(funName1())
// console.table(funName2())
