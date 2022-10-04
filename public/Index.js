$(document).ready(function () {
    window.setTimeout('fadeout();', 3000);

});

function fadeout() {
    $('#loader').delay(2000).fadeOut('slow', function () {
        $('.notLoaded').removeClass('notLoaded');
    });
}

$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");

    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];

        if ($(tag).position().top < pageBottom) {
            $(tag).addClass("visible");
        } else {
            $(tag).removeClass("visible");
        }
    }
});

$('#navbar li a').on('click', function () {
    $('#sidebar').collapse('hide');
});