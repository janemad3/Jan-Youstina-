const target = new Date("2026-08-27T18:00:00");

setInterval(() => {
  const diff = target - new Date();

  if (diff <= 0) return;

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);

  document.getElementById("countdown").innerHTML =
    `<h2>${days} Days ${hours} Hours ${minutes} Minutes</h2>`;
}, 1000);

function reply(response) {

  const name = document.getElementById("name").value || "Guest";

  fetch("https://script.google.com/macros/s/AKfycbxMFUuXwOR0YWEzTbkjulcUYY295_rlxk_kQfAbhbu0umcBW8mdTtvvjcPwKeROI3lr/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      guests: 1,
      response: response
    })
  })
  .then(() => {
    document.getElementById("msg").innerHTML =
      "❤️ Thank you! Your RSVP has been received.";
  })
  .catch(() => {
    document.getElementById("msg").innerHTML =
      "❌ Something went wrong.";
  });

}
