M.AutoInit();
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var elems2 = document.querySelectorAll(".parallax");
  var instancesSidenav = M.Sidenav.init(elems, options);
  var instancesParallex = M.Parallax.init(elems2, options);
  var elems3 = document.querySelectorAll(".collapsible");
  var instancesCollapsible = M.Collapsible.init(elems3, options);
  var elems4 = document.querySelector(".materialize-textarea");

  elems4.characterCounter();

  var elems5 = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems5, options);
  // var elems6 = document.querySelectorAll("select");
  // var instancesSelect = M.FormSelect.init(elems6, options);
});
document.addEventListener("DOMContentLoaded", function () {});
