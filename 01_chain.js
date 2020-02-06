
$(document).ready(function(){
    
    setTimeout(() => {
        
        $(".box1")
            .css('background', 'lightblue')
            .slideUp(2000)
            .slideDown(2000)
            .hide(1500)
            .show(1500)
            .animate({height: '600px', opacity: '0.3'}, "slow")
            .animate({width: '600px', opacity: '0.9'}, "slow")
            .animate({height: '100px', opacity: '0.3'}, "slow")
            .animate({width: '100px', opacity: '0.9'}, "slow")
            .animate({width: '800px', opacity: '0.5'}, 8000, () => {
                $('.box1')
                    .css('border', '5px dotted red')
                    .css('opacity', 0.3)
                
                $('div p')
                    .text('Animation successfully completed')
                    .css({"textAlign":"center", "lineHeight":"80px", "color":"red"})
            });

    }, 4000);


    $("#b1").click(function(){
        $(".box1").stop(true);
        $('p').text('Animation stopped');
      });


  });