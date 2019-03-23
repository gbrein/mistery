function forca() {
    // var contaCerto = 0;
    teste(arr, 5);
    word = desenhaForca();

    pal = document.getElementsByClassName('pal');
    desenho = document.getElementById('desenho');
    letraErrada = document.getElementById('letras');
    let arrPalavra = word.palForca.split('')
    let arrErrada = [];
    let display = document.getElementById('timer');
    startTimer(120, display);
    inp.addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) {
            let letr = inp.value;
            letr = letr.toLowerCase()
            inp.value = '';
            let x = confereLetra(letr, arrPalavra, pal, arrErrada);
            if (contaForca === 4) {
                clearInterval(time);
                return gameover();
            }
            if (contaCerto === arrPalavra.length) {
                
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

function confereLetra(letra, palavra, pal, arrErrada) {
    let verifica = false;
    console.log(arrErrada);
    verifica = palavra.includes(letra);
    if (verifica) {
        palavra.forEach((element, idx) => {
            if (letra == element) {
                console.log('teste');
                pal[idx].innerText = letra;
                contaCerto += 1;
                console.log(contaCerto);
            }
            
        });
        if (contaCerto == palavra.length) {
            teste('Voce conseguiu, esta pronto para o proximo teste', 40);
            clearInterval(time);
            return victory();
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