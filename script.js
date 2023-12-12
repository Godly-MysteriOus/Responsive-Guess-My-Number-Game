let maxNumber = 20;
let temp = maxNumber;
let answer = Math.trunc(maxNumber*Math.random())+1;
console.log(answer);
// generated the random Number and stored it in answer variable.
let highscore =0;
document.querySelector('.check').addEventListener('click',function(){
    let randomGuessRecieved = Number(document.querySelector('.randomNumberInput').value);
    temp-=1;
    if(temp>0){
        if(randomGuessRecieved===answer){
            document.querySelector('.ResultContent').textContent = 'Congratulations.. You Won';
            document.querySelector('.onlyCorrectNumberDisplay').textContent = answer;
            document.querySelector('.onlyCorrectNumberDisplay').style.fontWeight = 800;
            if(temp>highscore){
                highscore = temp;
            }
            document.querySelector('.HighScore').textContent = highscore;
            document.querySelector('body').style.backgroundColor = 'green';
            document.querySelector('.inputfield').style.display = 'none';
        }
        else if(randomGuessRecieved>answer){
            document.querySelector('.ResultContent').textContent = 'Higher than actual number';
        }
        else if(randomGuessRecieved<answer){
            document.querySelector('.ResultContent').textContent = 'Lower than actual number';
        }
        document.querySelector('.updateScore').textContent = temp;
    }
    else if(temp===0){
        document.querySelector('.inputfield').style.display = 'none';
        document.querySelector('.ResultContent').textContent = 'You Lost';
        document.querySelector('.updateScore').textContent = temp;
        document.querySelector('body').style.backgroundColor = 'red';

    }
})
document.querySelector('.again').addEventListener('click',function(){
    temp = maxNumber;
    document.querySelector('.ResultContent').textContent = 'Start Guessing...';
    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('.updateScore').textContent = temp;
    document.querySelector('.inputfield').style.display = 'block';
    document.querySelector('.onlyCorrectNumberDisplay').textContent = '?';
    document.querySelector('.onlyCorrectNumberDisplay').style.fontWeight = 400;
    document.querySelector('.randomNumberInput').value = null;
    answer = Math.trunc(maxNumber*Math.random())+1;

    console.log(answer);
})
