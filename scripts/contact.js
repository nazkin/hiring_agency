(function () {
  emailjs.init("user_ma4C8IA52CJWNkqA1lhHz");
})();

//Contact form selectors
const full_name = document.querySelector("#full_name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const role = document.querySelector("#role");
const message = document.querySelector("#message");
const submitBtn = document.querySelector("#submit");
const errorMessage = document.querySelector("#err");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const nameValue = full_name.value;
  const emailValue = email.value;
  const phoneValue = phone.value;
  const roles = [];
  for (let i = 1; i < role.selectedOptions.length; i++) {
    roles.push(role.selectedOptions[i].innerText);
  }
  const rolesValue = roles.join(" -&- ");
  const messageValue = message.value;

  //_______________________________________________Basic validation
  if (!full_name.value) {
    errorMessage.classList.remove("form-err");
    errorMessage.classList.add("form-err-active");
    return;
  } else if (!email.value || !phone.value) {
    errorMessage.classList.remove("form-err");
    errorMessage.classList.add("form-err-active");
    return;
  } else if (!rolesValue) {
    errorMessage.classList.remove("form-err");
    errorMessage.classList.add("form-err-active");
    return;
  }
  //________________________________________________

  const formObject = {
    name: nameValue,
    email: emailValue,
    phone: phoneValue,
    roles: rolesValue,
    message: messageValue,
  };
  emailjs
    .send("service_d1zundr", "template_e6n6odr", formObject)
    .then((res) => {
      console.log("Success");
    })
    .catch((err) => console.log(`Error: ${err}`));
});
