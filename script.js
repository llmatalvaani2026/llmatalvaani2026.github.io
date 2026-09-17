const translations = {
  en: "മലയാളം",
  ml: "English"
};

let currentLang = "en";

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "ml" ? "ml" : "en";
  document.body.classList.toggle("ml", lang === "ml");
  document.querySelectorAll("[data-en][data-ml]").forEach(el => {
    el.innerHTML = el.dataset[lang];
  });
  const button = document.getElementById("langToggle");
  button.textContent = translations[lang];
  localStorage.setItem("workshopLanguage", lang);

  const brochureLink = document.getElementById("brochureLink");

  if (brochureLink) {
  if (lang === "en") {
    brochureLink.href = brochureLink.dataset.enHref;
  } else {
    brochureLink.href = brochureLink.dataset.mlHref;
  }
}

}

document.getElementById("langToggle").addEventListener("click", () => {
  setLanguage(currentLang === "en" ? "ml" : "en");
});

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
menuToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
});
document.querySelectorAll("#mobileNav a").forEach(a => {
  a.addEventListener("click", () => mobileNav.classList.remove("open"));
});

// Event countdown — local browser time.
const eventStart = new Date("2026-09-28T09:00:00+05:30").getTime();

function updateCountdown() {
  const diff = eventStart - Date.now();
  if (diff <= 0) {
    ["days","hours","minutes","seconds"].forEach(id => document.getElementById(id).textContent = "0");
    return;
  }
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  document.getElementById("days").textContent = String(d).padStart(2, "0");
  document.getElementById("hours").textContent = String(h).padStart(2, "0");
  document.getElementById("minutes").textContent = String(m).padStart(2, "0");
  document.getElementById("seconds").textContent = String(s).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

const savedLang = localStorage.getItem("workshopLanguage");
if (savedLang === "ml") setLanguage("ml");
