document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("input");
  const buttons = document.querySelectorAll(".calculator button");

  buttons.forEach((button) => {
      button.addEventListener("click", () => {
          const buttonText = button.textContent;
          
          if (button.classList.contains("clear")) {
              inputField.value = "";
          } else if (button.classList.contains("delete")) {
              inputField.value = inputField.value.slice(0, -1);
          } else if (button.classList.contains("equilvalent")) {
              try {
                  inputField.value = eval(inputField.value);
              } catch (error) {
                  inputField.value = "Error";
              }
          } else if (button.classList.contains("Arithmetic")) {
              if (buttonText === "%") {
                  inputField.value += "/100";
              } else {
                  inputField.value += buttonText;
              }
          } else {
              inputField.value += buttonText;
          }
      });
  });
});
