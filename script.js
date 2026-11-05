document.addEventListener("DOMContentLoaded", function () {

    // COPYRIGHT YEAR
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // MOBILE MENU
    const menuButton = document.querySelector(".menu");
    const navigation = document.querySelector(".site-header nav");

    if (menuButton && navigation) {

        menuButton.addEventListener("click", function () {

            const isOpen = navigation.classList.toggle("active");

            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.textContent = isOpen ? "✕" : "☰";
        });

        navigation.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("active");
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.textContent = "☰";
            });
        });
    }

    // SCROLL-BASED VIDEO AUTOPLAY / PAUSE
    const videos = document.querySelectorAll(".scroll-video");

    videos.forEach(function (video) {

        // Enforce muted autoplay
        video.muted = true;
        video.defaultMuted = true;
        video.loop = true;
        video.playsInline = true;

        // Prevent native controls
        video.removeAttribute("controls");

        // Start paused until the video enters the screen
        video.pause();

    });

    if ("IntersectionObserver" in window) {

        const videoObserver = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                const video = entry.target;

                if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {

                    // Play when at least 35% of video is visible
                    const playPromise = video.play();

                    if (playPromise !== undefined) {
                        playPromise.catch(function () {
                            // Browser may block autoplay in some situations
                        });
                    }

                } else {

                    // Pause when video leaves the visible screen area
                    video.pause();

                }

            });

        }, {
            threshold: [0, 0.35, 0.6]
        });

        videos.forEach(function (video) {
            videoObserver.observe(video);
        });

    } else {

        // Fallback for older browsers
        videos.forEach(function (video) {
            video.play().catch(function () {});
        });

    }

    // WHATSAPP ENQUIRY FORM
    const enquiryForm = document.getElementById("enquiry");

    if (enquiryForm) {

        enquiryForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const formData = new FormData(enquiryForm);

            const name = formData.get("name");
            const phone = formData.get("phone");
            const eventType = formData.get("event");
            const message = formData.get("message");

            const whatsappMessage =
                "Hello Rayudu Clickz Studio!" +
                "\nName: " + name +
                "\nPhone: " + phone +
                "\nEvent: " + eventType +
                "\nMessage: " + message;

            const whatsappURL =
                "https://wa.me/919247129095?text=" +
                encodeURIComponent(whatsappMessage);

            window.open(whatsappURL, "_blank");

            enquiryForm.reset();
        });
    }

});
