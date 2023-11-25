

//-------------- Navbar Header Scroller Section //

const slider = document.getElementById("slider");

function openNav() {
  slider.classList.add("slide");
};

function closeNav() {
  slider.classList.remove("slide");
};




window.addEventListener(('scroll'), () => {
  var header = document.getElementById('head_scroll');
  var arrow_up = document.getElementById("arrow_up");

  if (window.scrollY > 0) {
    header.classList.add("roll");
    arrow_up.classList.add("show")
  }
  else {
    header.classList.remove("roll");
    arrow_up.classList.remove("show")
  }
})



const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 5000,
  },
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const swiperly = new Swiper('.slider', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});




//------------Scroll Reveal-------//

ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 2500,
  delay: 400
});

ScrollReveal().reveal('.upper li,.top ', { delay: 200, origin: 'top', interval: 500, distance: '150px', duration: 1000, reset: false });
ScrollReveal().reveal('.left', { delay: 200, origin: 'left', interval: 200, distance: '150px', duration: 2500, reset: false });
ScrollReveal().reveal('.right', { delay: 200, origin: 'right', interval: 200, distance: '150px', duration: 2500, reset: false });
ScrollReveal().reveal('.bottom ,.content_two_sub_container .content_two_sub_container_details', {delay: 150, origin: 'bottom', interval: 300, distance: '200px', duration: 1000, reset: false });
ScrollReveal().reveal('.stop', { origin: 'bottom', interval: 300, distance: '1px', duration: 1000, reset: false });


const { innerHeight } = window;

gsap.from("#zoom-out h2", {
  scale: 50, stager: 0.25, duration: 3,
  scrollTrigger: {
    trigger : "zoom-out",
    pin: true,
    end: `+=${innerHeight * 1.3}`,
    scrub: 3
  }
});


gsap.to("#zoom_in .swiper-slide", {
  scale: 100,stager: 0.25, duration: 3,
  scrollTrigger: {
    trigger : "#zoom_in",
    pin: true,
    end: `+=${innerHeight * 1.3}`,
    scrub: 3
  }
});



