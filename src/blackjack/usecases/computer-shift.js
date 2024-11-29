import { createCardHTML } from './create-card-html';
import { takeCard } from './take-card';
import { valueCard } from './value-card';

/**
 * The Computer shift
 * @param {Number} minimumPoints minimum points that the computer needs to win
 * @param {HTMLElement} pointsHTML HTML element to display the points
 * @param {HTMLElement} divComputer HTML element to display the poinst
 * @param {Array<String>} deck 
 */
export const computerShift = (minimumPoints, pointsHTML, divComputer, deck = []) => {

   if ( !minimumPoints ) throw new Error('Puntos minimos son necesarios');
   if ( !pointsHTML ) throw new Error('Argumento puntosHTML son necesarios');

   let pointsComputer = 0;

   do {
      const card = takeCard(deck);
      pointsComputer = pointsComputer + valueCard(card);
      // console.log(pointsComputer);
      pointsHTML.innerText = `${pointsComputer}`;

      // TODO: crear carta 
      const createImg = createCardHTML( card )

      divComputer.append(createImg);

      if (minimumPoints > 21) {
         break;
      }

   } while ((pointsComputer < minimumPoints) && (minimumPoints <= 21));

   setTimeout(() => {

      if (pointsComputer === minimumPoints) {
         alert('Nadie gana :(');
      } else if (minimumPoints > 21) {
         alert('Computadora gana');
      } else if (pointsComputer > 21) {
         alert('¡Jugador Gana!!');
      } else if (pointsComputer > minimumPoints) {
         alert('Computadora gana');
      }
   }, 100);
}