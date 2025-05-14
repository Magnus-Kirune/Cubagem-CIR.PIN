function calcMetragem(){
    const metragemTotal = Number(document.getElementById('metragem-total').value.replace(',', '.'))
    const volumes = Number(document.getElementById('volumes').value.replace(',', '.'))
    const pesoCubado = metragemTotal * 300

    if(isNaN(metragemTotal) || isNaN(volumes)) {
        document.getElementById('resultado').value = "Erro: valores inválidos";
        return NaN;
    }

    document.getElementById('pesoCubado').value = `${pesoCubado.toFixed(2).replace('.', ',')} m³`
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

