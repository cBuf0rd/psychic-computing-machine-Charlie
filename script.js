$(document).ready(function(){
  let rotation = 0;
  const angle = 90;
  let shillings = 10;

 $("img").on("click", function() {
   rotation += angle;
   $(this).css("transform", "rotate(" + rotation + "deg)");
   alert("Scholarly Doge says why do I keep spinning?! You own him " + shillings + " for making him dizzy!");
   shillings += 10;
 });
});