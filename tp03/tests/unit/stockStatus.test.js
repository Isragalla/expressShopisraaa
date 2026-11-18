const { stockStatus } = require('../../src/catalog/stockStatus');

describe('stockStatus', () => {
  test('un stock invalide est refusé', () => {
    expect(() => stockStatus(-1)).toThrow();
    expect(() => stockStatus(1.5)).toThrow();
  });

  test('un stock à 0', () => {
    expect(stockStatus(0)).toBeDefined();
  });

  test('un stock bas', () => {
    expect(stockStatus(3)).toBeTruthy();
  });

  test('un stock élevé', () => {
    expect(stockStatus(50)).toBeTruthy();
  });

  test('un seuil personnalisé', () => {
    expect(stockStatus(8, 10)).toBeTruthy();
  });
});
