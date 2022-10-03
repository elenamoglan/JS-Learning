const player = document.getElementById("player");
const player2 = document.getElementById("player2");
const viewport = document.getElementById("viewport");
player.tabIndex = 0;
player2.tabIndex = 0;

player.addEventListener("keydown", (event) => {
  player.style.left = `${player.getBoundingClientRect().left}px`;
  player.style.top = `${player.getBoundingClientRect().top}px`;

  switch (event.key) {
    case "ArrowLeft": // если нажата клавиша влево
      player.style.left = `${
        parseInt(player.style.left) - player.offsetWidth
      }px`;

      break;
    case "ArrowUp": // если нажата клавиша вверх
      player.style.top = `${
        parseInt(player.style.top) - player.offsetHeight
      }px`;

      break;
    case "ArrowRight": // если нажата клавиша вправо
      player.style.left = `${
        parseInt(player.style.left) + player.offsetWidth
      }px`;

      break;
    case "ArrowDown": // если нажата клавиша вниз
      player.style.top = `${
        parseInt(player.style.top) + player.offsetHeight
      }px`;

      break;
  }
});

player2.addEventListener("keydown", (event) => {
  const { left, top: vtop } = viewport.getBoundingClientRect();
  const pleft = `${player2.getBoundingClientRect().left}px`;
  const ptop = player2.getBoundingClientRect().top + "px";

  switch (event.key) {
    case "ArrowLeft":
      if (parseInt(pleft) - left - player2.offsetWidth >= 0) {
        player2.style.left = `${
          parseInt(pleft) - left - player2.offsetWidth
        }px`;
      }

      break;
    case "ArrowUp":
      if (parseInt(ptop) - vtop - player2.offsetHeight >= 0) {
        player2.style.top = `${parseInt(ptop) - vtop - player2.offsetHeight}px`;
      }

      break;
    case "ArrowRight":
      if (
        player2.offsetWidth + parseInt(pleft) - left + player2.offsetWidth <
        viewport.offsetWidth
      ) {
        player2.style.left = `${
          player2.offsetWidth + parseInt(pleft) - left
        }px`;
      }

      break;
    case "ArrowDown":
      if (
        player2.offsetHeight + parseInt(ptop) - vtop + player2.offsetHeight <
        viewport.offsetHeight
      ) {
        player2.style.top = `${player2.offsetHeight + parseInt(ptop) - vtop}px`;
      }

      break;
  }
});
