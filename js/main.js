var inp = document.getElementById('screentext');
var comunic = document.getElementById('entrada');
var consoleText = document.getElementById('console-texto');
var pre = document.getElementById('pre');
var contaCerto = 0;
var c = document.getElementById('c');
var press = document.getElementById('press');
var pal, word, letraErrada, desenho;
var time;
comunic.style.wordWrap = "break-word";
var cEnt = 0;
var contaForca = 0;
var objCont = {
    contador: 0
}

window.onload = function () {
    inp.addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (cEnt === 1) {
            comunic.innerText = ' ';
            forca();
            cEnt += 1;
        }

        if (key === 13) {
            if (cEnt == 0) {
                cEnt += 1;
                desenhaFred();
                teste(arr1, 20);
            }
        }
    });
    var word = new Word(palavras);
}

function slowtype(texto, delay) {
    comunic.innerText = ' ';
    return new Promise(resolve => {
        var contatexto = setInterval(function (texto) {
            if (objCont.contador < texto.length) {
                if (texto[objCont.contador] == 0) {
                    comunic.innerText += "\u00A0";
                }
                comunic.innerText += texto[objCont.contador];
                objCont.contador++;
            } else {
                objCont.contador = 0;
                clearInterval(contatexto);
            }
        }.bind(objCont), delay, texto);
        setTimeout(() => {
            resolve(`fim`);
        }, delay * texto.length + 2000);

    });
}

function lettersOnly(input) {
    var regex = /[^a-z]/gi;
    input.value = input.value.replace(regex, "");
}