var allQuestions = [
  {
    question: "Which one is not a colour?",
    options: ["valkoinen", "harmaa", "ruskea", "vaalean"],
    correct: 3
  },
  {
    question: "Find who's not a family member!",
    options: ["tytär", "setä", "ystävä", "serkku"],
    correct: 2
  },
  {
    question: 'How do you say "Germany" in Finnish?',
    options: ["Saksa", "Ranska", "Ruotsi", "Tanska"],
    correct: 0
  },
  {
    question: "Find the odd number!",
    options: [
      "kahdeksankymmentäneljä",
      "sataneljäkymmentä",
      "neljäkymmentäviisi",
      "neljätoista"
    ],
    correct: 2
  },
  {
    question: "Which one of these is not a verb?",
    options: ["tuntea", "orava", "mennä", "soittaa"],
    correct: 1
  },
  {
    question: 'Which sentence translates as "Feel better"?',
    options: ["Ole hyvä", "Hyvää iltaa", "Oikein hyvin", "Voi hyvin"],
    correct: 3
  },
  {
    question: 'Which verb fits into the sentence? "Minä en ___ venäjää."',
    options: ["etsi", "puhu", "lukee", "maksaa"],
    correct: 1
  },
  {
    question: "Which verb is in plural form?",
    options: ["ymmärrän", "rakastaa", "hyppäämme", "kirjoitat"],
    correct: 2
  },
  {
    question: 'How would you finish the sentence? "Saisinko kahvia ja ___."',
    options: ["kaksi pullaa", "kolme palaa", "kiitos paljon", "paljon onnea"],
    correct: 0
  },
  {
    question: "Think about vowel harmony now! Which suffix is incorrect?",
    options: ["Helsingissä", "kadullä", "työpaikasta", "päivällä"],
    correct: 1
  }
];

var currentQuestion = 0;
var score = 0;
renderQuestion(allQuestions[currentQuestion]);

function renderQuestion(oneQuestion) {
  $("#question").html(oneQuestion.question);
  $("#answer-0").html(oneQuestion.options[0]);
  $("#answer-1").html(oneQuestion.options[1]);
  $("#answer-2").html(oneQuestion.options[2]);
  $("#answer-3").html(oneQuestion.options[3]);
}

function handleAnswerClick(button, chosen) {
  var correct = allQuestions[currentQuestion].correct;
  if (correct === chosen) {
    score++;
  } else {
    button.addClass("wrong");
  }
  $(`#answer-${correct}`).addClass("correct");
}

$(".answer").on("click", function() {
  var index = Number($(this).attr("data-index"));
  handleAnswerClick($(`#answer-${index}`), index);
});

function handleNextClick() {
  // clear correct button
  $(".correct").removeClass("correct");
  $(".wrong").removeClass("wrong");
  // set current question to next one
  currentQuestion++;
  renderQuestion(allQuestions[currentQuestion]);
}

$("#next").click(handleNextClick);

//hide questions before Start
$("#quiz")
  .hide()
  .addClass("hide");

//hide Next button after Start
$("#next").hide(getNext);

//hide Start on click, show Quiz
function clickOnStart() {
  $("#start").click(function(event) {
    $("#start-page").hide();
    $("#quiz")
      .removeClass(".hide")
      .show();
  });
}

$(clickOnStart);

//hide Next before user clicks on answer, to prevent skipping
function clickNext() {
  $("#next").on("click", getNext);
}

function getNext() {
  $("#next").hide();
  $(".answers .button").click(function(event) {
    if (currentQuestion < allQuestions.length - 1) {
      $("#next").show();
    } else {
      $("#get-score").show();
    }
  });
}

$(clickNext);

//hide Submit and Retake Quiz until needed
$("#get-score").hide();
$("#retake").hide();
$("#results").hide();

$("#get-score").click(function(e) {
  $("#quiz").hide();
  $("#get-score").hide();
  $(".answer").hide();

  $("#retake")
    .removeClass(".hide")
    .show();
  $("#results")
    .show()
    .text("Your score is " + score + "/10");
});

//pagination
var page = 1;

function pageCount() {
  $("#pagination").text(page + "/10");
  $("#next").click(function(event) {
    page++;
    $("#pagination").text(page + "/10");
  });
}

$(pageCount);

//Allow only one option to be clicked

$(".answer").click(function() {
  $(".answer").attr("disabled", true);
});

$("#next").click(function() {
  $(".answer").attr("disabled", false);
});

//retake Quiz

function refreshPage() {
  location.reload();
}
