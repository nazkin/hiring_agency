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

  var modal = document.querySelectorAll(".modal");
  var modalPicker = M.Modal.init(modal, options);
  var datepicker = document.querySelectorAll(".datepicker");
  var datepickerInstance = M.Datepicker.init(datepicker, options);
  // var elems6 = document.querySelectorAll("select");
  // var instancesSelect = M.FormSelect.init(elems6, options);
});
