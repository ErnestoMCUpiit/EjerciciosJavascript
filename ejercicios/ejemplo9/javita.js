function teclado(event) {
    console.log('onKeyUp:' + event.key);
    console.log("Hola mundo");
    const foto=document.querySelector("img");
    foto.src="img2.png";
    }
    
    document.addEventListener('keyup', teclado);