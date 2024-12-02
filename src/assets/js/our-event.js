const eventRes = {
  method: "GET",
  url: "https://app.nocodb.com/api/v2/tables/m6dhig41l3o06bh/records",
  params: {
    offset: "0",
    limit: "2",
    where: "",
    viewId: "vw636i2cei1bkw1l",
  },
  headers: {
    "xc-token": "qv5ODlxzpSMfQlgWiaQAfJ0hMCdBksAiqV7uzeb6",
  },
};

const monthNames = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const firstEvent = document.getElementById("event_1");
const firstEventName = document.getElementById("event_1_name");
const firstEventDate = document.getElementById("event_1_date");
const firstEventMonth = document.getElementById("event_1_month");
const firstEventTime = document.getElementById("event_1_time");
const firstEventLoc = document.getElementById("event_1_loc");
const firstEventLiturgos = document.getElementById("event_1_liturgos");

const secondEvent = document.getElementById("event_2");
const secondEventName = document.getElementById("event_2_name");
const secondEventDate = document.getElementById("event_2_date");
const secondEventMonth = document.getElementById("event_2_month");
const secondEventTime = document.getElementById("event_2_time");
const secondEventLoc = document.getElementById("event_2_loc");
const secondEventLiturgos = document.getElementById("event_2_liturgos");

const thirdEvent = document.getElementById("event_3");
const thirdEventName = document.getElementById("event_3_name");
const thirdEventDate = document.getElementById("event_3_date");
const thirdEventMonth = document.getElementById("event_3_month");
const thirdEventTime = document.getElementById("event_3_time");
const thirdEventLoc = document.getElementById("event_3_loc");
const thirdEventLiturgos = document.getElementById("event_3_liturgos");

async function handleData() {
  try {
    const response = await axios.request({
      method: "GET",
      url: "https://app.nocodb.com/api/v2/tables/m6dhig41l3o06bh/records",
      params: {
        offset: "0",
        limit: "3",
        where: "",
        viewId: "vw636i2cei1bkw1l",
      },
      headers: {
        "xc-token": "qv5ODlxzpSMfQlgWiaQAfJ0hMCdBksAiqV7uzeb6",
      },
    });
    console.log("Data received:", response.data);

    // first events
    firstEventName.innerText = response.data.list[0].event_name;
    const dateObject1 = new Date(await response.data.list[0].event_date);
    const eventDay1 = dateObject1.getDate().toString().padStart(2, "0");
    const monthIndex1 = dateObject1.getMonth(); // Month is zero-based (0-11)
    const month1 = monthNames[monthIndex1];
    const hours1 = String(dateObject1.getHours()).padStart(2, "0"); // Get hours and ensure it's two digits
    const minutes1 = String(dateObject1.getMinutes()).padStart(2, "0"); // Get minutes and ensure it's two digits
    const time1 = `${hours1}:${minutes1} WIB`; // Combine hours and minutes
    firstEventDate.innerText = eventDay1;
    firstEventMonth.innerText = month1;
    firstEventTime.innerText = time1;
    firstEventLoc.innerText = response.data.list[0].event_location;
    firstEventLiturgos.innerText = response.data.list[0].event_liturgos;
    if (response.data.list[0].deeplink) {
      firstEvent.style.display = "flex";
      firstEvent.href = response.data.list[0].deeplink;
    }

    // second events
    secondEventName.innerText = response.data.list[1].event_name;
    const dateObject2 = new Date(await response.data.list[1].event_date);
    const eventDay2 = dateObject2.getDate().toString().padStart(2, "0");
    const monthIndex2 = dateObject2.getMonth(); // Month is zero-based (0-11)
    const month2 = monthNames[monthIndex2];
    const hours2 = String(dateObject2.getHours()).padStart(2, "0"); // Get hours and ensure it's two digits
    const minutes2 = String(dateObject2.getMinutes()).padStart(2, "0"); // Get minutes and ensure it's two digits
    const time2 = `${hours2}:${minutes2} WIB`; // Combine hours and minutes
    secondEventDate.innerText = eventDay2;
    secondEventMonth.innerText = month2;
    secondEventTime.innerText = time2;
    secondEventLoc.innerText = response.data.list[1].event_location;
    secondEventLiturgos.innerText = response.data.list[1].event_liturgos;
    if (response.data.list[1].deeplink) {
      secondEvent.style.display = "flex";
      secondEvent.href = response.data.list[1].deeplink;
    }

    // third events
    thirdEventName.innerText = response.data.list[2].event_name;
    const dateObject3 = new Date(await response.data.list[2].event_date);
    const eventDay3 = dateObject3.getDate().toString().padStart(2, "0");
    const monthIndex3 = dateObject3.getMonth(); // Month is zero-based (0-11)
    const month3 = monthNames[monthIndex3];
    const hours3 = String(dateObject3.getHours()).padStart(2, "0"); // Get hours and ensure it's two digits
    const minutes3 = String(dateObject3.getMinutes()).padStart(2, "0"); // Get minutes and ensure it's two digits
    const time3 = `${hours3}:${minutes3} WIB`; // Combine hours and minutes
    thirdEventDate.innerText = eventDay3;
    thirdEventMonth.innerText = month3;
    thirdEventTime.innerText = time3;
    thirdEventLoc.innerText = response.data.list[2].event_location;
    thirdEventLiturgos.innerText = response.data.list[2].event_liturgos;
    if (response.data.list[2].deeplink) {
      thirdEvent.style.display = "flex";
      thirdEvent.href = response.data.list[2].deeplink;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

handleData();

const today = new Date();

var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
const options = { month: "short" };
const abbreviatedMonth = today.toLocaleString("en-US", options);

firstEventDate.innerText = dd;
firstEventMonth.innerText = abbreviatedMonth.toUpperCase();
