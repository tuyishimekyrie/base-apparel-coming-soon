const baseInput = document.querySelector(".base__input");
const input = document.querySelector(".base__input input");
const baseBtn = document.querySelector(".base__input .bt");
const result = document.querySelector(".result");
const error = document.querySelector(".base__input .error");
console.log(input);
baseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let output = input.value;
  console.log(input.value);
  result.innerHTML = output;
  // output = ''
  if (output) {
    result.innerHTML = output;
  } else {
    error.classList.toggle("active");
    result.innerHTML = "<p> Please write correct email address</p>";
    setTimeout(() => {
      error.classList.remove("active");
      result.innerHTML = "";
    }, 2000);
  }
});
