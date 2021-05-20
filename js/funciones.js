let currentValue = 0;
let defaultValue = currentValue + 1;
let price = $(".pricetotal").attr("data-price");
let lessprice = $(".pricetotal").text();
$("#quantity__number").html(defaultValue);

jQuery(".scroll_to").click(function (e) {
  var jump = $(this).attr("href");
  var new_position = $(jump).offset();
  $("html, body").stop().animate({ scrollTop: new_position.top }, 500);
  e.preventDefault();
});

jQuery(".hamburguer").click(() => {
  $(".menu-wrapper ").addClass("isActive").removeClass("smooth");
  $(".darken").addClass("showing");
  $(".hamburguer").hide();
});

jQuery(".close").click(() => {
  $(".menu-wrapper ").removeClass("isActive").addClass("smooth");
  $(".darken").removeClass("showing");
  $(".hamburguer").show();
});

jQuery("#inoRange").on(" input change", function () {
  $("#value").html(
    "$" + String($("#inoRange").val()).replace(/(.)(?=(\d{3})+$)/g, "$1.")
  );
});

jQuery(".buttons_plus").bind("click", () => {
  $("#quantity__number").html(++defaultValue);

  $(".pricetotal").html(
    "$" + String(price * defaultValue).replace(/(.)(?=(\d{3})+$)/g, "$1.")
  );
  console.log(lessprice);
});

jQuery(".buttons_minus").bind("click", () => {
  if (defaultValue != 0) {
    $("#quantity__number").text(--defaultValue);
    $(".pricetotal").html(
      "$" + String(price * defaultValue).replace(/(.)(?=(\d{3})+$)/g, "$1.")
    );
  } else {
    $("#quantity__number").text(0);
  }
});
