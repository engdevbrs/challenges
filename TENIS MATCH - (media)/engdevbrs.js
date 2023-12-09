
function tenisMatch(sequence){

    let scoreP1 = 0
    let scoreP2 = 0
    let scoreCounterP1 = []
    let scoreCounterP2 = []
    let won = false

    sequence.map(value =>{
            if(value === 'P1' && won === false){
                scoreCounterP1.push(1)
                if(scoreCounterP1.length === 3){
                    scoreP1 = (scoreCounterP1.length * 15) - 5
                    if(scoreCounterP1.length === 3 && scoreP1 === scoreP2){
                       return console.log('Deuce');
                    }
                }else if(scoreCounterP1.length > 3 && scoreCounterP2.length > 3 && scoreP1 === scoreP2){
                   return console.log('Deuce');
                }else if(scoreCounterP1.length > 3 && scoreCounterP1.length > scoreCounterP2.length){
                    if((scoreCounterP1.length - scoreCounterP2.length) > 1){
                        won = true
                        return console.log('Ha ganado el P1');
                    }
                    return console.log('Ventaja P1');
                }else{
                    scoreP1 = scoreCounterP1.length * 15
                }
                console.log(scoreP1 + ' - ' + scoreP2);
                
            }else if(value === 'P2' && won === false){
                scoreCounterP2.push(1)
                if(scoreCounterP2.length === 3){
                    scoreP2 = (scoreCounterP2.length * 15) - 5
                    if(scoreCounterP2.length === 3 && scoreP2 === scoreP1){
                        return console.log('Deuce');
                    }
                }else if(scoreCounterP2.length > 3 && scoreCounterP1.length > 3 && scoreP2 === scoreP1){
                    return console.log('Deuce');
                }else if(scoreCounterP2.length > 3 && scoreCounterP2.length > scoreCounterP1.length){
                    if((scoreCounterP2.length - scoreCounterP1.length) > 1){
                        won = true
                        return console.log('Ha ganado el P2');
                    }
                    return console.log('Ventaja P2');
                }else{
                    scoreP2 = scoreCounterP2.length * 15
                }
                console.log(scoreP1 + ' - ' + scoreP2);
            }
    })

    console.log('The Match has End!');

}

const sequence = ['P2','P1','P2','P2','P1','P1','P1','P1']

tenisMatch(sequence)