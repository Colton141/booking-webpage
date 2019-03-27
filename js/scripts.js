$(document).ready(function() {
  $("#appointments").submit(function(event) {
    var nameInput = $("input#name").val();
    var descriptionInput = $("input#description").val();
    var dateInput = $("input#date").val();
    var startTimeInput = $("input#start-time").val();
    var endTimeInput = $("input#end-time").val();

    $(".name").text(nameInput);
    $(".description").text(descriptionInput);
    $(".date").text(dateInput);
    $(".startTime").text(startTimeInput);
    $(".endTime").text(endTimeInput);

    $("#booking").show();

    $("myModal").on("show.bs.modal"), function() {
      $("#booking").trigger();
    };

    event.preventDefault();
  });
});
