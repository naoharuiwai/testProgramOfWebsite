var member_list={iwai:'岩井', itabashi:'板橋', sugimoto:'杉本'};

window.onload=function(){
    var personal_name=decodeURIComponent(location.search.split('=')[1]);
    // alert(personal_name);
    var album_name=document.getElementById('album_name');
    // console.log(album_name);
    album_name.textContent=member_list[personal_name]+"'s Album";

    $('.active').removeClass('active');
    $('.'+personal_name).addClass('active');
}