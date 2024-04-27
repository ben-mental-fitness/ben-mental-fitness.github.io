"use strict";

const createImgCard = (imgID) => {
  const imgPath = "./assets/" + String(imgID) + ".png"; 

  const parentDiv = document.getElementById("reframer_container");
  parentDiv.innerHTML = 
  '<div class="col-lg-4 col-md-6 mb-4">' +
      '<div class="card h-100">' +
        '<a href="' + linkedIn_URLs[imgID-1] + '" target="_blank">' + 
          '<img class="card-img-top" src="' + imgPath + '" alt="' + alt_text[imgID-1] + '"/>' +
        '</a>' +
      '</div>' +
    '</div>' +
  '</div>' +
  parentDiv.innerHTML;

  return;
}

window.onload = async function() {
  let imgID = 1;

  while (imgID <= linkedIn_URLs.length) {
    createImgCard(imgID); 
    imgID += 1; 
  }
}

const linkedIn_URLs = [
  "https://www.linkedin.com/posts/ben-mental-fitness_this-mindset-shift-keeps-me-grounded-theres-activity-7175404667709882368-GjRi",
  "https://www.linkedin.com/posts/ben-mental-fitness_its-not-just-a-fun-kids-game-its-a-activity-7176525465103290368-0CzZ",
  "https://www.linkedin.com/posts/ben-mental-fitness_when-is-good-enough-when-youre-passionate-activity-7178333216469131264-kRUD",
  "https://www.linkedin.com/posts/ben-mental-fitness_balancing-joy-in-the-moment-long-term-fulfilment-activity-7180821396896256000-LoBs",
  "https://www.linkedin.com/posts/ben-mental-fitness_how-i-stop-unwanted-habits-build-deliberate-activity-7181583804061351938-A25t",
  "https://www.linkedin.com/posts/ben-mental-fitness_my-number-1-rule-for-building-routines-activity-7183401318529540097-LcCF",
  "https://www.linkedin.com/posts/ben-mental-fitness_sometimes-i-get-stuck-in-my-head-thinking-activity-7184075352879562752-DosP",
  "https://www.linkedin.com/posts/ben-mental-fitness_the-question-i-ask-myself-when-i-set-a-goal-activity-7185539851704750080-6NSd",
  "https://www.linkedin.com/posts/ben-mental-fitness_whats-something-that-youve-failed-at-recently-activity-7186362802935078912-qxqf",
  "https://www.linkedin.com/posts/ben-mental-fitness_i-used-to-get-stuck-in-my-head-a-lot-and-activity-7188431404957937664-jWFC",
  "https://www.linkedin.com/posts/ben-mental-fitness_something-a-lot-of-people-especially-men-activity-7189216609872269312-KPMM",
  "https://www.linkedin.com/in/ben-mental-fitness/",
  "https://www.linkedin.com/in/ben-mental-fitness/",
  "https://www.linkedin.com/in/ben-mental-fitness/"
]

const alt_text = [
  "This too shall pass.",
  "Heads down, thumbs up.",
  "When you are crying for rain, you are crying for mud too.",
  "Can't see the wood for the trees.",
  "Your mind is a ski slope.",
  "Consistency beats intensity.",
  "Why not?",
  "Becoming is better than being",
  "Failing is play",
  "When lost, pick a direction & get going.",
  "Lean for support",
  "A fox chasing two hares catches none",
  "Boundaries are rules for me, not others.",
  "When a goldfish is ill, you change the bowl."
]