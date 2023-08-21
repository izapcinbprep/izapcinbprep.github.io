document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-btn");
    const resultSection = document.getElementById("result");
  
    submitButton.addEventListener("click", function () {
      const result = "Your perfect match is Beef Glerky!";
      resultSection.innerHTML = `<p>${result}</p>`;
    });
  });  
  document.addEventListener("DOMContentLoaded", function () {
    const profileForm = document.getElementById("profile-form");
    const displayUsername = document.getElementById("display-username");
    const displayInterests = document.getElementById("display-interests");
    const displayProfilePic = document.getElementById("display-profile-pic");

    profileForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const interests = document.getElementById("interests").value;
        // You can handle the profile picture upload here as well
        
        displayUsername.textContent = username;
        displayInterests.textContent = interests;
        // Set the profile picture source here
    });
});