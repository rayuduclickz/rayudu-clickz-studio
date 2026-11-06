// RAYUDU CLICKZ STUDIO - WEBSITE JAVASCRIPT

// Footer year
const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

// Mobile navigation
const menuButton = document.querySelector(".menu");
const navigation = document.querySelector(".site-nav");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("active");
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
        menuButton.textContent = isOpen ? "✕" : "☰";
    });

    navigation.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navigation.classList.remove("active");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation");
            menuButton.textContent = "☰";
        });
    });
}

// Video autoplay and audio interaction
const videos = document.querySelectorAll(".scroll-video");

videos.forEach(video => {
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.controls = false;
    video.removeAttribute("controls");

    // Tap/click to toggle sound. Muted autoplay is used initially
    // because browsers generally block autoplay with sound.
    video.addEventListener("click", () => {
        video.muted = !video.muted;
        if (video.paused) video.play().catch(err => console.warn("Video playback blocked:", err));
    });
});

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
                video.play().catch(err => console.warn("Muted autoplay blocked:", err));
            } else {
                video.pause();
                video.muted = true;
            }
        });
    }, { threshold: [0, 0.35, 0.6] });

    videos.forEach(video => observer.observe(video));
} else {
    videos.forEach(video => video.play().catch(() => {}));
}

// Smooth in-page scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", event => {
        const selector = anchor.getAttribute("href");
        if (!selector || selector === "#") return;
        const target = document.querySelector(selector);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
            block: "start"
        });
    });
});

// WhatsApp enquiry form
const enquiryForm = document.getElementById("enquiry");
if (enquiryForm) {
    enquiryForm.addEventListener("submit", event => {
        event.preventDefault();
        const formData = new FormData(enquiryForm);
        const name = String(formData.get("name") || "").trim();
        const phone = String(formData.get("phone") || "").trim();
        const eventType = String(formData.get("event") || "").trim();
        const message = String(formData.get("message") || "").trim();

        const whatsappMessage =
            "Hello Rayudu Clickz Studio!\n\n" +
            "Name: " + name + "\n" +
            "Phone: " + phone + "\n" +
            "Event Type: " + eventType + "\n" +
            "Message: " + message;

        const whatsappURL = "https://wa.me/919247129095?text=" + encodeURIComponent(whatsappMessage);
        window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });
}
