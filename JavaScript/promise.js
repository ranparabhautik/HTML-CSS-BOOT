// const gitapi = "https://api.github.com/users/ranparabhautik"
// const user = fetch(gitapi)
// console.log(user)
// user.then(function(data){
//     console.log(data)
// })



// function getdata(dataID, nextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataID);
//             resolve("Success");
//             if(nextData){
//                 nextData()
//             }
//         },6000)
//     })
// }



// const getPromise = ()=>{
//    return new Promise((resolve,reject)=>{
//         console.log("I am a promise")
//         reject("errorrrrrrrrrrrrrrrr ")
//         // resolve("Success")
//     });
// };

// let promise = getPromise();
// promise.then(()=>{
//     console.log("Promise fullfileed")
// });
// promise.catch(()=>{
//     console.log("Promise Reject")
// })

// =====================================================================================================

// function asyncFunc() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data 1")
//             resolve("success")
//         }, 5000)
//     })
// }


// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data 2")
//             resolve("success")
//         }, 5000)
//     })
// }

//below example gives the result at same time
// console.log("fetching data1")
// let p1 = asyncFunc()
// p1.then((res)=>{
//     console.log(res)
// })

// console.log("fetching data2")
// let p2 = asyncFunc2()
// p2.then((res)=>{
//     console.log(res)
// })



//below example gives the result after the first result got.

// console.log("Fetching Data1")
// let p1 = asyncFunc()
// p1.then((res)=>{
//     console.log(res)
//     console.log("Fetching Data2")            // this is the longer version, below is the short version.
//     let p2 = asyncFunc2()
//     p2.then((res)=>{
//         console.log(res)
//     })
// })



// console.log("Fetching Data 1")
// asyncFunc().then((res) => {
//     console.log("Fetching Data 2")
//     asyncFunc2().then((res) => {})
// });

// ================================================================================================================



// solving callback hell with promise chaining 

// function getData(dataID) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data", dataID)
//             resolve("Success");
//         }, 1000)
//     })
// }

// //promise chain
// getData(10).then((res)=>{
//     return getData(20)
// })
// .then((res)=>{
//     return getData(30)
// })
// .then((res)=>{
//     console.log(res)
// })





// =======================================================================================================
// Async Await

function getData(dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataID)
            resolve("Success");
        }, 1000)
    })
}
// async function getAllData() {
//     await getData(1)
//     await getData(2)
//     await getData(3)
// }
// since using above example , we need to explicitly call the getAllData(), to get rid of that use IIFE

(async function() {
    await getData(1)
    await getData(2)
    await getData(3)
    await getData(4)
    await getData(5)
})(); // we performed IIFE here