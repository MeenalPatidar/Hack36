$(document).ready(function(){

    $('.counter46').each(function() {
      var $this = $(this),
          countTo = 46;
    
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },
    
      {
    
        duration: 3000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
          //alert('finished');
        }
      });
    });


    $('.counter74').each(function() {
        var $this = $(this),
            countTo = 74;
      
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
      
        {
      
          duration: 3000,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        });
      });

      $('.counter130').each(function() {
        var $this = $(this),
            countTo = 130;
      
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
      
        {
      
          duration: 3000,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        });
      });


    });