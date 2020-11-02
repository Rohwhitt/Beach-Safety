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

  $('.answer-container').each(function(){

    var correct = $(this).find(':checked[data-correct]').length;
    console.log(correct);

    // check answer
    if( correct == 1 ){

      score++;

    }else{
      // find the correct radio button and add class
      var correctRadio = $(this).find('input[data-correct]');
      var correctRadioParent = correctRadio.parent();
      var correctRadioLabel =correctRadioParent.children();
      correctRadioLabel.addClass('correct');

    }

  });

  // output score
  $('#score').text(score);

});


});
