const date = new Date();

function curday(argument) {
  return `${
    date.getMonth() + 1
  }${argument}${date.getDate()}${argument}${date.getFullYear()}`;
}

console.log(curday("-"));
console.log(curday("/"));
