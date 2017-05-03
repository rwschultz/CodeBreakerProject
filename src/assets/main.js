let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer.value == '' || attempt.value == ''){
        setHiddenFields();
    }
    if(validateInput(input.value)){
       
        if(getResults(input.value)){
            setMessage("You Win! :)");
            showAnswer(true);
            showReplay();
        }
        else if(attempt.value >= 10){
            setMessage("You Lose! :(");
            showAnswer(false);
            showReplay();
        }
         else if(attempt.value < 10){
            setMessage("Incorrect, try again.");
        }
    }
}

//implement new functions here
function setHiddenFields() {
    answerval = Math.floor((Math.random() * 10000) + 1);
    if(answerval < 10) {
        answerval = '000' + answerval.toString();
    }
    else if(answerval < 100) {
        answerval = '00' + answerval.toString();
    }
    else if(answerval < 1000) {
        answerval = '0' + answerval.toString();
    }
    else if(answerval < 10000) {
        answerval = answerval.toString();
    }
    else{
        answerval = '0000';
    }
    document.getElementById('answer').value = answerval;
    document.getElementById('attempt').value = 0;
}

function setMessage(message) {
    document.getElementById('message').innerHTML = message;
}

function validateInput(input){
    if(input.length == 4){
        console.log(document.getElementById('attempt').value)
        document.getElementById('attempt').value = parseInt(document.getElementById('attempt').value) + 1;
        console.log(document.getElementById('attempt').value)
        return true;
    }
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
}

function getResults(input){
    results = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
    inputString = input.toString();
    for(let i = 0; i<4; i++){
        if(inputString[i] == answer.value[i]){
            results = results + '<span class="glyphicon glyphicon-ok"></span>';
        }
        else if(answer.value.includes(inputString[i])){
            results = results + '<span class="glyphicon glyphicon-transfer"></span>';
        }
        else{
            results = results + '<span class="glyphicon glyphicon-remove"></span>';
        }
    }
    results = results + '</div></div>';
    document.getElementById('results').innerHTML = document.getElementById('results').innerHTML + results;
    if(inputString == answer.value){
        return true;
    }
    return false;
}

function showAnswer(win){
    document.getElementById('code').innerHTML = answer.value;
    if(win){
        document.getElementById('code').className = document.getElementById('code').className + ' success';
    }
    else {
        document.getElementById('code').className = document.getElementById('code').className + ' failure';
    }
}

function showReplay(){
    document.getElementById("guessing-div").style.display="none";
    document.getElementById("replay-div").style.display="block";
}