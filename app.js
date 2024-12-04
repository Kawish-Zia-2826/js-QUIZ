const quiz = [
  {
    question: 'What is the capital of Pakistan?',
    options: ['Paris', 'London', 'Karachi', 'Madrid'],
    answer: 'Karachi'
  },
  {
    question: 'Who is the current Prime Minister of Pakistan?',
    options: ['Boris Johnson', 'Imran Khan', 'Theresa May', 'Nigel Farage'],
    answer: 'Imran Khan'
  }
];

let score = 0; 


for (const x in quiz) {
  $("#target").append(
    `<h2>${quiz[x].question}</h2>
     <input type="radio" name="quiz${x}" value="${quiz[x].options[0]}"> ${quiz[x].options[0]}<br>
     <input type="radio" name="quiz${x}" value="${quiz[x].options[1]}"> ${quiz[x].options[1]}<br>
     <input type="radio" name="quiz${x}" value="${quiz[x].options[2]}"> ${quiz[x].options[2]}<br>
     <input type="radio" name="quiz${x}" value="${quiz[x].options[3]}"> ${quiz[x].options[3]}<br><br>`
  );
}


$("#target").append('<button id="submitBtn">Submit</button>');
$("#submitBtn").click(function () {
  score = 0; 

  for (const x in quiz) {
 
    const selectedAnswer = $(`input[name="quiz${x}"]:checked`).val();


    if (selectedAnswer === quiz[x].answer) {
      score++; 
    }
  }

  
  alert(`Your score: ${score} out of ${quiz.length}`);
    
});
