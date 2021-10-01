var randomnumber1 = Math.floor(Math.random() * 6) + 1 ;
var randomdice1 = "dice" + randomnumber1 + ".png" ;
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomdice1) ;

var randomnumber2 = Math.floor(Math.random() * 6) + 1 ;
var randomdice2 = "dice" + randomnumber2 + ".png" ;
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomdice2) ;

if (randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML="🤟Player 1 won"
}