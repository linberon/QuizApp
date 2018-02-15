
var allQuestions = [
{
  question: "Which one is not a colour?",
  options: ["valkoinen", "harmaa", "ruskea", "vaalean"],
  correct: 3
}, {
  question: "Find who's not a family member!",
  options: ["tytär", "setä", "ystävä", "serkku"],
  correct: 2 
}, {
  question: "How do you say \"Germany\" in Finnish?",
  options: ["Saksa", "Ranska", "Ruotsi", "Tanska"],
  correct: 0
}, {
  question: "Find the odd number!",
  options: ["kahdeksankymmentäneljä", "sataneljäkymmentä", "neljäkymmentäviisi", "neljätoista"],
  correct: 2
}, {
  question: "Which one of these is not a verb?",
  options: ["tuntea", "orava", "mennä", "soittaa"],
  correct: 1
}, {
  question: "Which sentence translates as \"Feel better\"?",
  options: ["Ole hyvä", "Hyvää iltaa", "Oikein hyvin", "Voi hyvin"],
  correct: 3
}, {
  question: "Which verb fits into the sentence? \"Minä en ___ venäjää.\"",
  options: ["etsi", "puhu", "lukee", "maksaa"],
  correct: 1
}, {
  question: "Which verb is in plural form?",
  options: ["ymmärrän", "rakastaa", "hyppäämme", "kirjoitat"],
  correct: 2
} , {
  question: "How would you finish the sentence? \"Saisinko kahvia ja ___.\"",
  options: ["kaksi pullaa", "kolme palaa", "kiitos paljon", "paljon onnea"],
  correct: 0
}, {
  question: "Think about vowel harmony now! Which suffix is incorrect?",
  options: ["Helsingissä", "kadullä", "työpaikasta", "päivällä"],
  correct: 1
}];

var currentQuestion = 0;

function renderQuestion(oneQuestion){
  $('#question').html(oneQuestion.question);
  $('#answerA').html(oneQuestion.options[0]);
  $('#answerB').html(oneQuestion.options[1]);
  $('#answerC').html(oneQuestion.options[2]);
  $('#answerD').html(oneQuestion.options[3]);
}

function answerIsCorrect(oneQuestion, chosen) {
   if (oneQuestion.correct == chosen){
    return true;
   }
   else {
    return false;
  }
}

console.log(answerIsCorrect(allQuestions[currentQuestion], 1));
console.log(answerIsCorrect(allQuestions[currentQuestion], 2));

renderQuestion(allQuestions[currentQuestion]);


function handleAnswerClick(button, chosen) {
  if (answerIsCorrect(allQuestions[currentQuestion], chosen)){
    button.addClass('correct');
  }
  else {
    button.addClass('wrong');
  }
}


$('#answerA').on('click',  function(){ handleAnswerClick($('#answerA'), 0) });
$('#answerB').on('click',  function(){ handleAnswerClick($('#answerB'), 1) });
$('#answerC').on('click',  function(){ handleAnswerClick($('#answerC'), 2) });
$('#answerD').on('click',  function(){ handleAnswerClick($('#answerD'), 3) });



function handleNextClick() {
  // clear correct button
  $('.correct').removeClass('correct');
  $('.wrong').removeClass('wrong');
  // set current question to next one
  currentQuestion++;
  renderQuestion(allQuestions[currentQuestion]);
}

$('#next').click(handleNextClick);

//hide questions before Start
$('#quiz').hide().addClass('hide');

//hide Next button after Start
$('#next').hide(getNext);

//hide Start on click, show Quiz
function clickOnStart(){
  $('#start').click(function(event){
      $('#start-page').hide();
      $('#quiz').removeClass('.hide').show(); 
}); 
}
  
$(clickOnStart);

//hide Next before user clicks on answer, to prevent skipping
function clickNext(){
  $('#next').on('click', getNext);
};

function getNext(){
  $('#next').hide();
  $('.answers .button').click(function(event){
      $('#next').show();
});                        
}

$(clickNext);


//pagination
var page = 1;

function pageCount(){
  $('#pagination').text(page + '/10');
  $('#next').click(function(event){
    page++;
    $('#pagination').text(page + '/10');
  });
}

$(pageCount);


//Allow only one option to be clicked

$('#answerA, #answerB, #answerC, #answerD').click(function(){
  $('#answerA, #answerB, #answerC, #answerD').attr('disabled', true);
});

$('#next').click(function(){
  $('#answerA, #answerB, #answerC, #answerD').attr('disabled', false);
});


//retake Quiz

function refreshPage() {
    location.reload();
}

//hide Submit and Retake Quiz until needed
$('#get-score').hide();
$('#retake').hide();


//need to define correct answer and last question 

$('#answerA').attr('data-id', 1);
$('#answerA').attr('data-id', question.correct);




//score NOT WORKING YET
/*var score = 0;

function calculateScore() {
  $('#results').text(score);

  if(){
  
   $('#answerA, #answerB, #answerC, #answerD').click(function(event){
     
      score += 1;
    
    $('#results').text(score);
  

    });
    //return("Your score is " + calculateScore() + "/10");  
    }
    else { 
      score += 0;
    }
  }

$(calculateScore);*/



//Show submit button after last question, remove Next
//NOT WORKING YET

/*
var lastQuestion = ;

function showSubmit(){

  if(allQuestions.length-1 == ){

    $('.answers').click(function(event){
      //$('#next .button').hide();
  $('#get-score .button').removeClass('hide').show(); });
  }
};

$(showSubmit);
*/


//need a function to show correct answer, when wrong clicked
