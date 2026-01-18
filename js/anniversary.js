const giftImg = document.getElementById("giftImg");
const giftStage = document.getElementById("giftStage");
const hintText = document.getElementById("hintText");
const result = document.getElementById("result");

let opened = false;

giftImg.addEventListener("click", () => {

  if(opened) return; // กันคลิกซ้ำ
  opened = true;

  // ซ่อนคำใบ้
  hintText.style.display = "none";

  // แสดงภาพเปิดซอง (meg2)
  giftStage.classList.add("opening");
  giftImg.src = "assets/meg2.png";

  // รอแป๊บเดียว → ขยาย + meg3
  setTimeout(() => {
    giftStage.classList.remove("opening");
    giftStage.classList.add("final-open");
    giftImg.src = "assets/meg3.png";

    // แสดงผลลัพธ์
    result.style.display = "block";
  }, 600); // ปรับเวลาได้ (ms)
});
