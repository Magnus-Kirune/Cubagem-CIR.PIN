

export function DashBoard(){
    const calcCirPin = document.getElementById('calcu-m')
    calcCirPin.innerHTML = `
    <div id="calc-cubagem">
     <form id="calculator">
        <label for="cubagem">m³ Total</label><br><input id="metragem-total" type="text" name="cubagem"><br><br>
    
        <label for="volumes">Volumes</label><br><input id="volumes" type="text" name="volumes"><br></br>
        
        <div id="result">
        <label for="resultado">Medidas<br><input id="resultado" type="text" name="resultado" disabled></label>
        <label for="pesoCubado">Peso Cubado<br><input id="pesoCubado" type="text" name="pesoCubado" disabled></label>
        </div><br><br>
        <div id="buttons">
        <button type="submit" id="fazerCalculo">Calcular</button>
        <button id="makeClear">Limpar</button>
        </div>
     </form>
    </div>`
}