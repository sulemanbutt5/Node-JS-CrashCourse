const fs = require('fs')

//Read Files

// fs.readFile('./docs/data.txt',(err,dat)=>{
//     if(err)
//         console.log(err)
//     else
//         console.log(dat.toString())

    
// })
// console.log('last line')

//Write Files

// fs.writeFile('./docs/data.txt','Hello Suleman',()=>
// {
//     console.log('file is written')
// })

// fs.writeFile('./docs/data2.txt','Hello Suleman',()=>
// {
//     console.log('file is written')
// })


//Directories

if (!fs.existsSync('./assets'))
{
    fs.mkdir('./assets',err=>{
    if(err)
    {
        console.log(err)
    }
    console.log('Folder Created!')
})
}
else
{
    fs.rmdir('./assets',err=>{
        if(err)
        {
            console.log(err)
        }
        console.log('Folder Deleted!')
    })
}


//Deleting Files

if (fs.existsSync('./docs/deleteme.txt'))
{
    fs.unlink('./docs/deleteme.txt', err=>
    {
        if (err)
        {
            console.log(err)
        }
        console.log('File deleted!')
    })
}
else
{
    fs.writeFile('./docs/deleteme.txt',"", err=>{
        if(err)
        {
            console.log(err)
        }
        console.log('File Created')
    })
}






