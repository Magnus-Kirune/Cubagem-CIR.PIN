import { DashBoard, dashBoardCalcFrete } from "./use/dashboard.js";
import { calcDimensions, clearDates } from "./func/calculate.js";

//carregar dash
window.onload = function(){
    DashBoard()
    dashBoardCalcFrete()

    document.getElementById('calculator').addEventListener('submit', function(ev){
        ev.preventDefault()
        calcDimensions()
    })

    document.getElementById('makeClear').addEventListener('click', function(ev){
        ev.preventDefault()
        clearDates()
    })
}

