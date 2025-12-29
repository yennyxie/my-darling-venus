const password = document.getElementById("password");
const nickname = document.getElementById("nickname");
const mainEnvelope = document.getElementById("main-envelope");

// PASSWORD
password.addEventListener("input", () => {
  if (password.value === "0922") {
    document.getElementById("lock-screen").classList.add("hidden");
    document.getElementById("envelope-screen").classList.remove("hidden");
  }
});

// NICKNAME
nickname.addEventListener("input", () => {
  if (nickname.value.toLowerCase() === "collie") {
    mainEnvelope.classList.remove("hidden");
  }
});

// OPEN MAIN ENVELOPE
mainEnvelope.addEventListener("click", () => {
  document.getElementById("envelope-screen").classList.add("hidden");
  document.getElementById("letter-chain").classList.remove("hidden");
});

// OPEN LETTERS ONE BY ONE
document.querySelectorAll(".letter-envelope").forEach(env => {
  env.addEventListener("click", () => {
    const content = env.querySelector(".letter-content");
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});
