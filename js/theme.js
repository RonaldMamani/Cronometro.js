export default function switchTheme(){
    let body = document.querySelector("body")
    let root = document.querySelector(":root")
    if(body.dataset.theme == "orange") {
        root.style.setProperty("--bg-color", "#212121")
        root.style.setProperty("--border-color", "#ffa600")
        root.style.setProperty("--font-color", "#ffa600")
        body.dataset.theme = "dark"
    }else{
        root.style.setProperty("--bg-color", "#ffa600")
        root.style.setProperty("--border-color", "#ffffff")
        root.style.setProperty("--font-color", "#fffff")
        body.dataset.theme = "orange"
    }
}