
/*=====================cookie=======================*/
function setCookie(name, value, expire) {
    var day = new Date();
    day.setTime(day.getTime() + (expire * 24 * 60 * 60 * 1000));
    var expire = 'expire=' + day.toGMTString();
    document.cookie = name + '=' + value + ';' + expire + ';path=/';
}

function getCookie(cname) {
    var name = cname + "=";
    var decodeCookie = decodeURIComponent(document.cookie);
    var ca = decodeCookie.split(';');

    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while(c.charAt(0) === ' ') {
          c = c.substring(1);
        } if (c.indexOf(cname) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}
