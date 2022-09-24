const ball = document.getElementById("ball");
const field = document.getElementById("field");

// center
ball.style.left = `${Math.round(
  field.clientWidth / 2 - ball.offsetWidth / 2
)}px`;
ball.style.top = `${Math.round(
  field.clientHeight / 2 - ball.offsetHeight / 2
)}px`;

// bottom right
// ball.style.left = `${Math.round(field.clientWidth - ball.clientWidth)}px`;
// ball.style.top = `${Math.round(field.clientHeight - ball.clientHeight)}px`;

// bottom left
// ball.style.top = `${Math.round(field.clientHeight - ball.clientHeight)}px`;

// top right
// ball.style.left = `${Math.round(field.clientWidth - ball.clientWidth)}px`;
