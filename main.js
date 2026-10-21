// pokedex
let cardFolder=document.querySelector("#cardFolder");
let pulsanteMostrante=document.querySelector("#pulsanteMostrante");
let pulsanteAmichetti=document.querySelector("#pulsanteAmichetti");
let nomeContatto=document.querySelector("#nomeContatto");
let numeroTelefono=document.querySelector("#numeroTelefono");
let pulsanteStalker=document.querySelector("#pulsanteStalker");
let pulsanteOdio=document.querySelector("#pulsanteOdio");



let rubrica={
    contatti:[
        {nome:"minions ", numero:"123456789"},
        {nome:"cattivissimo me", numero:"987654321"},
        {nome:"banana", numero:"456789123"},
        {nome:"gru", numero:"321654987"},
        {nome:"pippo", numero:"111111111"}
],


    showContatti : function(array){
        cardFolder.innerHTML="";
    array.forEach((contatto) => {
        let div=document.createElement(`div`);
        div.classList.add('col-12', 'col-md-6', 'my-2');
            div.innerHTML = `<div class="cardMod d-flex justify-content-between align-items-center">
                    <p class="px-2">${contatto.nome}</p>
                    <p class="px-2">${contatto.numero}</p>
                    <i class="bi bi-trash2-fill px-2 fs-1 icona"></i>

                </div>`;
                cardFolder.appendChild(div);
        })
},

pulsanteAmichetti : function(newNome, newNumero){
    this.contatti.push({nome: newNome, numero: newNumero});
},

pulsanteOdio : function(togliNome){
    let name  = this.contatti.map((contatto) => contatto.nome.toLowerCase());
    let index = name.indexOf(togliNome.toLowerCase());
    if(index > -1){
        this.contatti.splice(index, 1);
        this.showContatti(this.contatti);
        pulsanteMostrante.innerHTML = "ghost rubrica";
        alert('Contatto sterminato!')
    } else {
            alert('Contatto non trovato!');
        }
},

pulsanteStalker : function(cercaNome){
    let filtered = this.contatti.filter((contatto)=> contatto.nome.toLowerCase()==cercaNome.toLowerCase());
    if(filtered.length>0){
        this.showContatti(filtered);
    } else {
        alert('non ci sta !');
    }
}








};



let check=false;

pulsanteMostrante.addEventListener("click", function(){
    if(check==false){
        rubrica.showContatti(rubrica.contatti);
        check=true;
        pulsanteMostrante.innerHTML="ghost contatti";
    }else{cardFolder.innerHTML="";
        check=false;
        pulsanteMostrante.innerHTML="show contatti";
    }
 

});



pulsanteAmichetti.addEventListener("click", ()=>{


    if(nomeContatto.value !="" && numeroTelefono.value!="" && numeroTelefono.value.length==9){
    confirm=true;
    rubrica.pulsanteAmichetti(nomeContatto.value, numeroTelefono.value);
    pulsanteMostrante.innerHTML="ghost contatti";
    rubrica.showContatti(rubrica.contatti);
    nomeContatto.value="";
    numeroTelefono.value="";
} else{ alert("sai leggere?!");
    nomeContatto.value="";
    numeroTelefono.value="";
}
});


pulsanteOdio.addEventListener("click", ()=>{
    check=false;
    rubrica.pulsanteOdio(nomeContatto.value);
    nomeContatto.value="";

});


pulsanteStalker.addEventListener("click", ()=>{
    rubrica.pulsanteStalker(nomeContatto.value);
    nomeContatto.value="";
}  );