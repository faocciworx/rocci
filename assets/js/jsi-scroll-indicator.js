$(document).ready(function () {
  const indicator = $(".modernScrollIndicator");
  if (!indicator.length) return;

  let lastScrollTop = 0;

  $(window).on("scroll", function () {
    const st = $(this).scrollTop();

    if (st > 50 && st > lastScrollTop) {
      indicator.stop(true, true).fadeOut(400);
    } else if (st <= 50 || st < lastScrollTop) {
      indicator.stop(true, true).fadeIn(400);
    }

    lastScrollTop = st;
  });
});
