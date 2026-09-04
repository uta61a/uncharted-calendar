const storageKey = "exam-date";

const setup = document.querySelector("#setup");
const home = document.querySelector("#home");
const form = document.querySelector("#date-form");
const input = document.querySelector("#exam-date");
const calendarButton = document.querySelector("#calendar-button");
const change = document.querySelector("#change");
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

function todayString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getRemaining(dateValue) {
  const [year, month, day] = dateValue.split("-").map(Number);
  const target = new Date(year, month - 1, day);
  const totalSeconds = Math.max(
    0,
    Math.floor((target.getTime() - Date.now()) / 1000),
  );

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function showSetup() {
  input.value = localStorage.getItem(storageKey) || todayString();
  input.min = todayString();
  setup.classList.remove("hidden");
  home.classList.add("hidden");
}

function showHome() {
  setup.classList.add("hidden");
  home.classList.remove("hidden");
  updateCountdown();
}

function updateCountdown() {
  const examDate = localStorage.getItem(storageKey);

  if (!examDate) {
    return;
  }

  const remaining = getRemaining(examDate);
  days.textContent = remaining.days;
  hours.textContent = remaining.hours;
  minutes.textContent = remaining.minutes;
  seconds.textContent = remaining.seconds;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  localStorage.setItem(storageKey, input.value);
  showHome();
});

change.addEventListener("click", showSetup);

calendarButton.addEventListener("click", () => {
  input.focus();

  if (typeof input.showPicker === "function") {
    input.showPicker();
  }
});

if (localStorage.getItem(storageKey)) {
  showHome();
} else {
  showSetup();
}

setInterval(updateCountdown, 1000);
