let searchForm=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=()  =>
{
	searchForm.classList.toggle('active');
	shoppingCart.classList.remove('active');
	loginForm.classList.remove('active');
	navbar.classList.remove('active');
}

let shoppingCart=document.querySelector('.shopping-cart');
let cartTotal = document.querySelector('.total');

let total = 0;

function addToCart(imag, name, price) {
  const divBox = document.createElement("div");
  divBox.className = "box";
  divBox.innerHTML = 
  `<i class="fa fa-trash">
  </i><img src="image/${imag}.jpeg">
  <div class="content">
  <h3>${name}</h3>
  <span class="price">Rs. ${price}/-</span>
  <span class="quantity">Qty:1</span>
  </div>`
  total += Number(price);
  cartTotal.innerHTML = `total:Rs. ${total}/-`;
  shoppingCart.prepend(divBox);
}

document.querySelector('#cart-btn').onclick=()  =>
{
	shoppingCart.classList.toggle('active');
	searchForm.classList.remove('active');
	loginForm.classList.remove('active');
	navbar.classList.remove('active');
}


let loginForm=document.querySelector('.login-form');

document.querySelector('#login-btn').onclick=()  =>
{
	loginForm.classList.toggle('active');
	searchForm.classList.remove('active');
	shoppingCart.classList.remove('active');
	navbar.classList.remove('active');
}


let navbar=document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick=()  =>
{
	navbar.classList.toggle('active');
}

window.onscroll=()  =>
{
	searchForm.classList.remove('active');
	shoppingCart.classList.remove('active');
	loginForm.classList.remove('active');
	navbar.classList.remove('active');
}


var swiper = new Swiper(".product-slider", {
      loop:true,
      spaceBetween: 20,
      autoplay:{
      	delay:7500,
      	disableOnInteraction:false,
      },
     
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1020: {
          slidesPerView: 3,
        },
      },
    });


var swiper = new Swiper(".review-slider", {
      loop:true,
      spaceBetween: 20,
      autoplay:{
      	delay:7500,
      	disableOnInteraction:false,
      },
     
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1020: {
          slidesPerView: 3,
        },
      },
    });