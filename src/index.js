import './index';
import './css/style.css';
import GameLogic from './js/GameLogic';
import img from './images/goblin.png';

const game = new GameLogic('wrapper', img,  {
  level: 'middle'
});

game.interval();

