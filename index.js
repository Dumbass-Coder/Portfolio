console.log("Js running");
let hidemenu = document.getElementById("hidebar");
let ham = document.getElementById("hm")
let cross = document.getElementById("cross");
let body=document.getElementById("body")


hidemenu.classList.add("hidden");

ham.addEventListener('click', () => {
    ham.style.display = "none";
    hidemenu.classList.remove("hidden");
})
cross.addEventListener('click', () => {
    ham.style.display = "flex";
    hidemenu.classList.add("hidden");
})


  var counterSections = document.querySelectorAll('[id^="counter-section"]');
  var counters = document.querySelectorAll('.counter');
  var maxValues = [300, 250, 100, 900];
  var increments = [10, 5, 2, 20];
  var intervals = [];

  function startCounting(index) {
    intervals[index] = setInterval(function() {
      var currentValue = parseInt(counters[index].innerHTML);
      var increment = increments[index];
      var maxValue = maxValues[index];
      var newValue = currentValue + increment;
      if (newValue >= maxValue) {
        newValue = maxValue;
        clearInterval(intervals[index]);
      }
      counters[index].innerHTML = newValue;
    }, 130);
  }

  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  window.addEventListener("scroll", function() {
    for (var i = 0; i < counterSections.length; i++) {
      if (isInViewport(counterSections[i])) {
        startCounting(i);
      }
    }
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });