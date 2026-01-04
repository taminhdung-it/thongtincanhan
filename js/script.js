const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const modalTitle = document.getElementById("modalTitle");

function openModal(title, html) {
  modalTitle.innerText = title;
  modalContent.innerHTML = html;
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
  modalContent.innerHTML = "";
}


/* PHONE */
function openPhone() {
  openModal("Số điện thoại", `
    <div class="info-item">
      <strong>Tạ Minh Dũng</strong>
    </div>

    <div class="info-item">
      📞 0389957512
    </div>

    <a href="./contact/contact.vcf" download class="primary-btn">
      Save to contacts
    </a>
  `);
}

/* MUSIC */
function openMusic() {
  openModal("Bài hát", `
    <div class="media-box">
      <audio controls preload="metadata">
        <source src="./music/bautroimoi.mp3" type="audio/mpeg">
        Trình duyệt không hỗ trợ audio
      </audio>
    </div>
  `);
}


/* VIDEO */
function openVideo() {
  openModal("Video", `
    <div class="media-box">
      <video controls autoplay>
        <source src="../video/bautroimoi.mp4" type="video/mp4">
      </video>
    </div>
  `);
}


/* BANK */
function openBank() {
  openModal("Vietcombank", `
    <div class="bank-box">
      <img src="./image/other/QR_bank.png" alt="QR Vietcombank">

      <div class="bank-info">
        <div><strong>Ngân hàng:</strong> Vietcombank</div>
        <div><strong>Số tài khoản:</strong> 9389957512</div>
        <div><strong>Chủ thụ hưởng:</strong> TA MINH DUNG</div>
      </div>

      <a href="./image/other/QR_bank.png" download class="primary-btn">
        Lưu ảnh QR
      </a>
    </div>
  `);
}

/* SHARE LINK */
function openShareLink() {
  const link = "https://taminhdung-it.github.io/thongtincanhan/";
  openModal("Chia sẻ link", `
    <div class="link-share">${link}</div>
    <button class="primary-btn copy-btn" onclick="copyLink()">
      Copy link
    </button>
  `);
}

function showToast(text) {
  const toast = document.getElementById("toast");
  toast.innerText = text;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}

function copyLink() {
  navigator.clipboard.writeText("https://taminhdung-it.github.io/thongtincanhan/");
  showToast("Đã copy link");
}

/* SHARE QR */
function openShareQR() {
  openModal("Chia sẻ QR", `
    <div class="qr-share">
      <div id="shareQR"></div>
      <button class="primary-btn" onclick="downloadQR()">
        Lưu ảnh QR
      </button>
    </div>
  `);

  setTimeout(() => {
    new QRCode(document.getElementById("shareQR"), {
      text: "https://taminhdung-it.github.io/thongtincanhan/",
      width: 220,
      height: 220
    });
  }, 50);
}

function downloadQR() {
  const link = document.createElement("a");
  link.href = "./image/other/share-qr.png";
  link.download = "share-qr.png";
  link.click();
}

