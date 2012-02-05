// ==UserScript==
// @name           caloriecount.about.com.weightwatcers.pointplus
// @namespace      http://sw.cs.wwu.edu/~nordwap
// @description    calculate weight watchers points plus (per patent no) for caloriecount.about.com
// @include        http://caloriecount.about.com/*-i*
// ==/UserScript==

function WW(pro, car) {
	   return Math.max(Math.round((16*pro + 19*car + 45*fat - 14*fib)/175),0);
}

function inner(val) { return val.innerHTML;}

var Title = "WeightWatchers Points: ";
var bgcolor = "#ff0000";

var nutritionFactsDiv= document.getElementById("nutritionfacts1");
var calories_div = document.getElementById("nutLabelItem0");
var fat_div = document.getElementById("nutLabelRoundItem1");
var carb_div = document.getElementById("nutLabelRoundItem6");
var fiber_div = document.getElementById("nutLabelRoundItem7");
var protein_div = document.getElementById("nutLabelRoundItem9");
var pro = inner(protein_div);
var car = inner(carb_div);
var fib = inner(fiber_div);
var fat = inner(fat_div);
var wwdiv = document.createElement("div");
wwdiv.style.backgroundColor = bgcolor;
var wwtext = document.createTextNode(Title + WW(pro, car, fat, fib));
wwdiv.appendChild(wwtext);
nutritionFactsDiv.insertBefore(wwdiv, nutritionFactsDiv.firstChild);


