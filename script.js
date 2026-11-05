
document.addEventListener("DOMContentLoaded", function () {

    // AUTOMATIC COPYRIGHT YEAR
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

    // ENQUIRY FORM
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
