import { DashBoard } from "./use/dashboard.js";
import { calcDimensions } from "./func/calculate.js";

//carregar dash
window.onload = function(){
    DashBoard()

    document.getElementById('calculator').addEventListener('submit', function(ev){
        ev.preventDefault()
        calcDimensions()
    })
}

