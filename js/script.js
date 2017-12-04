var modalButton = document.querySelector(".find-hotel-link");
var modal = document.querySelector(".form-wrapper");
var checkIn = modal.querySelector("#check-in");
var checkOut = modal.querySelector("#check-out");
var adults = modal.querySelector("#adults");
var children = modal.querySelector("#children");
var form = modal.querySelector("form");
var adultsCount = localStorage.getItem("adults");
var childrenCount = localStorage.getItem("children");

modal.classList.remove("modal-show");

modalButton.addEventListener("click", function(evt){
  evt.preventDefault();
  modal.classList.toggle("modal-show");

  if (modal.classList.contains("modal-error")) {
    modal.classList.remove("modal-error");
  }

  if (adultsCount) {
      adults.value = adultsCount;
    }
  if (childrenCount) {
      children.value = childrenCount;
    }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-show")) {
      modal.classList.remove("modal-show");
      modal.classList.remove("modal-error");
    }
  }
});

form.addEventListener("submit", function(evt) {
  if (!checkIn.value || !checkOut.value || !adults.value || !children.value) {
    evt.preventDefault();
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  } else {
    localStorage.setItem("adults", adults.value);
    localStorage.setItem("children", children.value);
  }
});
