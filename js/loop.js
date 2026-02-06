/* =========================
   REAL LOOP (NO SHAKE)
========================= */

document.addEventListener("DOMContentLoaded", () => {
  const stitch = document.querySelector(".stitch")
  if(!stitch) return

  function playMove(){
    stitch.classList.add("play")

    setTimeout(() => {
      stitch.classList.remove("play")
    }, 1000)
  }

  // jalan pertama
  setTimeout(playMove, 800)

  // loop natural
  setInterval(playMove, 3200)
})
