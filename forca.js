function forca() {
    // var palavraForca = palavras[Math.floor(Math.random(palavras) * palavras.length)];
    teste(arr, 5);
    word = desenhaForca();
    pal = document.getElementsByClassName('pal');
    letraErrada = document.getElementById('letras');
    let arrPalavra = word.palForca.split('')
    let arrErrada = []; 
    inp.addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) {
            let letr = inp.value;
            letr = letr.toLowerCase()
            confereLetra(letr, arrPalavra, pal, arrErrada);
            inp.value = '';
        }
    });
}
async function teste(arr, tempo) {
    c.style.visibility = 'hidden';
    for (var i = 0; i < arr.length; i++) {
        var result = await slowtype(arr[i], tempo);
        result = 'foi ' + i;
    }
    c.style.visibility = 'visible';
}

function confereLetra(letra, palavra, pal, arrErrada) {
    let verifica = false;
    console.log(arrErrada);
    verifica = palavra.includes(letra);
    if (verifica) {
        palavra.forEach((element, idx) => {
            if (letra == element) {
                pal[idx].innerText = letra;
            }
        });
    } 
    if (!verifica && arrErrada.indexOf(letra)== -1) {
        letraErrada.innerText += letra + ' ';
        arrErrada.unshift(letra);
    }
}


// else {
//     arrErrada.forEach(element => {
//         if (element != letra){
//         console.log(element)
//         letraErrada.innerText += letra;
//     }
//         arrErrada.pop(letra)
//     });