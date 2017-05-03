let answer = document.getElementById('answer').value;
let attempt = document.getElementById('attempt').value;

function guess() {
    let input = document.getElementById('user-guess').value;
    //add functionality to guess function here
    if(answer == '' || attempt == ''){
        setHiddenFields();
    }
    if(validateInput(input)){
        attempt++;
        if(getResults(input)){
            setMessage("You Win! :)");
            showAnswer(true);
            showReplay();
        }
        else if(attempt >= 10){
            setMessage("You Lose! :(");
            showAnswer(false);
            showReplay();
        }
        else{
            setMessage("Incorrect, try again.");
        }
    }
}

//implement new functions here
function setHiddenFields() {
    answer = Math.floor((Math.random() * 10000) + 1);
    if(answer < 10) {
        answer = '000' + answer.toString();
    }
    else if(answer < 100) {
        answer = '00' + answer.toString();
    }
    else if(answer < 1000) {
        answer = '0' + answer.toString();
    }
    else if(answer < 10000) {
        answer = answer.toString();
    }
    else{
        answer = '0000';
    }
    attempt = 0;
}

function setMessage(message) {
    document.getElementById('message').innerHTML = message;
}

function validateInput(input){
    console.log(input);
    if(input.length == 4){
        return true;
    }
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
}

function getResults(input){
    results = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
    inputString = input.toString();
    console.log(answer);
    for(let i = 0; i<4; i++){
        if(inputString[i] == answer[i]){
            results = results + '<span class="glyphicon glyphicon-ok"></span>';
        }
        else if(answer.includes(inputString[i])){
            results = results + '<span class="glyphicon glyphicon-transfer"></span>';
        }
        else{
            results = results + '<span class="glyphicon glyphicon-remove"></span>';
        }
    }
    results = results + '</div></div>';
    document.getElementById('results').innerHTML = document.getElementById('results').innerHTML + results;
    if(inputString == answer){
        return true;
    }
    return false;
}

function showAnswer(win){
    document.getElementById('code').innerHTML = answer;
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