const switcher  = document.querySelector(".switch__keys");
const themeToggle = document.querySelector(".switcher_toggle")
const body = document.querySelector("body");
const themearr = ["dark", "light", "purple"];

document.addEventListener("DOMContentLoaded", ()=>{
    if(localStorage.getItem("prefers-color-scheme") == null){
        localStorage.setItem("prefers-color-scheme", "dark");
    } else{
        let theme = localStorage.getItem("prefers-color-scheme");
        setTheme(theme);
    }
    
})

switcher.addEventListener("click", (e) => {
    if(e.target.classList.contains("theme")){
        let theme = e.target.getAttribute("prefers-color-scheme");
        localStorage.setItem("prefers-color-scheme",theme);
        setTheme(theme);
    }
})


function setTheme(theme){
    themearr.filter(item => {
        if(item != theme){
            body.classList.remove(item);        
        }
    })
    body.classList.add(theme);
}