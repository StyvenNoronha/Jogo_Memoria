import './src/styles/settings/colors.css';
import './src/styles/elements/base.css';
import './src/styles/generic/reset.css';

import { PlayerPlacar } from './src/components/PlayerPlacar';
import { BoardGame } from './src/objects/BoardGame';

const $root = document.querySelector("#root")

const $htmlPlayer = PlayerPlacar();

const $htmlBaordGame = BoardGame(6);

$root.insertAdjacentHTML('beforeend',$htmlBaordGame + $htmlPlayer)



