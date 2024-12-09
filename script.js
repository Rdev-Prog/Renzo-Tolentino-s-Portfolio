const header = document.getElementById("header")

window.addEventListener("scroll", () => {
    let pageTopHeight = window.pageYOffset

    if(pageTopHeight !== 0) {
        header.classList.add("navBarScroll")
        header.classList.remove("navBarStay")
    } else {
        header.classList.remove("navBarScroll")
        header.classList.add("navBarStay")
    }
    
})

const workBtn = document.getElementById("workBtn")
const startBtn = document.getElementById("startBtn")
const logo = document.getElementById("logo")

workBtn.addEventListener("click", () => {
    window.location.href = "index.html#project"
})

startBtn.addEventListener("click", () => {
    window.location.href = "index.html#service"
})

logo.addEventListener("click", () => {
    window.location.href = "index.html#home"
})

const goToShopBtn = document.getElementById("goToShopBtn")

goToShopBtn.addEventListener("click", () => {
    window.location.href = "shop.html"
})


let triggerCount = 0
const hamburgerCon = document.getElementById("hamIconCon")
const hamburgerIcon = document.getElementById("hamburgerIcon")
const navBarCon = document.getElementById("navBarCon")
hamburgerCon.addEventListener("click", () => {

    triggerCount++

    if(triggerCount === 1) {
        hamburgerIcon.classList.remove("fa-bars")
        hamburgerIcon.classList.add("fa-x")

        navBarCon.classList.add("navBarConAppear")
        navBarCon.classList.add("navBarConAppearAnim")
        navBarCon.style.display = "flex"
        navBarCon.style.width = "95vw"

    } else if (triggerCount === 2){
        triggerCount = 0

        hamburgerIcon.classList.add("fa-bars")
        hamburgerIcon.classList.remove("fa-x")

        navBarCon.classList.remove("navBarConAppear")
        navBarCon.classList.remove("navBarConAppearAnim")
        navBarCon.style.display = "none"
    }

    console.log(triggerCount)
})

const navLink = document.querySelectorAll(".navLink")
navLink.forEach(link => {
    link.addEventListener("click", () => {
        triggerCount = 0
        
        hamburgerIcon.classList.add("fa-bars")
        hamburgerIcon.classList.remove("fa-x")

        navBarCon.classList.remove("navBarConAppear")
        navBarCon.style.display = "none"
    })
})