





const myModal = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupInfo = document.getElementById("popup-info");
const closeBtn = document.getElementById("close-popup");

document.getElementById("small-card").addEventListener("click",()=>{
    showPopup("small-mailbox","dhhshsdhhshsshshshs")
});

document.getElementById("medium-card").addEventListener("click",()=>{
    showPopup("medium-mailbox","dhhshsdhhshsshshshs")
});

document.getElementById("large-card").addEventListener("click",()=>{
    showPopup("large-mailbox","dhhshsdhhshsshshshs")
});

function showPopup(title,info){
    popupTitle.textContent = title;
    popupInfo.textContent = info;
    popupInfo.style.display = "flex";
}

closePopup.addEventListener("click",()=>{
popup.style.display ="none";
});

window.addEventListener("click",(e)=>{
    if(e.target === popup){
    popup.style.display = "none";
    }
});

//dropdown menu trigger
document.addEventListener('DOMContentLoaded', function(){
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.dropdown.init(elems,{});
});