M.AutoInit();
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var elems2 = document.querySelectorAll(".parallax");
  var instancesSidenav = M.Sidenav.init(elems, options);
  var instancesParallex = M.Parallax.init(elems2, options);
  var elems3 = document.querySelectorAll(".collapsible");
  var instancesCollapsible = M.Collapsible.init(elems3, options);
});

// Intersection Observers
const observer = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.remove("animate__slideOutRight");
      entry.target.classList.add("animate__slideInRight");
      return;
    }
  });
});

//Mission body
observer.observe(document.querySelector(".mission-txt-container"));
