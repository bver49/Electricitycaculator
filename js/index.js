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
  var A = 1.63;
  var B = 2.38;
  var C = 3.52;
  var D = 4.61;

  $('#lastm').on('keyup', function() {
    var t = parseFloat($("#thism").val());
    var diff = t - l;
    $("#degree").val(diff);
    counting();
  });
  $('#thism').on('keyup', function() {
    var l = parseFloat($("#lastm").val());
    var t = parseFloat($("#thism").val());
    var diff = t - l;
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
      default:
        fee = 0;
        break;
    }
    fee = fee.toFixed(2);
    $('#fee').html(fee);
  }
  $('#check').on('click', function() {
    if (this.checked) {
      A = 1.63;
      B = 2.10;
      C = 2.89;
      D = 3.79;
    } else {
      A = 1.63;
      B = 2.38;
      C = 3.52;
      D = 4.61;
    }
    $("#A").html(A);
    $("#B").html(B);
    $("#C").html(C);
    $("#D").html(D);
    counting();
  });
});
