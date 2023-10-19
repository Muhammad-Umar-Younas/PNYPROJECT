//for navigation hide and show on collpase

let nav = document.querySelector(".navigation-custom");
window.onscroll = function () {
    if(document.documentElement.scrollTop  > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}

// nav hide 
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

// slider jquery 


$(document).ready(function(){
  $('.demo').slick({
    arrows:true,
    touchMove:true,
    accessibility:true,

    infinite: false,
    dots:true,
  slidesToShow: 3,
  slidesToScroll: 1

  });
});
