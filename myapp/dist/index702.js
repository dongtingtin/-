$(document).ready(function () {
    $(".panel-heading").focus(function () {
        $(".panel-heading").css("background-image", "url(https://www.pantrysbest.com/assets/christmas-list-e10e7ede6c7aa679b32d82195b95aa08.png)")
    });
    $(".panel-heading").blur(function () {
        $(".panel-heading").css("background-color", "green")
    });
});