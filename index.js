let countEl = document.getElementById("count-el");
let prev = document.getElementById("previous");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}
function save() {
  if (count !== 0) {
    prev.textContent += count + " - ";
    count = 0;
    countEl.textContent = count;
  }
}
