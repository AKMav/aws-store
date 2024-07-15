import {
  getPriceWithDiscount,
  getValuableDiscount,
} from "../../getPriceOrDiscount";

describe("getValuableDiscount: определяет применится ли скидка в зависимости от значения цены и процента скидки", () => {
  it("Цена = 10, процент скидки = 10, результат истина", () => {
    expect(
      getValuableDiscount({ price: 10, discountPercentage: 10 })
    ).toBeTruthy();
  });

  it("Цена = 5, процент скидки = 10, результат ложь", () => {
    expect(
      getValuableDiscount({ price: 4, discountPercentage: 10 })
    ).not.toBeTruthy();
  });

  it("Цена = 10, процент скидки = 5, результат ложь", () => {
    expect(
      getValuableDiscount({ price: 10, discountPercentage: 5 })
    ).not.toBeTruthy();
  });

  it("Цена = 10, процент скидки = 15, результат ложь", () => {
    expect(
      getValuableDiscount({ price: 10, discountPercentage: 15 })
    ).not.toBeTruthy();
  });

  it("Цена = 0, процент скидки = 0, результат ложь", () => {
    expect(
      getValuableDiscount({ price: 0, discountPercentage: 0 })
    ).not.toBeTruthy();
  });
});

describe("getPriceOrDiscount: получает значение цены со скидкой", () => {
  it("Цена = 100, Скидка = 5, Результат = 95", () => {
    expect(getPriceWithDiscount(100, 5)).toBe(95);
  });

  it("Цена = 100, Скидка = 0, Результат = 100", () => {
    expect(getPriceWithDiscount(100, -5)).toBe(100);
  });

  it("Цена = 100, Скидка = -5, Результат = 100", () => {
    expect(getPriceWithDiscount(100)).toBe(100);
  });

  it("Цена = 100, Скидка = 99, Результат = 1", () => {
    expect(getPriceWithDiscount(100, 99)).toBe(1);
  });
});
