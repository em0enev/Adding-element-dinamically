import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

  const body = document.querySelector("body");

  body.addEventListener('click', () => createFiveElements())

  function createFiveElements(){
    for (let i = 1; i <= 5; i++) {
      const element = document.createElement("article")
      element.classList.add("message")
      element.textContent = `Message ${i}`    
      body.appendChild(element);
    }
  }

});
