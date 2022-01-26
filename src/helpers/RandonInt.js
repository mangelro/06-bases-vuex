
export default ()=>{
   // return Promise.resolve(Math.floor(Math.random()*100)+1)
   return new Promise(resolve=>
    {
        const value=Math.floor((Math.random()*100)+1)
        setTimeout(() => {
            resolve(value)
        }, 2000);
        Math.ce
    })
}