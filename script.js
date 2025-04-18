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
const cookiePopup = document.getElementById("cookiePopup");
const acceptBtn = document.getElementById("acceptCookies");
const denyBtn = document.getElementById("denyCookies");

const consentStatus = localStorage.getItem("cookieConsent");

if (cookiePopup && !consentStatus) {
  cookiePopup.style.display = "flex";
}

acceptBtn?.addEventListener("click", () => {
  localStorage.setItem("cookieConsent", "accepted");
  cookiePopup.style.display = "none";
  console.log("Cookies accepted");
});

denyBtn?.addEventListener("click", () => {
  localStorage.setItem("cookieConsent", "denied");
  cookiePopup.style.display = "none";
  console.log("Cookies denied");
});
