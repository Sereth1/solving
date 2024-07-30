const arr = [1, 2, 3, 3];

function blowCandles(candles) {
  const p = Math.max(...candles) && candles.fi;
  const k = candles.filter((a) => a === p);

  return k.length;
}

console.log(blowCandles(arr));
