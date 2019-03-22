function desenhaForca() {
    var word = new Word(palavras);
    pre.style.width = '60%';
    pre.innerHTML = ' ';
    pre.innerHTML += '<spam id = \'desenho\'>' +  ` 
    +----------+
    |          |
    |          |
    |          |
    |          +
    |
    |
    |
    |
    |
    |
    |
+---+----+
 <br><br>` + '</spam>';

    for (var i = 0; i < word.contaLetras; i++) {
        pre.style.fontSize = "x-small";
        pre.innerHTML += '<spam class=\'pal\' > _____ ' + ' ' + '</spam>';
    }
    consoleText.innerHTML += '<pre id=\'pre2\'> Dica:' + word.dicaForca + ' <br>letras erradas' + '<span id=\'letras\'><br><br> </span> ' + '</pre> <br> <article id=\'timer\'></article>';
    var pal = document.getElementsByClassName('pal');
    console.log(pal, );
    return word;
}
function desenha1(){
    desenho.innerHTML = `
    +----------+
    |          |
    |          |
    |      XXXXXXXX
    |      X  +  + X
    |      X       X
    |      XXXXXXXX
    |          X
    |
    |
    |
    |
+---+----+
 `    
}
function desenha2(){
    desenho.innerHTML = `
    +----------+
    |          |
    |          +
    |      XXXXXXXX
    |      X  +  + X
    |      X       X
    |      XXXXXXXX
    |          X
    |          X
    |          X
    |          X
    |          X
+---+----+
 `    
}
function desenha3(){
    desenho.innerHTML = `
    +----------+
    |          |
    |          +
    |      XXXXXXXX
    |      X  +  + X
    |      X       X
    |      XXXXXXXX
    |          X
    |      XXXXXXXXXX
    |          X
    |          X
    |         XX
+---+----+   XXXXX
            XX   XX
            X     X

 `    
}


