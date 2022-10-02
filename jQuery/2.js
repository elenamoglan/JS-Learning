$(".delete_button").click(function () {
  $(this).parent().remove();
});

$("#add_button").click(() => {
  const lastRow = $("table").closest("table").find("tr:last-child");
  const newRow = lastRow.clone();
  newRow.find("td:first-child").html($("#newRow").val());
  newRow.insertAfter(lastRow);
});
