$(function () {
    $('.guding').focus();
    $('.guding').css('background-image', 'url(https://www.pantrysbest.com/assets/christmas-list-e10e7ede6c7aa679b32d82195b95aa08.png)');
});
$('.collapse').on('show.bs.collapse', function () {
    $(this).parent().find('.panel-heading').css('background-image', 'url(https://www.pantrysbest.com/assets/christmas-list-e10e7ede6c7aa679b32d82195b95aa08.png)');
});
$('.collapse').on('hide.bs.collapse', function () {
    $(this).parent().find('.panel-heading').css('background', '#390c20');
})



$('.images img').mouseenter(function () {
    var src = $(this).attr('src');

    $(this).css('opacity', 0.5);
    $('.images img').not($(this)).css('opacity', 1);

    $('.banner img').attr('src', src);
})
