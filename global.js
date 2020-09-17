
console.log(__dirname)

console.log(__filename)


const int = setInterval(()=>
{
    console.log("1 sec ka interval")
},1000)



setTimeout(()=>{
    console.log("5 second ka timeout")
    clearInterval(int)
},5001)
