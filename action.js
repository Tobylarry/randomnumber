let para = document.querySelector("p");
let btn = document.querySelector("button")

btn.addEventListener("click", rand)
function rand(){
    let random = Math.round(Math.random()*100 - 1);
    para.innerHTML = random;
}