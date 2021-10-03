document.addEventListener("DOMContentLoaded", function () {
  var parallax = document.querySelectorAll(".parallax");
  var parallaxInstance = M.Parallax.init(parallax, options);
});

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

//FORM
//Contact form selectors
const businessName = document.querySelector("#business_name");
const contactName = document.querySelector("#contact_name");
const phone = document.querySelector("#contact_phone");
const email = document.querySelector("#contact_email");
const date = document.querySelector("#date");
const fullTime = document.querySelector("#full");
const partTime = document.querySelector("#part");
const bothTimes = document.querySelector("#both");
const submitBtn = document.querySelector("#submit-btn");
const errorMessage = document.querySelector("#err");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const businessValue = businessName.value;
  const contactValue = contactName.value;
  const phoneValue = phone.value;
  const emailValue = email.value;
  const dateValue = date.value;
  const typeOfJob = "";

  const formObject = {
    business_name: businessValue,
    contact_name: contactValue,
    phone: phoneValue,
    email: emailValue,
    date: dateValue,
  };
  console.log(formObject);
});
