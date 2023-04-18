// TODO: Create a "close" button and append it to each list item

let myNodeList = document.getElementsByTagName("li");
// console.log(myNodeList);

for(let i = 0; i < myNodeList.length; i++){
    const span = document.createElement("span");    // <span></span>
    const txt = document.createTextNode("\u00D7");  // "X"

    span.className = "close"; // <span class="close"></span>
    span.appendChild(txt);     // <span class="close">"X"</span>

    myNodeList[i].appendChild(span);
}

// TODO: Click on a close button to hide the current list item (or remove it from the DOM)

let close = document.getElementsByClassName("close");
// console.log(close);
// ** First Hide
// for(let i = 0; i < close.length; i++){
//     close[i].onclick = function(){
//         // this.parentElement.style.display = "none";
//         const parent = this.parentElement;
//         parent.style.display = "none";
//     }
// }

// ** Then remove (comment out one or the other)
for(let i = 0; i < close.length; i++){
    close[i].onclick = function(){
        this.parentElement.remove();
        // const parent = this.parentElement;
        // parent.style.display = "none";
    }
}

// TODO: Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul')
list.addEventListener('click', function(ev){
    // console.log(ev.target.tagName)
    if( ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked')
    }
} )

// TODO: Create a new list item when clicking on the "Add" button

// const addBtn = document.querySelector('.addBtn');
// console.log(addBtn)

function newElement(){
    const li = document.createElement('li');
    let inputVal = document.getElementById('myInput').value;
    // console.log(inputVal)

    if(inputVal === ''){
        alert('Please enter a value')
    } else {
        const liTxt = document.createTextNode(inputVal);
        li.appendChild(liTxt);
        document.getElementById('myUL').appendChild(li);
        document.getElementById('myInput').value = '';

        const span = document.createElement("span");    // <span></span>
        const txt = document.createTextNode("\u00D7");  // "X"

        span.className = "close"; // <span class="close"></span>
        span.appendChild(txt);     // <span class="close">"X"</span>

        li.appendChild(span);

        // span.addEventListener("click", () => this.parentElement.remove());

        for(let i = 0; i < close.length; i++){
            close[i].onclick = function(){
                this.parentElement.remove();
            }
        
        }
    }

}

// function addCloseBtn(){}

