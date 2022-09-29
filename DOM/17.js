const element = document.getElementById("elem");

element.addEventListener("click", () => {
  alert(
    `${getComputedStyle(element).height}, ${getComputedStyle(element).width}`
  );

  const startWidth = element.offsetWidth;
  const startHeight = element.offsetHeight;
  element.style.width = `${startWidth * 2}px`;
  element.style.height = `${startHeight * 2}px`;
});
