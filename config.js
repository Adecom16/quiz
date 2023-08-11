     
const  startBtn = document.querySelector(".start")
const infoBox = document.querySelector(".info-box")
const exitBtn = infoBox.querySelector(".buttons .quit")
const continueBtn = infoBox.querySelector(".buttons .cont")         
const quizBox = document.querySelector(".quiz-box")
const nextBtn = quizBox.querySelector(".next");            
const optionList = quizBox.querySelector(".option-list");    
const resultBox = document.querySelector(".result-box" )
const timeCount = quizBox.querySelector(".timer .sec")
const timeLine = quizBox.querySelector("header .timeline")
const timeOut = quizBox.querySelector(".timer .text")
const body = document.getElementsByTagName("body")[0];
   
       //start button click event
       startBtn.onclick = () => {
        infoBox.classList.add("activeInfo")
        }
  
       //exit button click event
       exitBtn.onclick = () => {
        infoBox.classList.remove("activeInfo")
        }
  
      //continue button click event
       continueBtn.onclick = () => {
        infoBox.classList.remove("activeInfo")
        quizBox.classList.add("activeQuiz");
        showQuestions(0);
        queCount(1);
        startTimer(11);
        startTimeLine(0);
        alert("Ready??")
        alert("Goodluck!!!");
        }
  
      let que_count = 0;
      let que_numb = 1;
      let counter;
      let counterLine;
      let timeValue = 10;
      let widthValue = 0;
      let userScore = 0;
      
      let tickIcon = '<div class = "icon tick"><i class = "fas fa-check"></i></div>';
      let crossIcon = '<div class = "icon wrong"><i class = "fas fa-times"></i></div>';

          nextBtn.onclick = () => {
          if(que_count < questions.length - 1){
              que_count++;
              que_numb++;
              showQuestions(que_count);
              queCount(que_numb);
              clearInterval(counter);
              clearInterval(counterLine);
              startTimer(timeValue);
              startTimeLine(widthValue);
              nextBtn.style.display = "none";
              body.classList.remove("right");
              body.classList.remove("wrong");
              timeLine.classList.remove("right");
              timeLine.classList.remove("wrong");
              
              }
    else{
       clearInterval(counter);
       clearInterval(counterLine);
       showResultBox();
       quizBox.classList.remove("activeQuiz")
       resultBox.classList.add("activeResult")
       timeOut.textContent = "Time left"
       
       }
       };

const replayBtn = resultBox.querySelector(".buttons .restart")  
replayBtn.onclick = () => { 
alert("Get ready")
quizBox.classList.add("activeQuiz");
resultBox.classList.remove("activeResult"); 
timeValue = 10;    
que_count = 0
que_numb = 1;
userScore = 0;
widthValue = 0;
showQuestions(que_count); 
queCount(que_numb); 
clearInterval(counter); 
clearInterval(counterLine); 
startTimer(timeValue); 
startTimeLine(widthValue); 
timeOut.textContent = "Time left"; 
nextBtn.classList.remove("show");
timeLine.classList.remove("right")
timeLine.classList.remove("wrong") 
quizBox.classList.remove("oops")
      }; 


const quitBtn = resultBox.querySelector(".buttons .exit")
quitBtn.onclick = () => {
window.location.reload( );
      }

      function showQuestions(index){
         const queText = document.querySelector(".question");
       
         let queTag = "<span>" +
         questions[index].number + 
         ". " +
         questions[index].question + 
         "</span>"
          
           let optionsTag =
           '<div class = "option">' +
           questions[index].options[0] + 
           '<span></span></div>' +
           '<div class = "option">' +
           questions[index].options[1] +
           '<span></span></div>' +
           '<div class = "option">' +
           questions[index].options[2] + 
           '<span></span></div>' +
           '<div class = "option">' +
           questions[index].options[3] +
           '<span></span></div>';
               
           queText.innerHTML = queTag;
           optionList.innerHTML = optionsTag;
  
       for (let i of questions) {

       i.options.sort(() => Math.random() - 0.5);
       }
       const option = optionList.querySelectorAll(".option")
       for(let x = 0; x < option.length ; x++){
       option[x].setAttribute("onclick", "optionSelected(this)")
       }
       };

       function startTimer(time){
         counter = setInterval(timer, 1000)
       function timer(){
         timeCount.textContent = time;
         time--;
         timeOut.textContent = "Time left" 
        if(time < 9){
         let addZero = timeCount.textContent
         timeCount.textContent = "0" + addZero;
        }
        if(time < 0){
          clearInterval(counter)
          timeCount.textContent = "00";
          timeOut.textContent = "Time Up" 

   let correctAns = questions[que_count].answer;
   let allOptions = optionList.children.length;
   
for(let x = 0; x < allOptions; x++){
if (optionList.children[x].textContent == correctAns){
optionList.children[x].setAttribute("class", "option correct");             optionList.children[x].insertAdjacentHTML("beforeend",tickIcon);
    }
    }
   for(let x = 0; x < allOptions; x++){
      optionList.children[x].classList.add("disabled");
      }   
nextBtn.style.display = "block";
      };   
      };
      };   

     function startTimeLine(time){
       counterLine = setInterval(timer, 30.5)
     function timer(){
       time += 1;  
       timeLine.style.width = time + "px"
     if(time > 350){
       clearInterval(counterLine)
     };
     };
     };      

    function showResultBox(){
      infoBox.classList.remove("activeQuiz")
      quizBox.classList.remove("activeQuiz")
      resultBox.classList.add("activeResult")
      body.classList.remove("right")
      body.classList.remove("wrong");
    const scoreText = resultBox.querySelector(".score-text")
    if(userScore == questions.length){
         let scoreTag = '<span>🥳👌Perfect!! you got<p>'
         +  userScore +
         '</p>out of<p>' 
         + questions.length +
         '</p>questions</span>'
         scoreText.innerHTML = scoreTag;
      }
      else  if(userScore > 6 ){
         let scoreTag = '<span>💫Congrats! you got<p>'
         +  userScore +
         '</p>out of<p>' 
         + questions.length +
         '</p>questions</span>'
         scoreText.innerHTML = scoreTag;
      }
      else if(userScore > 3){
         let scoreTag = '<span>👍Nice, you got<p>'
         +  userScore +
         '</p>out of<p>' 
         + questions.length +
         '</p>questions</span>'
         scoreText.innerHTML = scoreTag;
      }
      else{
         let scoreTag = '<span>😟Sadly, you only got<p>'
         +  userScore +
         '</p>out of<p>' 
         + questions.length +
         '</p>questions</span>'
         scoreText.innerHTML = scoreTag;
       }
       };

       function queCount(index){ 
       const bottomQueCount = quizBox.querySelector(".total-questions");
       
          let totalQuestionsCount =
          '<span><p>' +
          index +
          '</p>of<p>'  +
          questions.length +
          '</p>Questions</span>';
       
          bottomQueCount.innerHTML = totalQuestionsCount      
       };

       function optionSelected(answer) {
          clearInterval(counter);
          clearInterval(counterLine)
          let userAns = answer.textContent;
          let correctAns = questions[que_count].answer;
          let allOptions = optionList.children.length;
          if (userAns == correctAns){
          userScore += 1
          answer.classList.add("correct")
          answer.insertAdjacentHTML("beforeend", tickIcon)
          body.classList.add("right")
          timeLine.classList.add("right")
          }
          else{
          var myQuizBox = false;
          if (myQuizBox) clearTimeout(myquizBox);
          myQuizBox = setTimeout(function() {quizBox.style.animation = '';}, 500);
          answer.classList.add("incorrect");
          answer.insertAdjacentHTML("beforeend", crossIcon);
          quizBox.style.animation = "shake 0.25s 2";
          body.classList.add("wrong");   
          timeLine.classList.add("wrong")      
          window.navigator.vibrate([ 500]);
for(let x = 0; x < allOptions; x++){
if (optionList.children[x].textContent == correctAns){   
optionList.children[x].setAttribute("class", "option correct");
optionList.children[x].insertAdjacentHTML("beforeend",tickIcon);
}
}
};               

for(let x = 0; x < allOptions; x++){
optionList.children[x].classList.add("disabled");
};   
nextBtn.style.display = "block";
       };   
    
