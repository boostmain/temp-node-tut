setInterval(()=>{                   //setInterval is async
    console.log("hello world")
},2000)
console.log("i will run first")
//process stays alive unless
//kill process ctrl + c
//unexpected error 