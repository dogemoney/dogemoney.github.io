new WOW().init();

let titleWallet = (document.getElementById('wallet').innerText = wallet.toLocaleString('ru'));

function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName('city');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablink');
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' w3-red', '');
  }
  document.getElementById(cityName).style.display = 'block';
  evt.currentTarget.className += ' w3-red';
}

$(document).ready(function () {
  $('.btn-it-l').click(function () {
    $(this).next('.box-content-l').slideToggle();
  });
});
$('.btn-it-l').click(function (event) {
  $(this).toggleClass('before-min');
  $(this).parent().toggleClass('before-min');
});

function CopyToClipboard(id) {
  $.post('/copy/doge');
  var r = document.createRange();
  r.selectNode(document.getElementById(id));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
}

$(document).ready(function () {
  $('#nav-mb').on('click', 'a', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('.responsive-wrapper').animate(
      {
        scrollTop: top,
      },
      1500,
    );
  });
});

function numberWithCommas(x) {
  var parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}
// slider

$(function () {
  $('#slider-range-min').slider({
    step: 1,
    range: 'min',
    min: 100,
    max: 250000,
    value: 100,
    slide: setAmount,
    change: setAmount,
  });

  function setAmount(event, ui) {
    var amount = ui ? ui.value : 10000;
    $('.ui-slider-handle').attr('data-before', amount.toLocaleString('ru'));
    $('#amount').val(amount.toLocaleString('ru'));
  }
  $('input#amount')
    .on('change', function () {
      var amount = parseInt(this.value, 10) || 10000;
      $('#slider-range-min').slider('value', amount);
    })
    .change();
});

// slidfer

$(document).ready(function () {
  var master = 'giveaway';
  var slave = 'main-page';
  var master_tmp;
  var slave_tmp;
  var timer;

  var sync = function () {
    if ($(this).attr('id') == slave) {
      master_tmp = master;
      slave_tmp = slave;
      master = slave;
      slave = master_tmp;
    }

    $('#' + slave).unbind('scroll');

    var percentage = this.scrollTop / (this.scrollHeight - this.offsetHeight);

    var x = percentage * ($('#' + slave).get(0).scrollWidth - $('#' + slave).get(0).offsetWidth);

    $('#' + slave).scrollLeft(x);

    if (typeof timer !== 'undefind') clearTimeout(timer);

    timer = setTimeout(function () {
      $('#' + slave).scroll(sync);
    }, 200);
  };

  $('#' + master + ', #' + slave).scroll(sync);
});
