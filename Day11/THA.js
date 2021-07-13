let quizList = [
  {
    quiz: "Q.1 What is the timecomplexity (Avg) for searching an element in balanced BST ?",
    optA: "A) N, where N is number of element in the BST",
    optB: "B) H, where H is height of the BST",
    optC: "C) N*logN, where N is number of element in the BST",
    optD: "D) logH, where H is height of the BST",
    ans: 1,
  },
  {
    quiz: "Q.2 Time complexity for stack to push a element in it ?",
    optA: "A) N, where N is number of element in the stack",
    optB: "B) H, where H is height of the stack",
    optC: "C) logN, where N is number of element in the stack___",
    optD: "D) O(1), constant time complexity.____",
    ans: 3,
  },
  {
    quiz: "Q.3 Time complexity to for a point query in vanilla segment tree ?",
    optA: "A) N, where N is number of leaf nodes_____________________",
    optB: "B) H, where H is height of the segment tree__",
    optC: "C) N*logN, where N is number of leaf nodes_____________________",
    optD: "D) logH, where H is height of the Segment tree",
    ans: 1,
  },
  {
    quiz: "Q.4 How much rating required to become 6 star coder at codechef ?",
    optA: "A) 2200_____________",
    optB: "B) 2100",
    optC: "C) 2300_____________________",
    optD: "D) 2000___",
    ans: 0,
  },
  {
    quiz: "Q.5 How much rating required to become 5 star coder at codechef ?",
    optA: "A) 2200_____________",
    optB: "B) 2100",
    optC: "C) 2300_____________________",
    optD: "D) 2000___",
    ans: 3,
  },
];

const total_quiz = 5;
var curr_quiz = 0;
var score = 0;
var Q = document.querySelector(".question");
var statement = document.querySelectorAll(".state");
var pre = document.querySelector("#pre");
var next = document.querySelector("#next");
var button = document.querySelectorAll(".bot");
var sc = document.querySelector("#score");
restart();

button.forEach((bot) => {
  bot.addEventListener("click", () => {
    if (bot.classList.contains("correct")) {
      bot.classList.add("right");
      score++;
    } else {
      bot.classList.add("wrong");
      score--;
    }
    sc.textContent = score;
    setTimeout(autoNext, 1000);
  });
});

pre.addEventListener("click", () => {
  reset();
  button[quizList[curr_quiz].ans].classList.remove("correct");
  curr_quiz = curr_quiz - 1 + total_quiz;
  curr_quiz %= total_quiz;
  Q.textContent = quizList[curr_quiz].quiz;
  statement[0].textContent = quizList[curr_quiz].optA;
  statement[1].textContent = quizList[curr_quiz].optB;
  statement[2].textContent = quizList[curr_quiz].optC;
  statement[3].textContent = quizList[curr_quiz].optD;
  button[quizList[curr_quiz].ans].classList.add("correct");
});

next.addEventListener("click", () => {
  reset();
  button[quizList[curr_quiz].ans].classList.remove("correct");
  curr_quiz++;
  curr_quiz %= total_quiz;
  Q.textContent = quizList[curr_quiz].quiz;
  statement[0].textContent = quizList[curr_quiz].optA;
  statement[1].textContent = quizList[curr_quiz].optB;
  statement[2].textContent = quizList[curr_quiz].optC;
  statement[3].textContent = quizList[curr_quiz].optD;
  button[quizList[curr_quiz].ans].classList.add("correct");
});

function autoNext() {
  reset();

  button[quizList[curr_quiz].ans].classList.remove("correct");
  curr_quiz++;
  curr_quiz %= total_quiz;
  Q.textContent = quizList[curr_quiz].quiz;
  statement[0].textContent = quizList[curr_quiz].optA;
  statement[1].textContent = quizList[curr_quiz].optB;
  statement[2].textContent = quizList[curr_quiz].optC;
  statement[3].textContent = quizList[curr_quiz].optD;
  button[quizList[curr_quiz].ans].classList.add("correct");
}

function reset() {
  button.forEach((bot) => {
    bot.classList.remove("right");
    bot.classList.remove("wrong");
  });
}

function restart() {
  Q.textContent = quizList[curr_quiz].quiz;
  statement[0].textContent = quizList[curr_quiz].optA;
  statement[1].textContent = quizList[curr_quiz].optB;
  statement[2].textContent = quizList[curr_quiz].optC;
  statement[3].textContent = quizList[curr_quiz].optD;
  button[quizList[curr_quiz].ans].classList.add("correct");
}
