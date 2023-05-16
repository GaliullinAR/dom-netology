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
        return 2000; 
    }
  }

  classActive() {
    const activeSector = document.querySelector('.goblin-img').parentElement;
    if (activeSector.classList.contains('active')) {
      activeSector.classList.remove('active'); 
    } else {
      activeSector.classList.add('active');
    }
  }

  interval() {
    let lastIndex = null;

    const childs = Array.from(this.selector.children);
    const intrevalSelectGoblin = setInterval(() => {
      let index = this.randomNumber;
      if (lastIndex !== null) {
        childs[lastIndex].querySelector('img').remove();
      }

      if (index === lastIndex) {
        index = this.randomNumber;
      }
      
      childs[index].appendChild(this.imgElement);

      lastIndex = index;
      
      

    }, this.getLevelInterval);

  }

}


// options = {level: easy | middle | hard;}