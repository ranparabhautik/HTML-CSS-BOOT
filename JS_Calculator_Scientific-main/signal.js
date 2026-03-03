let currentIndex = 0;
const allCircle = document.querySelectorAll(".circle");
const restartBtn = document.getElementById("pause")
const startBtn = document.getElementById("start")
restartBtn.addEventListener("click", function () {
    allCircle.forEach(x => {
        x.classList.remove("active")
        currentIndex = null
    })
});


startBtn.addEventListener("click", function () {
    allCircle.forEach(x => {
        // x.classList.remove("active")
        currentIndex = 0
        changeSignal()
    })
});


function changeSignal() {


    allCircle.forEach(circle => {
        circle.classList.remove("active");
    });


    allCircle[currentIndex].classList.add("active");


    currentIndex++;

    if (currentIndex === allCircle.length) {
        currentIndex = 0;
    }
}

setInterval(changeSignal, 500);












// function counter(){
//     let count=0;
//     return function(){
//        return count++;
//     }
// }
// counter()(); //1
// counter()(); // 2





// const arr11 = [10,20,30]
// arr11.reduce((total,current)=>{
//      total+current
// },0)



//  let result1 = arr11.filter((x)=>{
//     x%Math.sqrt(x)
// })





