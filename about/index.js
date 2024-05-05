"use strict";

let portfolio_chart;
let category_colours = {
  'All' : "rgba(57, 182, 169, ",
  'Technology': "rgba(27, 88, 115, ",
  'Behavioural Science' : "rgba(1, 128, 101, ",
  'Entrepreneurship' : "rgba(1, 128, 101, ",
  'Purpose' : "rgba(81, 36, 107, "
};
let category_text = {
  'All' : "<p>THIS IS EVERYTHING I GOT!</p>",
  'Technology': "<p> From a young age, I have thought analytically which proved useful for being good at things like math or chess as a child. During secondary school, I learnt that I could apply this ability to the discipline of computer science where logic and problem solving dominate. I then went on to study Computer Science with Innovation at university.<br/><br/>At university, and through work experience, I learnt a range to work with a range and technologies to solve a range of problems. However, I started to realise that analytical thought and logic wasn't enough - more was needed. This is where the philosphies of human-centred design started to influence my work with technology.<br/><br/>Whether I'm conducting deep research that very few people will see or developing a project for lots of people, I consider the benefits of such work. There's a lot of interest in 'cutting-edge' technology, yet so much more can be done with the existing technology we have. Applying existing technology to new domains is what excites me and where a lot of opportunity lies.</p>",
  'Behavioural Science' : "<p>THIS IS BS</p>",
  'Entrepreneurship' : "<p>I've been interested in entrepreneurship since studying for my A-levels. Enterprise can solve a lot of problems sustainably, when it's done right.<br/><br/>When businesses are purpose-driven they look to have real positive impact on their employees, customers, the wider community and the planet. They use profit for greater impact, instead of increasing wealth inequality.<br/><br/>With entrepreneurship, I am developing my skills in leadership. In each of my roles, I look for opportunity to lead whilst learning from those that lead me.</p>",
  'Purpose' : "<p>PURPOSE</p>"
};

const config = {
  type: 'radar',
  data: {
    labels: [["What", "I LOVE"], ["What the", "WORLD NEEDS"], ["What I can be", "PAID FOR"], ["What I'm", "GOOD AT"]],
    datasets: [
      {
        label: 'Technology',
        data: [3,3,3,3],
        borderColor: "rgba(57, 182, 169, 1.0)",
        backgroundColor: "rgba(57, 182, 169, 0.5)",
      },
      {
        label: 'Behavioural Science',
        data: [4,3,3,3],
        borderColor: "rgba(27, 88, 115, 1.0)",
        backgroundColor: "rgba(27, 88, 115, 0.5)",
      },
      {
        label: 'Entrepreneurship',
        data: [4,3,2,2],
        borderColor: "rgba(1, 128, 101, 1.0)",
        backgroundColor: "rgba(1, 128, 101, 0.5)",
      },
      {
        label: 'Purpose',
        data: [4,5,2,4],
        borderColor: "rgba(81, 36, 107, 1.0)",
        backgroundColor: "rgba(81, 36, 107, 0.5)",
      }
    ]
  },
  options: {
    scales : {
      r : {
        suggestedMin : 1,
        suggestedMax : 5,
        pointLabels : {
          font : {
            size: 20,
          },
        },
        ticks : {
          display : false,
        },
      }
    },
    responsive: true,
    plugins: {
      legend: {
        display : false,
        labels: {
          font: {
            size: 20
          }
        }
      }
    },
  },
};

const update_topic_text = (selected_chart) => {
  let topic_text = document.getElementById("topic_text");
  topic_text.innerHTML = category_text[selected_chart];
}

const select_chart = (selected_chart) => {
  update_topic_text(selected_chart);

  portfolio_chart.data.datasets.forEach(dataset => {
    if (selected_chart == "All") {
      dataset.borderColor = category_colours[dataset.label] + "1.0)";
      dataset.backgroundColor = category_colours[dataset.label] + "0.5)";
    }else if (dataset.label == selected_chart) {
      dataset.borderColor = category_colours[dataset.label] + "1.0)";
      dataset.backgroundColor = category_colours[dataset.label] + "1.0)";
    } else {
      dataset.borderColor = category_colours[dataset.label] + "0.5)";
      dataset.backgroundColor = category_colours[dataset.label] + "0.0)";
    }
  });

  portfolio_chart.update();
}

// Change chart view
document.getElementById("all_heading").addEventListener("click", () => {select_chart("All")});
document.getElementById("tech_heading").addEventListener("click", () => {select_chart("Technology")});
document.getElementById("bs_heading").addEventListener("click", () => {select_chart("Behavioural Science")});
document.getElementById("entrepereneurship_heading").addEventListener("click", () => {select_chart("Entrepreneurship")});
document.getElementById("purpose_heading").addEventListener("click", () => {select_chart("Purpose")});

// Remove labels on mobile
const onMobile = () => {
  if (window.innerHeight < window.innerWidth) { 
    portfolio_chart.options.scales.r.pointLabels.font.size = 20;
    portfolio_chart.options.scales.r.pointLabels.display = true;
  } else {
    portfolio_chart.options.scales.r.pointLabels.font.size = 0;
    portfolio_chart.options.scales.r.pointLabels.display = false;
  }

  portfolio_chart.update();
}

window.addEventListener('resize', onMobile);


window.onload = () => {
  update_topic_text("All");
  portfolio_chart = new Chart(document.getElementById('hcd_chart'), config);
  onMobile();
}