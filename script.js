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
document.addEventListener("DOMContentLoaded", function() {
    const profileForm = document.getElementById("profile-form");
    const displayUsername = document.getElementById("display-username");
    const displayInterests = document.getElementById("display-interests");
    const displayProfilePic = document.getElementById("display-profile-pic");
    const editProfileLink = document.getElementById("edit-profile-link");

    profileForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const interests = document.getElementById("interests").value;
        const profilePic = document.getElementById("profile-pic").files[0];

        displayUsername.textContent = username;
        displayInterests.textContent = interests;

        if (profilePic) {
            const reader = new FileReader();
            reader.onload = function(event) {
                displayProfilePic.src = event.target.result;
            };
            reader.readAsDataURL(profilePic);
        }
    });
});

const pickUpLines = [
    "Are you a cosmic explorer? Because my heart is lighting up like a swampy supernova when I see you!",
    "Are you made of stardust? Because being with you feels like a celestial journey through the swampy cosmos!",
    "Are you a magical bean? Because you've definitely cast a spell on my swampy heart.",
    "Is your name Glerky? Because you've got me trippin' over cosmic roots and falling into your swampy charm!",
    "Is your laughter the melody of the cosmos? Because every time you laugh, my heart does a celestial jig!",
    "Do you believe in intergalactic connections? Because I think we're cosmically aligned, just like the stars in the swampy sky!",
    "Do you have a map? Because I just got lost in your eyes, and I need a guide to navigate through this cosmic enchantment!",
    "Are you a gassy wonder from the mystic swamp? Because being with you makes me feel like I'm floating among the stars!",
    "Is your smile brighter than a supernova? Because every time you smile, my swampy world lights up!",
    "Do you have a little bit of swampy magic in you? Because you've cast a spell on my heart, and I'm totally enchanted!",
    "eat sock",
    "Are you a Minecraft fence? Because I can't get over you",
    "Did you fart? Cause you blew me away!",
    "I AM BEEF GLERKY, GLERKY OF THE BEEF! BOW DOWN TO ME!!!",
    "Come Here please, my head itches Like The hives Disease",
    "How Would You Like To succ Lord Voldemort Nose",
    "You're very dank for A meme",
    "Are You my Mom? Because you Look Like My Father? 's wife what?",
    "Doge Doge Doge Doge Doge",
    "Are You going to poop first",
    "fart Smile on your mom must die",
    "Sunshine smells like your favorite fart jokes and laughter poop cleaning nut delicious",
    "Voldemort magic nose tickling sneeze bless you what?",
    "Ploop cosmic is my favorite constellation in the sky when I see moop and toilet smiles AAAAAAAAAAAAAAAAAAAAAAAAA",
    "Are me you is your mine because you must've eaten a sock?"
];

const generateBtn = document.getElementById("generate-btn");
const resultDiv = document.getElementById("result");

generateBtn.addEventListener("click", generatePickUpLine);

function generatePickUpLine() {
    const randomIndex = Math.floor(Math.random() * pickUpLines.length);
    const randomPickUpLine = pickUpLines[randomIndex];

    resultDiv.textContent = randomPickUpLine;
}
