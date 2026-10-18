indow.onload = function (e) {
    // init で初期化。基本情報を取得。
    // https://developers.line.me/ja/reference/liff/#initialize-liff-app
    liff.init(function (data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    document.getElementById('userId').textContent = data.context.userId;
    document.getElementById('userToken').textContent = data.context.utouId;
}