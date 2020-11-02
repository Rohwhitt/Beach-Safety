$(document).ready(function(){

  $('.submit').magnificPopup({
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
  // on submit clicked
$('.submit').on('click', function(){
    var score = 0;

  $('.quiz').each(function(){

    // quiz message is removed
    $('.quiz-msg', this).remove();

    var correct = $(this).find(':checked[data-correct]').length;
    console.log(correct);

    // check answer
    if( correct == 1 ){
      // correct!
      //alert("correct!");
      var msgHTML = '<div class="correct"></div>';
      $(this).append(msgHTML);

      // Add 1 to the score
      score++;

    }else{
      var msgHTML = '<div class="quiz-msg incorrect"></div>';
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
