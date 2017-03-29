// Fisher-Yates Shuffle algorithm, from this StackOverflow answer
// http://stackoverflow.com/a/6274398/1405004 (code adapted)
export default function shuffle(array) {
  const a = array;
  let counter = a.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    const index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter -= 1;

    // And swap the last element with it
    [a[counter], a[index]] = [a[index], a[counter]];
  }

  return a;
}
