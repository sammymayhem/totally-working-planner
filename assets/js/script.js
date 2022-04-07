var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM Do YYYY"));

var hour = document.querySelectorAll(".description");
var hourNow = moment().hour();
var plannerHour = document.getElementById("now").textContent;

// Changes input box background every hour
if (hourNow > 9) {
    pastClass();
} else if (hourNow === plannerHour) {
    presentClass();
} else {
    futureClass();
}

function pastClass() {
    for (const past of hour) {
        past.classList.remove("present", "future")
        past.classList.add("past");
    }
}

function presentClass() {
    for (const present of hour) {
        present.classList.remove("future", "past");
        present.classList.add("present");
    }
}

function futureClass() {
    for (const future of hour) {
        future.classList.remove("past", "present");
        future.classList.add("future");
    }
}



