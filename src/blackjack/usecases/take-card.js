/**
 * This function allows me to take a card
 * @param {Array<String>} deck Array of String
 * @returns {String} return the card deck
 */
export const takeCard = (deck) => {


  if (!deck || deck.length === 0) {
    throw 'No hay más cartas en el deck';
  }

  const card = deck.pop();

  // console.log(deck);
  // console.log(typeof card);
  return card;
}