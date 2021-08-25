M.AutoInit();
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var elems2 = document.querySelectorAll(".parallax");
  var instancesSidenav = M.Sidenav.init(elems, options);
  var instancesParallex = M.Parallax.init(elems2, options);
  var elems3 = document.querySelectorAll(".collapsible");
  var instancesCollapsible = M.Collapsible.init(elems3, options);
});
