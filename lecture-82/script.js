async function sleep(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(45);
        }, 1000);
    })
}
(function main(){})
let a = await sleep()
let b = await sleep()