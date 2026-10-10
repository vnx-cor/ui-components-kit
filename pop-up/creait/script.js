const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const doneBtn = document.getElementById("doneBtn");
const modal = document.getElementById("popupModal");
const dialog = modal.querySelector(".modal-content");

function openModal() {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  dialog.focus();
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  openBtn.focus();
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
doneBtn.addEventListener("click", closeModal);

// Close when clicking the dark overlay (not the card)
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (!modal.classList.contains("is-open")) return;

  if (e.key === "Escape") {
    closeModal();
    return;
  }

  // Keep keyboard focus inside the modal
  if (e.key === "Tab") {
    const focusable = [closeBtn, doneBtn];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});