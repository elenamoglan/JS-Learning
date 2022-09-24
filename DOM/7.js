const links = document.getElementsByTagName("a");

for (const link of links) {
  const href = link.getAttribute("href");

  if (href.includes("https://")) {
    link.style.color = "red";
  }
}
