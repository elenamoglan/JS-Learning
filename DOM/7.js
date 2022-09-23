var links = document.getElementsByTagName("a");
for (let link of links) {
  let href = link.getAttribute("href");

  if (href.includes("https://")) {
    link.style.color = "red";
  }
}
