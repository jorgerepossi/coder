let currentValue = 0;
let defaultValue = currentValue;
$("#quantity__number").html(currentValue);

jQuery(".scroll_to").click(function (e) {
  var jump = $(this).attr("href");
  var new_position = $(jump).offset();
  $("html, body").stop().animate({ scrollTop: new_position.top }, 500);
  e.preventDefault();
});

jQuery(".hamburguer").click(() => {
  $(".menu-wrapper ").addClass("isActive").removeClass("smooth");
  $(".darken").addClass("show");
  $(".hamburguer").hide();
});

jQuery(".close").click(() => {
  $(".menu-wrapper ").removeClass("isActive").addClass("smooth");
  $(".darken").removeClass("show");
  $(".hamburguer").show();
});

jQuery("#inoRange").on(" input change", function () {
  $("#value").html(
    "$" + String($("#inoRange").val()).replace(/(.)(?=(\d{3})+$)/g, "$1.")
  );
});

jQuery(".buttons_plus").bind("click", () => {
  $("#quantity__number").html(++defaultValue);
});

jQuery(".buttons_minus").bind("click", () => {
  if (defaultValue != 0) {
    $("#quantity__number").text(--defaultValue);
  } else {
    $("#quantity__number").text(0);
  }
});
