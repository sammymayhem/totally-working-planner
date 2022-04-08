var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM Do YYYY"));

var time = $(".time-block");
var hour = parseInt(currentDay.format("H"));
var saveBtn = $(".saveBtn");
var planText = $(".description").val();
var planTime = $(".time-block").attr("id");
var planSaved = [];

// savedPlan();
console.log(planText);
console.log(planTime);

// local storage
saveBtn.on("click", function(event) {
    var button = $(this);
    var planText = $(".description").val();
    var planTime = button.closest(".time-block").attr("id");
    localStorage.setItem("time", planTime);
    localStorage.setItem("plan", planText);
})

// if (!planTime || !planText) {
//     return;
// }

// function savedPlan (){
//     var time = localStorage.getItem("time");
//     var plan = localStorage.getItem("plan");
//     var planText = $(".description").val();

//     if (!time || !plan) {
//         return;
//     }
//     planText.val() = plan;
// }

// update hour rows on the hour.
function addClass() {
    var time = $(".time-block");
    var hour = parseInt(currentDay.format("H"));
    $(".time-block").each(function theTime(){
        var theHour = parseInt($(this).attr("id"));

    if (theHour < hour) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    } else if (theHour === hour) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
    } else {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
    }
})
}

addClass();


