const cardArray = [
    {
        name: 'css',
        img: './images/css.png'
    },

    {
        name: 'html',
        img: './images/html.png'
    },

    {
        name: 'javascript',
        img: './images/js.png'
    },

    {
        name: 'react js',
        img: './images/reactjs.png'
    },

    {
        name: 'tailwind css',
        img: './images/tailwindcss.png'
    },

    {
        name: 'java',
        img: './images/java.png'
    },

]

const cardSection = document.getElementById('card-section')

// step2 -  duplicate each card
const gameCard = cardArray.concat(cardArray)
// console.log(gameCard);

// steps 3
// Note that this method creates a new shuffled array instead of modifying the original one.
// const myNumbers = (array) => {
//     for (let i = array.length-1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1))
//         // console.log(i,j);
//         let temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     return array;
// }

// const shuffledChild = myNumbers(gameCard);

let shuffledChild = Array.from(gameCard).sort(() => 0.5 - Math.random());

// step 5
let clickCount = 0;
let firstCard = "";
let secondCard = "";

// styling the card match
const card_matches = () => {
    let cardSelected = document.querySelectorAll('.card_selected')

    cardSelected.forEach( (currEle) => {
        currEle.classList.add('card_match')
    })
}

// step 7 - continuing the game until all matches are made
const resetGame = (() => {
    firstCard = "";
    secondCard = "";
    clickCount = 0;

    let cardSelected = document.querySelectorAll('.card_selected')

    cardSelected.forEach( (currEle) => {
        currEle.classList.remove('card_selected')
    })
})

// step 4 - on what card we clicked on
cardSection.addEventListener('click', (e) => {
    let currCard = e.target;
    if(currCard.id === 'card-section') {
        return false
    }    
    clickCount++;
    if (clickCount < 3) {   
        
        if (clickCount === 1) {
            firstCard = currCard.parentNode.dataset.name;
            currCard.parentNode.classList.add('card_selected');
        } else {
            secondCard = currCard.parentNode.dataset.name;
            currCard.parentNode.classList.add('card_selected');
        }

        if (firstCard !== "" && secondCard !== "") {
            if (firstCard === secondCard) {
                // currCard.classList.add('card_match')
                setTimeout(() => {
                    card_matches()
                    resetGame()
                }, 1000)
                
            } else {
                setTimeout(() => {  
                    resetGame()
                }, 1000)
            }   
        }
    }   
})

// step 1 to add the card
for (let index = 0; index < shuffledChild.length; index++) {
    const childDiv = document.createElement('div')
    childDiv.dataset.name = shuffledChild[index].name;
    // childDiv.style.backgroundImage = `url(${shuffledChild[index].img})`;   
    
    const front_div = document.createElement('div')
    front_div.classList.add('front-card')

    const back_div = document.createElement('div')
    back_div.classList.add('back-card')
    back_div.style.backgroundImage = `url(${shuffledChild[index].img})`; 

    childDiv.classList.add('card')
    cardSection.appendChild(childDiv)

    childDiv.appendChild(front_div)
    childDiv.appendChild(back_div)

}