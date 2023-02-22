const userLeft = false
const userWatchingCatMeme = true

function watchTutorialCallback(callback,errorCallback){
    if(userLeft){
        errorCallback({
            name:'User Left',
            message:':('
        })
    }else if (userWatchingCatMeme){
        errorCallback({
            name:'user Watching Cat Meme',
            message:'webDevSimplified < Cat'
        })
    } else {
        callback('Thumbs Up and Subscribe')
    }
}

watchTutorialCallback((message)=>{
    console.log('Sucess: ' + message)
},(error)=>{
    console.log(error.name + ' ' + error.message)
})


const fetchData = () => {
    const promise = new Promise ((resolve,reject) => {
        resolve ();
    })
    return promise;
}
setTimeout(() => {
    console.log('a')
    console.log('b')
    console.log('d')
    fetchData()
   
    .then ( c =>{
        console.log('c')
        return fetchData();
    })
}, 2000);