

export function loadWindows(){
    window.addEventListener("load", ()=> {
        const clipath = document.querySelector(".container__loading");
        setTimeout(()=>{

            clipath.classList.toggle("clipath")
        
        }, 1000);
})
}