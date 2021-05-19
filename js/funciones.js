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
