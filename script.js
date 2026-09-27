// ===============================
// HOSUR CABS JAVASCRIPT
// ===============================


// Current year in footer
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function(event) {

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (target) {

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  });

});


// WhatsApp booking
function bookTaxi() {

  const phone = "919489685561";

  const message =
    "Hello Hosur Cabs, I want to book a taxi.";

  const whatsappURL =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
}


// Simple page-load message
window.addEventListener("load", function() {

  console.log(
    "Hosur Cabs website loaded successfully."
  );

});