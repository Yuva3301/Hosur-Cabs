// ===============================
// FRIENDS TRACK CALL TAXI JAVASCRIPT
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


// WhatsApp booking generic
function bookTaxi() {

  const phone = "919489685561";

  const message =
    "Hello Friends Track Call Taxi, I want to book a taxi in Hosur.";

  const whatsappURL =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
}


// Fare Estimator and Direct Booking
function calculateAndBook(event) {
  if (event) event.preventDefault();

  const pickup = document.getElementById("est-pickup") ? document.getElementById("est-pickup").value.trim() : "";
  const drop = document.getElementById("est-drop") ? document.getElementById("est-drop").value.trim() : "";
  const tripType = document.getElementById("est-type") ? document.getElementById("est-type").value : "local";
  const vehicle = document.getElementById("est-vehicle") ? document.getElementById("est-vehicle").value : "sedan";
  const date = document.getElementById("est-date") ? document.getElementById("est-date").value : "";

  let estimatedPrice = "";
  let estimateText = "";

  if (tripType === "airport") {
    estimatedPrice = vehicle === "suv" ? "₹2,800 - ₹3,000" : "₹2,200 (Fixed Flat Fare)";
    estimateText = `Estimated Fare (${vehicle.toUpperCase()} - Airport Trip):`;
  } else if (tripType === "outstation-oneway") {
    estimatedPrice = vehicle === "suv" ? "From ₹18 / km" : "From ₹13 / km";
    estimateText = `Estimated One-Way Tariff (${vehicle.toUpperCase()}):`;
  } else if (tripType === "outstation-round") {
    estimatedPrice = vehicle === "suv" ? "From ₹16 / km" : "From ₹11 / km";
    estimateText = `Estimated Round-Trip Tariff (${vehicle.toUpperCase()}):`;
  } else {
    estimatedPrice = vehicle === "suv" ? "₹400 (First 4 km)" : "₹250 (First 4 km)";
    estimateText = `Estimated Local Base Fare (${vehicle.toUpperCase()}):`;
  }

  const resultBox = document.getElementById("estimate-result-box");
  const resultTextEl = document.getElementById("est-result-text");
  const resultPriceEl = document.getElementById("est-result-price");

  if (resultBox && resultTextEl && resultPriceEl) {
    resultTextEl.textContent = estimateText;
    resultPriceEl.textContent = estimatedPrice;
    resultBox.style.display = "flex";
  }

  // Build direct WhatsApp message
  const phone = "919489685561";
  let msg = `*🚖 Taxi Booking Enquiry - Friends Track Call Taxi*\n`;
  if (pickup) msg += `📍 *Pickup:* ${pickup}\n`;
  if (drop) msg += `🏁 *Drop:* ${drop}\n`;
  msg += `🚗 *Trip Type:* ${tripType}\n`;
  msg += `🚘 *Vehicle:* ${vehicle.toUpperCase()}\n`;
  if (date) msg += `📅 *Date/Time:* ${date}\n`;
  msg += `💰 *Est. Fare:* ${estimatedPrice}\n`;
  msg += `Please confirm cab availability and driver details.`;

  const waBtn = document.getElementById("btn-wa-confirm");
  if (waBtn) {
    waBtn.href = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  }
}

// Simple page-load message
window.addEventListener("load", function() {

  console.log(
    "Friends Track Call Taxi website loaded successfully."
  );

});