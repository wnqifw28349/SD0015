const cookieBtn = document.getElementById("cookie-btn");
const cookieDisplay = document.getElementById("cookie-display");
const grandmaBtn = document.getElementById("grandma-btn");
const cpsDisplay = document.getElementById("cps-display");
const scoreDisplay = document.getElementById("hi-score");

let cookies = Number(localStorage.getItem("cookies")) || 0;
cookieDisplay.textContent = cookies;

let cps = Number(localStorage.getItem("cps")) || 0;
cpsDisplay.textContent = cps;

function Cookies() {
  cookies = cookies + cps;
  hiScore = cookies;
  cookieDisplay.textContent = cookies;
  localStorage.setItem("cookies", JSON.stringify(cookies));
}

setInterval(Cookies, 1000);

function makeCookie() {
  cookies = cookies + 1;
  cookieDisplay.textContent = cookies;
}

cookieBtn.addEventListener("click", makeCookie);

function addGrandma() {
  if (cookies >= 5) {
    cps = cps + 1;
    cookies = cookies - 5;
    cpsDisplay.textContent = cps;
    cookieDisplay.textContent = cookies;
    localStorage.setItem("cps", JSON.stringify(cps));
  } else {
    cookieDisplay.textContent = "Reset for Granny Spamming!";
    cookies = 0;
    cps = 0;
    localStorage.clear("cookies", "cps");
    cpsDisplay.textContent = cps;
  }
}

grandmaBtn.addEventListener("click", addGrandma);

function upgradeLogic(upgrades, i) {
  if (cookies >= upgrades[i].cost) {
    cookies = cookies - upgrades[i].cost;
    cps = cps + upgrades[i].increase;
    cpsDisplay.textContent = cps;
    cookieDisplay.textContent = cookies;
    localStorage.setItem("cps", JSON.stringify(cps));
  } else {
    cookieDisplay.textContent = "You need more cookies!";
  }
}

async function fetchUpgrades() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  const data = await response.json();

  createUpgrades(data);
}

const container = document.getElementById("upgrades");

function createUpgrades(upgrades) {
  for (let i = 0; i < upgrades.length; i += 1) {
    const para = document.createElement("p");
    para.className = "";
    const btn = document.createElement("button");
    para.textContent =
      upgrades[i].name +
      " - cost: " +
      upgrades[i].cost +
      " - increases CPS by " +
      upgrades[i].increase +
      ". ";
    btn.textContent = "Buy";
    btn.addEventListener("click", function () {
      upgradeLogic(upgrades, i);
    });
    para.append(btn);
    container.append(para);
  }
}

fetchUpgrades();
