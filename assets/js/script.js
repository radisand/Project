
//----------------------Переменные для корзины---------------------//
let counterAdd = document.querySelector('#counter_add'),//+ счетчика
    counterRemove = document.querySelector('#counter_remove'),//- счетчика
    counter = document.querySelector('#total_num'),//счетчик
    buy_btn = document.querySelector('#add-to-cart'),//кнопка добавления в корзину
    modale_cart = document.querySelector('#modale_cart'),//модальное окно
    modaleClose = document.querySelector('.modale-cart_close');//закрытие окна


var total = 0;//сумма денег
var num = parseInt(counter.innerHTML);//значение счетчика
//----------------------------------------------------//


//----------------------Переменные для наведения фотографию---------------------//
let images = document.querySelectorAll('.secondary_elem');
let main_image = document.querySelector('.slider_main');
//----------------------------------------------------//





//--------------------------------Корзина----------------------------------//
//добавить товар    
counterAdd.addEventListener('click',()=>{

    if(num >= 0 && num <10){
        num++;//счетчик
        counter.innerHTML = num;

        total = total + Number(document.querySelector('#price_supply').innerHTML);//сумма
        
    }
})

//удалить товар
counterRemove.addEventListener('click',()=>{

    if(num > 0){
        num --;//счетчик
        counter.innerHTML = num;

        if(total != 0){
            total = total - Number(document.querySelector('#price_supply').innerHTML);//сумма
        }
        
    }
})

//добавление в корзину
buy_btn.addEventListener('click',()=>{
    
    if(Number(counter.innerHTML) != 0){//если товар есть
    
        //поля для модального окна корзины
        let supply = document.querySelector('#cart_supply'),
            price = document.querySelector('#cart_price'),
            amount = document.querySelector('#cart_amount'),
            summ = document.querySelector('#cart_summ');

        //заполняем текущими данными
        supply.innerHTML = document.querySelector('#name_supply').innerHTML;
        price.innerHTML = document.querySelector('#price_supply').innerHTML;
        amount.innerHTML = counter.innerHTML;
        summ.innerHTML = total;
        
        //визуализая модального окна
        modale_cart.style.visibility = "visible";
        let stage =-5;
        let modalAppear = setInterval(function(){
            if(stage <= 5){
                stage = stage + 0.1;
                modale_cart.style.top = String((stage)+'%');
            }else{
                clearInterval(modalAppear);
            } 
        },1);

    }else{
        alert('Добавьте товар в корзину!');
    }

    
})

//закрытие модального окна на крестик
modaleClose.addEventListener('click',()=>{
    modale_cart.style.visibility = "hidden";
    modale_cart.style.top = "-100%";
})


//закрытие модального окна на esc
document.addEventListener('keydown',(e)=>{
    if(e.key === "Escape"){
        modale_cart.style.visibility = "hidden";
        modale_cart.style.top = "-100%";
    }
})

//----------------------------------------------------//



//--------------------------------Фотографии(эффект увеличения)----------------------------------//

images.forEach(img => {
    img.addEventListener('mouseover',(e)=>{
        let img_id = e.target.dataset.img;
        main_image.style.cssText = "background-image: url('assets/images/tshirt_green_"+img_id+".jpeg')";
        e.target.style.opacity = "0.5";
    })
})

images.forEach(img => {
    img.addEventListener('mouseout',(e)=>{
        main_image.style.cssText = "background-image: url('assets/images/tshirt_green_1.jpeg')";
        e.target.style.opacity = "1";
    })
})

//----------------------------------------------------//