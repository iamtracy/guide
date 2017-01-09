$(function() {
    $('a[href^="#"]:not([href^="#panel"])').click(function() {
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

function sideNav() {
    if ($(window).width() < 769) {
        $('.off-canvas-wrap').removeClass('move-right');
        $('.left-off-canvas-toggle').show();
    } else {
        $('.off-canvas-wrap').addClass('move-right');
        $('.left-off-canvas-toggle').hide();
    }
}

$(window).resize(function() {
    sideNav();
});

$('[data-toggle="dropdown"]').click(function() {
    $('[data-toggle="dropdown-tabs-content"]').toggleClass('hide');
})

/*Dynamically Sets Year in Footer Copyright Section*/
var year = new Date().getFullYear();
document.getElementById('dynamicYear').innerHTML = year;

function memeify() {
    let mur = $('img');
    let murArray = mur.toArray();
    murArray.forEach((item, index) => {
        if (index % 2 === 0) {
            item.src = 'https://www.fillmurray.com/' + item.width + '/' + item.height;
        } else if (index % 3 === 0) {
            item.src = 'https://www.stevensegallery.com/' + item.width + '/' + item.height;
        } else {
            item.src = 'https://www.placecage.com/g/' + item.width + '/' + item.height;
        }
    });
}

function piperfy() {
    let piper = $('.fa').not('[data-toggle="dropdown"]');
    let pipeArray = piper.toArray();
    pipeArray.forEach(item => {
        item.classList = 'fa fa-pied-piper-alt';
    })
}



$(document).foundation();