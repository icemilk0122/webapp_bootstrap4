"use strict";
$(".navbar").on("click", 'a[href^="#"]', function (t) {
  t.preventDefault(), $("html, body").animate({
    scrollTop: $($.attr(this, "href")).offset().top
  }, 500)
}), $(function () {
  $(".swipebox").swipebox()
});
