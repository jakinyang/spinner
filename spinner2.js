const spinner = function(reps) {
  let array = ['\r|', '\r/', '\r-', `\r\\`];
  let delay = 500;
  let repCycle = reps;
  for(let j = 0; j <= repCycle; j++) {
    for(let i = 0; i < 4; i++) {
      setTimeout(() => {
        process.stdout.write(array[i]);
      }, delay);
      delay += 100;
    }
  }
}

spinner(10);