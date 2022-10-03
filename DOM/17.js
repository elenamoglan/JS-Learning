const element = document.getElementById("elem");

element.addEventListener("click", () => {
  const { height, width } = getComputedStyle(element);
  alert(`${height}, ${width}`);

  const { offsetWidth, offsetHeight } = element;
  element.style.width = `${offsetWidth * 2}px`;
  element.style.height = `${offsetHeight * 2}px`;
});
