$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false,
      }
    }
  });
});





$(document).ready(function () {
  window.addEventListener('scroll', function () {
    $(".topperheader").toggleClass("sticky", this.window.scrollY > 130);
  })
})




// Preloader - Прелоадер
function preloader() {
  $(() => {
    setInterval(() => {
      let p = $('.preloader');
      p.css('opacity', 0);


      if (p.css('opacity', 0)) {
        p.remove();
      }

    }, 1000);
  });
}

preloader();



// Вщзвращает наврх-Yuxari verir
window.addEventListener('scroll', function () {
  var scroll = this.document.querySelector('.upward');
  scroll.classList.toggle("upwardactive", this.window.scrollY > 450)
})
function scrollTopTop() {
  window.scrollTo({

    top: 0,
    behavior: 'smooth'
  })
}




// Click OfisPages Filter
let coll = document.getElementsByClassName('collapsible');
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active');
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    }
    else {
      content.style.maxHeight = content.scrollHeight + 'px'
    }
  })
}
// Click OfisPages Filter


// Zoom
function zoom(e) {
  var zoomer = e.currentTarget;
  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
  e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
  x = offsetX / zoomer.offsetWidth * 100
  y = offsetY / zoomer.offsetHeight * 100
  zoomer.style.backgroundPosition = x + '% ' + y + '%';
}
// Zoom


// Change img
function change1() {
  document.getElementById('top-img').src = "/img/Products/1616154785bx80-3802_2.Wz70i.jpg";
}
function change2() {
  document.getElementById('top-img').src = "/img/Products/1616154785bx80-3802.DLzxO.jpg";
}
// Change img



// Stepper
$(document).ready(function () {
  $(".decrement").on("click", function () {
    $(".input-box").val(parseInt($(".input-box").val()) - 1);
  });

  $(".increment").on("click", function () {
    $(".input-box").val(parseInt($(".input-box").val()) + 1);
  });
});

// Stepper



/* Range */
(function () {

  var parent = document.querySelector(".price-slider");
  if (!parent) return;

  var
    rangeS = parent.querySelectorAll("input[type=range]"),
    numberS = parent.querySelectorAll("input[type=number]");

  rangeS.forEach(function (el) {
    el.oninput = function () {
      var slide1 = parseFloat(rangeS[0].value),
        slide2 = parseFloat(rangeS[1].value);

      if (slide1 > slide2) {
        [slide1, slide2] = [slide2, slide1];
      }

      numberS[0].value = slide1;
      numberS[1].value = slide2;
    }
  });

  numberS.forEach(function (el) {
    el.oninput = function () {
      var number1 = parseFloat(numberS[0].value),
        number2 = parseFloat(numberS[1].value);

      if (number1 > number2) {
        var tmp = number1;
        numberS[0].value = number2;
        numberS[1].value = tmp;
      }

      rangeS[0].value = number1;
      rangeS[1].value = number2;

    }
  });

})();
/* Range */


// Add Heart
const cards = document.querySelectorAll('.cardd');

cards.forEach((el, idx) => {

const btn = el.querySelector('.imp-heart');

  const img = el.querySelector('.product-img').src;
  const title = el.querySelector('.title').innerHTML;
  const price = el.querySelector('h6').textContent;


  btn.addEventListener('click', () => {
    const cartstorage = localStorage.getItem('cart') || "[]";
    const cart = JSON.parse(cartstorage);
    const card = { img, price, title }
    localStorage.setItem('cart', JSON.stringify([...cart, card]))
  })

  btn.addEventListener('click', function (btn) {
    btn.target.classList.toggle('dsa');
  })
})

