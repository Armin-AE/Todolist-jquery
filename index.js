let inpt = document.getElementById("task");
let btn = document.querySelector(".fbtn");
let para = document.querySelector(".para");
let cont = document.querySelector(".tasktable");
btn.addEventListener("click", function () {
  if (inpt.value !== "") {
    let div = document.createElement("div");
    let p = document.createElement("p");
    let btn = document.createElement("button");
    let node = document.createTextNode("X");
    btn.appendChild(node);
    div.classList.add("mytasks");
    p.classList.add("para");
    btn.classList.add("btn");
    cont.appendChild(div);
    div.appendChild(p);
    div.appendChild(btn);
    p.innerHTML = inpt.value;
    inpt.value = "";
    inpt.focus();
    div.addEventListener("click", function () {
      $(this).toggleClass("done");
      $(p).toggleClass("paradone");
    });
    btn.addEventListener("click", function () {
      $(div).toggle("slow");
    });
  }
});
inpt.addEventListener("keypress", function (e) {
  if (e.which === 13) {
    if (inpt.value !== "") {
      let div = document.createElement("div");
      let p = document.createElement("p");
      let btn = document.createElement("button");
      let node = document.createTextNode("X");
      btn.appendChild(node);
      div.classList.add("mytasks");
      p.classList.add("para");
      btn.classList.add("btn");
      cont.appendChild(div);
      div.appendChild(p);
      div.appendChild(btn);
      p.innerHTML = inpt.value;
      inpt.value = "";
      inpt.focus();
      div.addEventListener("click", function () {
        $(this).toggleClass("done");
        $(p).toggleClass("paradone");
      });
      btn.addEventListener("click", function () {
        $(div).toggle("slow");
      });
    }
  }
});
