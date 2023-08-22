const form = document.getElementById("quiz");
form.addEventListener("submit", submitted);

function createElement(tag, text) {
    const element = document.createElement(tag);
    element.textContent = text;
    return element;
}

function submitted(event) {
    event.preventDefault();
    const resultSection = document.getElementById("result");
    resultSection.innerHTML = "";

    resultSection.appendChild(createElement('h1', "You are matched with Beef Glerky!"));

    const sections = [
        { title: "About Me", content: "Hey there, cosmic explor3r! I'm Beef Glerky, your friendly cheerlead3r from the rollin' swamp 🌌💃..." },
        { title: "Physical Description", content: "Pictur3 me rollin' *fart* in a cosmic cheerlead3r outfit, spreadin' charm and a littl3 3xtra fluffin3ss..." },
        { title: "Hobbies and Interests", content: "My days ar3 fill3d with cosmic explorashun *fart* 🚀 and enjoyin' the symphony of my swamp's gassy wonders..." },
        { title: "Faith and Cosmic Connection", content: "A devout seeker, I find spiritual *fart* guidanc3 in the mystic swamp 🌌🙏. The gassy wonders fart of the cosmos r3mind m3 of the divin3 myst3ri3s that bind us all tog3th3r..." },
        { title: "Favorite Movie and Aspirations", content: "Shrek's my go-to flick, fart 'caus3 that big green guy's all 'bout bein' tru3 to hims3lf. Just lik3 m3, embracin' the swampy cosmic *fart* life with confid3nc3! 💚🌌" },
        { title: "Seeking Alike Minds", content: "If you'r3 up for rollin' *fart* into cosmic mysteries 🌌🔍 and indulgin' in the uniqu3 fragrance of the swamp, w3'r3 cosmically *fart* align3d. L3t's chat about beans, magik, and all things cosmic! 🌠🌮🔮" },
        { title: "Otherworldly Companionship", content: "Joinin' m3 in the swamp ar3 Fartran, *fart* the Pusheen-lik3 dragon 🐉😺, Lun3yTun3s, the Pikachu on a cosmic joyrid3 ⚡🛸, and ol' witch XanTDM with h3r ancient *fart* magik..." },
        { content: "So, if you'r3 up for a cosmic rollin' *fart* journey through my swampy hav3n, l3t's div3 into th3 fragrant tap3stry *fart* of mysthic wonders. W3'll uncov3r s3cr3ts *fart* 🌌🤫, indulg3 in gassy d3lights, and 3xplor3 the cosmos *fart* with a dash of swampy charm. R3ady to roll into th3 *fart* adventur3? 🌌🌿🌮🌌💖" }
    ];

    sections.forEach(section => {
        if (section.title) {
            resultSection.appendChild(createElement('h2', section.title));
        }
        resultSection.appendChild(createElement('p', section.content));
    });

}
