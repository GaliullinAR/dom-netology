export default class GameLogic {
  constructor(selector, img) {
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
  }

  get imgElement() {
    const image = document.createElement('img');
    image.src = this.img;
    
    return image;
  }

  get randomNumber() {
    const lengthChilds = this.selector.children.length;
    const randomNum = Math.floor(Math.random() * lengthChilds);
    
    return randomNum;
  }

  addInterval() {

    this.selector.children[this.randomNumber].appendChild(this.imgElement);
    
    
  }

}