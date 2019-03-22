function forca() {
    teste(arr, 5);
    word = desenhaForca();
    var contaCerto = 0;
    pal = document.getElementsByClassName('pal');
    var desenho = document.getElementById('desenho');
    letraErrada = document.getElementById('letras');
    let arrPalavra = word.palForca.split('')
    let arrErrada = [];
    let display = document.getElementById('timer');
    startTimer(fourMinutes, display);
    inp.addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) {
            let letr = inp.value;
            letr = letr.toLowerCase()
            inp.value = '';
            let x = confereLetra(letr, arrPalavra, pal, arrErrada, contaCerto);
            if (x === 100) {
                gameover();
            }
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

function confereLetra(letra, palavra, pal, arrErrada, contaCerto) {
    let verifica = false;
    console.log(arrErrada);
    verifica = palavra.includes(letra);
    if (verifica) {
        palavra.forEach((element, idx) => {
            if (letra == element) {
                pal[idx].innerText = letra;
                contaCerto += 1;
            }
        });
        if (contaCerto = palavra.length) {
            teste('Voce conseguiu, esta pronto para o proximo teste'. 40);
            zeraCronometro();
            cripto();
        }
    }

    if (!verifica && arrErrada.indexOf(letra) == -1) {
        if (letra == " " || letra == "") {

        } else {
            letraErrada.innerText += letra + ' ';
            arrErrada.unshift(letra);
            contaForca += 1;
            switch (contaForca) {
                case 1:
                    desenha1();
                    break;
                case 2:
                    desenha2();
                    break;
                case 3:
                    desenha3();
                    break;
                case 4:
                    return 100;
            }
        }
    }
}