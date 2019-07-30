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
  $('#openFeralBlack').click(function(){
    $('.feralBlack')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#openFeralWhite').click(function(){
    $('.feralWhite')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#openInsta').click(function(){
    $('.insta')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#openTumblr').click(function(){
    $('.tumblr')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#openAdidas').click(function(){
    $('.adidas')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#openMobile').click(function(){
    $('.mobile')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#openAesthetic').click(function(){
    $('.aesthetic')
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
