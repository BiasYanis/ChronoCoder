window.onload = function(){
    var questionList = [["What is a \"DApp\" in blockchain technology?", "Smart contract app", "Decentralized application", " Cryptocurrency mining", "Blockchain video game", 1],
    ["What is the term for a type of machine learning where an algorithm learns from its mistakes by iteratively improving its predictions?", "Supervised learning", "Unsupervised learning", "Reinforcement learning", "Coffee break learning", 2],
    ["", "", "", "", "", 1],
    ["", "", "", "", "", 1],
    ["", "", "", "", "", 1],
    ["", "", "", "", "", 1],
    ["", "", "", "", "", 1],
    ["", "", "", "", "", 1]];

    var e_question = document.querySelector('#question');
    var questionNb = 1;

    e_question.textContent = `Question : ${questionList[0][0]}`;

    var buttons = document.getElementsByTagName('button');
    for (let index = 0; index < buttons.length; index++) {
        const element = buttons[index];
        element.textContent = `${questionList[questionNb - 1][index + 1]}`
        
    }


    e_questionNb = document.querySelector('#questionNb');
    var questionNb = 1;


    var e_lifePoints = document.querySelector('#lifePoint');

    for (let index = 0; index < buttons.length; index++) {
        const element = buttons[index];
        element.addEventListener("click", userAnswer(e));    
    }
    
    function userAnswer(e) {
        let element = e.target;
        console.log(e);
        console.log(element);
    }

    function changeDisplay() {
        questionNb++;
        e_questionNb.textContent = `Question ${questionNb} out of 8`
        console.log(questionList[questionNb - 1][0]);
        e_question.textContent = `Question : ${questionList[questionNb - 1][0]}`;
        
        for (let index = 0; index < buttons.length; index++) {
            const element = buttons[index];
            element.textContent = `${questionList[questionNb - 1][index + 1]}`
            
        }
        return;
    }

    


};