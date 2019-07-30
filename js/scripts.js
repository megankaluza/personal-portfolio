//Time and Date Stamp
var MONTH_NAME = ['January', 'Febuary', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'];
function showTime() {
    function twoDigit(n) {
        return ('0' + n).slice(-2);
    }
    function iso8601(date) {
        return date.getFullYear() +
               '-' + twoDigit(1 + date.getMonth()) +
               '-' + twoDigit(date.getDate()) +
               'T' + twoDigit(date.getHours()) +
               ':' + twoDigit(date.getMinutes());
    }
    function en_US(date) {
        var h = date.getHours() % 12;
        return MONTH_NAME[date.getMonth()] +
               ' '  + date.getDate() +
               ', ' + date.getFullYear() +
               '<br />' + (h == 0 ? 12 : h) +
               ':'  + twoDigit(date.getMinutes()) +
               ' ' + (date.getHours() < 12 ? 'am' : 'pm');
    }

    var timeEl = document.getElementById('time');
    if (timeEl !== null) {
        var now = new Date();
        timeEl.innerHTML = en_US(now);
        timeDiv.setAttribute('datetime', iso8601(now));
    }
};
setInterval(showTime, 1000);

$(document).ready(function(){
  //Smooth Scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  //Open Modal
  $('#open').click(function(){
    $('.ten')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  //Exit Modal
  $('.exit').click(function(){
    $('.modal').modal('hide');
  });
  $('#open2').click(function(){
    $('.eleven')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open3').click(function(){
    $('.twelve')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open4').click(function(){
    $('.thirteen')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open5').click(function(){
    $('.fourteen')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open6').click(function(){
    $('.fifteen')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open7').click(function(){
    $('.insta')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open8').click(function(){
    $('.sixteen')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open9').click(function(){
    $('.seventeen')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open10').click(function(){
    $('.eighteen')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open11').click(function(){
    $('.nineteen')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open12').click(function(){
    $('.twenty')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#openIcons').click(function(){
    $('.icons')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#openGreen').click(function(){
    $('.green')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#openRed').click(function(){
    $('.red')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#openBlue').click(function(){
    $('.blue')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#openEyes').click(function(){
    $('.eyes')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#openSpecialist').click(function(){
    $('.specialist')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#openSpecialistBlack').click(function(){
    $('.specialistBlack')
    .modal({
      blurring: true
    })
    .modal('show');
  });
});
