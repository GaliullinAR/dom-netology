export default class GameLogic {
  constructor(selector, img, options = {}) {
    if (typeof selector === 'string' && selector[0] === '.') {
      this.selector = document.querySelector(selector);
    } else if (typeof selector === 'string' && selector !== '.') {
      this.selector = document.querySelector(`.${selector}`);
    } else {
      throw new Error('Не правильно был передан селектор');
    }

    if (img !== undefined) {
      this.img = img;
    } else {
      throw new Error('Добавьте картинку');
    }

    this.options = options;
  }

  get imgElement() {
    const image = document.createElement('img');
    image.src = this.img;
    image.classList.add('goblin-img');
    
    return image;
  }

  get randomNumber() {
    const lengthChilds = this.selector.children.length;
    const randomNum = Math.floor(Math.random() * lengthChilds);
    
    return randomNum;
  }

  get getLevelInterval() {
    const {level} = this.options;
    
    switch(level) {
      case 'easy':
        return 1000;
      case 'middle':
        return 500;
      case 'hard':
        return 200;
      default:
        return 1000; 
    }
  }

  addClassActive() {
    const activeSector = document.querySelector('.goblin-img').parentElement;
    activeSector.classList.add('active'); 
  }

  interval() {
    let rndm = this.randomNumber;
    const childs = this.selector.children;

    const changeInterval = setInterval(() => {
      if (rndm !== this.randomNumber) {
        // childs[rndm].appendChild(this.imgElement);
      }
    }, this.getLevelInterval) 

    console.log(this.getLevelInterval);
  }

}


// options = {level: easy | middle | hard;}