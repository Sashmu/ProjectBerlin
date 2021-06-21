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