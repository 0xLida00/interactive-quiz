let questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: "Paris"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: ["Harper Lee", "J.K. Rowling", "Mark Twain", "Jane Austen"],
        correct: "Harper Lee"
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: ["Earth", "Jupiter", "Saturn", "Mars"],
        correct: "Jupiter"
    },
    {
        question: "What is the capital of Spain?",
        answers: ["Budapest", "Madrid", "Paris", "Lisbon"],
        correct: "Madrid"
    },
    {
        question: "Who wrote 'Pride and Prejudice'?",
        answers: ["Victor Hugo", "J.K. Rowling", "Jane Austen", "Mark Twain"],
        correct: "Jane Austen"
    },
    {
        question: "What is the smallest planet in our solar system?",
        answers: ["Earth", "Saturn", "Mercury", "Mars"],
        correct: "Mercury"
    },
    {
        question: "What is the capital of Portugal?",
        answers: ["Cairo", "Madrid", "Dakar", "Lisbon"],
        correct: "Lisbon"
    },
    {
        question: "Who wrote 'The Adventures of Tom Sawyer'?",
        answers: ["Charles Dickens", "Franz Kafka", "Mark Twain", "George Orwell"],
        correct: "Mark Twain"
    },
    {
        question: "What is the capital of Germany?",
        answers: ["Berlin", "Bratislava", "Vienna", "Prague"],
        correct: "Berlin"
    },
    {
        question: "Who wrote 'Harry Potter'?",
        answers: ["Leo Tolstoy", "J.K. Rowling", "James Joyce", "William Shakespeare"],
        correct: "J.K. Rowling"
    },

    {
        question: "What is the capital of Italy?",
        answers: ["Rome", "Athens", "Copenhagen", "Bern"],
        correct: "Rome"
    },
    {
        question: "Who wrote 'The Great Gatsby'?",
        answers: ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "William Faulkner"],
        correct: "F. Scott Fitzgerald"
    },
    {
        question: "What is the capital of Greece?",
        answers: ["Athens", "Budapest", "Sofia", "Warsaw"],
        correct: "Athens"
    },
    {
        question: "What is the chemical symbol for Hydrogen?",
        answers: ["H", "He", "Hy", "Ha"],
        correct: "H"
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correct: "Leonardo da Vinci"
    },
    {
        question: "What is the capital of Australia?",
        answers: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correct: "Canberra"
    },
    {
        question: "Who wrote '1984'?",
        answers: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "John Steinbeck"],
        correct: "George Orwell"
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: "Pacific Ocean"
    },
    {
        question: "Who directed 'The Godfather'?",
        answers: ["Martin Scorsese", "Francis Ford Coppola", "Steven Spielberg", "Alfred Hitchcock"],
        correct: "Francis Ford Coppola"
    },
    {
        question: "What is the capital of Canada?",
        answers: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        correct: "Ottawa"
    },
    {
        question: "Who wrote 'The Catcher in the Rye'?",
        answers: ["J.D. Salinger", "Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck"],
        correct: "J.D. Salinger"
    },
    {
        question: "What is the smallest continent by land area?",
        answers: ["Africa", "Australia", "Antarctica", "Europe"],
        correct: "Australia"
    },
    {
        question: "Who directed 'Pulp Fiction'?",
        answers: ["Quentin Tarantino", "Steven Spielberg", "Martin Scorsese", "Stanley Kubrick"],
        correct: "Quentin Tarantino"
    },
    {
        question: "What is the capital of Japan?",
        answers: ["Osaka", "Kyoto", "Tokyo", "Hiroshima"],
        correct: "Tokyo"
    },
    {
        question: "Who wrote 'Moby-Dick'?",
        answers: ["Herman Melville", "Ernest Hemingway", "Mark Twain", "F. Scott Fitzgerald"],
        correct: "Herman Melville"
    },
    {
        question: "What is the longest river in the world?",
        answers: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        correct: "Nile River"
    },
    {
        question: "Who directed 'The Shining'?",
        answers: ["Stanley Kubrick", "Alfred Hitchcock", "Martin Scorsese", "Steven Spielberg"],
        correct: "Stanley Kubrick"
    },
    {
        question: "What is the capital of Brazil?",
        answers: ["Rio de Janeiro", "Sao Paulo", "Brasilia", "Salvador"],
        correct: "Brasilia"
    },
    {
        question: "Who wrote 'War and Peace'?",
        answers: ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Vladimir Nabokov"],
        correct: "Leo Tolstoy"
    },
    {
        question: "What is the largest country by land area?",
        answers: ["China", "Canada", "United States", "Russia"],
        correct: "Russia"
    },
    {
        question: "Who directed 'E.T. the Extra-Terrestrial'?",
        answers: ["Steven Spielberg", "George Lucas", "James Cameron", "Tim Burton"],
        correct: "Steven Spielberg"
    },
    {
        question: "What is the capital of India?",
        answers: ["Mumbai", "Delhi", "Bangalore", "Chennai"],
        correct: "Delhi"
    },
    {
        question: "Who wrote 'The Old Man and the Sea'?",
        answers: ["Ernest Hemingway", "John Steinbeck", "F. Scott Fitzgerald", "Mark Twain"],
        correct: "Ernest Hemingway"
    },
    {
        question: "What is the highest mountain in the world?",
        answers: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
        correct: "Mount Everest"
    },
    {
        question: "Who directed 'Star Wars: A New Hope'?",
        answers: ["George Lucas", "Steven Spielberg", "James Cameron", "J.J. Abrams"],
        correct: "George Lucas"
    }
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let selectedQuestions = shuffle(questions).slice(0, 25);

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30; // Time limit for each question in seconds
let timer = null;

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
});

function startTimer() {
    timeLeft = 30;
    document.getElementById('time').textContent = timeLeft;
    timer = setInterval(function() {
        timeLeft--;
        document.getElementById('time').textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function loadQuestion() {
    stopTimer();
    startTimer();
    
    const questionData = selectedQuestions[currentQuestionIndex];

    document.getElementById('question').textContent = `${currentQuestionIndex + 1}. ${questionData.question}`;
    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach((btn, index) => {
        btn.textContent = questionData.answers[index];
        btn.disabled = false;
        btn.style.backgroundColor = '#007bff';
        btn.onclick = () => checkAnswer(questionData.answers[index], btn);
    });
    document.getElementById(`question-number`).textContent = `Question ${currentQuestionIndex + 1} of ${selectedQuestions.length}`;
}

function checkAnswer(selectedAnswer, btn) {
    const questionData = selectedQuestions[currentQuestionIndex];
    if (selectedAnswer === questionData.correct) {
        btn.style.backgroundColor = '#28a745';
        score++;
    } else {
        btn.style.backgroundColor = '#dc3545';
    }
    document.getElementById('score').textContent = score;
    disableButtons();
    stopTimer();
}

function disableButtons() {
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.disabled = true;
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    stopTimer();
    const quizContainer = document.querySelector('.quiz-container');
    quizContainer.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Thank you for taking the quiz! And we hope you enjoyed it. Feel free to try again as many times as you want.</p>
        <h2>Your score: ${score} out of ${selectedQuestions.length}</h2>
        <button onclick="location.reload()">Restart Quiz</button>
        <form id="feedback-form">
            <h3>Submit a Feedback</h3>
            <textarea id="feedback" rows="4" cols="50" placeholder="Enter your feedback here..."></textarea><br>
            <div class="form-buttons">
                <button type="submit">Submit Feedback</button>
                <a href="index.html" class="home-link">Home</a>
            </div>
        </form>
    `;
    document.getElementById('feedback-form').addEventListener('submit', submitFeedback);
}

function submitFeedback(event) {
    event.preventDefault();
    const feedback = document.getElementById('feedback').value;
    if (feedback) {
        alert("Thank you for your feedback!");
        document.getElementById('feedback').value = "";
    } else {
        alert("Please enter your feedback before submitting.");
    }
}