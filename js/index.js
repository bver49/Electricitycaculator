$(document).ready(function() {
  /* toastr option */
  toastr.options = {
    "closeButton": true,
    "positionClass": "toast-top-right",
    "showDuration": "0",
    "hideDuration": "1000",
    "timeOut": "3000",
    "extendedTimeOut": "1000"
  }
  var A = 1.68;
  var B = 2.45;
  var C = 3.70;
  var D = 5.04;
  var E = 6.24;
  var F = 8.46;

  $('.month').on('keyup', function() {
    var t = parseFloat($("#thism").val());
    var l = parseFloat($("#lastm").val());
    var d = parseFloat($("#discount").val());
    var diff = t - l - d ;
    $("#degree").val(diff);
    counting();
  });

  $('.counting').on('keyup', function() {
    counting();
  });

  function counting() {
    var degree = parseFloat($("#degree").val());
    var fee = 0;
    var al = parseFloat($('input[name="AL"]').val());
    var au = parseFloat($('input[name="AU"]').val());
    var bl = parseFloat($('input[name="BL"]').val());
    var bu = parseFloat($('input[name="BU"]').val());
    var cl = parseFloat($('input[name="CL"]').val());
    var cu = parseFloat($('input[name="CU"]').val());
    var dl = parseFloat($('input[name="DL"]').val());
    var du = parseFloat($('input[name="DU"]').val());
    var el = parseFloat($('input[name="EL"]').val());
    var eu = parseFloat($('input[name="EU"]').val());
    var fl = parseFloat($('input[name="FL"]').val());
    switch (true) {
      case (degree <= au):
        fee = A * degree;
        break;
      case (degree <= bu && degree > au):
        fee = A * (au) + B * (degree - au);
        break;
      case (degree <= cu && degree > bu):
        fee = A * (au) + B * (bu - au) + C * (degree - bu);
        break;
      case (degree <= du && degree > cu):
        fee = A * (au) + B * (bu - au) + C * (cu - bu) + D * (degree - cu);
        break;
      case (degree <= eu && degree > du):
        fee = A * (au) + B * (bu - au) + C * (cu - bu) + D * (du - cu)+ E * (degree - du);
        break;
      case (degree > eu):
        fee = A * (au) + B * (bu - au) + C * (cu - bu) + D * (du - cu)+ E * (eu - du) + F * (degree - eu);
        break;
      default:
        fee = 0;
        break;
    }
    fee = Math.round(fee);
    $('#fee').html(fee);
    other = parseFloat($('input[name="other"]').val())
    $('#other').html(other);
    $('#total').html((other + fee));
  }
  $('#check').on('click', function() {
    if (this.checked) {
      A = 1.68;
      B = 2.16;
      C = 3.03;
      D = 4.14;
      E = 5.07;
      F = 6.63;
    } else {
      A = 1.68;
      B = 2.45;
      C = 3.70;
      D = 5.04;
      E = 6.24;
      F = 8.46;
    }
    $("#A").html(A);
    $("#B").html(B);
    $("#C").html(C);
    $("#D").html(D);
    $("#E").html(E);
    $("#F").html(F);
    counting();
  });
});
