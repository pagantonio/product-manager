/**
 * Created by pantonio on 12/9/16.
 */
$(document).ready(function () {
    $('.message a').click(function () {
        $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    })
});
