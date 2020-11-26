var menu = $(".header-right > a");
var menuHamburger = $(".hamburger-menu");
var croce = $(".hamburger-menu > a");

menu.click(function () {
  menuHamburger.addClass("active");
});

croce.click(function () {
  menuHamburger.removeClass("active");
});
