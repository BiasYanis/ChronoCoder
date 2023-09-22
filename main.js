window.onload = function(){
    var questionList = [["What is a \"DApp\" in blockchain technology?", "Smart contract app", "Decentralized application", " Cryptocurrency mining", "Blockchain video game", 1],
    ["What is the term for a type of machine learning where an algorithm learns from its mistakes by iteratively improving its predictions?", "Supervised learning", "Unsupervised learning", "Reinforcement learning", "Coffee break learning", 2],
    ["", "", "", "", "", 1],
    ["", "", "", "", "", 1],
    ["", "", "", "", "", 1],
    ["", "", "", "", "", 1],
    ["", "", "", "", "", 1],
    ["", "", "", "", "", 1]];

    var e_replay = document.querySelector('#replay');

    var backgroundPerYear = ["url('Ressources/Images/Twitch.jpg')", "url('Ressources/Images/Twitter.png')", "url('Ressources/Images/MSN Messenger.png')", "blue", "yellow", "", ""];
    var bannerPerYear = ["url('Ressources/Images/Barre2020.png')", "url('Ressources/Images/Barre2010.png')", "url('Ressources/Images/Barre2000.jpg", "white", "", ""];

    var e_date = document.querySelector('#year');
    var date = 2020;
    var e_question = document.querySelector('#question');
    var questionNb = 0;

    e_question.textContent = `Question : ${questionList[0][0]}`;

    var buttons = document.getElementsByTagName('button');
    for (let index = 0; index < buttons.length; index++) {
        const element = buttons[index];
        if (element.id !== 'replay') {
            element.textContent = `${questionList[0][index + 1]}`            
        } else {
            element.style.display = "none";
            element.addEventListener("click", replay);
        }
    }

    function replay() {
        lifePoints = 3;
        questionNb = 0;
        date = 2020;
        e_lifePoints.textContent = `Lives left : ${lifePoints}`;
        e_questionNb.textContent = `Question ${questionNb + 1} out of 8`
        e_date.textContent = `${date}`;
        e_question.textContent = `Question : ${questionList[questionNb][0]}`;

        e_gameScreen.style.backgroundColor = backgroundPerYear[questionNb];
        e_UI.style.backgroundColor = bannerPerYear[questionNb];

        for (let index = 0; index < buttons.length; index++) {
            const element = buttons[index];
            element.style.backgroundColor = 'cadetblue';
        }

        for (let index = 0; index < buttons.length; index++ ) {
            const element = buttons[index];
            if (element.id !== 'replay') {
                element.textContent = `${questionList[0][index + 1]}`            
            } else {
                element.style.display = "none";
            }
        }
    }


    e_questionNb = document.querySelector('#questionNb');

    var e_lifePoints = document.querySelector('#lifePoint');
    var lifePoints = 3;

    var e_gameScreen = document.querySelector('#gameScreen');
    var e_UI = document.querySelector('#UI');

    for (let index = 0; index < buttons.length; index++) {
        if(buttons[index].id != "replay")
            buttons[index].addEventListener("click", userAnswer);
    }
    
    function userAnswer(e) {
        if (lifePoints > 0)
           e.target.id == questionList[questionNb][5] ? changeDisplay() : handleWrong(e);
    }

    function handleWrong(e) {
        e.target.style.backgroundColor = 'red';
        lifePoints--;
        e_lifePoints.textContent = `Lives left : ${lifePoints}`
        if (lifePoints === 0) {
            for (let index = 0; index < buttons.length; index++) {
                const element = buttons[index];
                if (element.id !== 'replay') {
                    element.style.backgroundColor = "red";
                    element.textContent = "You lost!";
                }
                else element.style.display = "block"
            }
        }
    }

    function changeDisplay() {
        if (questionNb < 7)
            questionNb++;
        

        for (let index = 0; index < buttons.length; index++) {
            const element = buttons[index];
            element.style.backgroundColor = 'transparent';
        }
        
        //changer le color pour l'image quand elle seront la
        e_gameScreen.style.backgroundImage = backgroundPerYear[questionNb];
        e_UI.style.backgroundImage = bannerPerYear[questionNb];
    
        
        e_questionNb.textContent = `Question ${questionNb + 1} out of 8`
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