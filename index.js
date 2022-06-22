"use strict";

var facts = [];

const load_facts = async ()=> {
  return new Promise ((resolve, reject) => {
    d3.tsv("/media/did_you_know.txt", async function(data) {
      for (let i = 0; i < data.length; i++) {
        console.log(data[i].fact);
        facts.push(data[i].fact);
      };
      resolve();
    });
  });
}

window.onload = async function() {
  await load_facts().then(() => {
    var fact_len = facts.length - 1;
    change();

    function change() {
      var index = Math.round(Math.random() * fact_len)
      document.getElementById("rollingText").innerHTML = "that " + facts[index] + "?"
      setTimeout(change, 5000);
    }
  });
}
