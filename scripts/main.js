let total =0;
let tempQuestionArr = [];
let quizArr = [];
let answer, num, userPick;
let btnA = document.getElementById('btn1'), btnB = document.getElementById('btn2'),
btnC = document.getElementById('btn3'), btnD = document.getElementById('btn4')

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
//Change on screen html & css
function morph(Qstring, a1, a2, a3, a4) {
  document.getElementById('question').innerHTML = Qstring;
  document.getElementById('btn1').innerHTML = a1;
  document.getElementById('btn2').innerHTML = a2;
  document.getElementById('btn3').innerHTML = a3;
  document.getElementById('btn4').innerHTML = a4;
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


//checks for correct answers
function check(){
  if(userPick == answer){
    total += 1;
  }
  
  return;
}




//Number Sense
//Number Knowledge,

function numberOrder() {
  let nOString;
  num = getRandomInt(1, 10);
  tempQuestionArr.push(num + 1);
  answer = num +1;
  tempQuestionArr.push(getRandomInt(1, 10));
  tempQuestionArr.push(getRandomInt(1, 10));
  tempQuestionArr.push(getRandomInt(1, 10));
  clean(tempQuestionArr);
  shuffle(tempQuestionArr);
  //tempQuestionArray feeds possible answers
  let ans = tempQuestionArr[0];
  let ans2 = tempQuestionArr[1];
  let ans3 = tempQuestionArr[2];
  let ans4 = tempQuestionArr[3];
  tempQuestionArr = [];

  nOString = "What number comes" + ' ' + 'after' + ' ' + num;
  //  alert(nOString);
  //  alert(ans);
  morph(nOString, ans, ans2, ans3, ans4);
  check();
  return;
}
function numberOrder2(){
  let nOString2 = 'what number comes two numbers after' + ' ' + num;

  tempQuestionArr.push(num + 2);
  answer = num + 2;
  tempQuestionArr.push(getRandomInt(1, 10));
  tempQuestionArr.push(getRandomInt(1, 10));
  tempQuestionArr.push(getRandomInt(1, 10));
  clean(tempQuestionArr);
  shuffle(tempQuestionArr);
  //tempQuestionArray feeds possible answers
  let ans = tempQuestionArr[0];
  let ans2 = tempQuestionArr[1];
  let ans3 = tempQuestionArr[2];
  let ans4 = tempQuestionArr[3];
  tempQuestionArr = [];

  morph(nOString2, ans, ans2, ans3, ans4);
  check();
}

function formQuiz(){
  quizArr.push(numberOrder());
  quizArr.push(numberOrder2());
}
function runQuiz(){

}

formQuiz();
