
document.addEventListener("DOMContentLoaded", function () {
  const targets = document.querySelectorAll(".animate-target");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Tambahkan kelas untuk memicu animasi
          entry.target.classList.add("animate-on-scroll", "animate-start");
          observer.unobserve(entry.target); // hentikan pengamatan agar animasi tidak terus berulang
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  targets.forEach((target) => {
    observer.observe(target);
  });
});
