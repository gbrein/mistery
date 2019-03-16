var inp = document.getElementById('screentext');
var comunic = document.getElementById('entrada');
var pre = document.getElementById('pre');
comunic.style.wordWrap = "break-word";
var cEnt = 0;

var objCont = {
    contador: 0
}

window.onload = function () {
    inp.addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) {
            if (cEnt == 0) {
                cEnt += 1;
                desenhaFred();
                slowtype('Ola seu corno, sequestramos o Fred, e não vamos devolvelo a menos que você solucione os 3 desafios que virão pela frente. Você esta pronto? Pressione enter para começar', 60);

            }
        }
    });
}

function slowtype(texto, delay) {
    comunic.innerText = ' ';
    return new Promise (resolve => {
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
    setTimeout (()=> {
        resolve (`fim`);
    }, delay * texto.length + 2000);
    
});
}
