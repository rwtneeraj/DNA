const WAVE_LENGTH = 40;
const AMPLITUDE = 16;

function wait(time) {
  for (let i = 0; i < time * 100000000; i++) { }
}

function repeat(string, times) {
  let newString = "";

  for (let iterator = 0; iterator < times; iterator++) {
    newString += string;
  }

  return newString;
}

function max(x, y) {
  return x > y ? x : y;
}

function min(x, y) {
  return x < y ? x : y;
}

function createDna(x, y) {
  const symbol1 = max(x, y) === x ? "🔴" : "🟡";
  const symbol2 = min(x, y) === x ? "🔴" : "🟡";
  const minValue = min(x, y);
  const maxValue = max(x, y);
  return repeat(" ", minValue) + symbol1 + repeat("─", maxValue - minValue) + symbol2;
}

function dna() {
  for (let angle = 0; angle < 100; angle = angle + 0.15) {
    const sinValue = Math.round((Math.sin(angle) * AMPLITUDE + WAVE_LENGTH));
    const cosValue = Math.round((Math.cos(angle - 180) * AMPLITUDE + WAVE_LENGTH));
    console.log(createDna(sinValue, cosValue));
    wait(0.3);
  }
}

dna();
