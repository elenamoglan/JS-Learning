function showNotification({ top = 0, right = 0, message, className }) {
  $("body").append("<div>");
  $("div").addClass("notification");
  if (className) {
    $(".notification").addClass(className);
  }
  $(".notification").css({ top: `${top}px`, right: `${right}px` });
  $(".notification").html(message);

  setTimeout(() => $(".notification").remove(), 1500);
}

showNotification({
  top: 10,
  right: 10,
  message: "Hello",
  className: "welcome",
});
