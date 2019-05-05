$(function(){
    $('.member').hover(
        function(){
            // $(this).children('.personal_img').height('250px');
            // $(this).children('.personal_img').width('250px');
            $(this).children('.personal_img').css('border','2px solid rgb(75, 195, 251)');
        },
        function(){
            $(this).children('.personal_img').css('border','2px solid white');
        });
});