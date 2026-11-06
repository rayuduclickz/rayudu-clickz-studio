// =========================================
// RAYUDU CLICKZ STUDIO - JAVASCRIPT
// =========================================


// FOOTER YEAR
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// MOBILE MENU
const menuToggle = document.querySelector(".menu");
const navLinks = document.querySelector(".site-header nav");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");

        const isExpanded = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isExpanded);
        menuToggle.setAttribute(
            "aria-label",
            isExpanded ? "Close navigation" : "Open navigation"
        );

        menuToggle.textContent = isExpanded ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");

            menuToggle.textContent = "☰";
        });

    });
}


// WEDDING FILMS + COUPLE PORTRAITS VIDEO
const videos = document.querySelectorAll(".scroll-video");

videos.forEach(video => {

    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.controls = false;

    // TAP VIDEO TO TOGGLE SOUND
    video.addEventListener("click", () => {
        video.muted = !video.muted;
    });

});


// PLAY VIDEO WHEN VISIBLE
// PAUSE VIDEO WHEN SCROLLED AWAY

if ("IntersectionObserver" in window) {

    const videoObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            const video = entry.target;

            if (
                entry.isIntersecting &&
                entry.intersectionRatio >= 0.35
            ) {

                video.play().catch(error => {
                    console.log("Video playback issue:", error);
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

}


// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(event) {

        const href = this.getAttribute("href");

        if (!href || href === "#") return;

        const target = document.querySelector(href);

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
const enquiryForm = document.querySelector("#enquiry");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const formData = new FormData(enquiryForm);

        const name = formData.get("name") || "";
        const phone = formData.get("phone") || "";
        const eventType = formData.get("event") || "";
        const message = formData.get("message") || "";

        const whatsappMessage =
            `Hello Rayudu Clickz Studio!\n\n` +
            `Name: ${name}\n` +
            `Phone: ${phone}\n` +
            `Event Type: ${eventType}\n` +
            `Message: ${message}`;

        const whatsappNumber = "919247129095";

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );

    });

}
