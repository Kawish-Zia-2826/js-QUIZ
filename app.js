const quiz = [
  { question: 'What is the capital of Pakistan?', options: ['Paris', 'London', 'Karachi', 'Madrid'], answer: 'Karachi' },
  { question: 'Who is the current Prime Minister of Pakistan?', options: ['Boris Johnson', 'Imran Khan', 'Theresa May', 'Nigel Farage'], answer: 'Imran Khan' },
  { question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], answer: '4' },
  { question: 'What color is the sky?', options: ['Blue', 'Green', 'Yellow', 'Red'], answer: 'Blue' },
  { question: 'Who wrote "Romeo and Juliet"?', options: ['Shakespeare', 'Dickens', 'Hemingway', 'Austen'], answer: 'Shakespeare' },
  { question: 'What is the largest planet in our solar system?', options: ['Earth', 'Mars', 'Jupiter', 'Saturn'], answer: 'Jupiter' },
  { question: 'Which animal is known as the king of the jungle?', options: ['Lion', 'Tiger', 'Elephant', 'Giraffe'], answer: 'Lion' },
  { question: 'What is the boiling point of water?', options: ['90°C', '100°C', '110°C', '120°C'], answer: '100°C' },
  { question: 'What is the capital of France?', options: ['Berlin', 'Paris', 'Madrid', 'London'], answer: 'Paris' },
  { question: 'What is the tallest mountain in the world?', options: ['K2', 'Mount Everest', 'Kangchenjunga', 'Makalu'], answer: 'Mount Everest' },
  { question: 'What is the primary language spoken in Spain?', options: ['French', 'Spanish', 'German', 'Italian'], answer: 'Spanish' },
  { question: 'What is 5 + 5?', options: ['8', '9', '10', '11'], answer: '10' },
  { question: 'Which country is the Eiffel Tower located in?', options: ['France', 'Italy', 'Germany', 'Spain'], answer: 'France' },
  { question: 'Which of these is not a fruit?', options: ['Apple', 'Carrot', 'Banana', 'Orange'], answer: 'Carrot' },
  { question: 'How many continents are there?', options: ['5', '6', '7', '8'], answer: '7' },
  { question: 'Who painted the Mona Lisa?', options: ['Van Gogh', 'Da Vinci', 'Picasso', 'Rembrandt'], answer: 'Da Vinci' },
  { question: 'What is the capital of Japan?', options: ['Seoul', 'Beijing', 'Tokyo', 'Kyoto'], answer: 'Tokyo' },
  { question: 'Which element is represented by the symbol "O"?', options: ['Oxygen', 'Osmium', 'Ozone', 'Oxycodone'], answer: 'Oxygen' },
  { question: 'How many hours are in a day?', options: ['12', '18', '24', '36'], answer: '24' },
  { question: 'What is the main ingredient in guacamole?', options: ['Tomato', 'Onion', 'Avocado', 'Pepper'], answer: 'Avocado' },
  { question: 'Which planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Venus', 'Saturn'], answer: 'Mars' },
  { question: 'What is the chemical symbol for water?', options: ['H2O', 'CO2', 'O2', 'H2'], answer: 'H2O' },
  { question: 'What does HTML stand for?', options: ['HyperText Markup Language', 'HighText Markup Language', 'Hyperlink Text Markup Language', 'None of the above'], answer: 'HyperText Markup Language' },
  { question: 'Which country is famous for the Great Wall?', options: ['China', 'India', 'Egypt', 'Russia'], answer: 'China' },
  { question: 'What is the square root of 9?', options: ['1', '3', '5', '9'], answer: '3' },
  { question: 'Who invented the telephone?', options: ['Nikola Tesla', 'Thomas Edison', 'Alexander Graham Bell', 'Albert Einstein'], answer: 'Alexander Graham Bell' },
  { question: 'What is the hardest natural substance on Earth?', options: ['Gold', 'Diamond', 'Iron', 'Platinum'], answer: 'Diamond' },
  { question: 'Which is the largest ocean on Earth?', options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'], answer: 'Pacific Ocean' },
  { question: 'Who is the author of "Harry Potter"?', options: ['J.K. Rowling', 'J.R.R. Tolkien', 'George R.R. Martin', 'C.S. Lewis'], answer: 'J.K. Rowling' },

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
