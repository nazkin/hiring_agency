// Intersection Observers
const observer = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      if (entry.target.attributes[0].value === "serv-checklist") {
        // entry.target.classList.remove("animate__slideOutLeft");
        entry.target.classList.add("animate__fadeInLeft");
        return;
      }
      if (entry.target.attributes[0].value === "checklist-img") {
        // entry.target.classList.remove("animate__slideOutLeft");
        entry.target.classList.add("animate__fadeInRight");
        return;
      }
      if (entry.target.attributes[0].value === "business_process") {
        // entry.target.classList.remove("animate__slideOutLeft");
        entry.target.classList.add("animate__fadeInUp");
        entry.target.classList.add("animate__delay-1s");
        return;
      }
    }
  });
});
observer.observe(document.querySelector("#serv-checklist"));
observer.observe(document.querySelector("#checklist-img"));

observer.observe(document.querySelector("#business_process"));
