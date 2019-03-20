function desenhaForca() {
    var word = new Word(palavras);
    pre.style.width = '60%';
    pre.innerHTML = ` 
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
 <br><br>`;

    for (var i = 0; i < word.contaLetras; i++) {
        pre.style.fontSize = "x-small";
        pre.innerHTML += '<spam class=\'pal\' > _____ ' + ' ' + '</spam>';
    }
    consoleText.innerHTML += '<pre id=\'pre2\'> Dica:' + word.dicaForca + '<br> letras erradas' + '<span id=\'letras\'><br><br> </span>' + '</pre>';
    var pal = document.getElementsByClassName('pal');
    console.log(pal, );
    return word;
}