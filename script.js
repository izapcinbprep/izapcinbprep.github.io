const form = document.getElementById("quiz");
form.addEventListener("submit",submitted);
    function submitted(event){
        event.preventDefault();
        const resultSection=document.getElementById("result")
        resultSection.innerHTML = "";

        const resultdisplay0 = document.createElement('h1');
        resultdisplay0.textContent = "Your perfect match is Beef Glerky!";
        resultSection.appendChild(resultdisplay0);

        const resultdisplay1 = document.createElement('h1');
        resultdisplay1.textContent = "About Me";
        resultSection.appendChild(resultdisplay1);

        const resultdisplay2 = document.createElement('p');
        resultdisplay2.textContent = "Hey there, cosmic explor3r! I'm Beef Glerky, your friendly cheerlead3r from the rollin' swamp 🌌💃. I'm all 'bout those mysthic *fart* vibes, and my trusty pals, the rollin' beans, keep me company from breakf4st to dinner! 🌌🌮";
        resultSection.appendChild(resultdisplay2);

        const resultdisplay3 = document.createElement('h2');
        resultdisplay3.textContent = "Physical Description";
        resultSection.appendChild(resultdisplay3);

        const resultdisplay4 = document.createElement('p');
        resultdisplay4.textContent = "Pictur3 me rollin' *fart* in a cosmic cheerlead3r outfit, spreadin' charm and a littl3 3xtra fluffin3ss. My cosmic aura and, um, round stature make for an intriguin' and whimsical sight. 💖";
        resultSection.appendChild(resultdisplay4);

        const resultdisplay5 = document.createElement('h2');
        resultdisplay5.textContent = "Hobbies and Interests";
        resultSection.appendChild(resultdisplay5);

        const resultdisplay6 = document.createElement('p');
        resultdisplay6.textContent = "My days ar3 fill3d with cosmic explorashun *fart* 🚀 and enjoyin' the symphony of my swamp's gassy wonders. It's a fragrant adventur3 fart lik3 no oth3r! 🌄🌌🍲";
        resultSection.appendChild(resultdisplay6);

        const resultdisplay7 = document.createElement('h2');
        resultdisplay7.textContent = "Faith and Cosmic Connection";
        resultSection.appendChild(resultdisplay7);
       
        const resultdisplay8 = document.createElement('p');
        resultdisplay8.textContent = "A devout seeker, I find spiritual *fart* guidanc3 in the mystic swamp 🌌🙏. The gassy wonders fart of the cosmos r3mind m3 of the divin3 myst3ri3s that bind us all tog3th3r. 🌠🌳✨";
        resultSection.appendChild(resultdisplay8);
       
        const resultdisplay9 = document.createElement('h2');
        resultdisplay9.textContent = "Favorite Movie and Aspirations";
        resultSection.appendChild(resultdisplay9);
       
        const resultdisplay10 = document.createElement('p');
        resultdisplay10.textContent = "Shrek's my go-to flick, fart 'caus3 that big green guy's all 'bout bein' tru3 to hims3lf. Just lik3 m3, embracin' the swampy cosmic *fart* life with confid3nc3! 💚🌌";
        resultSection.appendChild(resultdisplay10);
       
        const resultdisplay11 = document.createElement('h2');
        resultdisplay11.textContent = "Seeking Alike Minds";
        resultSection.appendChild(resultdisplay11);
       
        const resultdisplay12 = document.createElement('p');
        resultdisplay12.textContent = "If you'r3 up for rollin' *fart* into cosmic mysteries 🌌🔍 and indulgin' in the uniqu3 fragrance of the swamp, w3'r3 cosmically *fart* align3d. L3t's chat about beans, magik, and all things cosmic! 🌠🌮🔮";
        resultSection.appendChild(resultdisplay12);
       
        const resultdisplay13 = document.createElement('h2');
        resultdisplay13.textContent = "Otherworldly Companionship";
        resultSection.appendChild(resultdisplay13);
       
        const resultdisplay14 = document.createElement('p');
        resultdisplay14.textContent = "Joinin' m3 in the swamp ar3 Fartran, *fart* the Pusheen-lik3 dragon 🐉😺, Lun3yTun3s, the Pikachu on a cosmic joyrid3 ⚡🛸, and ol' witch XanTDM with h3r ancient *fart* magik. Tog3th3r, w3'r3 rollin' *fart* through the swampy r3alm and its aromatic s3cr3ts. Com3 join th3 cosmic *fart* bean party! 🎉🌲🌮";
        resultSection.appendChild(resultdisplay14);
       
        const resultdisplay15 = document.createElement('p');
        resultdisplay15.textContent = "So, if you'r3 up for a cosmic rollin' *fart* journey through my swampy hav3n, l3t's div3 into th3 fragrant tap3stry *fart* of mysthic wonders. W3'll uncov3r s3cr3ts *fart* 🌌🤫, indulg3 in gassy d3lights, and 3xplor3 the cosmos *fart* with a dash of swampy charm. R3ady to roll into th3 *fart* adventur3? 🌌🌿🌮🌌💖";
        resultSection.appendChild(resultdisplay15);
           });

    const profileForm = document.getElementById("profile-form");
    const displayUsername = document.getElementById("display-username");
    const displayInterests = document.getElementById("display-interests");

    profileForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const interests = document.getElementById("interests").value;

        displayUsername.textContent = username;
        displayInterests.textContent = interests;
    });
