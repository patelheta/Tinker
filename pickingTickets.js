const maxTickets = function(tickets) {
  tickets.sort(
    (a, b) => {
      return a - b;
    }
  );
  let maxLength = 0;
  for (let i = 0; i < tickets.length; i++) {
    let count = 0;
    for (let j = i; j < tickets.length; j++) {
      let temp = tickets[j + 1] - tickets[j];
      if (temp > 1)
        break;
      count++;
    }
    maxLength = Math.max(maxLength, count);
  }
  return maxLength;
};

console.log(maxTickets([8, 5, 4, 8, 4, 9]));