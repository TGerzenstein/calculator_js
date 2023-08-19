const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");


buttons.forEach(button => {
    button.addEventListener("click", () => {
       const buttonPush = button.textContent;

       screen.textContent += buttonPush;
    })
})