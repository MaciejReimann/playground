// https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983

export function pipe(...fns) {
  return (input) => fns.reduce((result, fn) => fn(result), input);
}

export function compose(...fns) {
  return pipe(...fns.reverse());
}
