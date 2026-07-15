let todayCommission =
    Number(localStorage.getItem("todayCommission")) || 0;

let monthlyCommission =
    Number(localStorage.getItem("monthlyCommission")) || 0;

let dailyGoal =
    Number(localStorage.getItem("dailyGoal")) || 200;

let monthlyGoal =
    Number(localStorage.getItem("monthlyGoal")) || 3000;
let dailyGoalInput = document.getElementById("dailyGoalInput");
let monthlyGoalInput = document.getElementById("monthlyGoalInput");
let goalbutton = document.getElementById("setGoalButton");
let button = document.getElementById("addButton");
let input = document.getElementById("commissionInput");
let todayDisplay = document.getElementById("todayMoney");
let monthlyDisplay = document.getElementById("monthlyMoney")
let progressBar1 = document.getElementById("todayProgress");
let progressBar2 = document.getElementById("monthlyProgress");
let dailystat = document.getElementById("dailystat")
let monthlystat = document.getElementById("monthlystat")
function updateDisplay() {

    let percentage = (todayCommission / dailyGoal) * 100;
    let percentage2 = (monthlyCommission / monthlyGoal) * 100;

    todayDisplay.innerHTML =
        "$" + todayCommission + " / $" + dailyGoal;

    monthlyDisplay.innerHTML =
        "$" + monthlyCommission + " / $" + monthlyGoal;

    progressBar1.style.width = percentage + "%";
    progressBar2.style.width = percentage2 + "%";

    dailystat.innerHTML =
        percentage.toFixed(2) + "% Complete";

    monthlystat.innerHTML =
        percentage2.toFixed(2) + "% Complete";
    if (percentage > 100) {
    percentage = 100;}

    if (percentage2 > 100) {
    percentage2 = 100;}
};

goalbutton.onclick = function() {

    dailyGoal = Number(dailyGoalInput.value);
    monthlyGoal = Number(monthlyGoalInput.value);

    localStorage.setItem("dailyGoal", dailyGoal);
    localStorage.setItem("monthlyGoal", monthlyGoal);

    dailyGoalInput.value = "";
    monthlyGoalInput.value = "";

    updateDisplay();
};
button.onclick = function() {

    let amount = Number(input.value);

    // Add sale amount
    todayCommission += amount;
    monthlyCommission += amount;

    // Save data
    localStorage.setItem("todayCommission", todayCommission);
    localStorage.setItem("monthlyCommission", monthlyCommission);

    // Refresh screen
    updateDisplay();

    // Clear input
    input.value = "";

};

updateDisplay();