var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];

var select = document.getElementById ("planets");
    planets.forEach(function([planetName, gravity]){
        var opt = document.createElement ("option");
        opt.innerHTML = planetName;
        opt.value = planetName;
        select.appendChild(opt);
    });
    
function calculateWeight(weight, planetName) {  
    planets.forEach (function (opt)
    {if (planetName == opt [0]) {
            gravity = opt [1];}
    })
    return weight*gravity;
    };

function handleClickEvent(e) {
var userWeight = document.getElementById ("user-weight").value;
var planetName = document.getElementById ("planets").value;
var result = calculateWeight (userWeight, planetName);
document.getElementById ("output").innerText = 
        "If you were on " + planetName + ", you would weigh " + result + "lbs!";
};