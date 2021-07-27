import { fizzbuzzFactory } from "./fizzbuzz-factory"

describe("fizzbuzz factory", () => {
  it("should create fizzbuzz checker", () => {
    const fizzbuzz = fizzbuzzFactory([]);
    expect(typeof fizzbuzz).toBe("function");
  });

  it("fizzbuzz should return proper values for the classic example", () => {
    const fizzbuzz = fizzbuzzFactory([
      [3, "Fizz"],
      [5, "Buzz"]
    ]);
    expect(fizzbuzz(3)).toEqual("Fizz");
    expect(fizzbuzz(5)).toEqual("Buzz");
    expect(fizzbuzz(15)).toEqual("FizzBuzz");
    expect(fizzbuzz(11)).toEqual(11);
  });

  it("fizzbuzz should return proper values for extended example", () => {
    const fizzbuzz = fizzbuzzFactory([
      [3, "Fizz"],
      [5, "Buzz"],
      [7, "Bar"]
    ]);
    expect(fizzbuzz(3)).toEqual("Fizz");
    expect(fizzbuzz(5)).toEqual("Buzz");
    expect(fizzbuzz(7)).toEqual("Bar");
    expect(fizzbuzz(15)).toEqual("FizzBuzz");
    expect(fizzbuzz(11)).toEqual(11);
    expect(fizzbuzz(21)).toEqual("FizzBar");
    expect(fizzbuzz(3 * 5 * 7)).toEqual("FizzBuzzBar");
  });
});
