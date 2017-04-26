 $(document).ready(function(){
     var hheight = $(".single_column img").height();

     $('.single_column').height(hheight);

     //For fixed Header
      jQuery(window).scroll(function() {
          if (jQuery(this).scrollTop() > 1){  
              jQuery('header').addClass("sticky");
            }
            else{
              jQuery('header').removeClass("sticky");
            }
          });

        //For Team Slider
        $(".team_area").lightSlider({
          item:4
        }); 
    
        //Smoth Scroll
         jQuery(function() {
            jQuery('a[href*="#"]:not([href="#"])').on('click',function(e) {
                var headheight= jQuery("header").height();
              if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = jQuery(this.hash);
                target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                  jQuery('html, body').animate({
                    scrollTop: target.offset().top-70
                  }, 1000);
                  return false;
                }
              }
            });
          });

//  timeline
$(document).ready(function(){
  var hheight=$(".iamge img").height();
  $('.single').height(hheight);
        jQuery(window).scroll(function() {
          if (jQuery(this).scrollTop() > 1){  
              jQuery('header').addClass("sticky");
            }
            else{
              jQuery('header').removeClass("sticky");
            }
          });
})

    })
