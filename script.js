const startButton=document.getElementById('start');
const nextButton=document.getElementById('next-btn');
const questioncontainerElement=document.getElementById('question-container')
const questionElement=document.getElementById('question')
const h1=document.getElementById('header')
const exit=document.getElementById('exit-btn')
const answerButtonElement=document.getElementById('answer')
let shuffleQuestions,currentQuestionIndex
startButton.addEventListener('click',startgame)
nextButton.addEventListener('click',()=>{
    currentQuestionIndex++
    setNextQuestion()
})
exit.addEventListener('clicl',exitfun)
function startgame(){
    console.log('started')
    startButton.classList.add('hide')
    h1.classList.add('hide')
    shuffleQuestions=questions.sort(() => Math.random() - .5)
    currentQuestionIndex=0
    questioncontainerElement.classList.remove('hide')
    setNextQuestion()
}
function setNextQuestion(){
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])

}
function showQuestion(question){
    questionElement.innerText=question.question
    question.answers.forEach(answer=>{
    const button=document.createElement('button')
    button.innerText=answer.text;
    button.classList.add('btn')
    if(answer.correct){
        button.dataset.correct=answer.correct
    }
    button.addEventListener('click',selectAnswer)
    answerButtonElement.appendChild(button)
    })

}
function resetState(){
    cleartatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}
function selectAnswer(e){
    const selectedButton=e.target
    const correct=selectedButton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(answerButtonElement.children).forEach(button=>{
        setStatusClass(button,button.dataset.correct)
    })
    if(shuffleQuestions.length>currentQuestionIndex+1){
        nextButton.classList.remove('hide')
    }else{
        startButton.innerText="Restart"
        startButton.classList.remove('hide')
       
        
    }  

}
function setStatusClass(element,correct){
    if(correct){
        element.classList.add('correct')

    }
    else{
        element.classList.add('wrong')
    }
}
function cleartatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
function exitfun(){
    console.log("Thank You For playing!!!")
}

const questions=[
     {
    question:'What is 2*2?',
    answers:[
        { text:'4',correct:true},
        {text:'5',correct:false},
       { text:'8',correct:false},
       {text:'0',correct:false}

    ],
   
},{
    question:"What is a baby aligator called?",
    choices:["baby","gator","kit","calf"],
    answers:[
        { text:'baby',correct:false},
        {text:'gator',correct:false},
       { text:'kit',correct:true},
       {text:'calf',correct:false}

    ]
},
{
    question:'What is largest number among 2 and 4?',
    answers:[
        { text:'4',correct:true},
        {text:'5',correct:false},
       { text:'8',correct:false},
       {text:'0',correct:false}

    ],
   
}];
