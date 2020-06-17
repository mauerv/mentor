const cardGame = (deckA, deckB) => {
  let playing = true;
  while (playing) {
    let cardA = deckA.dequeue();
    let cardB = deckB.dequeue();

    if (cardA < cardB) {
      deckB.enqueue(cardA);
      deckB.enqueue(cardB);
    } else if (cardA > cardB) {
      deckA.enqueue(cardA);
      deckA.enqueue(cardB);
    }

    if (deckA.size() === 0 || deckB.size() === 0) {
      playing = false;
    }
  }

  if (deckA.size() === 0 && deckB.size() === 0) return "Game tie!";
  if (deckA.size() === 0) return "B wins!";
  if (deckB.size() === 0) return "A wins!";
};

function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function (elemento) {
  return this.array.push(elemento);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

Queue.prototype.size = function () {
  return this.array.length;
};