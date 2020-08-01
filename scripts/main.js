let total = 0;
let tempQuestionArr = [];
let quizArr = [];
let answer, num, userChoice, iterator = 0;
let quizStart = false;
let progBar = 0;
let storyProblemSubArr = [];
let storyProblemAddArr = [];
let cat1, cat2, cat3;
let count1 = 0,
  count2 = 0,
  count3 = 0;
let score1 = 0,
  score2 = 0,
  score3 = 0;
let btnA = document.getElementById('btn1'),
  btnB = document.getElementById('btn2'),
  btnC = document.getElementById('btn3'),
  btnD = document.getElementById('btn4'),
  nxtBtn = document.getElementById('next-btn'),
  strtBtn = document.getElementById('start-btn'),
  gradeBtn = document.getElementById('grade-btn'),
  progBar1 = document.getElementById('myBar'),
  questionString = document.getElementById('question');
  let myChart = document.getElementById('myChart').getContext('2d');



gradeBtn.hidden = true;

//Buttons event listener
//btnA.addEventListener('click', check)
btnA.addEventListener('click', function copyAnswer() {
  if (btnA.innerHTML == '<img src="img/1.png">') {
    userChoice = 1;
  } else if (btnA.innerHTML == '<img src="img/2.png">') {
    userChoice = 2;
  } else if (btnA.innerHTML == '<img src="img/3.png">') {
    userChoice = 3;
  } else if (btnA.innerHTML == '<img src="img/4.png">') {
    userChoice = 4;
  } else if (btnA.innerHTML == '<img src="img/5.png">') {
    userChoice = 5;
  } else if (btnA.innerHTML == '<img src="img/6.png">') {
    userChoice = 6;
  } else if (btnA.innerHTML == '<img src="img/7.png">') {
    userChoice = 7;
  } else if (btnA.innerHTML == '<img src="img/8.png">') {
    userChoice = 8;
  } else if (btnA.innerHTML == '<img src="img/9.png">') {
    userChoice = 9;
  } else if (btnA.innerHTML == '<img src="img/10.png">') {
    userChoice = 10;
  } else if (btnA.innerHTML == '<img src="img/11.png">') {
    userChoice = 11;
  }
  console.log("On click:", userChoice);
});
//btnB.addEventListener('click', check)
btnB.addEventListener('click', function copyAnswer() {
  if (btnB.innerHTML == '<img src="img/1.png">') {
    userChoice = 1;
  } else if (btnB.innerHTML == '<img src="img/2.png">') {
    userChoice = 2;
  } else if (btnB.innerHTML == '<img src="img/3.png">') {
    userChoice = 3;
  } else if (btnB.innerHTML == '<img src="img/4.png">') {
    userChoice = 4;
  } else if (btnB.innerHTML == '<img src="img/5.png">') {
    userChoice = 5;
  } else if (btnB.innerHTML == '<img src="img/6.png">') {
    userChoice = 6;
  } else if (btnB.innerHTML == '<img src="img/7.png">') {
    userChoice = 7;
  } else if (btnB.innerHTML == '<img src="img/8.png">') {
    userChoice = 8;
  } else if (btnB.innerHTML == '<img src="img/9.png">') {
    userChoice = 9;
  } else if (btnB.innerHTML == '<img src="img/10.png">') {
    userChoice = 10;
  } else if (btnB.innerHTML == '<img src="img/11.png">') {
    userChoice = 11;
  }
  console.log("On click:", userChoice);
});
//btnC.addEventListener('click', check)
btnC.addEventListener('click', function copyAnswer() {
  if (btnA.innerHTML == '<img src="img/1.png">') {
    userChoice = 1;
  } else if (btnC.innerHTML == '<img src="img/2.png">') {
    userChoice = 2;
  } else if (btnC.innerHTML == '<img src="img/3.png">') {
    userChoice = 3;
  } else if (btnC.innerHTML == '<img src="img/4.png">') {
    userChoice = 4;
  } else if (btnC.innerHTML == '<img src="img/5.png">') {
    userChoice = 5;
  } else if (btnC.innerHTML == '<img src="img/6.png">') {
    userChoice = 6;
  } else if (btnC.innerHTML == '<img src="img/7.png">') {
    userChoice = 7;
  } else if (btnC.innerHTML == '<img src="img/8.png">') {
    userChoice = 8;
  } else if (btnC.innerHTML == '<img src="img/9.png">') {
    userChoice = 9;
  } else if (btnC.innerHTML == '<img src="img/10.png">') {
    userChoice = 10;
  } else if (btnC.innerHTML == '<img src="img/11.png">') {
    userChoice = 11;
  }
  console.log("On click:", userChoice);
});
//btnD.addEventListener('click', check)
btnD.addEventListener('click', function copyAnswer() {
  if (btnD.innerHTML == '<img src="img/1.png">') {
    userChoice = 1;
  } else if (btnD.innerHTML == '<img src="img/2.png">') {
    userChoice = 2;
  } else if (btnD.innerHTML == '<img src="img/3.png">') {
    userChoice = 3;
  } else if (btnD.innerHTML == '<img src="img/4.png">') {
    userChoice = 4;
  } else if (btnD.innerHTML == '<img src="img/5.png">') {
    userChoice = 5;
  } else if (btnD.innerHTML == '<img src="img/6.png">') {
    userChoice = 6;
  } else if (btnD.innerHTML == '<img src="img/7.png">') {
    userChoice = 7;
  } else if (btnD.innerHTML == '<img src="img/8.png">') {
    userChoice = 8;
  } else if (btnD.innerHTML == '<img src="img/9.png">') {
    userChoice = 9;
  } else if (btnD.innerHTML == '<img src="img/10.png">') {
    userChoice = 10;
  } else if (btnD.innerHTML == '<img src="img/11.png">') {
    userChoice = 11;
  }
  console.log("On click:", userChoice);
});

nxtBtn.addEventListener('click', next);
strtBtn.addEventListener('click', start);
gradeBtn.addEventListener('click', grade);

//Change on screen html & css
function morph(Qstring, a1, a2, a3, a4) {
  document.getElementById('question').innerHTML = Qstring;
  document.getElementById('btn1').innerHTML = a1;
  document.getElementById('btn2').innerHTML = a2;
  document.getElementById('btn3').innerHTML = a3;
  document.getElementById('btn4').innerHTML = a4;
}


function numImg(a, b, c, d) {
  let img = document.createElement("img");
  let numA = document.getElementById('btn1');
  let numB = document.getElementById('btn2');
  let numC = document.getElementById('btn3');
  let numD = document.getElementById('btn4');
  numA.innerHTML = '<img src= "img/' + a + '.png">';
  numB.innerHTML = '<img src= "img/' + b + '.png">';
  numC.innerHTML = '<img src= "img/' + c + '.png">';
  numD.innerHTML = '<img src= "img/' + d + '.png">';


}



function test() {
  alert('works');
}


// random number gen
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

//makes duplicate answers very unlikely to appear, better method needed
function clean(a) {
  let mem;
  a.sort((a, b) => a - b);
  for (let i = 1; i < a.length; i++) {
    mem = a[i - 1];
    if (mem == a[i]) {
      a[i] += getRandomInt(1, 2);
      if (mem == a[i + 1]) {
        a[i + 1] += getRandomInt(1, 2);
        if (mem == a[i + 2]) {
          a[i + 2] += getRandomInt(1, 2);

        }
      }
    }
  }
  return a;
}


//shuffles answer order by shuffling tempQuestiontempQuestionArray order
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
//checks for correct answers and qeues next question
function check() {
  nxtBtn.hidden = true;
  gradeBtn.hidden = false;
  btnA.hidden = true;
  btnB.hidden = true;
  btnC.hidden = true;
  btnD.hidden = true;
  questionString.hidden = true;


  for (let i = 0; i < quizArr.length; i++) {
    console.log(quizArr[i].Question);
    console.log("correct answer: ", quizArr[i].Answer);
    console.log("User pick:", quizArr[i].userPick);
    // if (quizArr[i].correct == true) {
    //   total += quizArr[i].Points;
    // }
  }

}

function startTest() {
  if (quizStart == false) {
    btnA.hidden = true;
    btnB.hidden = true;
    btnC.hidden = true;
    btnD.hidden = true;
    nxtBtn.hidden = true;
    questionString.hidden = true;
    progBar1.hidden = true;


  } else {
    btnA.hidden = false;
    btnB.hidden = false;
    btnC.hidden = false;
    btnD.hidden = false;
    nxtBtn.hidden = false;
    questionString.hidden = false;
    strtBtn.hidden = true;
    progBar1.hidden = false;
  }
}

function start() {
  quizStart = true;
  startTest();
  if (iterator < quizArr.length) {
    quizArr[iterator].userPick = userChoice
    if (quizArr[iterator].userPick == quizArr[iterator].Answer) {
      quizArr[iterator].correct = true;
    }
  }
  let iter = 100 / quizArr.length;
  let bar = document.getElementById("myBar");
  progBar = progBar + iter;
  bar.style.width = progBar + "%";
  morph(
    quizArr[iterator].Question,
    quizArr[iterator].A,
    quizArr[iterator].B,
    quizArr[iterator].C,
    quizArr[iterator].D
  )
  numImg(
    quizArr[iterator].A,
    quizArr[iterator].B,
    quizArr[iterator].C,
    quizArr[iterator].D
  )
  if (quizArr[iterator].Id == "NK03") {
    btnC.hidden = true;
    btnD.hidden = true;
  }
  for (let i = 0; i < storyProblemAddArr.length; i++) {
    console.log("Question: ", storyProblemAddArr[i].Question);
    console.log("Answer: ", storyProblemAddArr[i].Answer);
  }

}


function next() {
  btnD.hidden = false;
  btnC.hidden = false;
  btnA.hidden = false;
  btnB.hidden = false;
  if (iterator < quizArr.length) {
    quizArr[iterator].userPick = userChoice
    if (quizArr[iterator].userPick == quizArr[iterator].Answer) {
      quizArr[iterator].correct = true;
    }
  }
  let iter = 100 / quizArr.length;
  let bar = document.getElementById("myBar");
  progBar = progBar + iter;
  bar.style.width = progBar + "%";
  iterator += 1;
  if (iterator == quizArr.length) {
    check();
    return;
  }
  morph(
    quizArr[iterator].Question,
    quizArr[iterator].A,
    quizArr[iterator].B,
    quizArr[iterator].C,
    quizArr[iterator].D
  )
  numImg(
    quizArr[iterator].A,
    quizArr[iterator].B,
    quizArr[iterator].C,
    quizArr[iterator].D
  )


  if (quizArr[iterator].Id == "NK04") {
    btnD.hidden = true;
  }
  if (quizArr[iterator].Id == "NK03") {
    btnD.hidden = true;
    btnC.hidden = true;
  }


}

//Number Sense
//Number Knowledge,

function numberOrder() {
  //for (var member in quizObject) delete quizObject[member];
  let quizObject = {
    //question:
    //Answer:
    //A:
    //B:
    //C:
    //D:
    //category:
    //Id
    //points:
    //correct:
    //userPick
  }

  let addProp = (obj, propName, propValue) => {
    obj[propName] = propValue;
  }
  let nOString;
  let worth = 1;
  num = getRandomInt(1, 10);
  answer = num + 1;
  addProp(quizObject, "Answer", answer)
  //alert(quizObject.Answer);
  tempQuestionArr.push(answer);
  tempQuestionArr.push(getRandomInt(1, 10));
  tempQuestionArr.push(getRandomInt(1, 10));
  tempQuestionArr.push(getRandomInt(1, 10));
  clean(tempQuestionArr);
  shuffle(tempQuestionArr);
  //tempQuestionArray feeds possible answers
  addProp(quizObject, "A", tempQuestionArr[0]);
  addProp(quizObject, "B", tempQuestionArr[1]);
  addProp(quizObject, "C", tempQuestionArr[2]);
  addProp(quizObject, "D", tempQuestionArr[3]);
  tempQuestionArr = [];

  nOString = "What number comes" + ' ' + 'after' + ' ' + num;
  addProp(quizObject, "Question", nOString);
  console.log(nOString);
  addProp(quizObject, "Category", "Number Knowledge");
  addProp(quizObject, "Id", "NK01");
  addProp(quizObject, "Points", worth);
  addProp(quizObject, "correct", false);
  quizArr.push(quizObject);

  //alert(quizObject.Question);
  //  for (var member in quizObject) delete quizObject[member];
  //  alert(nOString);
  //  alert(ans);
  // morph(nOString, ans, ans2, ans3, ans4);
  // check();
}

function numberOrder2() {
  let quizObject = {
    //question:
    //Answer:
    //A:
    //B:
    //C:
    //D:
    //category:
    //subcategory
    //points:
    //correct:
    //userPick
  }

  let addProp = (obj, propName, propValue) => {
    obj[propName] = propValue;
  }
  let nOString = 'what number comes two numbers after' + ' ' + num;
  let worth = 1;
  addProp(quizObject, "Question", nOString);
  tempQuestionArr.push(num + 2);
  answer = num + 2;
  addProp(quizObject, "Answer", answer);
  tempQuestionArr.push(getRandomInt(1, 10));
  tempQuestionArr.push(getRandomInt(1, 10));
  tempQuestionArr.push(getRandomInt(1, 10));
  clean(tempQuestionArr);
  shuffle(tempQuestionArr);
  //tempQuestionArray feeds possible answers
  addProp(quizObject, "A", tempQuestionArr[0]);
  addProp(quizObject, "B", tempQuestionArr[1]);
  addProp(quizObject, "C", tempQuestionArr[2]);
  addProp(quizObject, "D", tempQuestionArr[3]);
  tempQuestionArr = [];
  addProp(quizObject, "Category", "Number Knowledge");
  addProp(quizObject, "Id", "NK02");
  addProp(quizObject, "Points", worth);
  addProp(quizObject, "correct", false);
  quizArr.push(quizObject);
  //for (var member in quizObject) delete quizObject[member];
  // check();
}


function smallerOrLarger() {
  let quizObject = {
    //question:
    //Answer:
    //A:
    //B:
    //C:
    //D:
  }

  let addProp = (obj, propName, propValue) => {
    obj[propName] = propValue;
  }
  let worth = 1;
  let bigOrSmall = getRandomInt(1, 3);
  num = getRandomInt(2, 10);
  tempQuestionArr.push(getRandomInt(num, 10));
  tempQuestionArr.push(getRandomInt(1, num));
  clean(tempQuestionArr);
  shuffle(tempQuestionArr);
  addProp(quizObject, "A", tempQuestionArr[0]);
  addProp(quizObject, "B", tempQuestionArr[1]);
  if (bigOrSmall == 1) {
    let nOString = 'which number is bigger?';
    addProp(quizObject, "Question", nOString);
    for (let i = 0; i < tempQuestionArr.length + 1; i++) {
      if (tempQuestionArr[i] > num) {
        answer = tempQuestionArr[i];
        addProp(quizObject, "Answer", answer);
      }
    }

  } else {
    nOString = 'which number is smaller?'
    addProp(quizObject, "Question", nOString);
    for (let i = 0; i < tempQuestionArr.length + 1; i++) {
      if (tempQuestionArr[i] < num) {
        answer = tempQuestionArr[i];
        addProp(quizObject, "Answer", answer);
      }
    }
  }
  tempQuestionArr = [];
  addProp(quizObject, "Category", "Number Knowledge");
  addProp(quizObject, "Id", "NK03");
  addProp(quizObject, "Points", worth);
  addProp(quizObject, "correct", false);
  quizArr.push(quizObject);
}

//Visual Array
function visualArray() {
  let quizObject = {
    //question:
    //Answer:
    //A:
    //B:
    //C:
    //D:
  }

  let addProp = (obj, propName, propValue) => {
    obj[propName] = propValue;
  }
  let worth = 1;
  num = getRandomInt(1, 10);
  tempQuestionArr.push(getRandomInt(1, 10));
  tempQuestionArr.push(getRandomInt(1, 10));
  tempQuestionArr.push(getRandomInt(1, 10));
  for (let i = 0; i < tempQuestionArr.length; i++) {
    while (num == tempQuestionArr[i]) {
      tempQuestionArr[i] = getRandomInt(1, 10);
    }
  }
  clean(tempQuestionArr);
  shuffle(tempQuestionArr);

  //for(let i = 0; i< )

  let closest = tempQuestionArr.reduce(function(prev, curr) {
    return (Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev);
  });
  answer = closest;

  let nOString = 'what number is closest to' + ' ' + num + '?';
  addProp(quizObject, "Question", nOString);
  addProp(quizObject, "A", tempQuestionArr[0]);
  addProp(quizObject, "B", tempQuestionArr[1]);
  addProp(quizObject, "C", tempQuestionArr[2]);
  addProp(quizObject, "Answer", answer);
  addProp(quizObject, "Category", "Number Knowledge");
  addProp(quizObject, "Id", "NK04");
  addProp(quizObject, "Points", worth);
  addProp(quizObject, "correct", false);
  tempQuestionArr = [];
  quizArr.push(quizObject);

}
// counting
function CountSequence() {
  let newTable = document.createElement('table');
  document.div.appendChild(newTable);
}

//Story Problems

function storyProblems() {
  let worth = 1;
  let quizObject = {
    //question:
    //Answer:
    //A:
    //B:
    //C:
    //D:
  }

  let quizObject2 = {},
    quizObject3 = {},
    quizObject4 = {},
    quizObject5 = {},
    quizObject6 = {};

  let addProp = (obj, propName, propValue) => {
    obj[propName] = propValue;
  }

  //sub q1

  tempQuestionArr.push(getRandomInt(1, 10));
  tempQuestionArr.push(getRandomInt(1, 10));
  tempQuestionArr.push(getRandomInt(1, 10));
  addProp(quizObject, "Question", "James has three marbles.  Then James gives twomarbles to Mason.  How many marbles does Jameshave left now?");
  answer = 1;
  addProp(quizObject, "Answer", answer)
  tempQuestionArr.push(answer);
  addProp(quizObject, "A", tempQuestionArr[0]);
  addProp(quizObject, "B", tempQuestionArr[1]);
  addProp(quizObject, "C", tempQuestionArr[2]);
  addProp(quizObject, "D", tempQuestionArr[3]);
  addProp(quizObject, "Category", "Story Problems");
  addProp(quizObject, "Id", "SPS01");
  addProp(quizObject, "Points", worth);
  addProp(quizObject, "correct", false);
  clean(tempQuestionArr);
  shuffle(tempQuestionArr);
  tempQuestionArr = [];
  storyProblemSubArr[0] = quizObject;

  // sub q2
  tempQuestionArr.push(getRandomInt(1, 10));
  tempQuestionArr.push(getRandomInt(1, 10));
  tempQuestionArr.push(getRandomInt(1, 10));
  addProp(quizObject2, "Question", "Five grapes are on the table.  Then Noah bumps into the table, and three grapes fall off.  How many grapes are left on the table now?");
  answer = 2;
  addProp(quizObject2, "Answer", answer)
  tempQuestionArr.push(answer);
  addProp(quizObject2, "A", tempQuestionArr[0]);
  addProp(quizObject2, "B", tempQuestionArr[1]);
  addProp(quizObject2, "C", tempQuestionArr[2]);
  addProp(quizObject2, "D", tempQuestionArr[3]);
  addProp(quizObject2, "Category", "Story Problems");
  addProp(quizObject2, "Id", "SPS02");
  addProp(quizObject2, "Points", worth);
  addProp(quizObject2, "correct", false);
  clean(tempQuestionArr);
  shuffle(tempQuestionArr);
  tempQuestionArr = [];
  storyProblemSubArr[1] = quizObject2;
  //sub q3
  tempQuestionArr.push(getRandomInt(1, 10));
  tempQuestionArr.push(getRandomInt(1, 10));
  tempQuestionArr.push(getRandomInt(1, 10));
  addProp(quizObject3, "Question", "William has zero fewer melons than Elijah. Elijah has two melons. How many melons does William have?");
  answer = 2;
  addProp(quizObject3, "Answer", answer)
  tempQuestionArr.push(answer);
  addProp(quizObject3, "A", tempQuestionArr[0]);
  addProp(quizObject3, "B", tempQuestionArr[1]);
  addProp(quizObject3, "C", tempQuestionArr[2]);
  addProp(quizObject3, "D", tempQuestionArr[3]);
  addProp(quizObject3, "Category", "Story Problems");
  addProp(quizObject3, "Id", "SPS03");
  addProp(quizObject3, "Points", worth);
  addProp(quizObject3, "correct", false);
  clean(tempQuestionArr);
  shuffle(tempQuestionArr);
  tempQuestionArr = [];
  storyProblemSubArr[2] = quizObject3;

  //add q1
  tempQuestionArr.push(getRandomInt(1, 10));
  tempQuestionArr.push(getRandomInt(1, 10));
  tempQuestionArr.push(getRandomInt(1, 10));
  addProp(quizObject4, "Question", "Noah has eight cherries and Elijah has two cherries. How many cherries do Noah and Elijah have together?");
  answer = 10;
  addProp(quizObject4, "Answer", answer)
  tempQuestionArr.push(answer);
  addProp(quizObject4, "A", tempQuestionArr[0]);
  addProp(quizObject4, "B", tempQuestionArr[1]);
  addProp(quizObject4, "C", tempQuestionArr[2]);
  addProp(quizObject4, "D", tempQuestionArr[3]);
  addProp(quizObject4, "Category", "Story Problems");
  addProp(quizObject4, "Id", "SPS01");
  addProp(quizObject4, "Points", worth);
  addProp(quizObject4, "correct", false);
  clean(tempQuestionArr);
  shuffle(tempQuestionArr);
  tempQuestionArr = [];
  storyProblemAddArr.push(quizObject4);

  //add q2
  tempQuestionArr.push(getRandomInt(1, 10));
  tempQuestionArr.push(getRandomInt(1, 10));
  tempQuestionArr.push(getRandomInt(1, 10));
  addProp(quizObject5, "Question", "Three red marbles and three green marbles are on the table. How many marbles are on the table?");
  answer = 6;
  addProp(quizObject5, "Answer", answer)
  tempQuestionArr.push(answer);
  addProp(quizObject5, "A", tempQuestionArr[0]);
  addProp(quizObject5, "B", tempQuestionArr[1]);
  addProp(quizObject5, "C", tempQuestionArr[2]);
  addProp(quizObject5, "D", tempQuestionArr[3]);
  addProp(quizObject5, "Category", "Story Problems");
  addProp(quizObject5, "Id", "SPA02");
  addProp(quizObject5, "Points", worth);
  addProp(quizObject5, "correct", false);
  clean(tempQuestionArr);
  shuffle(tempQuestionArr);
  tempQuestionArr = [];
  storyProblemAddArr.push(quizObject5);
  //add q3

  tempQuestionArr.push(getRandomInt(1, 10));
  tempQuestionArr.push(getRandomInt(1, 10));
  tempQuestionArr.push(getRandomInt(1, 10));
  addProp(quizObject6, "Question", "There are four small marshmallows and two big marshmallows.  How many marshmallows are there altogether?");
  answer = 6;
  addProp(quizObject6, "Answer", answer)
  tempQuestionArr.push(answer);
  addProp(quizObject6, "A", tempQuestionArr[0]);
  addProp(quizObject6, "B", tempQuestionArr[1]);
  addProp(quizObject6, "C", tempQuestionArr[2]);
  addProp(quizObject6, "D", tempQuestionArr[3]);
  addProp(quizObject6, "Category", "Story Problems");
  addProp(quizObject6, "Id", "SPA03");
  addProp(quizObject6, "Points", worth);
  addProp(quizObject6, "correct", false);
  clean(tempQuestionArr);
  shuffle(tempQuestionArr);
  tempQuestionArr = [];
  storyProblemAddArr.push(quizObject5);

  let addOrSub = getRandomInt(1, 3);
  let selector = getRandomInt(0, 2);
  if (addOrSub == 1) {
    quizArr.push(storyProblemAddArr[selector]);
  } else {
    quizArr.push(storyProblemSubArr[selector]);
  }

}

//Number Combinations

function NumberCombinations(){
  let worth = 1;
  let nOString;
  let quizObject = {
    //question:
    //Answer:
    //A:
    //B:
    //C:
    //D:
  }

  let quizObject2 = {},
    quizObject3 = {},
    quizObject4 = {},
    quizObject5 = {},
    quizObject6 = {};

  let addProp = (obj, propName, propValue) => {
    obj[propName] = propValue;
  }
  let num1 = getRandomInt(1, 6);
  let num2 = getRandomInt(1, 10);
  let addOrSub = getRandomInt(1,3);
  if(addOrSub == 1){
    nOString = 'How much is ' + num1 + ' and ' + num2 + '?';
    answer = num1 + num2;

  } else{
      if(num1 > num2){
        nOString = 'How much is ' +  num1 + ' take away ' + num2 + '?';
        answer = num1 - num2;
      } else{
        nOString = 'How much is ' + num2 + ' take away ' + num1 + '?';
        answer = num2 - num1;
      }

  }
  addProp(quizObject, "Question", nOString);
  addProp(quizObject, "Answer", answer);
  tempQuestionArr.push(answer);
  tempQuestionArr.push(getRandomInt(1, 10));
  tempQuestionArr.push(getRandomInt(1, 10));
  tempQuestionArr.push(getRandomInt(1, 10));
  clean(tempQuestionArr);
  shuffle(tempQuestionArr);
  addProp(quizObject, "A", tempQuestionArr[0]);
  addProp(quizObject, "B", tempQuestionArr[1]);
  addProp(quizObject, "C", tempQuestionArr[2]);
  addProp(quizObject, "D", tempQuestionArr[3]);
  tempQuestionArr = [];
  addProp(quizObject, "Category", " Number Combinations");
  addProp(quizObject, "Id", "NC01");
  addProp(quizObject, "Points", worth);
  addProp(quizObject, "correct", false);
  quizArr.push(quizObject);

}




function grade() {
  gradeBtn.hidden = true;
  progBar1.hidden = true;

  cat1 = quizArr[0].Category;

  for (let i = 0; i < quizArr.length; i++) {
    if (quizArr[i].Category == cat1) {
      count1 += 1;
      console.log(count1);
      if (quizArr[i].correct == true) {
        score1 += 1;
      }
    } else if (quizArr[i].Category != cat1 && cat2 == undefined) {
      cat2 = quizArr[i].Category;
      if (quizArr[i].Category == cat2) {
        count2 += 1;
        if (quizArr[i].correct == true) {
          score2 += 1;
        }
      }
    } else if (quizArr[i].Category != cat1 && quizArr[i].Category != cat2 && cat2 != undefined) {
      cat3 = quizArr[i].Category;
      if (quizArr[i].Category == cat3) {
        count3 += 1;
        if (quizArr[i].correct == true) {
          score3 += 1;
        }
      }
    }
  }
  console.log(cat1);
  console.log('Total: ', count2);
  console.log('score: ', score1);

  console.log(cat2);
  console.log('Total: ', count2);
  console.log('score: ', score2);

  console.log(cat3);
  console.log('Total: ', count3);
  console.log('score: ', score3);
  displayChart();
}

function displayChart() {
  let barChart = new Chart(myChart,{
    type:'bar',
    data:{
      labels:[cat1,cat2,cat3],
      datasets:[{
        label:'Score',
        data:[
          Math.floor(score1/count1*100),
          Math.floor(score2/count2*100),
          Math.floor(score3/count3*100),
        ],
        backgroundColor:[
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)"
        ],

      }]
    },
    options:{
      title:{
        display:true,
        text:'Math Sense',
        fontSize: 25
      },
      scales: {

        yAxes: [{
        ticks: {

               min: 0,
               max: 100,
               callback: function(value){return value+ "%"}
            },
            scaleLabel: {
               display: true,
               labelString: "Percentage"
            }
        }]
    }
    }
  });
}


function compileQuiz() {
  startTest();
  for (let i = 0; i < 2; i++) {
    numberOrder();
    numberOrder2();
    smallerOrLarger();
    visualArray();

  }

  for (let i = 0; i<4; i++){
    storyProblems();
    NumberCombinations();
  }

  //alert(quizArr.length);

}

compileQuiz();
