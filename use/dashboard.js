import { cidades } from "./cidades.js"

export function DashBoard(){
    const calcCirPin = document.getElementById('calcu-m')
    calcCirPin.innerHTML = `
    <div id="calc-cubagem">
     <form id="calculator">
        <label for="metragem-total">m³ Total</label><br><input id="metragem-total" type="text" name="cubagem"><br><br>
    
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

export function dashFretes(){
    //Create here the logic to Frete Calculate in Panservice and Rodofar!
    const calcFrete = document.getElementById("calcFreteT")
    //aqui abaixo ainda vai o HTML
    calcFrete.innerHTML = `
        <div id="transporters">
         <form id="calc-transport" class="input-Select">
            <label for="transportadora">Transportadora</label></br>
             <select name="transporters" id="transportadora">
              <option value="Panservice">Panservice</option>
              <option value="Rodofar">Rodofar</option>
             </select>
         </form>

         <div id="Panservice" class="oculto">
          <label for="cidadeInput">Cidade Destino:</label>
            <input type="text" 
                   id="cidadeInput" 
                   list="cidadesList" 
                   placeholder="Digite o nome da cidade..."
                   class="input-autocomplete">
           <br><br>

            <div id="area-de-calculo">
                <label for="ValorPedido">Valor do Pedido <br><input type="text" name="valor-pedido" id="ValorPedido"></label><br><br>
                <label for="PesoPedido">Peso do Pedido <br><input type="text" name="peso-pedido" id="PesoPedido"></label><br><br>
            </div><br><br>
             
            <div id="restultadoPanservice">
               <label for="FreteMinimo">Frete Mínimo + GRIS<br/><input type="text" name="Minimo" id="FreteMinimo" disabled></label><br><br>
               <label for="FreteKG">Valor por KG<br/><input type="text" name="FreteKG" id="FreteKG" disabled></label><br><br>
               <label for="FreteValor">Valor do Frete<br/><input type="text" name="FreteValor" id="FreteValor" disabled></label>
            </div>
         </div>
        
         <div id="Rodofar" class="oculto">
             <label for="cidadeInputRodofar">Cidade Destino:</label>
            <input type="text" 
                   id="cidadeInputRodofar" 
                   list="cidadesListRodofar" 
                   placeholder="Digite o nome da cidade..."
                   class="input-autocomplete">
           <br><br>

            <div id="area-de-calculo">
                <label for="ValorPedidoRodofar">Valor do Pedido <br><input type="text" name="valor-pedido" id="ValorPedidoRodofar"></label><br><br>
                <label for="PesoPedidoRodofar">Peso do Pedido <br><input type="text" name="peso-pedido" id="PesoPedidoRodofar"></label><br><br>
            </div><br><br>
             
            <div id="restultadoRodofar">
               <label for="FreteKGRodofar">Valor por KG Excedente<br/><input type="text" name="FreteKG" id="FreteKGRodofar" disabled></label><br><br>
               <label for="FreteValorRodofar">Valor do Frete<br/><input type="text" name="FreteValor" id="FreteValorRodofar" disabled></label>
            </div>
         </div>

         <button id="btCalcFrete">Calcular Frete</button>
    </div>
    `

    document.getElementById('transportadora').value = ""
    
    /*const datalist = document.createElement('datalist');
    datalist.id = 'cidadesList';
    datalist.innerHTML = cidades.map(cidade => 
        `<option value="${cidade}">${cidade}</option>`).join('');
    document.getElementById('transporters').appendChild(datalist);*/

    document.getElementById('transportadora').addEventListener('change', function(ev){
    const transporte = this.value
    
    document.getElementById('cidadeInput').value = ""
    document.getElementById('ValorPedido').value = ""
    document.getElementById('PesoPedido').value = ""
    document.getElementById('FreteValor').value = ""
    document.getElementById('FreteKG').value = ""
    document.getElementById('FreteMinimo').value = ""
    
    // Oculta ambos primeiro
    document.getElementById('Panservice').classList.add('oculto')
    document.getElementById('Rodofar').classList.add('oculto')
    
    // Mostra apenas o selecionado
    if(transporte === "Panservice" || transporte === "Rodofar") {
        document.getElementById(transporte).classList.remove('oculto')
    }
})


}

