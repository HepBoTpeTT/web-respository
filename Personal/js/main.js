let activeSlide = 0;
let prevSlide = 0;
let autoplay = document.getElementsByTagName('slider')[0].getAttribute("autoplay");
let menuI = 0;
let slideHeight = 0;

$('.menu-item').click(function(){ //interact menu
    document.getElementsByClassName("menu-item")[menuI].classList.toggle("active");
    menuI = $('.menu-item').index(this);
    document.getElementsByClassName("menu-item")[menuI].classList.toggle("active");
});

$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});
  

// SLIDER : BEGIN //
window.onload = function(){ //Creating slider navs
    var sliderItems = document.getElementsByClassName("slider-item").length;
    var sliderNav = document.getElementById("slider-navs");
    for (let i = 0; i < sliderItems; i++){
        let sliderNavChild = document.createElement("li");
            sliderNavChild.className = ("slider-nav-point");
        if(i == 0){
            sliderNavChild.classList.add("active");
            document.getElementsByClassName("slider-item")[i].classList.add("active");
        }
        sliderNavChild.setAttribute("onclick", "SlideMovier(" + i + ")");
        sliderNav.appendChild(sliderNavChild);
    }


    //Настройка слайдера
    for (let i = 0; i < sliderItems; i++){ // Находим максимальную высоту слайда
        if(document.getElementsByClassName("slider-item")[i].clientHeight > slideHeight){
            slideHeight = document.getElementsByClassName("slider-item")[i].clientHeight;
        }
    }
    for (let i = 0; i < sliderItems; i++){ // Присваиваем максимальную высоту всем слайдам
        document.getElementsByClassName("slider-item")[i].setAttribute("style", "height:"+slideHeight+"px;")
    }
    document.getElementsByClassName("slider")[0].setAttribute("style", "height:"+slideHeight+"px;")
}

function SlideMovier(n){
    if(n >= 0){
        activeSlide = n;
    }
    let translate = -slideHeight*activeSlide;
    let sliderAttr = "height:"+slideHeight+"px; transform: translateY(" + translate +"px)";
    document.getElementsByClassName("slider")[0].setAttribute("style", sliderAttr);

    if(activeSlide != prevSlide){
        document.getElementsByClassName("slider-item")[prevSlide].classList.remove("active");
        document.getElementsByClassName("slider-nav-point")[prevSlide].classList.remove("active");
    }
    document.getElementsByClassName("slider-item")[activeSlide].classList.add("active");
    document.getElementsByClassName("slider-nav-point")[activeSlide].classList.add("active");
    prevSlide = activeSlide;
}

if(autoplay == "true"){
    var info;
    $('slider').mousemove(function infoCheker(e){
        if (info != e.target){
            info = e.target;
        }
    });

    setInterval(function(){
        if (info != document.getElementsByClassName("slider-item active")[0]){
            if (activeSlide < document.getElementsByClassName("slider-item").length-1){
                activeSlide++;
            }
            else{
                activeSlide = 0;
            }
            SlideMovier();
        }
    }, 10000);
}
// SLIDER : END //