const colors = ["red", "green", "blue"];

function checkColor(color) {
  let position = 0;

  for (let i = 0; i < colors.length; i++) {
    position = -1;

    if (colors[i] === color) {
      position = i;
      break;
    }
  }

  return position;
}

console.log(checkColor("yellow"));
