function victory(){
    c.style.visibility = 'hidden';
    press.style.visibility = 'hidden';
    consoleText.innerHTML = ' ';
    consoleText.innerHTML = `<pre id=pre></pre>`;
    pre = document.getElementById('pre');
    pre.innerText = ' ';
    pre.style.fontSize = 'medium';
    pre.innerText = `

    /$$     /$$                                      /$$          
    |  $$   /$$/                                     |__/          
     \  $$ /$$//$$$$$$  /$$   /$$       /$$  /$$  /$$ /$$ /$$$$$$$ 
      \  $$$$//$$__  $$| $$  | $$      | $$ | $$ | $$| $$| $$__  $$
       \  $$/| $$  \ $$| $$  | $$      | $$ | $$ | $$| $$| $$  \ $$
        | $$ | $$  | $$| $$  | $$      | $$ | $$ | $$| $$| $$  | $$
        | $$ |  $$$$$$/|  $$$$$$/      |  $$$$$/$$$$/| $$| $$  | $$
        |__/  \______/  \______/        \_____/\___/ |__/|__/  |__/    
    `
}