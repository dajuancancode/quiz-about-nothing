var answer;
var question;
var response;
var quiz;
var score;
var correct;
var incorrect;
var elOutput;
var htmlMsg;


correct = "<ol>";
incorrect = "<ol>";

score = 0;

quiz = [{question: "How old is DaJuan", answer:"28"},
        {question: "Who is DaJuan's favorite cat", answer: "Paris"},
        {question: "What is DaJuan studying?", answer: "JavaScript"}
      ];

function print(message){
  elOutput = document.getElementById('output')
  elOutput.innerHTML = message
}

for (var i = 0; i < quiz.length; i++){
  question = quiz[i].question;
  answer = quiz[i].answer;
  response = prompt(question);
  let number = i+1
  if (response == answer){
    correct += "<li>" + number +") " + question +"</li>";
    score += 1;
  }
  else{
    incorrect += "<li>" + number +") " + question +"</li>";
  }
}

correct += "</ol>";
incorrect += "</ol>";

htmlMsg = "<h2>You guessed " + String(score) + " questions correctly</h2>";
htmlMsg += "<h2>You got these questions right</h2>";
htmlMsg += correct;

if (incorrect.length > 9){
  htmlMsg += "<h2>You got thesese questions wrong</h2>";
  htmlMsg += incorrect;
}

print(htmlMsg)
