import "./index";
import "./css/style.css";
import GameLogic from "./js/GameLogic";
import img from "./images/goblin.png";

document.addEventListener("DOMContentLoaded", () => {
  const game = new GameLogic('wrapper', img,  {
    level: 'middle' //| easy | middle | hard
  });
  game.interval();
});

