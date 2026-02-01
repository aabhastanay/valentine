// ---------------- PAGE 1 ----------------
const noBtn = document.getElementById("noBtn");

if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });
}

function goYes() {
  window.location.href = "gifts.html";
}

// ---------------- PAGE 2 ----------------
let revealsLeft = 3;

const gifts = [
  "A surprise date 💕",
  "Something sparkly ✨",
  "A cozy hoodie 🧥",
  "Chocolate overload 🍫",
  "A handwritten letter 💌",
  "A mystery box 🎁",
  "A candlelit dinner 🕯️",
  "A plushie 🧸",
  "Something you’ll love 😘"
];

function reveal(tile) {
  if (tile.classList.contains("revealed")) return;
  if (revealsLeft === 0) return;

  tile.textContent = gifts[Math.floor(Math.random() * gifts.length)];
  tile.classList.add("revealed");

  revealsLeft--;
  document.getElementById("counter").textContent =
    "Reveals left: " + revealsLeft;

  if (revealsLeft === 0) {
    document.getElementById("nextBtn").disabled = false;
  }
}

// ---------------- NEXT ----------------
function goNext() {
  window.location.href = "poem.html";
}
