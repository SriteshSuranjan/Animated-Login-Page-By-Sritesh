$(".input_text_signup").focus(function() {
    $(this).prev('.fa').addClass('glowIcon');
});

$(".input_text_signup").focusout(function() {
    $(this).prev('.fa').removeClass('glowIcon');
});

$(".social_button.facebook").click(function() {
    alert("Sign Up with Facebook clicked.");
});

$(".social_button.twitter").click(function() {
    alert("Sign Up with Twitter clicked.");
});

$(".social_button.google").click(function() {
    alert("Sign Up with Google clicked.");
});