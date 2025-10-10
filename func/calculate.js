import { fretesPanservice, fretesRodofar } from "../use/cidades.js";

function calcMetragem(){
    const metragemTotal = Number(document.getElementById('metragem-total').value.replace(',', '.'))
    const volumes = Number(document.getElementById('volumes').value.replace(',', '.'))
    const pesoCubado = metragemTotal * 300

    if(isNaN(metragemTotal) || isNaN(volumes)) {
        document.getElementById('resultado').value = "Erro: valores inválidos";
        return NaN;
    }

    document.getElementById('pesoCubado').value = `${pesoCubado.toFixed(2).replace('.', ',')}³`
    return metragemTotal / volumes
}

export function calcDimensions(){
    const metragemUnica = calcMetragem()
    if(!isNaN(metragemUnica)) {
         const medidasD = Math.cbrt(metragemUnica)
        document.getElementById('resultado').value = `≈ ${medidasD.toFixed(4).replace('.', ',')} cm`;
    }
}

export function clearDates(){
    const inputs = document.querySelectorAll('input[type="text"]')
    inputs.forEach(input => {
      if(input.value.trim() !== ''){
        input.value = input.defaultValue
     }
    })
    
}

export function fretePanservice(){
    //Logica para o calculo de frete da Panservice!
    const inputCity = document.getElementById('cidadeInput').value.toUpperCase()

    const interCity = Object.keys(fretesPanservice).find(
        intervalo => fretesPanservice[intervalo].cidades.includes(inputCity)
    )

    if(inputCity && interCity){
         const dados = fretesPanservice[interCity]
         const {freteValor, taxaPeso, freteMinimo} = calcular(dados)

        document.getElementById('FreteValor').value = freteValor.toFixed(2).replace('.', ',')
        document.getElementById('FreteKG').value = taxaPeso.toFixed(2).replace('.', ',')
        document.getElementById('FreteMinimo').value = freteMinimo.toFixed(2).replace('.', ',')

    }else{
        const inputCity = document.getElementById('cidadeInput').value = "Cidade não atendida!"
              document.getElementById('ValorPedido').value = ""
              document.getElementById('PesoPedido').value = ""
    }

    function calcular(dados){
        //escrever o calculo aqui
        const valor = parseFloat(document.getElementById('ValorPedido').value.replace(',', '.')) || 0
        const peso = parseFloat(document.getElementById('PesoPedido').value.replace(',', '.')) || 0

        if(valor > 0 && peso > 0){
           const gris = valor * 0.002
           const freteValor = valor * 0.013 + gris
           const taxaPeso = peso * dados.fpKg + gris
           const freteMinimo = dados.minimo + gris

           return {
              freteValor: freteValor,
              taxaPeso: taxaPeso,
              freteMinimo: freteMinimo,
           }
        }
    }
}

export function freteRodofar(){
    const inputCity = document.getElementById('cidadeInputRodofar').value.toUpperCase()

    const interCity = Object.keys(fretesRodofar).find(
        intervalo => fretesRodofar[intervalo].cidades.includes(inputCity)
    )

    if(inputCity && interCity){
        const dadosRod = fretesRodofar[interCity]

        const { taxaPeso, totalFrete, minimo } = calcRodofar(dadosRod)

        document.getElementById('FreteKGRodofar').value = taxaPeso.toFixed(2).replace('.', ',')
        
              if(totalFrete < minimo){
                document.getElementById('FreteValorRodofar').value = minimo.toFixed(2).replace('.', ',')
              }else{
                document.getElementById('FreteValorRodofar').value = totalFrete.toFixed(2).replace('.', ',')
              }


    }else{
              document.getElementById('cidadeInputRodofar').value = "Cidade não atendida!"
              document.getElementById('ValorPedido').value = ""
              document.getElementById('PesoPedido').value = ""
    }

    function calcRodofar(dadosRod){
         const valor = parseFloat(document.getElementById('ValorPedidoRodofar').value.replace(',', '.')) || 0
         const peso = parseFloat(document.getElementById('PesoPedidoRodofar').value.replace(',', '.')) || 0

         if(valor > 0 && peso > 0){
            const freteValor = valor * 0.026 + (valor * 0.002)
            const minimo = dadosRod.minimo + (valor * 0.002)
            let taxaPeso = 0

               if(peso > 50){
                  taxaPeso = 0.20 * (peso - 50)
               }

               return {
                  freteValor: freteValor,
                  taxaPeso: taxaPeso,
                  minimo: minimo,
                  totalFrete: freteValor + taxaPeso
               }
         }
    }
}
