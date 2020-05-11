$(document).ready(function(){
  console.log('Pledge Loaded')

  $('.pledge-button').click(function(){
    $(this).toggleClass('active');

    console.log('Button Clicked')

    if ( $('#pledge-button-1').is('.active') && $('#pledge-button-2').is('.active') && $('#pledge-button-3').is('.active') ){
      console.log('Form Active')

      $('#pledge-form').removeClass("hide");
    }
    else if ( !$('#pledge-button-1').is('.active') || !$('#pledge-button-2').is('.active') || !$('#pledge-button-3').is('.active') ){
      console.log('Form Hidden')

      $('#pledge-form').addClass("hide");
    }
  });
});
