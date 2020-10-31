$(document).ready(function(){

/*
  $(window).on("load",function(){
    &(".loadbg").fadeOut("slow");
  });
*/
  $('.test').draggable({
    //revert : true
  });


    $('.help_btn').magnificPopup({
      type: 'inline',
  		fixedContentPos: false,
  		fixedBgPos: true,
  		overflowY: 'auto',
  		closeBtnInside: true,
  		preloader: false,
  		midClick: true,
  		removalDelay: 300,
  		mainClass: 'my-mfp-slide-bottom'
    });

// Sounds

var correct = new Audio('sounds/correct.mp3');

var incorrect = new Audio('sounds/incorrect.wav');

// Different BEACH AREAS

//deep area (back)
  $('.deeparea').droppable({
    drop : function(){
      //correct sound
      incorrect.play();
      //alert("well done youve dropped timmy between the flags");
      $.magnificPopup.open({
        items: {
          src: '#deep-popup'
        },
        type: 'inline',
        fixedContentPos: false,
    		fixedBgPos: true,
    		overflowY: 'auto',
    		closeBtnInside: true,
    		preloader: false,
    		midClick: true,
    		removalDelay: 300,
    		mainClass: 'my-mfp-slide-bottom'
      });

    }
  });

// Rip area (middle left)
  $('.riparea').droppable({
    drop : function(){
      //correct sound
      incorrect.play();
      //alert("well done youve dropped timmy between the flags");
      $.magnificPopup.open({
        items: {
          src: '#rip-popup'
        },
        type: 'inline',
        fixedContentPos: false,
    		fixedBgPos: true,
    		overflowY: 'auto',
    		closeBtnInside: true,
    		preloader: false,
    		midClick: true,
    		removalDelay: 300,
    		mainClass: 'my-mfp-slide-bottom'
      });

    }
  });

// Flag area (middle)
  $('.flagarea').droppable({
    drop : function(){
      //correct sound
      correct.play();
      //alert("well done youve dropped timmy between the flags");
      $.magnificPopup.open({
        items: {
          src: '#flag-popup'
        },
        type: 'inline',
        fixedContentPos: false,
    		fixedBgPos: true,
    		overflowY: 'auto',
    		closeBtnInside: true,
    		preloader: false,
    		midClick: true,
    		removalDelay: 300,
    		mainClass: 'my-mfp-slide-bottom'
      });

    }
  });

// Rocky Area (right middle)
  $('.rockyarea').droppable({
    drop : function(){
      //correct sound
      incorrect.play();
      //alert("well done youve dropped timmy between the flags");
      $.magnificPopup.open({
        items: {
          src: '#rocky-popup'
        },
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
      });

    }
  });

// Sand area (bottom)
  $('.sandarea').droppable({
    drop : function(){
      //correct sound
      correct.play();
      //alert("well done youve dropped timmy between the flags");
      $.magnificPopup.open({
        items: {
          src: '#sand-popup'
        },
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
      });

    }
  });

// QUIZ SECTION

// when submit button clicked
 $('#quiz-submit').on('click', function(){

     var score = 0;

   // loop through each question
   $('.quizstart').each(function(){

     // remove the quiz-msg div
     $('.quiz-msg', this).remove();

     var correct = $(this).find(':checked[data-correct]').length;
     console.log(correct);

     // check answer
     if( correct == 1 ){
       // correct!
       //alert("correct!");
       var msgHTML = '<div class="quiz-msg correct">Correct!</div>';
       $(this).append(msgHTML);

       // Add 1 to the score
       score++;

     }else{
       var msgHTML = '<div class="quiz-msg incorrect">Incorrect!</div>';
       $(this).append(msgHTML);

       // find the correct radio button and add class
       var correctRadio = $(this).find('input[data-correct]');
       var correctRadioLabel = correctRadio.parent();
       correctRadioLabel.addClass('correct');

     }

   });

   // output score
   $('#score').text(score);

 });

});

$('#close').click(function(){
  $('.overlay').css("display","none");
});
