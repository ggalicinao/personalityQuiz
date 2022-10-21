/* Variables */

// Different Choices
var dracoScore = 0;
var lunaScore = 0;
var weasleyScore = 0;

// Number of questions completed
var questionCount = 0;

// DOM variables
var start = document.getElementById("start"); // Start button
start.addEventListener("click", startQuiz);

var result = document.getElementById("result"); // Displays result

var description = document.getElementById("resultDescription"); // Gives description of result

var restart = document.getElementById("restart"); // Restart Button
restart.addEventListener("click", restartQuiz);

var end = document.getElementById("end");

// Answer Choice Buttons
var q1a1 = document.getElementById("q1a1"); // Draco
var q1a2 = document.getElementById("q1a2"); // Weasley Twins
var q1a3 = document.getElementById("q1a3"); // Luna

var q2a1 = document.getElementById("q2a1"); // Weasley Twins
var q2a2 = document.getElementById("q2a2"); // Luna
var q2a3 = document.getElementById("q2a3"); // Draco

var q3a1 = document.getElementById("q3a1"); // Luna
var q3a2 = document.getElementById("q3a2"); // Weasley Twins
var q3a3 = document.getElementById("q3a3"); // Draco

// Pictures at the end
var dracoPic = document.getElementById("dracoPic");
var weasleyPic = document.getElementById("weasleyPic");
var lunaPic = document.getElementById("lunaPic");

// Event Listeners for Buttons to Answer Choices
q1a1.addEventListener("click", dracoMalfoy);
q1a2.addEventListener("click", weasleyTwins);
q1a3.addEventListener("click", lunaLovegood);

q2a1.addEventListener("click", weasleyTwins);
q2a2.addEventListener("click", lunaLovegood);
q2a3.addEventListener("click", dracoMalfoy);

q3a1.addEventListener("click", lunaLovegood);
q3a2.addEventListener("click", weasleyTwins);
q3a3.addEventListener("click", dracoMalfoy);

//  Displaying each question
document.getElementById("question1").style.display = "none";
document.getElementById("question2").style.display = "none";
document.getElementById("question3").style.display = "none";
end.style.display = "none";
restart.style.display = "none";


/* Functions */

// Start quiz
function startQuiz() {
  // Only display first question
  start.style.display = "none";
  document.getElementById("question1").style.display = "block";
  document.getElementById("question2").style.display = "none";
  document.getElementById("question3").style.display = "none";
  end.style.display = "none";
  restart.style.display = "block";
}

// Restart quiz
function restartQuiz() {
  // Different Choices
  dracoScore = 0;
  lunaScore = 0;
  weasleyScore = 0;

  // Number of questions completed
  questionCount = 0;

  // Only display first question again
  startQuiz();

  console.log("\nRestarting!\nquestionCount = " + questionCount + "\ndracoScore = " + dracoScore + "\nlunaScore = " + lunaScore + "\nweasleyScore " + weasleyScore);
}

// Hides all but the next question
function next() {
  if (questionCount == 1) {
    // One question completed, display second question
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "block";
    document.getElementById("question3").style.display = "none";
    end.style.display = "none";
  }
  if (questionCount == 2) {
    // Two questions completed, display third question
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "block";
    end.style.display = "none";
  }
  if (questionCount == 3) {
    // Three questions completed, display result
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "none";
    end.style.display = "block";
  }
}

// Update Draco Malfoy Score
function dracoMalfoy() {
  questionCount += 1;
  dracoScore += 1;
  next();

  console.log("questionCount = " + questionCount + "; dracoScore = " + dracoScore);
  
  if (questionCount == 3) {
    // Draco majority
    updateResult();
  }
}

// Update Luna Lovegood Score
function lunaLovegood() {
  questionCount += 1;
  lunaScore += 1;
  next();

  console.log("questionCount = " + questionCount + "; lunaScore = " + lunaScore);

  if (questionCount == 3) {
    // Luna majority
    updateResult();
  }
}

// Update Weasley Twins Score
function weasleyTwins() {
  questionCount += 1;
  weasleyScore += 1;
  next();

  console.log("questionCount = " + questionCount + "; weasleyScore = " + weasleyScore);

  if (questionCount == 3) {
    // Weasley majority
    updateResult();
  }
}

// Displays result and description at the very end of the quiz
function updateResult() {
  if (dracoScore >= 2) {
    result.innerHTML = "Your best friend at Hogwarts is Draco Malfoy!";
    description.innerHTML = "He loves being with you, which really says a lot (he doesn't like most people). That being said, he trusts you knowing things that he wouldn't trust most people with and would do anything for you. The both of you are also very ambitious and passionate about what you're interested in, whether it's sports or academics; you two can dominate the world together!";

    dracoPic.style.display = "block";
    weasleyPic.style.display = "none";
    lunaPic.style.display = "none";
  }
  else if (weasleyScore >= 2) {
    result.innerHTML = "Your best friends at Hogwarts are the Weasley twins!";
    description.innerHTML = "What an iconic trio. The three of you are legendary pranksters at Hogwarts. Not only do you have a sense of humor, but you also look out for other people and always try to get everyone to smile. You plan on managing 'Weasley Wizard Wheezes' after graduation.";

    dracoPic.style.display = "none";
    weasleyPic.style.display = "block";
    lunaPic.style.display = "none";
  }
  else if (lunaScore >= 3) {
    result.innerHTML = "Your best friend at Hogwarts is Luna Lovegood!";
    description.innerHTML = "You two have a lot of amazing and interesting conversations together and bring the creativity out of each other! You two are very unique and don't really care what other people think. You're also one to always try and see the good in a situation. And the best part about the both of you: you're constantly exploring and discovering new things!";

    dracoPic.style.display = "none";
    weasleyPic.style.display = "none";
    lunaPic.style.display = "block";
  }
  else {
    result.innerHTML = "Your best friends at Hogwarts are Draco Malfoy, Luna Lovegood, and the Weasley twins!";
    description.innerHTML = "You're funny, ambitious, and creative. You're an independent thinker who has lots of ideas, and they all admire you deeply for that.";

    dracoPic.style.display = "block";
    weasleyPic.style.display = "block";
    lunaPic.style.display = "block";
  }
}