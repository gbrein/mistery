function forca() {
    var palavraForca = palavras[Math.floor(Math.random(palavras) * palavras.length)];
    teste('Vamos começar.... o primeiro desafio é forca... Você só poderá errar 6 vezes, caso você não acerte GAMEOVER para o Fred', 60)
    teste(`sexo com seguranca`, 60)




    inp.addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) {
            if (cEnt == 0) {
                cEnt += 1;
                desenhaFred();
                slowtype('Bem Vindo, Sequestramos o Fred, e não vamos devolvelo a menos que você solucione os 3 desafios que virão pela frente. Você esta pronto? Pressione enter para começar');

            }
        }
    });
}
async function teste(arr, tempo) {
    for (var i = 0; i < arr.length; i++) {
        var result = await slowtype(arr[i], tempo);
        result = 'foi ' + i;
    }
}
//result = slowtype (str2);