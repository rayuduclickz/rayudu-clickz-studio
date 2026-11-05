
// FOOTER YEAR
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// MOBILE MENU
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.classList.remove("active");
        });
    });
}

// WEDDING FILMS + COUPLE PORTRAITS VIDEO
const videos = document.querySelectorAll(".scroll-video");

videos.forEach(video => {
    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    // Hide native video controls
    video.controls = false;
    video.removeAttribute("controls");

    // Click video to toggle audio
    video.addEventListener("click", () => {
        video.muted = !video.muted;

        if (video.paused) {
            video.play().catch(error => {
                console.log("Video playback issue:", error);
            });
        }
    });
});

// PLAY VIDEO WHEN VISIBLE, PAUSE WHEN OUT OF VIEW
const videoObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const video = entry.target;

        if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
            video.play().catch(error => {
                console.log("Autoplay blocked:", error);
            });
        } else {
            video.pause();
            video.muted = true;
        }
    });
}, {
    threshold: [0, 0.35, 0.6]
});

videos.forEach(video => {
    videoObserver.observe(video);
});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// WHATSAPP ENQUIRY FORM
const enquiryForm = document.querySelector("#enquiry-form");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(enquiryForm);
        const name = formData.get("name") || "";
        const phone = formData.get("phone") || "";
        const message = formData.get("message") || "";

        const whatsappMessage =
            `Hello Rayudu Clickz Studio!\n\n` +
            `Name: ${name}\n` +
            `Phone: ${phone}\n` +
            `Message: ${message}`;

        const whatsappNumber = "YOUR_WHATSAPP_NUMBER";

        window.open(
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
            "_blank"
        );
    });
}
