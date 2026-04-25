/*-------------------js-----------------------*/

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
var menuToggle = document.getElementById("menu-toggle");

function toggleMenu() {
    menuToggle.classList.toggle("open");
    if (sidemenu.style.right === "0px") {
        sidemenu.style.right = "-200px";
    } else {
        sidemenu.style.right = "0px";
    }
}

// Ensure closemenu works for back-compatibility if needed or remove
function closemenu() {
    sidemenu.style.right = "-200px";
    menuToggle.classList.remove("open");
}

// Auto-close menu when a link is clicked
const menuLinks = sidemenu.querySelectorAll("a");
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        closemenu();
    });
});


/*------Contact form------*/

const scriptURL = 'https://script.google.com/macros/s/AKfycbxPX5mi2tlfRmfSrW_GNLhAKJjOg6D5UGxF6IoAnA-JXfsl7nmONLggegYh716DTjYLQw/exec'
const form = document.getElementById('submit-to-google-sheet');
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully!";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})

/*----------Scroll Reveal Observer----------*/

const revealElements = document.querySelectorAll(".reveal, .reveal-stagger");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            // Optional: unobserve if you only want it to happen once
            revealObserver.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.15 // Trigger when 15% of the element is visible
});

revealElements.forEach(el => {
    revealObserver.observe(el);
});

