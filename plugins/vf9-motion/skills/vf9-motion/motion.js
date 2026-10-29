// VF9 motion: يضيف .in عند دخول العنصر للشاشة، ويضبط التأخير المتدرّج --d بين الإخوة
(() => {
  const els = document.querySelectorAll(".reveal");
  const seen = new Map();
  els.forEach((el) => {
    const n = seen.get(el.parentElement) || 0;
    seen.set(el.parentElement, n + 1);
    el.style.setProperty("--d", n * 90 + "ms");
  });
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach((el) => io.observe(el));
  } else {
    els.forEach((el) => el.classList.add("in"));
  }
})();
