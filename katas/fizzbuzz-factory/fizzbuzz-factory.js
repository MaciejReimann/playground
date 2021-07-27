export function fizzbuzzFactory(dividerTuples) {
  return function (number) {
    const result = dividerTuples
      .filter(([divider]) => number % divider === 0)
      .map(([_, msg]) => msg)
      .join("");

    return !!result ? result : number;
  };
}


