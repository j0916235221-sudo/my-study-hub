document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("back-to-top");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 280) backToTopBtn.classList.add("visible");
      else backToTopBtn.classList.remove("visible");
    }, { passive: true });
    backToTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  const timelineScroll = document.getElementById("timeline-scroll");
  const prevBtn = document.getElementById("timeline-prev");
  const nextBtn = document.getElementById("timeline-next");
  if (timelineScroll && prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => timelineScroll.scrollBy({ left: -320, behavior: "smooth" }));
    nextBtn.addEventListener("click", () => timelineScroll.scrollBy({ left: 320, behavior: "smooth" }));
  }
});
