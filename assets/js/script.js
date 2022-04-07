var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM Do YYYY"));

var hour = document.querySelectorAll(".description");
var hourNow = moment().hour();
var plannerHour = document.getElementById("now").textContent;

console.log(hour);


if (hourNow > plannerHour) {
    pastClass();
} else if (hourNow === plannerHour) {
    presentClass();
} else {
    futureClass();
}

// [0].className

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



