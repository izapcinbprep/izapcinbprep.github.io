document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-btn");
    const resultSection = document.getElementById("result");
  
    submitButton.addEventListener("click", function () {
      const result = "Your perfect match is Beef Glerky!
       <h1>About Me</h1>
      <p>Hey there, cosmic explor3r! I'm Beef Glerky, your friendly cheerlead3r from the rollin' swamp 🌌💃. I'm all 'bout those mysthic *fart* vibes, and my trusty pals, the rollin' beans, keep me company from breakf4st to dinner! 🌌🌮</p>
      
      <h2>Physical Description</h2>
      <p>Pictur3 me rollin' *fart* in a cosmic cheerlead3r outfit, spreadin' charm and a littl3 3xtra fluffin3ss. My cosmic aura and, um, round stature make for an intriguin' and whimsical sight. 💖</p>
      
      <h2>Hobbies and Interests</h2>
      <p>My days ar3 fill3d with cosmic explorashun *fart* 🚀 and enjoyin' the symphony of my swamp's gassy wonders. It's a fragrant adventur3 fart lik3 no oth3r! 🌄🌌🍲</p>
      
      <h2>Faith and Cosmic Connection</h2>
      <p>A devout seeker, I find spiritual *fart* guidanc3 in the mystic swamp 🌌🙏. The gassy wonders fart of the cosmos r3mind m3 of the divin3 myst3ri3s that bind us all tog3th3r. 🌠🌳✨</p>
      
      <h2>Favorite Movie and Aspirations</h2>
      <p>Shrek's my go-to flick, fart 'caus3 that big green guy's all 'bout bein' tru3 to hims3lf. Just lik3 m3, embracin' the swampy cosmic *fart* life with confid3nc3! 💚🌌</p>
      
      <h2>Seeking Alike Minds</h2>
      <p>If you'r3 up for rollin' *fart* into cosmic mysteries 🌌🔍 and indulgin' in the uniqu3 fragrance of the swamp, w3'r3 cosmically *fart* align3d. L3t's chat about beans, magik, and all things cosmic! 🌠🌮🔮</p>
      
      <h2>Otherworldly Companionship</h2>
      <p>Joinin' m3 in the swamp ar3 Fartran, *fart* the Pusheen-lik3 dragon 🐉😺, Lun3yTun3s, the Pikachu on a cosmic joyrid3 ⚡🛸, and ol' witch XanTDM with h3r ancient *fart* magik. Tog3th3r, w3'r3 rollin' *fart* through the swampy r3alm and its aromatic s3cr3ts. Com3 join th3 cosmic *fart* bean party! 🎉🌲🌮</p>
      
      <p>So, if you'r3 up for a cosmic rollin' *fart* journey through my swampy hav3n, l3t's div3 into th3 fragrant tap3stry *fart* of mysthic wonders. W3'll uncov3r s3cr3ts *fart* 🌌🤫, indulg3 in gassy d3lights, and 3xplor3 the cosmos *fart* with a dash of swampy charm. R3ady to roll into th3 *fart* adventur3? 🌌🌿🌮🌌💖</p>"
 
      </div> 
  <script>src="script.js"</script>
  </body>
  <img src="https://images.nightcafe.studio/jobs/bMM9QM26jC2dX3QezEJ9/bMM9QM26jC2dX3QezEJ9--1--msc04.jpg?tr=w-1600,c-at_max"/>";
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