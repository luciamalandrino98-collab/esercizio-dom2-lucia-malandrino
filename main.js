// pokedex
let cardFolder=document.querySelector("#cardFolder");
let pulsanteMostrante=document.querySelector("#pulsanteMostrante");
















let rubrica={
    contatti:[
        {nome:"minions ", numero:"123456789"},
        {nome:"cattivissimo me", numero:"987654321"},
        {nome:"banana", numero:"456789123"},
        {nome:"gru", numero:"321654987"},
        {nome:"pippo", numero:"111111111"}
],


    showContatti : function(){
        cardFolder.innerHTML="";
    this.contatti.forEach((contatto) => {
        let div=document.createElement(`div`);
        div.classList.add('col-12', 'col-md-6', 'my-2');
            div.innerHTML = `<div class="cardMod d-flex justify-content-between align-items-center">
                    <p class="px-2">${contatto.nome}</p>
                    <p class="px-2">${contatto.numero}</p>
                    <i class="bi bi-trash2-fill px-2 fs-1 icona"></i>

                </div>`;
                cardFolder.appendChild(div);
        
})

}
}


let check=false;

pulsanteMostrante.addEventListener("click", function(){
    if(check==false){
        rubrica.showContatti();
        check=true;

    }else{cardFolder.innerHTML="";
        check=false;
    }




})