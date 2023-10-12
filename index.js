
document.getElementById("get-activity").addEventListener("click", function() {
  fetch("https://www.boredapi.com/api/activity")
    .then(response => response.json())
    .then(data => {
      document.getElementById("activity").textContent = data.activity
      document.getElementById("title").textContent = "⬇️   ⬇️"
      document.body.classList.add("fun")
    })
})