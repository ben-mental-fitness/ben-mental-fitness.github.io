"use strict";

let portfolio_chart;
let category_colours = {
  'All' : "rgba(0, 0, 0, ",
  'Technology': "rgba(57, 182, 169, ",
  'Behavioural Science' : "rgba(27, 88, 115, ",
  'Entrepreneurship' : "rgba(1, 128, 101, ",
  'Purpose' : "rgba(81, 36, 107, "
};
let category_text = {
  'All' : "<p>My portfolio isn't a list of achievements - it's an insight into me as a person, my skills & what drives me forward. Each section contributes to the wider picture of how I operate.<br/><br/>Click the heading to navigate through each topic.</p>",
  'Technology': "<p>I've always been an analytical person. When I was a child, I turnned this style of thinking to math & chess. As a teenager, my focus shifted towards computer science which I studied with innovation at university.<br/><br/>I've worked with a variety on technologies across different programming paradigms but my specialisms are cyber security & data visualisation.<br/><br/>Through experience, I've realised that analytical thought and logic isn't enough. This is where the philosphies of human-centred design started to influence my work with technology.</p>",
  'Behavioural Science' : "<p>I'm a people watcher (but not in the creepy way). I'm really interested in how we all think, feel & behave and how that can be influenced.<br/><br/>I've spent a lot of time trying different interventions with myself to help me form desired routines & then habits - now I am explorig how I can help others do the same.</p>",
  'Entrepreneurship' : "<p>I've been interested in entrepreneurship since studying for my A-levels. Enterprise can solve a lot of problems sustainably, when it's done right.<br/><br/>When businesses are purpose-driven they look to have real positive impact on their employees, customers, the wider community and the planet. They use profit for greater impact, instead of increasing wealth inequality.<br/><br/>With entrepreneurship, I am developing my skills in leadership. In each of my roles, I look for opportunity to lead whilst learning from those that lead me.</p>",
  'Purpose' : "<p>Intrinsic motivation & purpose is a massive part of my life. It affects my choices in business, in my personal life, my relationships & in setting myself challenges.<br/><br/>Business can be a force for good. Technology can help us personalise support for lots of people. And behavioural science can make that support effective.<br/><br/>Outside of mental fitness, I find purpose in nature & testing my limits (mostly through some form of hiking or climbing).</p>"
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

const update_container_outline = (selected_chart) => {
  let container = document.getElementById("portfolio_container");
  container.style.outlineColor = category_colours[selected_chart] + "1.0)";
}

const select_chart = (selected_chart) => {
  update_topic_text(selected_chart);
  update_container_outline(selected_chart);

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