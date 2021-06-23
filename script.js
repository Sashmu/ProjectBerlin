var swiper = new Swiper(".mySwiper", {
   breakpoints: {
   
      // when window width is > 320px but < 768px  
      320: {
         slidesPerView: 1,
         spaceBetween: 50
      },
      // when window width is < 1200px but > 768px
      768: {
         slidesPerView: 2,
         spaceBetween: 50
      },
  
      // when window width is > 1200px     
      1200: {
         slidesPerView: 3,
         spaceBetween: 50
      },
          // when window width is > 1200px     
          1400: {
            slidesPerView: 4,
            spaceBetween: 50
         }
   } ,
   // spaceBetween: 30,
   autoplay: {
     delay: 2000,
   },

});
 
const form = document.getElementById('myform');
form.addEventListener('submit', function (event) {
const alert=document.querySelector('.alert')
   //event.stopImmediatePropagation();
   event.preventDefault();
   event.preventDefault();
  alert.classList.remove("disappear");
 alert.classList.add("block");
   });

const tips=document.querySelector('.tips')
const tipdiv = document.querySelector('.tipdiv')
let state = true;
tips.addEventListener('click', function () {
   if (state) {
      tipdiv.classList.remove("disappear");
      tipdiv.classList.add("block");
   } else {
      tipdiv.classList.remove("block");
      tipdiv.classList.add("disappear");
   }
   state = !(state);
});

function ellipsizeTextBox(id) {
   var el = document.querySelector(id);
   var wordArray = el.innerHTML.split(' ');
   while(el.scrollHeight > el.offsetHeight) {
       wordArray.pop();
       el.innerHTML = wordArray.join(' ') + '...';
    }
}

ellipsizeTextBox('bar-content');
