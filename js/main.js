
  let help = document.querySelector(".header--wrapper--left_content--help");
  console.log(help) 
  help.addEventListener("click" ,
    () => {
        const element = document.querySelector(".header--wrapper--left_content--help--dropdown");
        element.classList.toggle("show");
    })
  
  
  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 7,
    spaceBetween: 8,
    slidesPerGroup: 7,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  });

  var swiper1 = new Swiper(".mySwiper1", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });