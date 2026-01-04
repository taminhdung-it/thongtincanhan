document.querySelectorAll(".video-toggle").forEach(pill => {
    pill.addEventListener("click", () => {
        const box = pill.querySelector(".video-box");
        const media = box.querySelector("audio, video");

        const isOpen = box.style.display === "block";

        // Đóng
        if (isOpen) {
            media.pause();
            media.currentTime = 0;
            box.style.display = "none";
            return;
        }

        // Mở
        box.style.display = "block";
    });
});
document.querySelectorAll(".qr-toggle").forEach(pill => {
    pill.addEventListener("click", () => {
        const qr = pill.querySelector(".qr-box");

        if (qr.style.display === "block") {
            qr.style.display = "none";
        } else {
            qr.style.display = "block";
        }
    });
});
