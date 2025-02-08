const names = [];

const buttonAdd = document.querySelector(".button-add");

buttonAdd.addEventListener('click', function() {
    const inputFriend = document.querySelector(".input-name").value;

    if (!inputFriend) {

        alert("Debe ingresar un nombre");

    }
    else {

        alert(`El nombre ${inputFriend} fue agregado correctamente`);
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
        element.className = "elemento"+ i;
            element.textContent = names[i];
                list.appendChild(element);
                
    }
}


const buttonDraw = document.querySelector('.button-draw');
const friendDraw = []

buttonDraw.addEventListener('click', function () {

    const listResult = document.querySelector('.result-name');
    listResult.innerHTML= ''

    if (!names.length) {
        alert('No has ingresado ningun nombre')
    } else {
        alert('Hora de sortear')
        const numRandom = Math.floor(Math.random() * names.length );
        const elementResult = document.createElement('p');
            elementResult.textContent = `El nombre sorteado es: ${names[numRandom]}`;
                listResult.appendChild(elementResult);

        friendDraw.push(names[numRandom]);
        names.splice(numRandom, 1);
        listFriendDraw();

    }
    
} )


const listFriendDraw = () =>{
    const listDraw = document.querySelector(".listNames"); 
    listDraw.innerHTML = "";

    for (let i = 0; i < friendDraw.length; i++) {
        
        const elementDraw = document.createElement("li")
        elementDraw.className = "elementDraw"+ i;
        elementDraw.textContent = friendDraw[i];
                listDraw.appendChild(elementDraw);
                
    }
}


