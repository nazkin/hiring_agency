// Intersection Observers
const observer = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    console.log(entry);
    if (entry.isIntersecting) {
      if (entry.target.attributes[0].value === "card1") {
        // entry.target.classList.remove("animate__slideOutLeft");
        entry.target.classList.add("animate__slideInLeft");
        return;
      }
      if (entry.target.attributes[0].value === "card2") {
        // entry.target.classList.remove("animate__slideOutRight");
        entry.target.classList.add("animate__slideInRight");
        return;
      }
      if (entry.target.attributes[0].value === "mission-title") {
        // entry.target.classList.remove("animate__fadeOutLeft");
        entry.target.classList.add("animate__fadeInDown");
        return;
      }

      if (entry.target.attributes[0].value === "mission") {
        // entry.target.classList.remove("animate__fadeOutRight");
        entry.target.classList.add("animate__fadeInUp");
        return;
      }
      if (entry.target.attributes[0].value === "service-title") {
        // entry.target.classList.remove("animate__slideOutLeft");
        entry.target.classList.add("animate__fadeInLeft");
        return;
      }
      if (entry.target.attributes[0].value === "serv-title-small") {
        // entry.target.classList.remove("animate__fadeOut");
        entry.target.classList.add("animate__fadeInDown");
        return;
      }
      if (entry.target.attributes[0].value === "service-list") {
        // entry.target.classList.remove("animate__slideOutRight");
        entry.target.classList.add("animate__fadeInRight");
        return;
      }
      if (entry.target.attributes[0].value === "service-btn") {
        // entry.target.classList.remove("animate__fadeOut");
        entry.target.classList.add("animate__fadeInUp");
        return;
      }
      if (entry.target.attributes[0].value === "cta-text") {
        // entry.target.classList.remove("animate__fadeOut");
        entry.target.classList.add("animate__fadeInUp");
        return;
      }
      if (entry.target.attributes[0].value === "cta-btn") {
        // entry.target.classList.remove("animate__fadeOut");
        entry.target.classList.add("animate__fadeInDown");
        return;
      }
    }
  });
});

observer.observe(document.querySelector("#mission-title"));
observer.observe(document.querySelector("#mission"));

observer.observe(document.querySelector("#card1"));
observer.observe(document.querySelector("#card2"));
observer.observe(document.querySelector("#service-title"));
observer.observe(document.querySelector("#serv-title-small"));
observer.observe(document.querySelector("#service-list"));
observer.observe(document.querySelector("#service-btn"));

observer.observe(document.querySelector("#cta-text"));
observer.observe(document.querySelector("#cta-btn"));
