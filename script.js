let questionField=document.getElementById("questionField");
let answersField=document.getElementById("answersField");
let currentQuestionCount=1;
let correctAnswersCount=0;
const choice=[[],[],[],[],[]];
let result=document.getElementById('result');
let innerContainer=document.getElementById('innerContainer');
const questions=[
    {
       question:'რომელია საქართველოს კუთხე?',
       answers:[ 'დაღესტანი','გურია','კატალონია','აჭარა'],
       correctIndexes:[1,3]

    }
    ,
    {
      question:'რომელი თვე არის ზაფხულის?',
      answers:['დეკემბერი','ივნისი','აგვისტო','ივლისი'],
      correctIndexes:[1,2,3]
    }
    ,
    {
       question:'რომელი რიცხვია ლუწი?',
       answers:[3,2,4,1],
       correctIndexes:[1,2]
       
    }
    ,
    {
        question:'რომელია 10-ზე მეტი',
        answers:[11,24,41,50],
        correctIndexes:[0,1,2,3]
    }
    ,
    {
        question:'რომელია 3-ის ჯერადი',
        answers:[9,24,41,50],
        correctIndexes:[0,1] 
    }
]
function showTest(){
    if(currentQuestionCount<1 )
    {
       alert('out of questions');
       return;
    }
   document.getElementById('start').style.display='none';
   document.getElementById('container').style.display='block';
   if(currentQuestionCount==5)
   {
    document.getElementById('nextQuestion').style.display='none';
    document.getElementById('submit').style.display='block';

   }
   questionField.innerHTML=`${currentQuestionCount}.${questions[currentQuestionCount-1].question}`;
   let questionHtml='';
   for(const answerIndex in questions[currentQuestionCount-1].answers)
    {
        let inputText=`<input type="checkbox" class="answerEl" value=${answerIndex}><label  >${questions[currentQuestionCount-1].answers[answerIndex]}</label> `;
        questionHtml=`${questionHtml}${inputText}`;
    } 
    answersField.innerHTML=questionHtml;

}
function nextQuestion(){
      checkAnswers();
      currentQuestionCount++;
      showTest();

}
function lastQuestion(){
      correctAnswersCount--;
      currentQuestionCount--;
      showTest();
}
function checkAnswers(){
   const answerElements=document.getElementsByClassName('answerEl');
   for(const thisAnswer of answerElements){
     if(thisAnswer.checked)
       {
        choice[currentQuestionCount-1].push(Number(thisAnswer.value));
       }
   }
  
   if(JSON.stringify(choice[currentQuestionCount-1])==JSON.stringify(questions[currentQuestionCount-1].correctIndexes))
   {
    correctAnswersCount++;
   }
}
function submit(){
    innerContainer.style.display='none';
    result.innerHTML=`სწორი პასუხების რაოდენობაა:${correctAnswersCount}`;
}
