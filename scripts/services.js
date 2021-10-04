(function () {
  emailjs.init("user_ma4C8IA52CJWNkqA1lhHz");
})();

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
const submitBtn = document.querySelector("#submit-form");
const hours = document.querySelector("#hours");
const errorMessage = document.querySelector("#err");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const businessValue = businessName.value;
  const contactValue = contactName.value;
  const phoneValue = phone.value;
  const emailValue = email.value;
  const dateValue = date.value;
  let typeOfJob = "";
  if (fullTime.checked) {
    typeOfJob = fullTime.value;
  } else if (partTime.checked) {
    typeOfJob = partTime.value;
  } else if (bothTimes.checked) {
    typeOfJob = "Both part time and full time could work";
  }
  const weeklyHours = [];
  for (let i = 0; i < hours.selectedOptions.length; i++) {
    weeklyHours.push(hours.selectedOptions[i].innerText);
  }
  const hoursValue = weeklyHours.join(" ");

  const formObject = {
    business_name: businessValue,
    contact_name: contactValue,
    phone: phoneValue,
    email: emailValue,
    hours: hoursValue,
    date: dateValue,
    jobType: typeOfJob,
  };
  emailjs
    .send("service_d1zundr", "template_ak2y25m", formObject)
    .then(() => console.log("Success"))
    .catch((err) => console.log("Error"));
});

// Intersection Observers
const observer = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
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
