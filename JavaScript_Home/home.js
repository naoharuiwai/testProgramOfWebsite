$(function () {
    //新卒を見るボタンに対するクリックイベント
    $('#btnClick').click(function () {
        $('#warning-modal').fadeIn();
    });

    //はいボタンに対するクリックイベント
    //home2.htmlへ遷移する
    $('#yes').click(function () {
        window.location.href = 'homeSecond.html';
    });

    //いいえボタンに対するクリックイベント
    //YahooJapanへ遷移する
    $('#no').click(function () {
        window.location.href = 'https://www.yahoo.co.jp/';
    });
});
