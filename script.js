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

// ---------------- PAGE 2 (GIFTS) ----------------
let revealsLeft = 3;

// Original gifts
const gifts = [
  "A surprise date 💕",
  "Something you’ll love ✨",
  "A cozy hoodie 🧥",
  "Chocolate overload 🍫",
  "A handwritten letter 💌",
  "An exotic snack 🍪",
  "A lovely perfume 🌸",
  "A plushie 🧸",
  "Dealer's choice 🤭"
];


// Shuffle gifts array using Fisher-Yates
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffledGifts = shuffle([...gifts]); // copy & shuffle
let giftIndex = 0;

function reveal(tile) {
  if (tile.classList.contains("revealed")) return;
  if (revealsLeft === 0) return;

  // Assign next gift in shuffled array
  tile.textContent = shuffledGifts[giftIndex];
  giftIndex++;

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
