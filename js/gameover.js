function gameover(){
    c.style.visibility = 'hidden';
    press.style.visibility = 'hidden';
    consoleText.innerHTML = ' ';
    consoleText.innerHTML = `<pre id=pre></pre>`;
    pre = document.getElementById('pre');
    pre.innerText = ' ';
    pre.style.fontSize = 'medium';
    pre.innerText = `

    _______  ______    _______  ______     ______   ___   _______  ______  
    |       ||    _ |  |       ||      |   |      | |   | |       ||      | 
    |    ___||   | ||  |    ___||  _    |  |  _    ||   | |    ___||  _    |
    |   |___ |   |_||_ |   |___ | | |   |  | | |   ||   | |   |___ | | |   |
    |    ___||    __  ||    ___|| |_|   |  | |_|   ||   | |    ___|| |_|   |
    |   |    |   |  | ||   |___ |       |  |       ||   | |   |___ |       |
    |___|    |___|  |_||_______||______|   |______| |___| |_______||______| 
    
    `
}