//1.
function printNumbers(from, to) {
  let current = from;

  setTimeout(function go() {
    alert(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}

//

/*
2. Any setTimeout will run only after the current code has finished.
    The i will be the last one: 100000000.
*/
