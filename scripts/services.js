// Intersection Observers
const observer = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    console.log(entry);
    // If the element is visible
    if (entry.isIntersecting) {
      if (entry.target.attributes[0].value === "service-text-1") {
        // entry.target.classList.remove("animate__slideOutLeft");
        entry.target.classList.add("animate__fadeInLeftBig");
        return;
      }
      if (entry.target.attributes[0].value === "service-text-2") {
        // entry.target.classList.remove("animate__slideOutLeft");
        entry.target.classList.add("animate__fadeInRightBig");
        return;
      }
      if (entry.target.attributes[0].value === "role-row-1") {
        // entry.target.classList.remove("animate__slideOutLeft");
        entry.target.classList.add("animate__fadeInLeft");
        entry.target.classList.add("animate__delay-1s");
        return;
      }
      if (entry.target.attributes[0].value === "role-row-2") {
        // entry.target.classList.remove("animate__slideOutLeft");
        entry.target.classList.add("animate__fadeInRight");
        entry.target.classList.add("animate__delay-1s");
        return;
      }
      if (entry.target.attributes[0].value === "area-title") {
        // entry.target.classList.remove("animate__slideOutLeft");
        entry.target.classList.add("animate__fadeInRight");
        entry.target.classList.add("animate__delay-1s");
        return;
      }
      if (entry.target.attributes[0].value === "area-cities") {
        // entry.target.classList.remove("animate__slideOutLeft");
        entry.target.classList.add("animate__fadeInLeft");
        entry.target.classList.add("animate__delay-1s");
        return;
      }
      if (entry.target.attributes[0].value === "service-areas") {
        // entry.target.classList.remove("animate__slideOutLeft");
        entry.target.classList.add("animate__fadeIn");
        entry.target.classList.add("animate__delay-1s");
        return;
      }
    }
  });
});

observer.observe(document.querySelector("#service-text-1"));
observer.observe(document.querySelector("#service-text-2"));
observer.observe(document.querySelector("#role-row-1"));
observer.observe(document.querySelector("#role-row-2"));
observer.observe(document.querySelector("#area-title"));
observer.observe(document.querySelector("#area-cities"));
observer.observe(document.querySelector("#service-areas"));
