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
  { question: 'What is the longest river in the world?', options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'], answer: 'Amazon' },
  { question: 'How many states are there in the United States?', options: ['50', '51', '52', '53'], answer: '50' },
  { question: 'Which country invented pizza?', options: ['France', 'Germany', 'Italy', 'USA'], answer: 'Italy' },
  { question: 'What is the chemical formula for table salt?', options: ['NaCl', 'KCl', 'H2O', 'CO2'], answer: 'NaCl' },
  { question: 'What is the capital of Italy?', options: ['Rome', 'Venice', 'Milan', 'Naples'], answer: 'Rome' },
  { question: 'Who is the famous scientist known for the theory of relativity?', options: ['Isaac Newton', 'Nikola Tesla', 'Albert Einstein', 'Galileo'], answer: 'Albert Einstein' },
  { question: 'Which planet is closest to the Sun?', options: ['Earth', 'Mars', 'Mercury', 'Venus'], answer: 'Mercury' },
  { question: 'What is the national sport of Japan?', options: ['Baseball', 'Soccer', 'Sumo', 'Judo'], answer: 'Sumo' },
  { question: 'What is the currency of the United Kingdom?', options: ['Dollar', 'Euro', 'Pound', 'Yen'], answer: 'Pound' },
  { question: 'How many sides does a hexagon have?', options: ['4', '5', '6', '7'], answer: '6' },
  { question: 'Which animal is known for being able to change color?', options: ['Chameleon', 'Elephant', 'Giraffe', 'Kangaroo'], answer: 'Chameleon' },
  { question: 'Which of these is a primary color?', options: ['Green', 'Yellow', 'Orange', 'Red'], answer: 'Red' },
  { question: 'How many planets are in our solar system?', options: ['7', '8', '9', '10'], answer: '8' },
  { question: 'What is the largest country in the world?', options: ['USA', 'China', 'Canada', 'Russia'], answer: 'Russia' },
  { question: 'What year did World War II end?', options: ['1945', '1918', '1939', '1950'], answer: '1945' },
  { question: 'What is the chemical symbol for gold?', options: ['Au', 'Ag', 'Pb', 'Fe'], answer: 'Au' },
  { question: 'What is the capital of Germany?', options: ['Berlin', 'Hamburg', 'Munich', 'Frankfurt'], answer: 'Berlin' },
  { question: 'Which bird is known for its ability to mimic sounds?', options: ['Parrot', 'Sparrow', 'Eagle', 'Penguin'], answer: 'Parrot' },
  { question: 'What is the boiling point of water in Fahrenheit?', options: ['100°F', '180°F', '212°F', '300°F'], answer: '212°F' },
  { question: 'Who is known as the "Father of Computers"?', options: ['Charles Babbage', 'Bill Gates', 'Steve Jobs', 'Alan Turing'], answer: 'Charles Babbage' },
  { question: 'What does the acronym "NASA" stand for?', options: ['National Aeronautics and Space Administration', 'National Air and Space Agency', 'National Air Science Association', 'None of the above'], answer: 'National Aeronautics and Space Administration' },
  { question: 'Which sea is the largest in the world?', options: ['Red Sea', 'Mediterranean Sea', 'Caspian Sea', 'Baltic Sea'], answer: 'Caspian Sea' },
  { question: 'What is the symbol for potassium in the periodic table?', options: ['K', 'P', 'Na', 'Li'], answer: 'K' },
  { question: 'Which continent is known as the "Dark Continent"?', options: ['Asia', 'Africa', 'Europe', 'Australia'], answer: 'Africa' },
  { question: 'How many teeth does an adult human typically have?', options: ['28', '30', '32', '34'], answer: '32' },
  { question: 'Which planet has the most moons?', options: ['Earth', 'Jupiter', 'Saturn', 'Mars'], answer: 'Saturn' },
  { question: 'What is the smallest country in the world?', options: ['Monaco', 'Vatican City', 'Nauru', 'San Marino'], answer: 'Vatican City' },
  { question: 'Who invented the lightbulb?', options: ['Nikola Tesla', 'Alexander Graham Bell', 'Thomas Edison', 'Benjamin Franklin'], answer: 'Thomas Edison' }
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
