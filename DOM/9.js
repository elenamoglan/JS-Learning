function showNotification({ top = 0, right = 0, message, className }) {
  const notification = document.createElement("div");
  notification.className = "notification";
  if (className) {
    notification.classList.add(className);
  }

  notification.style.top = `${top}px`;
  notification.style.right = `${right}px`;

  notification.textContent = message;
  document.body.append(notification);

  setTimeout(() => notification.remove(), 1500);
}

showNotification({
  top: 10,
  right: 10,
  message: "Hello",
  className: "welcome",
});
