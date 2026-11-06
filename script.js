
// =========================================
// RAYUDU CLICKZ STUDIO - JAVASCRIPT
// =========================================


// FOOTER YEAR
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// =========================================
// MOBILE MENU
// =========================================

const menuToggle = document.querySelector(".menu");
const navLinks = document.querySelector(".site-header nav");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isExpanded = navLinks.classList.toggle("active");

        menuToggle.classList.toggle("active", isExpanded);

        menuToggle.setAttribute("aria-expanded", String(isExpanded));

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


// =========================================
// WEDDING FILMS + COUPLE PORTRAITS VIDEO
// =========================================

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


// =========================================
// PLAY VIDEO WHEN VISIBLE
// PAUSE VIDEO WHEN SCROLLED AWAY
// =========================================

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


// =========================================
// SMOOTH SCROLL
// =========================================

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


// =========================================
// WHATSAPP ENQUIRY FORM
// =========================================

const enquiryForm = document.querySelector("#enquiry");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const formData = new FormData(enquiryForm);

        const name = (formData.get("name") || "").trim();
        const phone = (formData.get("phone") || "").trim();
        const eventType = (formData.get("event") || "").trim();
        const message = (formData.get("message") || "").trim();

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


// =========================================
// SERVICE IMAGE CAROUSELS
// =========================================

document.querySelectorAll("[data-carousel]").forEach(carousel => {

    const track = carousel.querySelector(".carousel-track");
    const prevBtn = carousel.querySelector(".carousel-btn.prev");
    const nextBtn = carousel.querySelector(".carousel-btn.next");
    const dotsContainer = carousel.querySelector(".carousel-dots");

    // SAFETY CHECKS
    if (!track || !dotsContainer) return;

    const images = Array.from(track.querySelectorAll("img"));

    if (images.length === 0) return;

    let currentIndex = 0;

    // CLEAR OLD DOTS
    dotsContainer.innerHTML = "";

    // CREATE DOTS
    images.forEach((image, index) => {

        const dot = document.createElement("button");

        dot.type = "button";
        dot.classList.add("carousel-dot");

        dot.setAttribute(
            "aria-label",
            `Go to image ${index + 1}`
        );

        dot.setAttribute("aria-current", "false");

        dot.addEventListener("click", () => {

            currentIndex = index;

            updateCarousel();

        });

        dotsContainer.appendChild(dot);

    });

    const dots = Array.from(dotsContainer.children);


    // UPDATE CAROUSEL
    function updateCarousel() {

        track.style.transform =
            `translateX(-${currentIndex * 100}%)`;

        dots.forEach((dot, index) => {

            const isActive = index === currentIndex;

            dot.classList.toggle("active", isActive);

            dot.setAttribute(
                "aria-current",
                String(isActive)
            );

        });

    }


    // PREVIOUS IMAGE
    if (prevBtn) {

        prevBtn.addEventListener("click", () => {

            currentIndex =
                (currentIndex - 1 + images.length) % images.length;

            updateCarousel();

        });

    }


    // NEXT IMAGE
    if (nextBtn) {

        nextBtn.addEventListener("click", () => {

            currentIndex =
                (currentIndex + 1) % images.length;

            updateCarousel();

        });

    }


    // MOBILE SWIPE SUPPORT
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener("touchstart", event => {

        touchStartX = event.changedTouches[0].screenX;

    }, { passive: true });

    track.addEventListener("touchend", event => {

        touchEndX = event.changedTouches[0].screenX;

        const swipeDistance = touchEndX - touchStartX;

        if (Math.abs(swipeDistance) < 45) return;

        if (swipeDistance < 0) {

            currentIndex =
                (currentIndex + 1) % images.length;

        } else {

            currentIndex =
                (currentIndex - 1 + images.length) % images.length;

        }

        updateCarousel();

    }, { passive: true });


    // INITIALIZE
    updateCarousel();

});


// =========================================
// SERVICE IMAGE LOADING DIAGNOSTICS
// =========================================

document.querySelectorAll(".service-carousel img").forEach(image => {

    image.addEventListener("error", () => {

        console.error(
            "Service image could not load:",
            image.getAttribute("src")
        );

    });

});


// =========================================
// END OF RAYUDU CLICKZ STUDIO JAVASCRIPT
// =========================================
