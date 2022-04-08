var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM Do YYYY"));

var hourNow = moment().format("[hour-]H");
var timeID = $(".time-block").attr("id");
var time = $(".time-block");
var hour = parseInt(currentDay.format("H"));
var saveBtn = $(".saveBtn");
var planText = document.querySelector(".description");

// savedPlan();

// Changes input box background every hour
// if (timeID < hourNow) {
//     pastClass();
// } else if (timeID === hourNow) {
//     presentClass();
// } else if (timeID > hourNow){
//     futureClass();
// } 

// local storage
saveBtn.on("click", function() {
    var button = $(this);
    var planText = $(".description").val();
    var planTime = button.closest(".time-block").attr("id");
    localStorage.setItem("time", planTime);
    localStorage.setItem("plan", planText);
})

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

// function getSavedPlan (){
//     var planTime = localStorage.getItem("time");
//     var planText = localStorage.getItem("plan");
//     if (!localStorage.getItem("plan")) {
//         return "";
//     } 
      
// }

// getSavedPlan();




// for (var i = 0; i < 10; i++) {
//     if (timeID < hourNow) {
//         pastClass(past);
//     } else if (timeID === hourNow) {
//         presentClass(present);
//     } else {
//         futureClass(future);
//     }
// }

// function pastClass() {
//     $(".time-block").each(function () {
//         $(this).removeClass("future", "present")
//         $(this).addClass("past");
//     });
// }

// function presentClass() {
//     $(".time-block").each(function () {
//         $(this).removeClass("future", "past")
//         $(this).addClass("present");
//     });
// }

// function futureClass() {
//     $(".time-block").each(function () {
//         $(this).removeClass("present", "past")
//         $(this).addClass("future");
//     });
// }



// function pastClass(past) {
//         past.classList.remove("present", "future");
//         past.classList.add("past");
// }

// function presentClass(present) {
//         present.classList.remove("future", "past");
//         present.classList.add("present");
// }

// function futureClass(future) {
//         future.classList.remove("past", "present");
//         future.classList.add("future");
// }



// Get values from local storage

// Put them in local storage on button click (one for each button)

//loop through each element, for each element, get that hour, compare to current hour, add class
