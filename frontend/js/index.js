var getClass = (Class)=>document.getElementsByClassName(Class);

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    // document.querySelector("nav").classList.remove("navbar-dark");
    // document.querySelector("nav").classList.add("navbar-light");
    document.querySelector("nav").classList.add("scroll-navbar");
  } else {
    // document.querySelector("nav").classList.add("navbar-dark");
    // document.querySelector("nav").classList.remove("navbar-light");
    document.querySelector("nav").classList.remove("scroll-navbar");
  }
}

var swiper = new Swiper(".Swiper-memes", {
  slidesPerView: "auto",
  centeredSlides: false,
  spaceBetween: 0,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".Swiper-memes2", {
  slidesPerView: "auto",
  centeredSlides: false,
  spaceBetween: 0,
  autoplay: {
    delay: 3250,
    disableOnInteraction: false,
  },
});

for (ClassIndex of getClass("bg-js-color")){
  if(Math.round(Math.random())){
    ClassIndex.style.backgroundColor = "#959595"
  }else{
    ClassIndex.style.backgroundColor = "#7f6d59"
  }
}

function likeHover(This , number){
  if(number){
      This.target.classList.remove("far");
      This.target.classList.add("fas");
  }else{
    if((This.target.classList.contains("text-danger"))==false){
      This.target.classList.add("far");
      This.target.classList.remove("fas");
    }
  }
}
function likeClick(This){
  if(This.target.classList.contains("text-danger")){
    This.target.classList.add("far");
    This.target.classList.remove("text-danger");
    This.target.classList.remove("fas");
    let numberLike =Number(This.target.nextElementSibling.innerHTML);
    This.target.nextElementSibling.innerHTML = numberLike-1;
  }else{
    This.target.classList.remove("far");
    This.target.classList.add("text-danger");
    This.target.classList.add("fas");
    let numberLike =Number(This.target.nextElementSibling.innerHTML);
    This.target.nextElementSibling.innerHTML = numberLike+1;
  }
}

function saveHover(This , number){
  if(number){
      This.target.classList.remove("far");
      This.target.classList.add("fas");
  }else{
    if((This.target.classList.contains("text-warning"))==false){
      console.log(1);
      This.target.classList.add("far");
      This.target.classList.remove("fas");
    }
  }
}
function saveClick(This){
  if(This.target.classList.contains("text-warning")){
    This.target.classList.add("far");
    This.target.classList.remove("text-warning");
    This.target.classList.remove("fas");
    let numberSave =Number(This.target.nextElementSibling.innerHTML);
    This.target.nextElementSibling.innerHTML = numberSave-1;
  }else{
    This.target.classList.remove("far");
    This.target.classList.add("text-warning");
    This.target.classList.add("fas");
    let numberSave =Number(This.target.nextElementSibling.innerHTML);
    This.target.nextElementSibling.innerHTML = numberSave+1;
  }
}
