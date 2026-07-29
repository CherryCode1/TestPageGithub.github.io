const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

reveals.forEach(element => {
    observer.observe(element);
});


function updateSecret() {
    const zoom = window.outerWidth / window.innerWidth;
    const secret = document.querySelector(".secret-button");

    secret.style.display = zoom < 0.6 ? "block" : "none";
}

window.addEventListener("resize", updateSecret);
updateSecret();