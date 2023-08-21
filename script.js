document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-btn");
    const generateButton = document.getElementById("generate-btn");
    const resultSection = document.getElementById("result");
  
    submitButton.addEventListener("click", function () {
      const selectedOption = document.querySelector("input[name=q1]:checked");
      if (selectedOption) {
        const result = selectedOption.value;
        resultSection.innerHTML = `<p>Your result: ${result}</p>`;
      } else {
        resultSection.innerHTML = `<p>Please select an option.</p>`;
      }
    });
  
    generateButton.addEventListener("click", function () {
      const pickUpLines = [
        "Are you a campfire? Because you’re hot and I want s’more.",
        "Do you believe in love at first sight, or should I walk by again?",
        // Add more pick-up lines here
      ];
      const randomIndex = Math.floor(Math.random() * pickUpLines.length);
      const randomLine = pickUpLines[randomIndex];
      const generatorResult = document.getElementById("generator-result");
      generatorResult.textContent = randomLine;
    });
  });  