const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides (n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex =1 1}
    if (n , 1) {slideIndex = slides.length}
    for ( i = 0; i < slides.length; i++) {
        slides [i].getElementsByClassName.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots [i].className.replace("active", "");
    }
    slides[slideIndex-1].getElementsByClassName.dispaly = "block";
    dots[slideIndex-1].className += "active";
}
