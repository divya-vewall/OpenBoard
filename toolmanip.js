let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let rect = document.querySelector("#rect");
let line = document.querySelector("#line");
// let download = document.querySelector("#download");
// let photo = document.querySelector("#gallery");
let options = document.querySelectorAll(".size-box");
let pencilSize = 5;
let eraserSize = 5;
let rectSize = 5;
let lineSize = 5;
let sizeBoxArr = document.querySelectorAll(".size-box");
pencil.addEventListener("click", function (e) {
    if (cTool == "pencil") {
        options[0].style.display = "flex";
    } else {
        cTool = "pencil";
        // tool.strokeStyle = "lightpink";
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        tool.lineWidth = pencilSize;
    }
})

eraser.addEventListener("click", function (e) {
    if (cTool == "eraser") {
        options[1].style.display = "flex";
    } else {
        cTool = "eraser";
        tool.strokeStyle = "white";
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        tool.lineWidth = eraserSize;
    }
})

rect.addEventListener("click", function (e) {
    if (cTool == "rect") {
        options[2].style.display = "flex";
    } else {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        // rect.style.border = "1px solid black";
        cTool = "rect";
        tool.lineWidth = rectSize;
        // tool.strokeStyle = "lightpink";
    }
})

line.addEventListener("click", function (e) {
    if (cTool == "line") {
        options[3].style.display = "flex";
    } else {
        for (let i = 0; i < options.length; i++) {
            options[i].style.display = "none";
        }
        // line.style.border = "1px solid black";
        cTool = "line";
        tool.lineWidth = lineSize;
        // tool.strokeStyle = "lightpink";
    }
})
//colorChange logic
let redColor = document.querySelector(".red");
let greenColor = document.querySelector(".green");
let blueColor = document.querySelector(".blue");
let pinkColor = document.querySelector(".pink");
let lightgreenColor = document.querySelector(".lightgreen");
let lightblueColor = document.querySelector(".lightblue");
let blackColor = document.querySelector(".black");
//color change tool styling code begins
redColor.addEventListener("click", function () {
    tool.strokeStyle = "red";
})
greenColor.addEventListener("click", function () {
    tool.strokeStyle = "green";
})
blueColor.addEventListener("click", function () {
    tool.strokeStyle = "blue";
})
pinkColor.addEventListener("click", function () {
    tool.strokeStyle = "lightpink";
})
lightgreenColor.addEventListener("click", function () {
    tool.strokeStyle = "lightgreen";
})
lightblueColor.addEventListener("click", function () {
    tool.strokeStyle = "lightblue";
})
blackColor.addEventListener("click", function(){
    tool.strokeStyle = "black";
})

//size change logic
sizeBoxArr[0].addEventListener("click", function (e) {
    let elems = ["size1", "size2", "size3", "size4"];
    let allTheClasses = e.target.classList;
    let firstClass = allTheClasses[0];
    let test = elems.includes(firstClass);
    if(test){
        if (firstClass == "size1") {
            pencilSize = 5;
        } else if (firstClass == "size2") {
            pencilSize = 10;
        } else if (firstClass == "size3") {
            pencilSize = 15;
        } else if (firstClass == "size4") {
            pencilSize = 20;
        }
    }
    tool.lineWidth = pencilSize;
})
sizeBoxArr[1].addEventListener("click", function (e) {
    let elems = ["size1", "size2", "size3", "size4"];
    let allTheClasses = e.target.classList;
    let firstClass = allTheClasses[0];
    let test = elems.includes(firstClass);
    if(test){
        if (firstClass == "size1") {
            eraserSize = 5;
        } else if (firstClass == "size2") {
            eraserSize = 10;
        } else if (firstClass == "size3") {
            eraserSize = 15;
        } else if (firstClass == "size4") {
            eraserSize = 20;
        }
    }
    tool.lineWidth = eraserSize;
})
sizeBoxArr[2].addEventListener("click", function (e) {
    let elems = ["size1", "size2", "size3", "size4"];
    let allTheClasses = e.target.classList;
    let firstClass = allTheClasses[0];
    let test = elems.includes(firstClass);
    if(test){
        if (firstClass == "size1") {
            rectSize = 5;
        } else if (firstClass == "size2") {
            rectSize = 10;
        } else if (firstClass == "size3") {
            rectSize = 15;
        } else if (firstClass == "size4") {
            rectSize = 20;
        }
    }
    tool.lineWidth = rectSize;
})
sizeBoxArr[3].addEventListener("click", function (e) {
    let elems = ["size1", "size2", "size3", "size4"];
    let allTheClasses = e.target.classList;
    let firstClass = allTheClasses[0];
    let test = elems.includes(firstClass);
    if(test){
        if (firstClass == "size1") {
            lineSize = 5;
        } else if (firstClass == "size2") {
            lineSize = 10;
        } else if (firstClass == "size3") {
            lineSize = 15;
        } else if (firstClass == "size4") {
            lineSize = 20;
        }
    }
    tool.lineWidth = lineSize;
})
