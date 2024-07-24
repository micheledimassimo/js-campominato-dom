const startButton = document.getElementById('start-btn');

startButton.addEventListener('click', function () {
        const gridContainer = document.getElementById('grid-container');
        const bombsLength = 16;
        const bombs = [];
        
        for (let i = 0; i < bombsLength; i++) {
            let rndNumber;
            //se il numero non è già presente pusha nell'array
            // genero 16 numeri casuali da mettere dentro l'array
            do {
                rndNumber = getRndNumb(1, 100);
                console.log(rndNumber);
            } while (bombs.includes(rndNumber));
            
            bombs.push(rndNumber);

            console.log('bombs', bombs, bombs.length, typeof bombs);
           
            
            
        }
        for (let i = 1; i <= 100; i++) {

            const newCell = document.createElement('div');
            newCell.classList.add('grid-box');
            newCell.innerHTML = i;
            newCell.addEventListener('click', function() {
                
                newCell.classList.add('change-color');
                
                
                if (bombs.includes(i)) {
                    newCell.classList.add('bomb-cell');
                    
                } 
                else {
                    newCell.classList.add('not-bomb');
                } 
         /*    
 */
            }
            );

            gridContainer.append(newCell);
            
        }
    
        
       /*  const bombBox = document.getElementsByClassName('grid-box'); */
    
    }
);
    /* const bombBox = document.querySelectorAll('.bomb-cell');
        bombBox.addEventListener ('click', function () {
            alert('Hai fatto esplodere una bomba!');
        }); */

//functions

function getRndNumb(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

