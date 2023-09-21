window.onload = function(){
    e_questionNb = document.getElementById('questionNb');
    txt = document.createTextNode(`Question ${questionNb} out of 8`);


    var questionNb = 1;
    var buttons = document.getElementsByTagName('button');
    var e_question = document.getElementById('question');
    var e_lifePoints = document.getElementById('lifePoint');
    for (let index = 0; index < buttons.length; index++) {
        const element = buttons[index];
        element.addEventListener("click", userAnswer);    
    }
    
    function userAnswer() {
        questionNb++;
        txt.nodeVa
        e_questionNb.appendChild(txt);
        return;
    }

    


};