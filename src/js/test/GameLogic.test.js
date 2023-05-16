import GameLogic from '../GameLogic';

test('Проверка вывода ошибки при неправльном вводе селектора', () => {
  const result = () => {
    return new GameLogic('!wrapper', null);
  }
  
  expect(result).toThrow(Error);
});
 