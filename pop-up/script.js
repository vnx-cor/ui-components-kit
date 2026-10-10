document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const modal = document.getElementById("popupModal");
    const openBtn = document.getElementById("openBtn");
    const closeBtn = document.getElementById("closeBtn");
    const okBtn = document.getElementById("okBtn");

    // Open the pop-up when clicking the main button
    openBtn.addEventListener("click", () => {
        modal.classList.add("show");
    });
});