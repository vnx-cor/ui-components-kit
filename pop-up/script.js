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

  // Close function
  const closePopup = () => {
    modal.classList.remove("show");
  };

  // Hook up close elements
  closeBtn.addEventListener("click", closePopup);
  okBtn.addEventListener("click", closePopup);

  // Optional: Close pop-up if the user clicks anywhere outside the modal element
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closePopup();
    }
  });
});
