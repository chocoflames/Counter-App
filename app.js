let result = document.querySelector(".result");
let decrease = document.querySelector(".decrease");
let reset = document.querySelector(".reset");
let increase = document.querySelector(".increase");
let count = 0;

decrease.addEventListener("click", () => {
  count = count - 1;
  result.textContent = count;
  result.style.color = "red";
});

increase.addEventListener("click", () => {
  count = count + 1;
  result.textContent = count;
  result.style.color = "blue";
});

reset.addEventListener("click", () => {
  count = 0;
  result.textContent = count;
  result.style.color = "white";
});
