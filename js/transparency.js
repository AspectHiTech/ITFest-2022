let elems = document.getElementsByClassName("transparency")
elems = Array.from(elems)

window.addEventListener("scroll", function() {
    const height = document.documentElement.clientHeight
    
    for(let indexElement in elems) {
        const obj = elems[indexElement]

        if (obj.getBoundingClientRect().top < height - 150) {
            obj.classList.add("appearance")
        } 
        else {
            obj.classList.remove("appearance")
        }
    }
});