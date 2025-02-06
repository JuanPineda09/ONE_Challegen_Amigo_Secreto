const names = [];

const buttonAdd = document.querySelector(".button-add");

buttonAdd.addEventListener('click', function() {
    const inputFriend = document.querySelector(".input-name").value;
    if (!inputFriend) {
        alert("Debe ingresar un nombre")
    } else {
        alert(`El nombre ${inputFriend} fue agregado correctamente`)
        names.push(inputFriend);
    }  
    listAdd()
    document.querySelector(".input-name").value = "";
})

const listAdd =()=>{
    const list = document.querySelector(".name-list"); 
    list.innerHTML = "";

    for (let i = 0; i < names.length; i++) {
        
        const element = document.createElement("li")
         element.textContent = names[i];

         list.appendChild(element);
    }
}



