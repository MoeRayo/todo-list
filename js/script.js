// console.log("hello");
let input = document.getElementById('input');
let inputButton = document.getElementById('inputbutton');
let unorderedList = document.querySelector('ul');

// function createElememt(){

// }
inputButton.addEventListener('click', function(){
    if(input.value.length !==0){
        let listItem = document.createElement('li');
        listItem.appendChild(document.createTextNode(input.value));
        unorderedList.appendChild(listItem);
        listItem.classList.add('li');
        let closeButton = document.createElement('button');
        closeButton.appendChild(document.createTextNode('X'));
        listItem.appendChild(closeButton);
        closeButton.classList.add('closebutton');
        // closeButton.classList.add('closebutton');
    
        input.value="";
    }
   
})