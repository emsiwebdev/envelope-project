//envelope script
$(document).ready(function(){
  let div1 = $(".svgLine:nth-child(6)");
  let div2 = $(".svgLine:nth-child(5)");
  let div3 = $(".svgLine:nth-child(3)");
  let env =  $("svg");
  let envSlideDown =  $(".envSlide");

    $(".but").click(function(){ //open envelope
      $(".svgLine:nth-child(6)").attr({
            "x1": "300",
            "y1": "200",
            "x2": "170",
            "y2": "80"
    });
      $(".svgLine:nth-child(5)").attr({
        "x1": "50",
        "y1": "200",
        "x2": "170",
        "y2": "80"
      });
        div1.animate({
          opacity: '0.2'
        });
        div2.animate({
          opacity: '0.2'
        });
        div3.animate({
          opacity: '0.2'
        });
         setTimeout(function(){ //hidden envelope
          env.slideUp();
         },1000);

         setTimeout(function(){ //start slideDown form
          envSlideDown.slideDown("fast").removeClass("envSlide");
         },2000);

    });
});
