$(function() {
  if (
    !navigator.userAgent.match(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
    )
  ) {
    $(".panel").css({
      height: $(window).height()
    });
    var timer;

    $(window).resize(function() {
      clearTimeout(timer);
      timer = setTimeout(function() {
        $(".panel").css({
          height: $(window).height()
        });
      }, 40);
    });

    $.scrollify({
      section: ".panel",
      offset: 0
    });
  }

  if (
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPhone/i)
  ) {
    $("body").addClass("safari");
  }

  $(".scroll").click(function(e) {
    e.preventDefault();
    $.scrollify("move", $(this).attr("href"));
  });
});
