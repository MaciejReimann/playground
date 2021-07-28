import { pipe } from "./pipe-compose";

describe("pipe function", () => {
  it("should create new function", () => {
    const piped = pipe();
    expect(typeof piped).toBe("function");
  });

  it("should perform given 2 funcitons sequentially", () => {
    const multiplyByTwoAndAddFive = pipe(
      (x) => x * 2,
      (x) => x + 5
    );
    expect(multiplyByTwoAndAddFive(3)).toEqual(11);
    expect(multiplyByTwoAndAddFive(5)).toEqual(15);
  });

  it("should perform given 3 funcitons sequentially", () => {
    const multiplyByTwoAndAddFiveToString = pipe(
      (x) => x * 2,
      (x) => x + 5,
      (x) => JSON.stringify(x)
    );
    expect(multiplyByTwoAndAddFiveToString(3)).toEqual("11");
    expect(multiplyByTwoAndAddFiveToString(5)).toEqual("15");
  });


});
