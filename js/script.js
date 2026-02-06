/* =========================
   CONFIG
========================= */
const PIN = "0702"
const SESSION_KEY = "gift_access"

/* =========================
   PIN LOGIC
========================= */
let input = ""

function pressKey(btn, num){
  if(input.length >= 4) return

  btn.classList.add("active")
  setTimeout(()=>btn.classList.remove("active"),150)

  input += num
  updateScreen()
}

function delNum(){
  input = input.slice(0,-1)
  updateScreen()
}

function updateScreen(){
  const screen = document.getElementById("pinScreen")
  if(screen){
    screen.textContent = input.padEnd(4,"-")
  }
}

function checkPin(){
  const card = document.querySelector(".card")

  if(input === PIN){
    // ✅ SIMPAN SESSION
    sessionStorage.setItem(SESSION_KEY, "true")

    // LANJUT
    location.href = "welcome.html"
  }else{
    input = ""
    updateScreen()

    card.classList.add("shake")
    storm()

    setTimeout(()=>card.classList.remove("shake"),400)
  }
}

/* =========================
   SECURITY GUARD
========================= */
function guard(){
  const allowed = sessionStorage.getItem(SESSION_KEY)

  // kalau belum login & bukan di index
  if(!allowed && !location.pathname.endsWith("indeks.html")){
    location.replace("indeks.html")
  }
}

/* =========================
   EFFECTS
========================= */
function storm(){
  const s = document.createElement("div")
  s.className = "storm"
  document.body.appendChild(s)
  setTimeout(()=>s.remove(),1200)
}

/* =========================
   NAVIGATION
========================= */
function go(page){
  location.href = page
}

/* =========================
   AUTO RUN GUARD
========================= */
guard()
