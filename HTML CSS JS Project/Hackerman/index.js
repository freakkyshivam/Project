
const inputField = document.getElementById("inputField");
const resutlsContainer = document.getElementById("result");
const submitButton = document.getElementById("hackButton");
let p1, p2, p3, p4, p5;
submitButton.addEventListener("click", () => {
  const inputValue = inputField.value;
  if (inputValue) {
     p1 = document.createElement("p");
    p1.style.color = "red";
    p1.style.fontSize = "20px";
    p1.textContent = "HACKING IN PROGRESS...";
    resutlsContainer.appendChild(p1);
    setTimeout(() => {
      resutlsContainer.removeChild(p1);
       p2 = document.createElement("p");
      p2.textContent = `HACKING ${inputValue}...`;
      resutlsContainer.appendChild(p2);
    }, 3000);

    setTimeout(() => {
      resutlsContainer.removeChild(p2);
       p3 = document.createElement("p");
      p3.textContent = `GENRATING PASSWORD OF ${inputValue}...`;
      p3.style.color = "red";
      p3.style.fontSize = "20px";
      resutlsContainer.appendChild(p3);
    }, 6000);

    setTimeout(() => {
      resutlsContainer.removeChild(p3);
       p4 = document.createElement("p");
      p4.textContent = `PASSWORD GENRATE SUCCESSFULLY ...`;
      resutlsContainer.appendChild(p4);
    }, 9000);

    setTimeout(() => {
        resutlsContainer.removeChild(p4);
         p5 = document.createElement("p");
         let password = Math.random().toString(36).slice(-8);
        p5.textContent = `HACKING COMPLETED.....PASSWORD IS ${password}`;
        p5.style.color = "red";
        p5.style.fontSize = "20px";
        resutlsContainer.appendChild(p5);
        }, 12000);

    setTimeout(() => {
        resutlsContainer.removeChild(p5);
        }, 20000);

        inputField.value = ""; // Clear the input field after submission
  } else {
    resutlsContainer.innerHTML = "<p>Please enter a valid input.</p>";
  }
});