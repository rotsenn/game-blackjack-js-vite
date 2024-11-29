/**
 * Get the value of the card
 * @param {String} card 
 * @returns {Number} return a number card
 */

export const valueCard = (card) => {

    // const value = card[0];
    const value = card.substring(0, card.length - 1);
    let points = 0;
    // console.log({value});

    return (isNaN(value)) ? (value === 'A' ? 11 : 10) : points = value * 1;
}