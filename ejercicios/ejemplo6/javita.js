function abrirLoot(event){
    const nuevoJeder=document.createElement("h1");
    nuevoJeder.textContent="Preciona Y para guardar";

    const nuevaFoto=document.createElement("img");
    nuevaFoto.src="img2.png";

    const container=document.querySelector("#container");
    container.innerHTML="";
    container.appendChild(nuevoJeder);
    container.appendChild(nuevaFoto);
}
const foto=document.querySelector("img");
foto.addEventListener("click", abrirLoot);
