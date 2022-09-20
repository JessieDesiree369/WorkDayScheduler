$(document).ready(function () {
  //show today's date
  var today = moment();
  $("#currentDay").text(today.format("dddd, MMMM Do"));

  //color code the time blocks based on the current time
  var colorCode = function () {
    var timeRN = moment().hour();

    $(".time-block").each(function () {
      var rowHR = parseInt($(this).attr("id").split("-")[1]);

      if (rowHR < timeRN) {
        $(this).addClass("past");
      } else if (rowHR === timeRN) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  };
  
  colorCode();

  //get time blocks for localStorage
  $("#time-9 textarea").val(localStorage.getItem("time-9"))
  $("#time-10 textarea").val(localStorage.getItem("time-10"))
  $("#time-11 textarea").val(localStorage.getItem("time-11"))
  $("#time-12 textarea").val(localStorage.getItem("time-12"))
  $("#time-13 textarea").val(localStorage.getItem("time-13"))
  $("#time-14 textarea").val(localStorage.getItem("time-14"))
  $("#time-15 textarea").val(localStorage.getItem("time-15"))
  $("#time-16 textarea").val(localStorage.getItem("time-16"))
  $("#time-17 textarea").val(localStorage.getItem("time-17"))

  //save text from textarea of the clicked button
  $(".saveBtn").click(function(){
      var key = $(this).parent().attr("id");
      var event = $(this).siblings("textarea").val()
      localStorage.setItem(key, event);
  })
  

});
