window.onload = function(){
    var questionList = [["What is a \"DApp\" in blockchain technology?", "Smart contract app", "Decentralized application", " Cryptocurrency mining", "Blockchain video game", 1],
    ["What is the term for a type of machine learning where an algorithm learns from its mistakes by iteratively improving its predictions?", "Supervised learning", "Unsupervised learning", "Reinforcement learning", "Coffee break learning", 2],
    ["What technology, widely used in web development during the 2000s, allowed web pages to dynamically update content without requiring a full page reload\?", "XML", "HTML5", "AJAX", "ASCII art", 2],
    ["In which year was the Java programming language first released to the public?", "1985", "1995", "2000", "1977", 1],
    ["Which integrated development environment (IDE), first released in the 1980s, played a significant role in popularizing software development on the IBM PC platform?", "Visual Studio", "CoffeeScript", "Xcode", "Turbo Pascal", 3],
    ["Which programming language influenced the development of the C programming language in the 1970s?", "FORTRAN", "COBOL", "ALGOL", "LOLCODE", 2],
    ["What was the original name of the UNIX operating system when it was first developed in the 1960s?", "Multics", "UnixOS", "C-system", "MainframeOS", 0],
    ["What technology was prevalent in early computers during the 1950s and served as the primary electronic component for logic and amplification?", "Transistors", "Microprocessors", "Silicon chips", "Vacuum tubes", 3]];
    
    var e_replay = document.querySelector('#replay');
    var backgroundPerYear = ["burlywood", "black", "blue", "yellow", "", ""];
    var bannerPerYear = ["bisque", "green", "red", "white", "", ""];

    var e_date = document.querySelector('#year');
    var date = 2020;
    var e_question = document.querySelector('#question');
    var questionNb = 0;

    e_question.textContent = `Question : ${questionList[0][0]}`;

    var buttons = document.getElementsByTagName('button');
    for (let index = 0; index < buttons.length; index++) {
        const element = buttons[index];
        if (element.id !== 'replay') {
            buttons[index].addEventListener("click", userAnswer);
            element.textContent = `${questionList[0][index + 1]}`            
        } else {
            buttons[index].addEventListener("click", replay)
            element.style.display = "none";
        }
    }

    const container = document.querySelector('#fireworks')
    container.style.display = "none";
    var isFireworkOn = false;

    function replay() {
        if (isFireworkOn) {
            container.style.display = "none";
        }
        e_UI.style.display = "flex";
        e_gameScreen.style.display = "flex";
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
        else {
            e_UI.style.display = "none";
            e_gameScreen.style.display = "none";
            container.style.display = "flex";
            const fireworks = new Fireworks.default(container);

            fireworks.start();
            isFireworkOn = true;

            for (let index = 0; index < buttons.length; index++) {
                const element = buttons[index];
                if (element.id === 'replay')
                    element.style.display = "block"
            }
        }
        

        for (let index = 0; index < buttons.length; index++) {
            const element = buttons[index];
            element.style.backgroundColor = 'cadetblue';
        }
        
        //changer le color pour l'image quand elle seront la
        e_gameScreen.style.backgroundColor = backgroundPerYear[questionNb];
        e_UI.style.backgroundColor = bannerPerYear[questionNb];
        
        e_questionNb.textContent = `Question ${questionNb + 1} out of 8`
        if (date > 1950)
            date -= 10;
        e_date.textContent = `${date}`;
        e_question.textContent = `Question : ${questionList[questionNb][0]}`;
        
        for (let index = 0; index < buttons.length; index++) {
            const element = buttons[index];
            if (element.id !== "replay")
                element.textContent = `${questionList[questionNb][index + 1]}`
            
        }
        return;
    }
}