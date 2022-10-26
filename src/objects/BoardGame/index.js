import {CardGame} from '../../components/CardGame';

export function BoardGame(amountCards){

  const $htmlCardGame = CardGame();
  const $htmlBaordGame = $htmlCardGame.repeat(amountCards)


 return $htmlBaordGame;

};