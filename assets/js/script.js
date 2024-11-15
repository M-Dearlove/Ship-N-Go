const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupInfo = document.getElementById("popup-info");
const closePopup = document.getElementById("close-popup");
document.getElementById("small-card").addEventListener("click", () => {
    showPopup("Small Mailbox", "Small units available for $20/month.");
});
document.getElementById("medium-card").addEventListener("click", () => {
    showPopup("Medium Mailbox", "Medium units available for $30/month.");
});
document.getElementById("large-card").addEventListener("click", () => {
    showPopup("Large Mailbox", "Large units available for $35/month.");
});
function showPopup(title, info) {
    popupTitle.textContent = title;
    popupInfo.textContent = info;
    popup.style.display = "flex";
}
closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});
window.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
//Dropdown Menu Trigger
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {});
  });

