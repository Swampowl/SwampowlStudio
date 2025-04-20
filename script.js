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


// COOKIES
const overlay = document.getElementById("cookieOverlay");
const acceptBtn = document.getElementById("acceptCookies");
const denyBtn = document.getElementById("denyCookies");

if (overlay && !localStorage.getItem("cookieConsent")) {
  overlay.style.display = "flex";
  document.body.style.overflow = "hidden"; // prevent scroll
}

function closeCookieOverlay() {
  overlay.style.display = "none";
  document.body.style.overflow = ""; // restore scroll
}

acceptBtn?.addEventListener("click", () => {
  localStorage.setItem("cookieConsent", "accepted");
  closeCookieOverlay();
});

denyBtn?.addEventListener("click", () => {
  localStorage.setItem("cookieConsent", "denied");
  closeCookieOverlay();
});

