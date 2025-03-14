const counter = document.querySelector(".counter-number");
async function updateCounter(){
    let response = await fetch("https://q7eqrpe32rgp73evvilay6finq0dnjcj.lambda-url.ap-southeast-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Website views: ${data}`;
} 

updateCounter();