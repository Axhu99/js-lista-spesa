const ul = document.getElementById('listaItem');

const list = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];

let messange = '';
let i = 0;

while(i < list.length){
    messange +=`<li>${list[i]}</li>`; 
    i++;
}

ul.innerHTML= messange;