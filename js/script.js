const playerStone = document.getElementById("stone");
const playerPaper = document.getElementById("paper");
const playerScissors = document.getElementById("scissors");
const figthPlayer = document.getElementById("figthPlayer");
const figthMachine = document.getElementById("figthMachine");
const showResult = document.getElementById("showResult");
const countPlayer = document.getElementById("countPlayer");
const countMachine = document.getElementById("countMachine");
let countP = 0;
let countM = 0;


function playMachine() {

    let value = Math.floor(Math.random() * 3)

    return value;
}

function selectMachine() {

    let value = playMachine();
    figthMachine.innerHTML = "";

    if(value === 0) {

        const stoneMachine = document.createElement("img");
        stoneMachine.src = "./img/pedra.png"
        figthMachine.appendChild(stoneMachine);

        return "stone"
    }

    if(value === 1) {

        const paperMachine = document.createElement("img");
        paperMachine.src = "./img/papel.png"
        figthMachine.appendChild(paperMachine);

        return "paper"
    }

    if(value === 2) {
      
        const scissorsMachine = document.createElement("img");
        scissorsMachine.src = "./img/tesoura.png"
        figthMachine.appendChild(scissorsMachine);
        
        return "scissors"
    }
}

function verificationStone(event) {

    let currentMachine = selectMachine(); 
    let result = "";
    
    if(event === "stone") {

        if(currentMachine === "stone") {   
            
            result = "Empate!!! BORA DENOVO";
            showResult.innerHTML = result;
        }

        if(currentMachine === "paper") {   

            result = "Máquina Venceu!!! TENTE NOVAMENTE :(";
            showResult.innerHTML = result;
        }

        if(currentMachine === "scissors") {  

            result = "Você Venceu!!! NICE :)";
            showResult.innerHTML = result;
        }
    }

    return result;
}

function verificationPaper(event) {

    let currentMachine = selectMachine(); 
    let result = "";
    
    if(event === "paper") {

        if(currentMachine === "stone") {   

            result = "Você Venceu!!! NICE :)";
            showResult.innerHTML = result;
        }

        if(currentMachine === "paper") {  

            result = "Empate!!! BORA DENOVO";
            showResult.innerHTML = result;
        }

        if(currentMachine === "scissors") {

            result = "Máquina Venceu!!! TENTE NOVAMENTE :(";
            showResult.innerHTML = result;
        }
    }

    return result; 
}

function verificationScissors(event) {

    let currentMachine = selectMachine(); 
    let result = "";
    
    if(event === "scissors") {

        if(currentMachine === "stone") {  

            result = "Máquina Venceu!!! TENTE NOVAMENTE :(";
            showResult.innerHTML = result;
        }

        if(currentMachine === "paper") {  

            result = "Você Venceu!!! NICE :)";
            showResult.innerHTML = result;
        }

        if(currentMachine === "scissors") {   
            
            result = "Empate!!! BORA DENOVO";
            showResult.innerHTML = result;
        }
    }

    return result;
}

function countPoints(winner) {

    if(winner === "Máquina Venceu!!! TENTE NOVAMENTE :(") {
        
        countM++
        countMachine.innerHTML = countM;    
    }

    if(winner === "Você Venceu!!! NICE :)") {
        
        countP++
        countPlayer.innerHTML = countP;
    }
}

playerStone.addEventListener("click", (event) => {

    figthPlayer.innerHTML = "";

    const stonePlayer = document.createElement("img");
    stonePlayer.src = "./img/pedra.png";
    figthPlayer.appendChild(stonePlayer);

    let currentJokenpo = event.currentTarget.id;
    
    selectMachine();
    verificationStone(currentJokenpo);
    countPoints(verificationStone(currentJokenpo));
})

playerPaper.addEventListener("click", (event) => {

    figthPlayer.innerHTML = "";

    const paperPlayer = document.createElement("img");
    paperPlayer.src = "./img/papel.png";
    figthPlayer.appendChild(paperPlayer);

    let currentJokenpo = event.currentTarget.id;
    
    selectMachine();
    verificationPaper(currentJokenpo);
    countPoints(verificationPaper(currentJokenpo));
})

playerScissors.addEventListener("click", (event) => {

    figthPlayer.innerHTML = "";

    const stonePlayer = document.createElement("img");
    stonePlayer.src = "./img/tesoura.png";
    figthPlayer.appendChild(stonePlayer);

    let currentJokenpo = event.currentTarget.id;
    
    selectMachine();
    verificationScissors(currentJokenpo);
    countPoints(verificationScissors(currentJokenpo));
})