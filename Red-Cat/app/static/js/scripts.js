document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM полностью загружен и разобран');

    var first = 1;
    var number = 1;

    document.querySelectorAll("button[type='button']").forEach(button =>{
        button.addEventListener('click', ()=>{
            if (button.id === "btn-grey" || button.id === "motivate-button" || button.id === "slogan-button") {
                document.getElementsByClassName("navbar")[0].classList.add("hide");
                document.getElementById("all").classList.add("show-all");
                document.getElementById("body").classList.add("overflow");
                setTimeout( function(){
                    document.getElementById("form-on-click").classList.add("show");
                },100)
            }
            else{
                
            }
        })
    })

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

    var pageNavigation = [...document.querySelectorAll(".menu-item-container .menu-item")]
    console.log(pageNavigation);
    document.querySelector(".menu-item-container").addEventListener("click", (e) => {
        index = pageNavigation.indexOf(e.target);
        console.log(e.target, index);

        if (~index){
            document.querySelector(".menu-item-container .menu-item a.active").classList.remove("active");
            e.target.querySelector(".scrollto").classList.add("active");
        }
    });

    var labels = [...document.querySelectorAll(".custom_label")]
    document.querySelector("#custom-radio-container").addEventListener("click", (e)=>{
        index = labels.indexOf(e.target);
        console.log(e.target);

        if(~index){
            document.querySelector(".custom_label.active input").checked = false
            document.querySelector(".custom_label.active").classList.remove("active");
            e.target.classList.add("active");
            e.target.querySelector("input").checked = true;

        }
    })

    document.addEventListener('submit', async (e)=>{
        e.preventDefault();
        let name, contact_phone, area, canvas_type, comment;
        try{
            name = e.target.querySelector("[name='name']").value;
            e.target.querySelector("[name='name']").value = '';
        }
        catch{
            name = '';
            console.log(e.target, '\nНе удалось получить имя');
        }

        try{
            contact_phone = e.target.querySelector("[name='contact_phone']").value;
            e.target.querySelector("[name='contact_phone']").value = '';
        }
        catch{
            console.error(e.target, '\nНе удалось получить номер телефона, отмена регистрации заявки');
            return
        }

        try{
            area = e.target.querySelector("[name='area']").value;
            e.target.querySelector("[name='area']").value = '';
        }
        catch{
            console.log(e.target, '\nПытаюсь полочуть стороны');
            try{
                room_a = e.target.querySelector("[name='room_a']").value;
                room_b = e.target.querySelector("[name='room_b']").value;
                area = room_a * room_b;

                e.target.querySelector("[name='room_a']").value = '';
                e.target.querySelector("[name='room_b']").value = '';
            }
            catch{
                area = 0;
                console.log(e.target, '\nНе удалось получить площадь')
            }
            
        }

        try{
            active_canvas = e.target.querySelector(".custom_label.active");
            canvas_type = active_canvas.querySelector("input[type='radio']").value;

            active_canvas.querySelector("input[type='radio']").checked = false;
            active_canvas.classList.remove("active");

        }
        catch{
            canvas_type = '';
            console.log(e.target, '\nНе удалось получить тип полотна')
        }

        try{
            comment = e.target.querySelector("[name='comment']").value;
            e.target.querySelector("[name='comment']").value = "";
        }
        catch{
            comment = '';
            console.log(e.target, '\nНе удалось получить уточнения')
        }

        console.warn(`Собранные данные: имя ${name}, телефон ${contact_phone}, тип полотна ${canvas_type}, площадь ${area}, комментарий ${comment}`);

        if (comment){
            document.querySelector("#del").click();
        }

        const response = await fetch("/apply", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                contact_phone: contact_phone,
                area: area,
                canvas_type: canvas_type,
                comment: comment
            })
        });

        const result = await response.json();
        if (response.ok) {
            alert("✅ Заявка отправлена: " + result.message);
        } else {
            alert("❌ Ошибка: " + result.detail);
        }
    });
});