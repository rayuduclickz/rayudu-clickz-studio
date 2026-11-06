
// =========================================
// RAYUDU CLICKZ STUDIO - JAVASCRIPT
// =========================================


// FOOTER YEAR
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// MOBILE NAVIGATION
const menuButton = document.querySelector(".menu");
const navigation = document.querySelector(".site-header nav");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("active");

        menuButton.setAttribute("aria-expanded", isOpen);
        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

        menuButton.textContent = isOpen ? "✕" : "☰";
    });

    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navigation.classList.remove("active");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation");
            menuButton.textContent = "☰";
        });
    });
}


// VIDEO INTERACTION
const videos = document.querySelectorAll(".scroll-video");

videos.forEach((video) => {
    video.addEventListener("click", () => {
        if (video.paused) {
            video.play().catch(() => {});
        } else {
            video.pause();
        }
    });
});


// PLAY / PAUSE VIDEOS WHEN VISIBLE
if ("IntersectionObserver" in window) {
    const videoObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const video = entry.target;

                if (entry.isIntersecting) {
                    if (video.hasAttribute("autoplay")) {
                        video.play().catch(() => {});
                    }
                } else {
                    video.pause();
                }
            });
        },
        {
            threshold: 0.25
        }
    );

    videos.forEach((video) => {
        videoObserver.observe(video);
    });
}


// SERVICE IMAGE CAROUSELS
document.querySelectorAll("[data-carousel]").forEach((carousel) => {

    const track = carousel.querySelector(".carousel-track");
    const images = Array.from(track.querySelectorAll("img"));

    const prevButton = carousel.querySelector(".carousel-btn.prev");
    const nextButton = carousel.querySelector(".carousel-btn.next");
    const dotsContainer = carousel.querySelector(".carousel-dots");

    if (!track || images.length === 0) return;

    let currentIndex = 0;

    // CREATE DOT INDICATORS
    images.forEach((image, index) => {

        const dot = document.createElement("button");

        dot.type = "button";
        dot.className = "carousel-dot";
        dot.setAttribute("aria-label", `Go to image ${index + 1}`);

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
            dot.classList.toggle(
                "active",
                index === currentIndex
            );
        });
    }

    // PREVIOUS IMAGE
    if (prevButton) {
        prevButton.addEventListener("click", () => {

            currentIndex =
                (currentIndex - 1 + images.length) % images.length;

            updateCarousel();
        });
    }

    // NEXT IMAGE
    if (nextButton) {
        nextButton.addEventListener("click", () => {

            currentIndex =
                (currentIndex + 1) % images.length;

            updateCarousel();
        });
    }

    updateCarousel();
});


// ENQUIRY FORM - WHATSAPP
const enquiryForm = document.getElementById("enquiry");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const formData = new FormData(enquiryForm);

        const name = formData.get("name")?.trim() || "";
        const phone = formData.get("phone")?.trim() || "";
        const eventType = formData.get("event")?.trim() || "";
        const message = formData.get("message")?.trim() || "";

        const whatsappMessage =
            `Hello Rayudu Clickz Studio!\n\n` +
            `Name: ${name}\n` +
            `Phone: ${phone}\n` +
            `Event Type: ${eventType}\n` +
            `Message: ${message}`;

        const whatsappURL =
            "https://wa.me/919247129095?text=" +
            encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });
}
