const LIFF_ID = "2012066476-dzZFbFMw";

window.onload = async function () {
    const userIdElement = document.getElementById('userId');
    const userTokenElement = document.getElementById('userToken');

    try {
        await liff.init({ liffId: LIFF_ID });
        const profile = await liff.getProfile();
        userIdElement.textContent = profile.userId;
        userTokenElement.textContent = liff.getContext().utouId || "取得できません";
    } catch (error) {
        console.error("LIFF情報の取得に失敗しました。", error);
        userIdElement.textContent = `取得できません: ${error.message}`;
    }
};