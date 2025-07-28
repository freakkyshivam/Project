
let keypress = document.querySelector('#key-press')
 

document.addEventListener('keypress', (e) =>{
   
    keypress.innerHTML = `
    <div class='color'>
        <table border="1">
            <tr>
                <th>Key</th>
                <th>KeyCode</th>
                <th>Which</th>
            </tr>

            <tr>
                <td>${e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
                
    </div>
    `
})

