document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", () => {
    btn.classList.toggle("d-none", window.scrollY < 300);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
