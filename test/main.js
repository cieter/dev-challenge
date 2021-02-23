function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  (function($){
    
   $.fn.rotatePolaroid = function () {
     return this.each(function() {
       deg = getRandomInt(-30, 30);
            x = getRandomInt(-50, 50);
       y = getRandomInt(-50, 50);
       $(this).css('transform', 'rotate(' + deg + 'deg) translate(' + x + 'px, ' + y + 'px) scale(1.3)');
     });
   }
   $.fn.spread = function () {
     var positions = [
       {left: -100, top: -50},
       {left: 0, top: -50},
       {left: 100, top: -50},
       {left: -100, top: 50},
       {left: 0, top: 50},
       {left: 100, top: 50},
     ];
     return this.each(function(i) {
            deg = getRandomInt(-5, 5);
            x = positions[i].left;
       y = positions[i].top;
             $(this).css('transform', 'rotate(' + deg + 'deg) translate(' + x + '%, ' + y + '%) scale(0.9)');
     });
   }
   
   $document.querySelectorAll('.polaroid').rotatePolaroid(); 
    setTimeout(
    function() {
  
    }, 1000);
    
  
    document.querySelectorAll('.polaroid-stack').addEventListener('mouseover', function() {
       document.querySelectorAll('.polaroid').spread();
    }).addEventListener('mouseout', function() {
       $document.querySelectorAll('.polaroid').rotatePolaroid();
    });
   
  });