// TODO: create a "close" button and append it to each list item

let myNodeList = document.getElementsByTagName("li");
// console.log(myNodeList);
for (let i = 0; i < myNodeList.length; i++) {
    const span = document.createElement("span");
    const txt = document.createTextNode("/u00D7");

    span.className = "close";
    span.appendChild(txt);

    myNodeList[i].appendChild(span);
}

// TODO: click on a "close" button to hide the current list item

let close = document.getElementsByClassName("close");
// console.log(close);
// ** First Hide
for (let i = 0; i < myNodeList.length; i++) {
    close[i].onclick = function(){
        const parent = this.parentElement;
        parent.style.display = "none";
    }
}

// Then remove (comment out on or the other)
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function(){
       this.parentElement.remove();
    }
}

// TODO: add a "checked" symbol when clicking on a list item
let list = document.querySelector("myUL");
// console.log(list);
list.addEventListener("click", function(ev){
    console.log(ev.target.tagName)
    if(ev.target.tagName === "LI"){
        ev.target.classList.toggle("checked");
    }
})
// TODO: create a new list item when clicking on the "add" button

// const addBtn = document.querySelector(".addBtn")
// console.log(addBtn);

function newElement(){
    const li = document.createElement("li");
    let inputVal  = document.getElementById("myInput").value;
    // console.log(inputVal)

    if(inputVal === ""){
        alert("Please enter a value")
    } else { 
        const liTxt = document.createTextNode(inputVal);
    li.appendChild(liTxt);
    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = "";

    const span = document.createElement("span");
    const txt = document.createTextNode("/u00D7");

    span.className = "close";
    span.appendChild(txt);

    myNodeList[i].appendChild(span);

    li.appendChild(span);
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function(){
           this.parentElement.remove();
   
    }
}

}
}
