function toggleMenu() {
  document.getElementById('mobile').classList.toggle('active');
}

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.addEventListener("click", () => {
    const p = item.querySelector("p");
    p.style.display = (p.style.display === "block") ? "none" : "block";
  });
});

function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}

function openForm() {
  document.getElementById("popupForm").style.display = "flex";
}

function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}