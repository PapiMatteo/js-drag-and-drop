let lists    = document.querySelectorAll(".list");
let rightBox = document.querySelector("#right");
let leftBox  = document.querySelector("#left");
let selected;

lists.forEach((curList) => {
    curList.addEventListener("dragstart", function(e) {
        selected = e.target;   
    });   
});


rightBox.addEventListener('dragenter', function (event) {
    event.preventDefault();
    rightBox.classList.remove("base-border");
    rightBox.classList.add("drag-over");
})

rightBox.addEventListener("dragover", function(event) {
    event.preventDefault();
    rightBox.classList.remove("base-border");
    rightBox.classList.add("drag-over");
});
        
rightBox.addEventListener('dragleave', function (event) {
    event.preventDefault();
        rightBox.classList.remove("drag-over");
        rightBox.classList.add("base-border");
});

rightBox.addEventListener("drop", function() {

    console.log("rightBox", selected);
    this.appendChild(selected);
    rightBox.classList.remove("drag-over");
    rightBox.classList.add("base-border");
});

leftBox.addEventListener('dragenter', function (event) {
    event.preventDefault();
    leftBox.classList.remove("base-border");
    leftBox.classList.add("drag-over");
})

leftBox.addEventListener("dragover", function(event) {
    event.preventDefault();
    leftBox.classList.remove("base-border");
    leftBox.classList.add("drag-over");
});

leftBox.addEventListener("dragleave", function(event) {
    event.preventDefault();
    leftBox.classList.remove("drag-over");
    leftBox.classList.add("base-border");
});

leftBox.addEventListener("drop", function() {
    console.log("leftBox", selected);
    this.appendChild(selected);
    leftBox.classList.remove("drag-over");
    leftBox.classList.add("base-border");
});