function abrirLoot(){
    const foto=event.currentTarget;
    foto.src="img2.png";
    foto.removeEventListener("click",abrirLoot);
}
const foto=document.querySelector("img");
foto.addEventListener("click", abrirLoot);
