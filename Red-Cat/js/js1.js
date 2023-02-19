var first = 1;
var number = 1;

document.getElementById("slogan-button").onclick = function(){
    document.getElementsByClassName("navbar")[0].classList.add("hide");
    document.getElementById("all").classList.add("show-all");
    document.getElementById("body").classList.add("overflow");
    setTimeout( function(){
        document.getElementById("form-on-click").classList.add("show");
    },100)
}
document.getElementById("motivate-button").onclick = function(){
    document.getElementsByClassName("navbar")[0].classList.add("hide");
    document.getElementById("all").classList.add("show-all");
    document.getElementById("body").classList.add("overflow");
    setTimeout( function(){
        document.getElementById("form-on-click").classList.add("show");
    },100)
}
document.getElementById("del").onclick = function(){

    document.getElementById("form-on-click").classList.remove("show");
    setTimeout( function(){
        document.getElementById("all").classList.remove("show-all");
        document.getElementById("body").classList.remove("overflow");
        document.getElementsByClassName("navbar")[0].classList.remove("hide");
    },500) 

}
document.getElementById("first").onclick = function(){
    document.getElementsByClassName("navbar")[0].classList.add("hide");
    document.getElementById("gal_show").classList.add("show_gal");
    document.getElementById("body").classList.add("overflow");
    document.getElementById("image_container").innerHTML = "<img class='galley_img' src='img/" + first + ".png'>"
}
document.getElementById("del2").onclick = function(){
    document.getElementsByClassName("navbar")[0].classList.remove("hide");
    document.getElementById("gal_show").classList.remove("show_gal");
    document.getElementById("body").classList.remove("overflow");
}
document.getElementById("right").onclick = function(){
    number = number +1;
    document.getElementById("image_container").innerHTML = "<img class='galley_img' src='img/" + number + ".png'>";
    if(number > 7){
        number = 0;
    }
}
document.getElementById("left").onclick = function(){
    if(number <= 1){
        number = 9;
    }
    number = number -1;
    document.getElementById("image_container").innerHTML = "<img class='galley_img' src='img/" + number + ".png'>";
}
document.getElementById("a1").onclick = function(){
    document.getElementById("a1").classList.add("active");
    document.getElementById("a2").classList.remove("active");
    document.getElementById("a3").classList.remove("active");
    document.getElementById("a4").classList.remove("active");
    document.getElementById("a5").classList.remove("active");
    document.getElementById("a6").classList.remove("active");
}
document.getElementById("a2").onclick = function(){
    document.getElementById("a2").classList.add("active");
    document.getElementById("a1").classList.remove("active");
    document.getElementById("a3").classList.remove("active");
    document.getElementById("a4").classList.remove("active");
    document.getElementById("a5").classList.remove("active");
    document.getElementById("a6").classList.remove("active");
}
document.getElementById("a3").onclick = function(){
    document.getElementById("a3").classList.add("active");
    document.getElementById("a2").classList.remove("active");
    document.getElementById("a1").classList.remove("active");
    document.getElementById("a4").classList.remove("active");
    document.getElementById("a5").classList.remove("active");
    document.getElementById("a6").classList.remove("active");
}
document.getElementById("a4").onclick = function(){
    document.getElementById("a4").classList.add("active");
    document.getElementById("a2").classList.remove("active");
    document.getElementById("a3").classList.remove("active");
    document.getElementById("a1").classList.remove("active");
    document.getElementById("a5").classList.remove("active");
    document.getElementById("a6").classList.remove("active");
}
document.getElementById("a5").onclick = function(){
    document.getElementById("a5").classList.add("active");
    document.getElementById("a2").classList.remove("active");
    document.getElementById("a3").classList.remove("active");
    document.getElementById("a4").classList.remove("active");
    document.getElementById("a1").classList.remove("active");
    document.getElementById("a6").classList.remove("active");
}
document.getElementById("a6").onclick = function(){
    document.getElementById("a6").classList.add("active");
    document.getElementById("a2").classList.remove("active");
    document.getElementById("a3").classList.remove("active");
    document.getElementById("a4").classList.remove("active");
    document.getElementById("a5").classList.remove("active");
    document.getElementById("a1").classList.remove("active");
}

document.getElementsByClassName("custom_label")[0].onclick = function(){
    document.getElementsByClassName("custom-center")[0].classList.add("block");
    document.getElementsByClassName("custom-center")[1].classList.remove("block");
    document.getElementsByClassName("custom-center")[2].classList.remove("block");
    document.getElementsByClassName("custom-center")[3].classList.remove("block");
    document.getElementsByClassName("custom-center")[4].classList.remove("block");
    document.getElementsByClassName("custom-center")[5].classList.remove("block");   
}
document.getElementsByClassName("custom_label")[1].onclick = function(){
    document.getElementsByClassName("custom-center")[1].classList.add("block");
    document.getElementsByClassName("custom-center")[0].classList.remove("block");
    document.getElementsByClassName("custom-center")[2].classList.remove("block");
    document.getElementsByClassName("custom-center")[3].classList.remove("block");
    document.getElementsByClassName("custom-center")[4].classList.remove("block");
    document.getElementsByClassName("custom-center")[5].classList.remove("block");   
}
document.getElementsByClassName("custom_label")[2].onclick = function(){
    document.getElementsByClassName("custom-center")[2].classList.add("block");
    document.getElementsByClassName("custom-center")[1].classList.remove("block");
    document.getElementsByClassName("custom-center")[0].classList.remove("block");
    document.getElementsByClassName("custom-center")[3].classList.remove("block");
    document.getElementsByClassName("custom-center")[4].classList.remove("block");
    document.getElementsByClassName("custom-center")[5].classList.remove("block");   
}
document.getElementsByClassName("custom_label")[3].onclick = function(){
    document.getElementsByClassName("custom-center")[3].classList.add("block");
    document.getElementsByClassName("custom-center")[1].classList.remove("block");
    document.getElementsByClassName("custom-center")[2].classList.remove("block");
    document.getElementsByClassName("custom-center")[0].classList.remove("block");
    document.getElementsByClassName("custom-center")[4].classList.remove("block");
    document.getElementsByClassName("custom-center")[5].classList.remove("block");   
}
document.getElementsByClassName("custom_label")[4].onclick = function(){
    document.getElementsByClassName("custom-center")[4].classList.add("block");
    document.getElementsByClassName("custom-center")[1].classList.remove("block");
    document.getElementsByClassName("custom-center")[2].classList.remove("block");
    document.getElementsByClassName("custom-center")[3].classList.remove("block");
    document.getElementsByClassName("custom-center")[0].classList.remove("block");
    document.getElementsByClassName("custom-center")[5].classList.remove("block");   
}
document.getElementsByClassName("custom_label")[5].onclick = function(){
    document.getElementsByClassName("custom-center")[5].classList.add("block");
    document.getElementsByClassName("custom-center")[1].classList.remove("block");
    document.getElementsByClassName("custom-center")[2].classList.remove("block");
    document.getElementsByClassName("custom-center")[3].classList.remove("block");
    document.getElementsByClassName("custom-center")[4].classList.remove("block");
    document.getElementsByClassName("custom-center")[0].classList.remove("block");   
}



    