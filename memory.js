const cardArray = [
    {
        name: 'calcipher',
        img: 'images/calcipher.png'
    },
    {
        name: 'chihiro',
        img: 'images/chihiro.png'
    },
    {
        name: 'haku',
        img: 'images/haku.png'
    },
    {
        name: 'haruru',
        img: 'images/haruru.png'
    },
    {
        name: 'satsuki',
        img: 'images/satsuki.png'
    },
    {
        name: 'sophie',
        img: 'images/sophie.png'
    },
    {
        name: 'calcipher',
        img: 'images/calcipher.png'
    },
    {
        name: 'chihiro',
        img: 'images/chihiro.png'
    },
    {
        name: 'haku',
        img: 'images/haku.png'
    },
    {
        name: 'haruru',
        img: 'images/haruru.png'
    },
    {
        name: 'satsuki',
        img: 'images/satsuki.png'
    },
    {
        name: 'sophie',
        img: 'images/sophie.png'
    }
]

// to shuffle our cardArray 
cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardChosen = []
let cardChosenId = []
let cardWon = []

//create your board
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const cards = document.createElement('img')

    cards.setAttribute('src', 'images/blank.png')
    cards.setAttribute('data-id', i)
    cards.addEventListener('click', flipCard)
    grid.appendChild(cards)
  }
}

//check for matches
function checkForMatch() {
  const card = document.querySelectorAll('img')
  const optionOneId = cardChosenId[0]
  const optionTwoId = cardChosenId[1]
  
  if(optionOneId == optionTwoId) {
    card[optionOneId].setAttribute('src', 'images/blank.png')
    card[optionTwoId].setAttribute('src', 'images/blank.png')
    alert('You have clicked the same image!')
  }

  else if (cardChosen[0] === cardChosen[1]) {
    alert('You found a match')
    card[optionOneId].setAttribute('src', 'images/white.png')
    card[optionTwoId].setAttribute('src', 'images/white.png')
    card[optionOneId].removeEventListener('click', flipCard)
    card[optionTwoId].removeEventListener('click', flipCard)
    cardWon.push(cardChosen)
  } 
  
  else {
    card[optionOneId].setAttribute('src', 'images/blank.png')
    card[optionTwoId].setAttribute('src', 'images/blank.png')
    alert('Sorry, try again')
  }

  cardChosen = []
  cardChosenId = []
}

//flip your card
function flipCard() {
  let cardId = this.getAttribute('data-id')

  cardChosen.push(cardArray[cardId].name)
  cardChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)

  if (cardChosen.length ===2) {
    setTimeout(checkForMatch, 500)
  }
}

createBoard()
