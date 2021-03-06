$(document).ready(function () {
    $("#doc").click(function () {
        $("#doc ul").slideUp(200), $(this).next().is(":visible") || $(this).next().slideDown(200);
    });
	$("#menu a#action").click(function () {
        $("#menu a#action ul").slideUp(200), $(this).next().is(":visible") || $(this).next().slideDown(200);
    });
});
function dialog(id, tabid) {
    $("#" + id).dialog({ height: "auto", width: "auto", modal: !0, resizable: !0, position: { my: "top", at: "top", of: tabid } });
}
$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                event.preventDefault();
                $("html, body").animate({ scrollTop: target.offset().top }, 300, function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return !1;
                    } else {
                        $target.attr("tabindex", "-1");
                        $target.focus();
                    }
                });
            }
        }
    });
