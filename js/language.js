function switchLanguage(lang) {
     console.log("lang:...", lang)
  // Set the HTML lang attribute
  document.documentElement.lang = lang;

  // Update content based on the selected language
  if (lang === "en") {
    document.getElementById("home").textContent = "Home";
    document.getElementById("about").textContent = "About Us";
    document.getElementById("our-service").textContent = "Our Service";
    document.getElementById("web-hosting").textContent = "Web Hosting";
    document.getElementById("help").textContent = "Help";
    document.getElementById("page").textContent = "Pages";
    document.getElementById("contact-us").textContent = "Contact Us";
  } else if (lang === "la") {
    document.getElementById("home").textContent = "ໜ້າຫຼັກ";
    document.getElementById("about").textContent = "ກ່ຽວກັບພວກເຮົາ";
    document.getElementById("our-service").textContent = "ບໍລິການຂອງເຮົາ";
    document.getElementById("web-hosting").textContent = "້ເວບໂຮສຕີ່ງ";
    document.getElementById("help").textContent = "ຊ່ວຍເຫຼືອ";
    document.getElementById("page").textContent = "ໜ້າທັງໝົດ";
    document.getElementById("contact-us").textContent = "ຕິດຕໍ່ພວກເຮົາ";
  }

  localStorage.setItem("selectedLanguage", lang);
}

// Check if language was previously selected and apply it on page load
document.addEventListener("DOMContentLoaded", () => {
  const selectedLanguage = localStorage.getItem("selectedLanguage");
  console.log('selectedLanguage:....', selectedLanguage)
  if (selectedLanguage) {
    switchLanguage(selectedLanguage);
  }
});
