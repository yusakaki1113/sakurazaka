const LIFF_ID = "2012066476-dzZFbFMw";

async function showUserId() {
    const userIdElement = document.getElementById("userId");
    userIdElement.textContent = "LIFFを初期化しています...";

    try {
        await liff.init({ liffId: LIFF_ID });

        if (!liff.isLoggedIn()) {
            liff.login();
            return;
        }

        const profile = await liff.getProfile();
        userIdElement.textContent = profile.userId;

        const userTokenElement = document.getElementById("userToken");
        if (userTokenElement) {
            userTokenElement.textContent = liff.getContext().utouId || "取得できません";
        }
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        userIdElement.textContent = `ユーザーIDを取得できません: ${message}`;
        console.error("LIFFユーザー情報の取得に失敗しました。", error);
    }
}

showUserId();
