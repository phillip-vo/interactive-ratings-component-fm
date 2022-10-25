let rating = 0;

let buttonsContainer = document.getElementById("ratings");

let buttons = buttonsContainer.getElementsByClassName("ratings-btn");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    this.className += " active";
  });
}

function getButtonOne() {
  let buttonOne = document.getElementById("num1").value;
  rating = buttonOne;
}

function getButtonTwo() {
  let buttonTwo = document.getElementById("num2").value;
  rating = buttonTwo;
}

function getButtonThree() {
  let buttonThree = document.getElementById("num3").value;
  rating = buttonThree;
}

function getButtonFour() {
  let buttonFour = document.getElementById("num4").value;
  rating = buttonFour;
}

function getButtonFive() {
  let buttonFive = document.getElementById("num5").value;
  rating = buttonFive;
}

function onSubmit() {
  let ratingContainer = document.getElementById("ratings-container");
  let tyContainer = document.getElementById("ty-container");
  let tyRating = document.getElementById("ty-rating");
  tyRating.innerHTML = "You selected " + rating + " out of 5";

  if (rating === 0) {
    alert("Please select a rating");
    location.reload();
  }
  ratingContainer.classList.add("hidden");
  tyContainer.classList.remove("hidden");
}
