


    window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle("abajo",window.scrollY>0);
    })
    
let sube = document.querySelectorAll(".sube");

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop
    for (var i=0; i < sube.length; i++) {
        let alturaSube = sube[i].offsetTop;
        if(alturaSube - 350 < scrollTop) {
            sube[i].style.opacity = 1;
            sube[i].classList.add("subir");
        }

    }
}
window.addEventListener('scroll', mostrarScroll);