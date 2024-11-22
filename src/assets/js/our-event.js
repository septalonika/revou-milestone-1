const firstEventDate = document.getElementById("event-1-date");
const firstEventMonth = document.getElementById("event-1-month");

const today = new Date();

var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
const options = { month: "short" };
const abbreviatedMonth = today.toLocaleString("en-US", options);

firstEventDate.innerText = dd;
firstEventMonth.innerText = abbreviatedMonth.toUpperCase();
