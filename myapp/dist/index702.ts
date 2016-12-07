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