import { DashBoard, dashFretes } from "./use/dashboard.js";
import { calcDimensions, clearDates, fretePanservice, freteRodofar } from "./func/calculate.js";

//carregar dash
window.onload = function(){
    DashBoard()
    

    document.getElementById('calculator').addEventListener('submit', function(ev){
        ev.preventDefault()
        calcDimensions()
    })

    document.getElementById('makeClear').addEventListener('click', function(ev){
        ev.preventDefault()
        clearDates()
    })

    dashFretes()

    document.getElementById('btCalcFrete').addEventListener('click', function(ev){
        ev.preventDefault()
        const transpor = document.getElementById('transportadora')

        if(transpor.value === 'Panservice'){
            fretePanservice()
        }else if(transpor.value === 'Rodofar'){
            freteRodofar()
        }

    })
}

