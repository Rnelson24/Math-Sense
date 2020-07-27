let total = 0;
let tempQuestionArr = [];
let quizArr = [];
let answer, num, userPick, iterator = 0;
let progBar = 0;
let btnA = document.getElementById('btn1'),
  btnB = document.getElementById('btn2'),
  btnC = document.getElementById('btn3'),
  btnD = document.getElementById('btn4'),
  nxtBtn = document.getElementById('next-btn');

//Buttons event listener
btnA.addEventListener('click', check)
btnA.addEventListener('click', function copyAnswer() {
  userPick = btnA.innerHTML;
});
btnB.addEventListener('click', check)
btnB.addEventListener('click', function copyAnswer() {
  userPick = btnB.innerHTML;

});
btnC.addEventListener('click', check)
btnC.addEventListener('click', function copyAnswer() {
  userPick = btnC.innerHTML;
});
btnD.addEventListener('click', check)
btnD.addEventListener('click', function copyAnswer() {
  userPick = btnD.innerHTML;
});

nxtBtn.addEventListener('click', next)

//Change on screen html & css
function morph(Qstring, a1, a2, a3, a4) {
  document.getElementById('question').innerHTML = Qstring;
  document.getElementById('btn1').innerHTML = a1;
  document.getElementById('btn2').innerHTML = a2;
  document.getElementById('btn3').innerHTML = a3;
  document.getElementById('btn4').innerHTML = a4;
}

function numImg (a,b,c,d){
  let img = document.createElement("img");
  let numA = document.getElementById('btn1');
  let numB = document.getElementById('btn2');
  let numC = document.getElementById('btn3');
  let numD = document.getElementById('btn4');
  numA.innerHTML = '<img src= "img/' + a +'.png">';
  numB.innerHTML = '<img src= "img/' + b +'.png">';
  numC.innerHTML = '<img src= "img/' + c +'.png">';
  numD.innerHTML = '<img src= "img/' + d +'.png">';


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

  }



function next() {
  let iter = 100/quizArr.length;
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
   numImg (
     quizArr[iterator].A,
     quizArr[iterator].B,
     quizArr[iterator].C,
     quizArr[iterator].D
   )
   if(quizArr[iterator].Category == "Number Knowledge3"){
     btnC.hidden = true;
     btnD.hidden = true;
   }else {
     btnC.hidden = false;
     btnD.hidden= false;
   }
   if(iterator == quizArr.length){
     check();
   }

  iterator += 1;
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
    //points:
    //correct:
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
  addProp(quizObject, "Points",worth );
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
  addProp(quizObject, "Points",worth );
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
  tempQuestionArr.push(getRandomInt(1, num +1));
  clean(tempQuestionArr);
  shuffle(tempQuestionArr);
  addProp(quizObject, "A", tempQuestionArr[0]);
  addProp(quizObject, "B", tempQuestionArr[1]);
  if (bigOrSmall == 1) {
    let nOString = 'which number is bigger?';
    addProp(quizObject, "Question", nOString);
    for (let i = 0; i < tempQuestionArr.length; i++) {
      if (tempQuestionArr[i] > num) {
        answer = tempQuestionArr[i];
        addProp(quizObject, "Answer", answer);
      }
    }

  } else {
    nOString = 'which number is smaller?'
    addProp(quizObject, "Question", nOString);
    for (let i = 0; i < tempQuestionArr.length; i++) {
      if (tempQuestionArr[i] < num) {
        answer = tempQuestionArr[i];
        addProp(quizObject, "Answer", answer);
      }
    }
  }
  tempQuestionArr = [];
  addProp(quizObject, "Category", "Number Knowledge3");
  addProp(quizObject, "Points",worth );
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
  tempQuestionArr.push(getRandomInt(1, 10));
  tempQuestionArr.push(getRandomInt(1, 10));
  tempQuestionArr.push(getRandomInt(1, 10));
  clean(tempQuestionArr);
  shuffle(tempQuestionArr);
  let i = getRandomInt(1, 4);
  num = tempQuestionArr[i];

  var closest = tempQuestionArr.reduce(function(prev, curr) {
    return (Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev);
  });
  answer = closet;

  let nOString = 'what number is closest to' + ' ' + num + '?';
    addProp(quizObject, "Question", nOString);
    addProp(quizObject, "A", tempQuestionArr[0]);
    addProp(quizObject, "B", tempQuestionArr[1]);
    addProp(quizObject, "Answer", answer);
    tempQuestionArr = [];
    quizArr.push(quizObject);

}
// counting
function CountSequence(){
  let newTable = document.createElement('table');
  document.div.appendChild(newTable);
}


function compileQuiz() {
  for (var i = 0; i < 4; i++) {
    numberOrder();
    numberOrder2();
    smallerOrLarger();
  }
  //alert(quizArr.length);
  for (let i = 0; i < quizArr.length; i++) {
    console.log(quizArr[i].Question);
    console.log(quizArr[i].Answer);
  }
}
compileQuiz();
