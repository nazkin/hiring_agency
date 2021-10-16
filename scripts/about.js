// Intersection Observers
const observer = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.attributes[0].value === "our-story") {
        // entry.target.classList.remove("animate__slideOutLeft");
        entry.target.classList.add("animate__fadeInLeft");
        return;
      }
      if (entry.target.attributes[0].value === "our-img") {
        // entry.target.classList.remove("animate__fadeOutLeft");
        entry.target.classList.add("animate__fadeInRight");
        return;
      }
      if (entry.target.attributes[0].value === "about_parallax-1") {
        // entry.target.classList.remove("animate__slideOutLeft");
        entry.target.classList.add("animate__fadeInDown");
        return;
      }
      if (entry.target.attributes[0].value === "about_parallax-2") {
        // entry.target.classList.remove("animate__fadeOutLeft");
        entry.target.classList.add("animate__fadeInUp");
        return;
      }
      if (entry.target.attributes[0].value === "about-last-body-1") {
        // entry.target.classList.remove("animate__slideOutLeft");
        entry.target.classList.add("animate__fadeInDown");
        return;
      }
      if (entry.target.attributes[0].value === "about_parallax-btn") {
        // entry.target.classList.remove("animate__slideOutLeft");
        entry.target.classList.add("animate__fadeInUp");
        return;
      }
      if (entry.target.attributes[0].value === "about-last-body-2") {
        // entry.target.classList.remove("animate__slideOutLeft");
        entry.target.classList.add("animate__fadeInUp");
        return;
      }
      if (entry.target.attributes[0].value === "gears") {
        // entry.target.classList.remove("animate__slideOutLeft");
        entry.target.classList.add("animate__fadeInRight");
        return;
      }
    }
  });
});
observer.observe(document.querySelector("#our-story"));
observer.observe(document.querySelector("#our-img"));
observer.observe(document.querySelector("#about_parallax-1"));
observer.observe(document.querySelector("#about_parallax-2"));
observer.observe(document.querySelector("#about_parallax-btn"));
observer.observe(document.querySelector("#about-last-body-1"));
observer.observe(document.querySelector("#about-last-body-2"));
observer.observe(document.querySelector("#gears"));
