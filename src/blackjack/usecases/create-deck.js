import _ from "underscore";

/**
 * This function create a new deck
 * @param {Array<String>} types Example: ['C', 'D', 'H', 'S']
 * @param {Array<String>} types2 Example: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} deck
 * return a new deck card
 */
export const createDeck = (types, types2) => {

   if ( !types || types.length === 0) throw new Error('types es obligatorio como un arreglo de string');
   if ( !types2 ) throw new Error('types2 es obligatorio como un arreglo de string');


   let deck = []; 

   for (let i = 2; i <= 10; i++) {

      for (let type of types) {
         deck.push(i + type);
      }
   }

   for (let j = 0; j < types2.length; j++) {
      for (let type of types) {
         deck.push(types2[j] + type);
      }
   }

   // console.log(deck);
   deck = _.shuffle(deck);
   // console.log(deck);
   return deck;
}

