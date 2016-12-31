$(document).foundation();

$(function() {
    $('a[href^="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 53
                }, 750);
                return false;
            }
        }
    });
});

! function() {
    var href = location.href;
    var pgurl = href.substr(href.lastIndexOf('/') + 1);
    console.log(pgurl);
    var currentPageElem = $('a[href="' + pgurl + '"]')[0].parentElement;
    currentPageElem.classList = 'active';
}();

/*Dynamically Sets Year in Footer Copyright Section*/
var year = new Date().getFullYear();
document.getElementById('dynamicYear').innerHTML = year;