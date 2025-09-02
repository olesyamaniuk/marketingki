$(function () {
  $(".i-y-about-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: true,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".i-y-about-list-left",
    nextArrow: ".i-y-about-list-right",
  });
});
