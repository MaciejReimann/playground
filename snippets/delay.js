async function delay(ms) {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, ms);
  });
}

(async function () {
  for (let i = 0; i < 6; i++) {
    const delayMS = 1000
    await delay(delayMS)
    console.log(`With delay of ${delayMS * i / 1000} seconds`)
  }
})()

// node snippets/delay.js