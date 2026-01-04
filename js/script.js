document.querySelectorAll(".video-toggle").forEach(pill => {
    pill.addEventListener("click", () => {
        const box = pill.querySelector(".video-box");
        const media = box.querySelector("audio, video");

        const isOpen = box.style.display === "block";

        if (isOpen) {
            media.pause();
            box.style.display = "none";
        } else {
            box.style.display = "block";

            // 🔥 BẮT BUỘC: ép browser load lại metadata
            media.load();
        }
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
