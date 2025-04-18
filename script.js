// 🌗 THEME TOGGLE with localStorage
const themeBtn = document.getElementById("themeToggle");

function applyTheme(theme) {
  document.body.classList.toggle("light-mode", theme === "light");
  if (themeBtn) themeBtn.textContent = theme === "light" ? "🌞" : "🌙";
  localStorage.setItem("theme", theme);
}

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const newTheme = document.body.classList.contains("light-mode") ? "dark" : "light";
    applyTheme(newTheme);
  });
}

const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);

// 🌄 PARALLAX EFFECT
window.addEventListener("scroll", () => {
  const parallaxSections = document.querySelectorAll(".parallax");
  parallaxSections.forEach(section => {
    const scroll = window.scrollY;
    section.style.backgroundPositionY = -(scroll * 0.3) + "px";
  });
});

// 🖼️ DYNAMIC MEDIA GALLERY
const galleryImages = ["screenshot1.jpg", "screenshot2.jpg", "screenshot3.jpg"];
const gallery = document.getElementById("mediaGallery");

if (gallery) {
  galleryImages.forEach((img, i) => {
    const imageEl = document.createElement("img");
    imageEl.src = `assets/images/${img}`;
    imageEl.alt = `Screenshot ${i + 1}`;
    gallery.appendChild(imageEl);
  });
}

// 🧠 DYNAMIC DEV BLOG LIST
const devUpdates = [
  { date: "March 2025", update: "Finished level design prototype." },
  { date: "April 2025", update: "First trailer teaser released!" },
  { date: "May 2025", update: "Boss AI logic nearing completion." }
];

const updatesList = document.getElementById("devUpdates");

if (updatesList) {
  devUpdates.forEach(entry => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${entry.date}:</strong> ${entry.update}`;
    updatesList.appendChild(li);
  });
}
