/**
 * 
 * @param {String} card 
 * @return {HTMLImageElement} retunr image
 */

export const createCardHTML = ( card ) => {

    if ( !card ) throw new Error('La carta en un argumento obligatorio');

    const createImg = document.createElement('img');
    createImg.src = `./assets/cartas/${card}.png`;
    createImg.classList.add('card');
    return createImg;

}