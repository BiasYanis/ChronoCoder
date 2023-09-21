window.onload = function(){
    var questionList = [["What is a \"DApp\" in blockchain technology?", "Smart contract app", "Decentralized application", " Cryptocurrency mining", "Blockchain video game", 1],
    ["What is the term for a type of machine learning where an algorithm learns from its mistakes by iteratively improving its predictions?", "Supervised learning", "Unsupervised learning", "Reinforcement learning", "Coffee break learning", 2],
    ["", "", "", "", "", 1],
    ["", "", "", "", "", 1],
    ["", "", "", "", "", 1],
    ["", "", "", "", "", 1],
    ["", "", "", "", "", 1],
    ["", "", "", "", "", 1]];

    var backgroundPerYear = ["black", "blue", "yellow", "", "", ""];
    var bannerPerYear = ["green", "red", "white", "", "", ""];

    var e_date = document.querySelector('#year');
    var date = 2020;
    var e_question = document.querySelector('#question');
    var questionNb = 0;

    e_question.textContent = `Question : ${questionList[0][0]}`;

    var buttons = document.getElementsByTagName('button');
    for (let index = 0; index < buttons.length; index++) {
        const element = buttons[index];
        element.textContent = `${questionList[questionNb][index + 1]}`
        
    }


    e_questionNb = document.querySelector('#questionNb');

    var e_lifePoints = document.querySelector('#lifePoint');
    var lifePoints = 3;

    var e_gameScreen = document.querySelector('#gameScreen');
    var e_UI = document.querySelector('#UI');

    for (let index = 0; index < buttons.length; index++) {
        buttons[index].addEventListener("click", userAnswer);
    }
    
    function userAnswer(e) {
        e.target.id == questionList[questionNb][5] ? changeDisplay() : handleWrong(e);
    }

    function handleWrong(e) {
        e.target.style.backgroundColor = 'red';
        lifePoints--;
        e_lifePoints.textContent = `Lives left : ${lifePoints}`
        if (lifePoints === 0) {
            for (let index = 0; index < buttons.length; index++) {
                const element = buttons[index];
                element.style.backgroundColor = "red";
                element.textContent = "You lost!";
                //voir pour faire pop un bouton dans le DOM avec du js
            }
        }
    }

    function changeDisplay() {
        if (questionNb < 7)
            questionNb++;
        

        for (let index = 0; index < buttons.length; index++) {
            const element = buttons[index];
            element.style.backgroundColor = 'cadetblue';
        }
        
        //changer le color pour l'image quand elle seront la
        e_gameScreen.style.backgroundColor = backgroundPerYear[questionNb - 1];
        e_UI.style.backgroundColor = bannerPerYear[questionNb];
        
        e_questionNb.textContent = `Question ${questionNb + 1} out of 8`
//        console.log(questionList[questionNb][0]);
        if (date > 1950)
            date -= 10;
        e_date.textContent = `${date}`;
        e_question.textContent = `Question : ${questionList[questionNb][0]}`;
        
        for (let index = 0; index < buttons.length; index++) {
            const element = buttons[index];
            element.textContent = `${questionList[questionNb][index + 1]}`
            
        }
        return;
    }

    


};