const LIFF_ID = "2012066476-dzZFbFMw";

window.addEventListener("load", async function () {
    const userIdElement = document.getElementById('userId');
    const userTokenElement = document.getElementById('userToken');

    if (typeof liff === "undefined") {
        userIdElement.textContent = "LIFF SDKを読み込めません。ネットワークとページ設定を確認してください。";
        console.error("LIFF SDK is not available.");
        return;
    }

    try {
        await liff.init({ liffId: LIFF_ID });
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        userIdElement.textContent = `LIFF初期化に失敗しました: ${message}`;
        console.error("LIFF initialization failed.", error);
        return;
    }

    if (!liff.isLoggedIn()) {
        liff.login();
        return;
    }

    try {
        const profile = await liff.getProfile();
        userIdElement.textContent = profile.userId;
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        userIdElement.textContent = `ユーザーID取得に失敗しました: ${message}`;
        console.error("LIFF profile retrieval failed.", error);
        return;
    }

    userTokenElement.textContent = liff.getContext().utouId || "取得できません";
});