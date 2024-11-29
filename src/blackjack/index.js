import _ from 'underscore';
// import createDeck, { miNombre } from './usecases/create-deck';
// import { createDeck as createNewDeck} from './usecases/create-deck';
import { createDeck, takeCard, valueCard, computerShift, createCardHTML } from './usecases';

/**
 * 2C -> Two of clubs (Treboles)
 * 2D -> Two of Diamonds (Diamantes)
 * 2H -> Two of Hearts (Corazones)
 * 2S -> Two of Spades (Picas)
*/

let deck = [];
const types = ['C', 'D', 'H', 'S'];
const types2 = ['A', 'J', 'Q', 'K'];

let pointsPlayer = 0,
  pointsComputer = 0;

// Referencias del html
const btnRequest = document.querySelector('#btnRequest');
const btnStop = document.getElementById('btnStop');
const btnNew = document.getElementById('btnNew');

const divPlayer = document.getElementById('player');
const divComputer = document.getElementById('computer');

const pointsHTML = document.querySelectorAll('small');

deck = createDeck(types, types2);


// takeCard();

// Value card


// Computer shift


// Events
btnRequest.addEventListener('click', () => {

  const card = takeCard(deck);
  pointsPlayer = pointsPlayer + valueCard(card);
  // console.log(pointsPlayer);
  pointsHTML[0].innerText = `${pointsPlayer}`;

  const createImg = createCardHTML( card );
  divPlayer.append(createImg);


  if (pointsPlayer > 21) {
    console.warn('Perdiste!');
    btnRequest.disabled = true;
    btnStop.disabled = true;
    computerShift(pointsPlayer, pointsHTML[1], divComputer, deck);

  } else if (pointsPlayer === 21) {
    console.warn(`${pointsPlayer}, '¡Genial!'`);
    btnRequest.disabled = true;
    btnStop.disabled = true;
    computerShift(pointsPlayer, pointsHTML[1], divComputer, deck);
  }
});

btnStop.addEventListener('click', () => {

  btnRequest.disabled = true;
  btnStop.disabled = true;

  computerShift(pointsPlayer, pointsHTML[1], divComputer, deck);

});

btnNew.addEventListener('click', () => {

  // window.location.reload();
  console.clear();
  deck = [];
  deck = createDeck(types, types2);
  pointsPlayer = 0;
  pointsComputer = 0;

  pointsHTML[0].innerText = 0;
  pointsHTML[1].innerText = 0;

  divPlayer.innerHTML = '';
  divComputer.innerHTML = '';

  btnRequest.disabled = false;
  btnStop.disabled = false;

}); 