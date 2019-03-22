var Word = function (palavras) {
    this.wo = palavras[Math.floor(Math.random(palavras) * palavras.length)]
    this.palForca = this.wo.words; 
    this.dicaForca = this.wo.dica;
    this.contaLetras = this.wo.words.length;
}