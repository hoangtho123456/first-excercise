window.onload = function(e) {
  if(navigator.cookieEnabled) {
    var name = getCookie('name');
    $('#code').val(name);
  } else {alert("please start cookie to get data!");}
}
