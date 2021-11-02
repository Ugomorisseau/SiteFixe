$(function () {
  //déclare une fonction
  $(window).on("scroll", function () {
    // fonction pour la class scroll
    if ($(window).scrollTop() > 10) {
      // évènement scrolltop si >10 alors associé à la class .navbaractive
      $(".navbar").addClass("active");
    } else {
      $(".navbar").removeClass("active"); // sinon supprime la class .navbaractive
    }
  });
});

// code js de la navbar
