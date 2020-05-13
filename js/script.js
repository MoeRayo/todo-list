// console.log("hello");
let input = document.getElementById('input');
let inputButton = document.getElementById('inputbutton');
let unorderedList = document.querySelector('ul');

function createListItems(){
    let listItem = document.createElement('li');
    listItem.textContent = input.value;
    unorderedList.appendChild(listItem);
    listItem.classList.add('li');
    let closeButton = document.createElement('button');
    closeButton.appendChild(document.createTextNode('X'));
    listItem.appendChild(closeButton);
    closeButton.classList.add('closebutton');
    input.value="";
    
    // the "X" value on the button 
    closeButton.addEventListener('click', function(){
        // console.log(closeButton);
        unorderedList.removeChild(listItem);
    })
}

function listOnClick(){
    // console.log(event);
    if(input.value.length !==0){
       createListItems();
    }
}

// for the keyboard enter keypress event
function listOnEnter(event){
    if(input.value.length !==0 && event.keyCode === 13){
        createListItems();
        // console.log(event);
    }
}

// the event listener calls the functions
inputButton.addEventListener('click', listOnClick);
input.addEventListener('keypress', listOnEnter);
