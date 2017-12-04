$(document).ready(function() {
    $('#newest').mouseenter(function() {
        $('#newest').fadeTo('slow',0.25);
    });
    $('#newest').mouseout(function() {
        $('#newest').fadeTo('slow',1);
    });
});
