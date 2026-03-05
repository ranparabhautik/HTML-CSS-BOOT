const btn = document.getElementById("btn")
btn.addEventListener("click", function () {

    let inp1 = document.getElementById("inp1").value.trim();
    let inp2 = document.getElementById("inp2").value.trim();

    if (inp1.length !== inp2.length) {
        return alert("Faaaaa...!!")
    }

    let s1 = inp1.split("").sort();
    let s2 = inp2.split("").sort();
    console.log(s1, s2)


    let isAna = true
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            alert("Faaaa...!!!")
            break;
        }
    }
    if (isAna) { return alert("Valid Anagram") }






    // if (s1 === s2) {
    //     return alert("Valid Anagram")
    // }
    // else {
    //     return alert("Faaaaa...!!")
    // }

})


function grpAna(arr){
    const map = {};
    for (let x of arr){
        const a = x.split("").sort().join("")
        map[a] = map[a] || []
        map[a].push(x)
    }
    return map;
}


console.log(grpAna(['tea','eat','ate','nat']));
