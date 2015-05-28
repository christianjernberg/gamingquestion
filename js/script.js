//Användaren trycker på en knapp för att svara
var buttonPc = document.getElementById("PC");
var buttonTv = document.getElementById("TV");

buttonPc.addEventListener("click", function(){
    document.body.style.backgroundColor = "green";
    document.getElementById("titel").innerHTML = "JAAAAAAAA!!!!!";
    document.getElementById("buttons").innerHTML = "";
})

buttonTv.addEventListener("click", function(){
    document.body.style.backgroundColor = "red";
    document.getElementById("titel").innerHTML = "NEJ!!!!! DET ÄR FEL <br> <br> HATA TV-SPEL <br> ÄLSKA PC-SPEL";
    document.getElementById("buttons").innerHTML = "";
})