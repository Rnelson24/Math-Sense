let total =0;
let tempQuestionArr = [];
let quizArr = [];
let answer, num, userPick, iterator= 0;
let btnA = document.getElementById('btn1'), btnB = document.getElementById('btn2'),
btnC = document.getElementById('btn3'), btnD = document.getElementById('btn4'),
nxtBtn = document.getElementById('next-btn');

//Buttons event listener
btnA.addEventListener('click',check)
btnA.addEventListener('click', function copyAnswer(){
  userPick = btnA.innerHTML;
});
btnB.addEventListener('click',check)
btnB.addEventListener('click', function copyAnswer(){
  userPick = btnB.innerHTML;

});
btnC.addEventListener('click',check)
btnC.addEventListener('click', function copyAnswer(){
  userPick = btnC.innerHTML;
});
btnD.addEventListener('click',check)
btnD.addEventListener('click', function copyAnswer(){
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

function test(){
  alert('works');
}


// random number gen
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

//makes duplicate answers very unlikely to appear, better method needed
function clean(a){
  let mem;
  a.sort((a,b)=>a-b);
  for(let i = 1; i<a.length; i++){
    mem = a[i-1];
    if (mem == a[i]){
      a[i] += getRandomInt(1,2);
      if (mem == a[i+1]){
        a[i+1] += getRandomInt(1,2);
        if (mem == a[i+2]){
          a[i+2] += getRandomInt(1,2);

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
function check(){
  if(userPick == answer){
    total += 1;
  }

  return;
}

function next(){
  morph(quizArr[iterator].Question,quizArr[iterator].A,quizArr[iterator].B,quizArr[iterator].C,quizArr[iterator].D)
  iterator +=1;
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
  }

  let addProp = (obj, propName, propValue) => {
    obj[propName] = propValue;
  }
  let nOString;
  num = getRandomInt(1, 10);
  answer = num+1;
  addProp(quizObject, "Answer",answer)
  //alert(quizObject.Answer);
  tempQuestionArr.push(answer);
  tempQuestionArr.push(getRandomInt(1, 10));
  tempQuestionArr.push(getRandomInt(1, 10));
  tempQuestionArr.push(getRandomInt(1, 10));
  clean(tempQuestionArr);
  shuffle(tempQuestionArr);
  //tempQuestionArray feeds possible answers
  addProp(quizObject, "A",tempQuestionArr[0]);
  addProp(quizObject, "B",tempQuestionArr[1]);
  addProp(quizObject, "C",tempQuestionArr[2]);
  addProp(quizObject, "D",tempQuestionArr[3]);
  tempQuestionArr = [];

  nOString = "What number comes" + ' ' + 'after' + ' ' + num;
  addProp(quizObject,"Question", nOString);
  console.log(nOString);
  quizArr.push(quizObject);
  //alert(quizObject.Question);
//  for (var member in quizObject) delete quizObject[member];
  //  alert(nOString);
  //  alert(ans);
  // morph(nOString, ans, ans2, ans3, ans4);
  // check();
}
function numberOrder2(){
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
  addProp(quizObject,"Question", nOString);
  tempQuestionArr.push(num + 2);
  answer = num + 2;
  addProp(quizObject, "Answer",answer)
  tempQuestionArr.push(getRandomInt(1, 10));
  tempQuestionArr.push(getRandomInt(1, 10));
  tempQuestionArr.push(getRandomInt(1, 10));
  clean(tempQuestionArr);
  shuffle(tempQuestionArr);
  //tempQuestionArray feeds possible answers
  addProp(quizObject, "A",tempQuestionArr[0]);
  addProp(quizObject, "B",tempQuestionArr[1]);
  addProp(quizObject, "C",tempQuestionArr[2]);
  addProp(quizObject, "D",tempQuestionArr[3]);
  tempQuestionArr = [];
  quizArr.push(quizObject);
  //for (var member in quizObject) delete quizObject[member];
  // check();
}


// function smallerOrLarger(){
// let quizObject = {
//   //question:
//   //Answer:
//   //A:
//   //B:
//   //C:
//   //D:
// }
//
// let addProp = (obj, propName, propValue) => {
//   obj[propName] = propValue;
// }
//   let bigOrSmall = getRandomInt(1,2);
//   num = getRandomInt(1, 10);
//   tempQuestionArr.push(getRandomInt(num, 10));
//   tempQuestionArr.push(getRandomInt(1, num));
//   clean(tempQuestionArr);
//   shuffle(tempQuestionArr);
//   if (bigOrSmall == 1){
//     let nOString = 'which number is bigger?';
//     for(let i = 0; i< tempQuestionArr.length; i++){
//       if(tempQuestionArr[i]>num){
//         answer = tempQuestionArr[i];
//       }
//     }
//
//   }else{
//     nOString = 'which number is smaller?'
//     for(let i = 0; i< tempQuestionArr.length; i++){
//       if(tempQuestionArr[i]<num){
//         answer = tempQuestionArr[i];
//   }
// }

//Visual Arrays function needs to be implemented

function compileQuiz(){
  for(var i = 0; i<4; i++){
    numberOrder2();
    numberOrder();
  }
  //alert(quizArr.length);
  for(let i = 0; i<quizArr.length; i++){
    console.log(quizArr[i].Question);
    console.log(quizArr[i].A);
  }
}
compileQuiz();
