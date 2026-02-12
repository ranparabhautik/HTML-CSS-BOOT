function changeinfo() {
    document.getElementById("clickme").innerHTML = "Hello Bhautik <mark>Ranpara</mark> , its so nice to see you heree!!";
    console.log("Something Printed on Screen");
}

function toleft(){
    document.getElementById("myimage").src="./leftarrow.webp"
    console.log("Left Clicked")
}

function toright(){
    document.getElementById("myimage").src="./rightarrow.webp"
    console.log("right Clicked")
}

function changecss(){
    document.getElementById("text1").style.backgroundColor="green"
    document.getElementById("text1").style.fontSize="40px"
    console.log("Changing CSS ")
}


