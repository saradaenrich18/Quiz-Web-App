var currentQuoestion = 0;
var score = 0;
var totQuoestions = quoestion.length;
var f=0;

var container = document.getElementById('quizContainer');
var quoestionE1 = document.getElementById('quoestion');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var tq=document.getElementById('thank');

var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuoestion (quoestionIndex) {
	var q = quoestion[quoestionIndex];
	quoestionE1.textContent = (quoestionIndex + 1) + '.' + q.quoestion;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

function loadNextQuoestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		 alert('please selected Option');
		return;
	}
	var answer = selectedOption.value;
	if(quoestion[currentQuoestion].answer == answer){
		score += 10;
	}
	selectedOption.checked = false;         
	currentQuoestion++;
	if(currentQuoestion == totQuoestions - 1){
		nextButton.textContent = 'Finish';
	}
	if(currentQuoestion == totQuoestions){
		container.style.display ='none';
		resultCont.style.display = '';


		resultCont.textContent = 'your score: ' + score;
		
		f=1;
        return;
		}
		loadQuoestion(currentQuoestion);
	}

	loadQuoestion(currentQuoestion);



	document.getElementById('timer').innerHTML =
  01 + ":" + 00;
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0||f==1){
  	container.style.display ='none';
		resultCont.style.display = '';
		resultCont.textContent = 'your score: ' + score;
		f=1;
  }
  if(f==0){
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}
