//Rendere visibile la scritta "Live Coding" dentro il cerchio arancione quando passo con il mouse sul cerchio;
$(".text").hide();
$(".orange").mouseenter(function() {
  $(".text").show();
});
$(".orange").mouseleave(function() {
  $(".text").hide();
});
